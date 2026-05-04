const cards = [
  {
    title: "North America Focus",
    body: "Agents trained on US/Canada accents, time zones, and buying culture. No offshore guesswork.",
  },
  {
    title: "Performance-Driven",
    body: "Every program ships weekly KPIs and call-level QA. We win when you win.",
  },
  {
    title: "Fast Ramp-Up",
    body: "From kickoff to live calls in days, not weeks. We hire ahead and certify in parallel.",
  },
  {
    title: "Scalable Teams",
    body: "Add seats, swap pods, or shift channels — capacity flexes with your roadmap.",
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
    quote:
      "Yuba's team plugged in like full-time hires. Pipeline doubled in our first quarter together.",
    name: "Placeholder Name",
    company: "VP Sales, Placeholder Co.",
  },
  {
    quote:
      "The QA loop is what sold us — we hear every call and every week's coaching plan.",
    name: "Placeholder Name",
    company: "Founder, Placeholder Co.",
  },
  {
    quote:
      "Pay-per-call gave us a way to scale outbound with zero risk. Volume came in week one.",
    name: "Placeholder Name",
    company: "Head of Growth, Placeholder Co.",
  },
];

export default function WhyUsPage() {
  return (
    <>
      <section className="section-y">
        <div className="container-x max-w-3xl">
          <p className="eyebrow mb-4">Why Yuba Media</p>
          <h1 className="h-display">
            The outbound partner most teams wish they&apos;d hired first.
          </h1>
          <p className="mt-6 text-lg">
            We&apos;ve been on both sides of the table — building inside-sales
            teams and buying outbound. We built Yuba to be the partner we
            always wanted: accountable, transparent, and obsessed with the
            number.
          </p>
        </div>
      </section>

      <section className="section-y border-y border-line bg-white">
        <div className="container-x">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {cards.map((c) => (
              <div key={c.title} className="card">
                <h3 className="font-serif text-2xl">{c.title}</h3>
                <p className="mt-2 text-sm">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-x">
          <p className="eyebrow mb-3">By the numbers</p>
          <h2 className="h-section">Built on results.</h2>
          <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-card border border-line bg-white p-6"
              >
                <p className="font-serif text-4xl">{s.num}</p>
                <p className="mt-2 text-sm text-muted">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y border-t border-line bg-white">
        <div className="container-x">
          <p className="eyebrow mb-3">In their words</p>
          <h2 className="h-section">What clients say.</h2>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <figure key={i} className="card">
                <blockquote className="font-serif text-xl leading-snug text-ink">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-4 text-sm text-muted">
                  <span className="font-medium text-ink">{t.name}</span>
                  <br />
                  {t.company}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
