import Link from "next/link";

const services = [
  {
    title: "Cold Calling",
    desc: "Trained voice agents on your prospect lists, working North American time zones.",
  },
  {
    title: "Pay Per Call",
    desc: "Performance-based campaigns. Pay only for calls that meet a quality threshold.",
  },
  {
    title: "Sales Outsourcing",
    desc: "Full-pipeline ownership — prospecting through closing, as an extension of your team.",
  },
];

const stats = [
  { num: "2M+", label: "Calls Handled" },
  { num: "500+", label: "Clients Served" },
  { num: "98%", label: "Client Retention" },
];

const differentiators = [
  "North America focused",
  "Performance-driven teams",
  "Fast ramp-up timelines",
  "Scalable agent pods",
];

export default function HomePage() {
  return (
    <>
      <section className="section-y">
        <div className="container-x">
          <p className="eyebrow mb-4">North America · Sales Services</p>
          <h1 className="h-display max-w-3xl">
            Outbound sales that actually convert.
          </h1>
          <p className="mt-6 max-w-xl text-lg">
            Yuba Media runs cold-calling, pay-per-call, and outsourced sales
            programs that move cold prospects into a real pipeline.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/services" className="btn-primary">
              Explore Services
            </Link>
            <Link href="/careers" className="btn-secondary">
              We&apos;re Hiring
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-white">
        <div className="container-x grid grid-cols-1 gap-8 py-12 md:grid-cols-3">
          {stats.map((s) => (
            <div key={s.label} className="text-center md:text-left">
              <p className="font-serif text-4xl md:text-5xl">{s.num}</p>
              <p className="mt-2 text-sm text-muted">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-y">
        <div className="container-x">
          <div className="mb-12 max-w-2xl">
            <p className="eyebrow mb-3">What we do</p>
            <h2 className="h-section">Three ways we drive revenue.</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {services.map((s) => (
              <div key={s.title} className="card">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md bg-infobg text-brand">
                  <span className="font-serif text-lg">{s.title.charAt(0)}</span>
                </div>
                <h3 className="font-serif text-2xl">{s.title}</h3>
                <p className="mt-2 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-white border-y border-line">
        <div className="container-x grid grid-cols-1 gap-10 md:grid-cols-2">
          <div>
            <p className="eyebrow mb-3">Why Yuba</p>
            <h2 className="h-section">
              Built for performance, priced for results.
            </h2>
            <p className="mt-4 max-w-md">
              We hire and train North America-focused agents, then layer on
              pipeline reporting, QA, and tight feedback loops so every shift
              compounds.
            </p>
          </div>
          <ul className="grid grid-cols-1 gap-3 self-center">
            {differentiators.map((d) => (
              <li
                key={d}
                className="flex items-start gap-3 rounded-md border border-line bg-offwhite p-4"
              >
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-brand" />
                <span className="text-sm text-ink">{d}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-ink text-white">
        <div className="container-x flex flex-col items-start justify-between gap-6 py-16 md:flex-row md:items-center">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl">
              Ready to scale your outbound?
            </h2>
            <p className="mt-2 text-sm text-white/70">
              Tell us about your pipeline. We&apos;ll get back within one
              business day.
            </p>
          </div>
          <Link
            href="/contact"
            className="rounded-btn bg-white px-6 py-3 text-sm font-medium text-ink transition hover:opacity-90"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
