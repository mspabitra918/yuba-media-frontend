"use client";
import { useRef } from "react";
import CareersForm from "@/components/CareersForm";
import {
  RiArrowRightLine,
  RiBriefcaseLine,
  RiCommunityLine,
  RiMapPinLine,
  RiMoneyDollarCircleLine,
  RiTimeLine,
} from "react-icons/ri";

const culture = [
  {
    title: "Remote-Friendly",
    body: "Most roles are fully remote across North American time zones, with optional onsite hubs.",
    icon: <RiCommunityLine className="text-2xl" />,
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    title: "Performance Rewards",
    body: "Base + uncapped commission for sales roles. Quarterly bonuses for ops and QA teams.",
    icon: <RiMoneyDollarCircleLine className="text-2xl" />,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    title: "Real Growth",
    body: "Voice agents move into trainer, team-lead, and SDR seats. We promote from within.",
    icon: <RiBriefcaseLine className="text-2xl" />,
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
];

const positions = [
  {
    title: "Voice Process Agent",
    level: "Entry",
    type: "Full-time",
    location: "Remote / Onsite",
    shift: "NA time zones",
  },
  {
    title: "Voice Trainer",
    level: "Mid",
    type: "Full-time",
    location: "Remote / Onsite",
    shift: "NA time zones",
  },
  {
    title: "Team Leader — Voice Ops",
    level: "Senior",
    type: "Full-time",
    location: "Remote / Onsite",
    shift: "NA time zones",
  },
  {
    title: "Sales Development Representative (SDR)",
    level: "Entry–Mid",
    type: "Full-time",
    location: "Remote",
    shift: "NA time zones",
  },
  {
    title: "Quality Analyst — Voice",
    level: "Mid",
    type: "Full-time",
    location: "Remote",
    shift: "Flexible",
  },
];

export default function CareersPage() {
  const formRef = useRef<HTMLDivElement>(null);

  const handleApplyScroll = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <section className="relative overflow-hidden bg-white py-24 md:py-32">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="container-x relative">
          <div className="max-w-3xl">
            <span className="eyebrow">Join the Team</span>
            <h1 className="h-display mt-6">
              Build your career in{" "}
              <span className="text-brand">high-growth</span> sales.
            </h1>
            <p className="mt-8 text-xl leading-relaxed text-body">
              We hire curious, coachable people and turn them into world-class
              voice and sales talent. If you want to learn fast and earn faster,
              you&apos;ll fit right in.
            </p>
          </div>
        </div>
      </section>

      <section className="section-y bg-offwhite">
        <div className="container-x">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {culture.map((c) => (
              <div
                key={c.title}
                className="rounded-3xl border border-line bg-white p-10 shadow-sm transition-all hover:shadow-xl hover:shadow-ink/5"
              >
                <div
                  className={`mb-8 flex h-14 w-14 items-center justify-center rounded-2xl ${c.bg} ${c.color}`}
                >
                  {c.icon}
                </div>
                <h3 className="text-2xl font-bold text-ink">{c.title}</h3>
                <p className="mt-4 text-[16px] leading-relaxed text-body">
                  {c.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="container-x">
          <div className="mb-16">
            <span className="eyebrow">Opportunities</span>
            <h2 className="h-section mt-4">
              We&apos;re hiring across 5 roles.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-1">
            {positions.map((p) => (
              <div
                key={p.title}
                className="group relative flex flex-col justify-between gap-6 rounded-3xl border border-line bg-white p-8 transition-all hover:border-brand/30 hover:shadow-xl hover:shadow-brand/5 md:flex-row md:items-center"
              >
                <div className="max-w-md">
                  <h3 className="text-xl font-bold text-ink group-hover:text-brand transition-colors">
                    {p.title}
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-4 text-xs font-semibold uppercase tracking-wider text-muted">
                    <span className="flex items-center gap-1.5">
                      <RiBriefcaseLine className="text-brand" /> {p.level}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <RiMapPinLine className="text-brand" /> {p.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <RiTimeLine className="text-brand" /> {p.shift}
                    </span>
                  </div>
                </div>
                <button
                  onClick={handleApplyScroll}
                  className="btn-secondary !px-6 !py-3 !text-xs uppercase tracking-widest hover:!bg-brand hover:!text-white hover:!border-brand"
                >
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y border-t border-line bg-offwhite">
        <div className="container-x grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-start">
          <div>
            <span className="eyebrow">Application</span>
            <h2 className="h-section mt-4">Start your journey.</h2>
            <p className="mt-6 text-lg leading-relaxed text-body">
              Fill out the form and attach your CV. We review every application
              personally — expect to hear back from our recruiting team within
              one business week.
            </p>

            <div className="mt-12 space-y-8">
              <div className="flex gap-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand text-white font-bold">
                  1
                </div>
                <div>
                  <h4 className="font-bold text-ink">Submit Application</h4>
                  <p className="mt-1 text-sm text-muted">
                    Send us your CV and basic info via the form.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand text-white font-bold">
                  2
                </div>
                <div>
                  <h4 className="font-bold text-ink">Initial Screening</h4>
                  <p className="mt-1 text-sm text-muted">
                    Our team reviews your experience and fit.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand text-white font-bold">
                  3
                </div>
                <div>
                  <h4 className="font-bold text-ink">Voice Interview</h4>
                  <p className="mt-1 text-sm text-muted">
                    A quick call to assess communication skills.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            ref={formRef}
            id="apply"
            className="relative scroll-mt-24"
          >
            <div className="absolute -inset-4 rounded-[2.5rem] bg-brand/5 blur-2xl" />
            <div className="relative">
              <CareersForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
