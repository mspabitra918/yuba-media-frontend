const values = [
  {
    title: "Performance",
    body: "We earn our seat at the table by hitting numbers — every program is measured, reviewed, and tuned weekly.",
  },
  {
    title: "Integrity",
    body: "Honest scripts. Honest reporting. Honest QA. Our agents represent your brand the way you'd represent it.",
  },
  {
    title: "Growth",
    body: "Our agents grow into team leads, trainers, and SDRs — invested talent shows up on your pipeline.",
  },
  {
    title: "Partnership",
    body: "We operate as an extension of your team — shared goals, shared dashboards, no black boxes.",
  },
];

const steps = [
  { n: "01", t: "Onboarding", d: "Discovery, ICP alignment, script & list audit." },
  { n: "02", t: "Training", d: "Agents trained on your product, objections, and pitch." },
  { n: "03", t: "Live Calls", d: "Calls go live with daily QA, weekly retros." },
  { n: "04", t: "Reporting", d: "Pipeline, KPIs, and call-level coaching shared weekly." },
];

export default function AboutPage() {
  return (
    <>
      <section className="section-y">
        <div className="container-x max-w-3xl">
          <p className="eyebrow mb-4">About</p>
          <h1 className="h-display">
            A sales team that ships pipeline, not promises.
          </h1>
          <div className="mt-8 space-y-5">
            <p>
              Yuba Media was founded to fix a stubborn problem in outbound: most
              programs miss not because the offer is wrong, but because the
              execution is uneven. Calls don&apos;t happen. Scripts drift. QA
              never catches up.
            </p>
            <p>
              We built a North America-focused operation around fast ramp-up,
              tight QA, and weekly performance reviews so every shift compounds
              into real pipeline. Whether you need a few seats or a full pod, we
              run it like it&apos;s our own number on the line.
            </p>
            <p>
              Our mission: be the most accountable outbound partner you&apos;ve
              worked with — and your last.
            </p>
          </div>
        </div>
      </section>

      <section className="section-y border-y border-line bg-white">
        <div className="container-x">
          <p className="eyebrow mb-3">Values</p>
          <h2 className="h-section">What we stand for.</h2>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {values.map((v) => (
              <div key={v.title} className="card">
                <h3 className="font-serif text-2xl">{v.title}</h3>
                <p className="mt-2 text-sm">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-x">
          <p className="eyebrow mb-3">Our process</p>
          <h2 className="h-section">From kickoff to live calls in days.</h2>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-4">
            {steps.map((s) => (
              <div key={s.n} className="card">
                <p className="text-xs text-muted">{s.n}</p>
                <h3 className="mt-1 font-serif text-xl">{s.t}</h3>
                <p className="mt-2 text-sm">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
