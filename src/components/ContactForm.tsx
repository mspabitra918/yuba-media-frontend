"use client";

import { useState } from "react";
import { postJSON } from "@/lib/api";

type Status =
  | { kind: "idle" }
  | { kind: "submitting" }
  | { kind: "success" }
  | { kind: "error"; message: string };

export default function ContactForm() {
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);

    if (fd.get("website")) {
      setStatus({ kind: "success" });
      form.reset();
      return;
    }

    const payload = {
      fullName: String(fd.get("fullName") || "").trim(),
      email: String(fd.get("email") || "").trim(),
      company: String(fd.get("company") || "").trim() || null,
      phone: String(fd.get("phone") || "").trim() || null,
      inquiryType: String(fd.get("inquiryType") || ""),
      message: String(fd.get("message") || "").trim(),
    };

    if (!payload.fullName || !payload.email || !payload.inquiryType || !payload.message) {
      setStatus({ kind: "error", message: "Please fill in all required fields." });
      return;
    }

    setStatus({ kind: "submitting" });
    try {
      await postJSON("/leads", payload);
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
        <h3 className="font-serif text-2xl">Thanks — we got it.</h3>
        <p className="mt-2 text-sm">
          A member of our team will get back to you within one business day.
        </p>
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
        <div>
          <label htmlFor="fullName" className="label">
            Full Name<span className="text-brand"> *</span>
          </label>
          <input id="fullName" name="fullName" required className="input" />
        </div>
        <div>
          <label htmlFor="email" className="label">
            Email<span className="text-brand"> *</span>
          </label>
          <input id="email" name="email" type="email" required className="input" />
        </div>
        <div>
          <label htmlFor="company" className="label">
            Company
          </label>
          <input id="company" name="company" className="input" />
        </div>
        <div>
          <label htmlFor="phone" className="label">
            Phone
          </label>
          <input id="phone" name="phone" type="tel" className="input" />
        </div>
        <div className="md:col-span-2">
          <label htmlFor="inquiryType" className="label">
            Inquiry Type<span className="text-brand"> *</span>
          </label>
          <select
            id="inquiryType"
            name="inquiryType"
            required
            defaultValue=""
            className="input"
          >
            <option value="" disabled>
              Select…
            </option>
            <option value="client">
              Client Inquiry — I want to use Yuba Media&apos;s services
            </option>
            <option value="general">General Enquiry</option>
          </select>
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="message" className="label">
          Message<span className="text-brand"> *</span>
        </label>
        <textarea id="message" name="message" required className="textarea" />
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
        {status.kind === "submitting" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
