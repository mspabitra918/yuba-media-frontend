"use client";

import { useState } from "react";
import { postForm } from "@/lib/api";

const POSITIONS = [
  "Voice Process Agent",
  "Voice Trainer",
  "Team Leader — Voice Ops",
  "Sales Development Representative (SDR)",
  "Quality Analyst — Voice",
];

const EXPERIENCE = ["0–1 years", "1–3 years", "3–5 years", "5+ years"];
const AVAILABILITY = ["Immediately", "2 weeks", "1 month", "Other"];

const MAX_FILE_MB = 5;
const ALLOWED = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];

type Status =
  | { kind: "idle" }
  | { kind: "submitting" }
  | { kind: "success" }
  | { kind: "error"; message: string };

export default function CareersForm() {
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const cv = data.get("cv");
    if (!(cv instanceof File) || cv.size === 0) {
      setStatus({ kind: "error", message: "Please attach your CV." });
      return;
    }
    if (cv.size > MAX_FILE_MB * 1024 * 1024) {
      setStatus({
        kind: "error",
        message: `CV must be smaller than ${MAX_FILE_MB}MB.`,
      });
      return;
    }
    if (!ALLOWED.includes(cv.type)) {
      setStatus({ kind: "error", message: "CV must be a PDF or DOCX file." });
      return;
    }

    if (data.get("website")) {
      setStatus({ kind: "success" });
      form.reset();
      return;
    }

    setStatus({ kind: "submitting" });
    try {
      await postForm("/applicants", data);
      setStatus({ kind: "success" });
      form.reset();
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Something went wrong.";
      setStatus({ kind: "error", message });
    }
  }

  if (status.kind === "success") {
    return (
      <div className="rounded-card border border-line bg-white p-8 text-center">
        <h3 className="font-serif text-2xl">Application received.</h3>
        <p className="mt-2 text-sm">
          Thanks for applying. We&apos;ve emailed you a confirmation — our team
          will review your CV and be in touch.
        </p>
        <button
          onClick={() => setStatus({ kind: "idle" })}
          className="btn-secondary mt-6"
        >
          Submit another application
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-card border border-line bg-white p-6 md:p-8"
    >
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <Field label="Full Name" name="fullName" required />
        <Field label="Email Address" name="email" type="email" required />
        <Field label="Phone (with country code)" name="phone" type="tel" required />
        <Field label="Current Location (City, Country)" name="location" required />
        <Select label="Position Applying For" name="position" required options={POSITIONS} />
        <Select label="Years of Experience" name="experience" required options={EXPERIENCE} />
        <Select label="Availability to Start" name="availability" options={AVAILABILITY} />
        <Field label="LinkedIn Profile URL" name="linkedinUrl" type="url" />
      </div>

      <div className="mt-5">
        <label htmlFor="cv" className="label">
          Resume / CV (PDF or DOCX, max 5MB)<span className="text-brand"> *</span>
        </label>
        <input
          id="cv"
          name="cv"
          type="file"
          accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          required
          className="block w-full rounded-md border border-line bg-white p-3 text-sm file:mr-4 file:rounded-md file:border-0 file:bg-ink file:px-4 file:py-2 file:text-sm file:text-white"
        />
      </div>

      <div className="mt-5">
        <label htmlFor="coverLetter" className="label">
          Cover Letter / Message (optional)
        </label>
        <textarea
          id="coverLetter"
          name="coverLetter"
          className="textarea"
          placeholder="Tell us why you'd be a great fit."
        />
      </div>

      {status.kind === "error" && (
        <p
          role="alert"
          className="mt-5 rounded-md border border-red-200 bg-red-50 p-3 text-sm text-red-700"
        >
          {status.message}
        </p>
      )}

      <button
        type="submit"
        disabled={status.kind === "submitting"}
        className="btn-primary mt-6 disabled:opacity-50"
      >
        {status.kind === "submitting" ? "Submitting…" : "Submit Application"}
      </button>
    </form>
  );
}

function Field(props: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={props.name} className="label">
        {props.label}
        {props.required && <span className="text-brand"> *</span>}
      </label>
      <input
        id={props.name}
        name={props.name}
        type={props.type ?? "text"}
        required={props.required}
        className="input"
      />
    </div>
  );
}

function Select(props: {
  label: string;
  name: string;
  options: string[];
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={props.name} className="label">
        {props.label}
        {props.required && <span className="text-brand"> *</span>}
      </label>
      <select
        id={props.name}
        name={props.name}
        required={props.required}
        defaultValue=""
        className="input"
      >
        <option value="" disabled>
          Select…
        </option>
        {props.options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}
