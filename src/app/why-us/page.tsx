import { RiChatQuoteLine, RiGlobeLine, RiLineChartLine, RiShieldCheckLine, RiTimerLine } from "react-icons/ri";

const cards = [
  {
    title: "North America Focus",
    body: "Agents trained on US/Canada accents, time zones, and buying culture. No offshore guesswork, just high-resonance conversations.",
    icon: <RiGlobeLine className="text-2xl" />,
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    title: "Performance-Driven",
    body: "Every program ships weekly KPIs and call-level QA. We win only when you win, with accountability baked into every seat.",
    icon: <RiLineChartLine className="text-2xl" />,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    title: "Rapid Ramp-Up",
    body: "From kickoff to live calls in days, not weeks. We hire ahead and certify in parallel so you never wait for growth.",
    icon: <RiTimerLine className="text-2xl" />,
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
  {
    title: "Military-Grade QA",
    body: "The tightest feedback loop in the industry. Every call scored, every agent coached, and every insight shared in real-time.",
    icon: <RiShieldCheckLine className="text-2xl" />,
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
];

const stats = [
  { num: "2M+", label: "Calls Handled" },
  { num: "500+", label: "Clients Served" },
  { num: "98%", label: "Client Retention" },
  { num: "<7d", label: "Avg. Ramp-Up" },
];

const testimonials = [
  {
    quote: "Yuba's team plugged in like full-time hires. Pipeline doubled in our first quarter together. They are truly an extension of our brand.",
    name: "Alex Rivera",
    company: "VP Sales, Fintech Global",
  },
  {
    quote: "The QA loop is what sold us — we hear every call and every week's coaching plan. The transparency is unlike any other partner.",
    name: "Sarah Chen",
    company: "Founder, SaaS Pulse",
  },
  {
    quote: "Pay-per-call gave us a way to scale outbound with zero risk. Volume came in week one and has been consistent ever since.",
    name: "Michael Scott",
    company: "Head of Growth, Dunder Inc.",
  },
];

export default function WhyUsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-offwhite py-24 md:py-32">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="container-x relative">
          <div className="max-w-4xl">
            <span className="eyebrow">The Yuba Difference</span>
            <h1 className="h-display mt-6">
              The outbound partner most teams wish they&apos;d hired <span className="text-brand italic">first.</span>
            </h1>
            <p className="mt-8 text-xl leading-relaxed text-body">
              We built Yuba to be the partner we always wanted: accountable, 
              transparent, and obsessed with the number. We turn cold leads 
              into high-velocity revenue pipeline.
            </p>
          </div>
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="container-x">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {cards.map((c) => (
              <div key={c.title} className="group relative flex flex-col items-start gap-6 rounded-[2rem] border border-line bg-white p-10 transition-all hover:border-brand/20 hover:shadow-xl hover:shadow-brand/5">
                <div className={`flex h-14 w-14 items-center justify-center rounded-2xl transition-transform group-hover:scale-110 ${c.bg} ${c.color}`}>
                  {c.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-ink">{c.title}</h3>
                  <p className="mt-4 text-[16px] leading-relaxed text-body">{c.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-ink text-white">
        <div className="container-x">
          <div className="mb-16 text-center lg:text-left">
            <span className="eyebrow !bg-white/10 !text-white">Track Record</span>
            <h2 className="h-section mt-4 text-white">Built on proven results.</h2>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="group flex flex-col items-center rounded-3xl border border-white/10 bg-white/5 p-10 text-center transition-all hover:bg-white/10 lg:items-start lg:text-left"
              >
                <p className="font-serif text-6xl font-medium tracking-tight text-brand">{s.num}</p>
                <p className="mt-4 text-sm font-bold uppercase tracking-[0.2em] text-white/70">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="container-x">
          <div className="mb-16 text-center">
            <span className="eyebrow">Client Feedback</span>
            <h2 className="h-section mt-4">In their own words.</h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <figure key={i} className="group relative flex flex-col justify-between rounded-[2rem] border border-line bg-offwhite p-10 transition-all hover:-translate-y-2 hover:bg-white hover:shadow-2xl hover:shadow-ink/5">
                <RiChatQuoteLine size={40} className="mb-8 text-brand/20 transition-colors group-hover:text-brand" />
                <blockquote className="font-serif text-xl italic leading-relaxed text-ink">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-10 flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-brand/10 flex items-center justify-center text-brand font-bold">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <span className="block text-sm font-bold text-ink">{t.name}</span>
                    <span className="text-xs text-muted">{t.company}</span>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
