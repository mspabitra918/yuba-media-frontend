import Link from "next/link";
import { RiArrowRightUpLine, RiCheckLine, RiFlashlightLine, RiServiceLine, RiTeamLine } from "react-icons/ri";

const services = [
  {
    title: "Cold Calling",
    desc: "Trained voice agents on your prospect lists, working North American time zones.",
    icon: <RiServiceLine className="text-2xl" />,
    color: "bg-blue-50 text-blue-600",
  },
  {
    title: "Pay Per Call",
    desc: "Performance-based campaigns. Pay only for calls that meet a quality threshold.",
    icon: <RiFlashlightLine className="text-2xl" />,
    color: "bg-amber-50 text-amber-600",
  },
  {
    title: "Sales Outsourcing",
    desc: "Full-pipeline ownership — prospecting through closing, as an extension of your team.",
    icon: <RiTeamLine className="text-2xl" />,
    color: "bg-emerald-50 text-emerald-600",
  },
];

const stats = [
  { num: "2M+", label: "Calls Handled", suffix: "Engagements" },
  { num: "500+", label: "Clients Served", suffix: "Global Reach" },
  { num: "98%", label: "Client Retention", suffix: "Satisfaction" },
];

const differentiators = [
  "North America focused strategies",
  "Performance-driven dedicated teams",
  "Rapid 7-day ramp-up timelines",
  "Scalable agent pods for any volume",
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-offwhite py-24 md:py-40">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="container-x relative">
          <div className="max-w-4xl">
            <span className="eyebrow">Expert Outbound Sales</span>
            <h1 className="h-display text-balance mt-6">
              Outbound sales that <br className="hidden md:block" />
              <span className="text-brand">actually convert.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-body md:text-xl">
              Yuba Media runs cold-calling, pay-per-call, and outsourced sales
              programs that move cold prospects into a high-velocity revenue pipeline.
            </p>
            <div className="mt-12 flex flex-wrap gap-4">
              <Link href="/services" className="btn-brand">
                Explore Services
              </Link>
              <Link href="/contact" className="btn-secondary">
                Get a Custom Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 -mt-12">
        <div className="container-x">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:gap-8">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col rounded-2xl border border-line bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
                <span className="font-serif text-5xl font-medium tracking-tight text-ink">{s.num}</span>
                <span className="mt-2 text-sm font-bold uppercase tracking-wider text-brand">{s.label}</span>
                <span className="mt-1 text-xs text-muted">{s.suffix}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-y">
        <div className="container-x">
          <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <span className="eyebrow">Our Capabilities</span>
              <h2 className="h-section mt-4">Three ways we drive revenue for your business.</h2>
            </div>
            <Link href="/services" className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-brand">
              All Services <RiArrowRightUpLine className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {services.map((s) => (
              <div key={s.title} className="card group">
                <div className={`mb-8 flex h-14 w-14 items-center justify-center rounded-2xl transition-transform group-hover:scale-110 ${s.color}`}>
                  {s.icon}
                </div>
                <h3 className="text-2xl font-serif">{s.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-body">{s.desc}</p>
                <Link href="/services" className="mt-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-ink group-hover:text-brand transition-colors">
                  Learn More <RiArrowRightUpLine />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-y border-y border-line bg-white">
        <div className="container-x grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="eyebrow">The Yuba Advantage</span>
            <h2 className="h-section mt-4">
              Built for performance, <br />
              <span className="italic text-brand">priced for results.</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-body">
              We hire and train North America-focused agents, then layer on
              proprietary pipeline reporting, QA, and tight feedback loops. 
              Our approach ensures every shift compounds into measurable ROI.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/why-us" className="btn-primary">
                Why Choose Us
              </Link>
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-6">
            {differentiators.map((d) => (
              <div
                key={d}
                className="flex flex-col gap-4 rounded-2xl border border-line bg-offwhite p-6 transition-colors hover:border-brand/30"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand text-white">
                  <RiCheckLine size={20} />
                </div>
                <span className="text-sm font-semibold leading-snug text-ink">{d}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32">
        <div className="container-x">
          <div className="relative overflow-hidden rounded-[2rem] bg-ink px-8 py-20 text-white md:px-20 md:py-28">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand opacity-20 blur-[100px]" />
            <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-blue-400 opacity-10 blur-[100px]" />
            
            <div className="relative z-10 mx-auto max-w-3xl text-center">
              <h2 className="font-serif text-4xl leading-tight md:text-6xl">
                Ready to scale your <br className="hidden md:block" />
                outbound engine?
              </h2>
              <p className="mx-auto mt-8 max-w-xl text-lg text-white/70">
                Tell us about your pipeline goals. We&apos;ll design a custom 
                outbound strategy and get back to you within one business day.
              </p>
              <div className="mt-12 flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="btn-brand !px-12">
                  Get Started Now
                </Link>
                <Link href="/careers" className="btn-secondary !bg-transparent !border-white/20 !text-white hover:!bg-white/10">
                  Join Our Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
