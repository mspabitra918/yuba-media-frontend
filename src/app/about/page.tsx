import { RiFocus2Line, RiHandHeartLine, RiLightbulbLine, RiRocketLine } from "react-icons/ri";

const values = [
  {
    title: "Performance First",
    body: "We earn our seat at the table by hitting numbers — every program is measured, reviewed, and tuned weekly.",
    icon: <RiFocus2Line className="text-2xl" />,
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    title: "Radical Integrity",
    body: "Honest scripts. Honest reporting. Honest QA. Our agents represent your brand with absolute transparency.",
    icon: <RiHandHeartLine className="text-2xl" />,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    title: "Continuous Growth",
    body: "Our agents grow into team leads and trainers — invested talent shows up on your pipeline performance.",
    icon: <RiRocketLine className="text-2xl" />,
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
  {
    title: "Deep Partnership",
    body: "We operate as an extension of your team — shared goals, shared dashboards, and zero black boxes.",
    icon: <RiLightbulbLine className="text-2xl" />,
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
];

const steps = [
  { n: "01", t: "Discovery & Audit", d: "Discovery, ICP alignment, script & list audit." },
  { n: "02", t: "Custom Training", d: "Agents trained on your product, objections, and pitch." },
  { n: "03", t: "Go-Live & QA", d: "Calls go live with daily QA and real-time coaching." },
  { n: "04", t: "Scale & Optimize", d: "Pipeline, KPIs, and call-level coaching shared weekly." },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-offwhite py-24 md:py-32">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="container-x relative">
          <div className="max-w-4xl">
            <span className="eyebrow">Our Story</span>
            <h1 className="h-display mt-6">
              A sales engine that ships <span className="text-brand">pipeline</span>, not promises.
            </h1>
            <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
              <p className="text-lg leading-relaxed text-body">
                Yuba Media was founded to fix a stubborn problem in outbound sales: 
                most programs fail not because the offer is wrong, but because the 
                execution is uneven. Calls don&apos;t happen. Scripts drift. QA 
                never catches up.
              </p>
              <p className="text-lg leading-relaxed text-body">
                We built a North America-focused operation around fast ramp-up, 
                tight QA, and weekly performance reviews so every shift compounds 
                into real pipeline. We run it like it&apos;s our own business.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="container-x">
          <div className="mb-16">
            <span className="eyebrow">Our Values</span>
            <h2 className="h-section mt-4">The principles that drive us.</h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="group relative rounded-3xl border border-line bg-white p-8 transition-all hover:border-brand/20 hover:shadow-xl hover:shadow-brand/5">
                <div className={`mb-6 flex h-12 w-12 items-center justify-center rounded-xl transition-transform group-hover:scale-110 ${v.bg} ${v.color}`}>
                  {v.icon}
                </div>
                <h3 className="text-xl font-bold text-ink">{v.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-body">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y border-y border-line bg-offwhite">
        <div className="container-x">
          <div className="mb-16 text-center">
            <span className="eyebrow">Our Process</span>
            <h2 className="h-section mt-4">From kickoff to live calls in days.</h2>
          </div>
          
          <div className="relative">
            <div className="absolute top-1/2 hidden h-0.5 w-full bg-line lg:block" />
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              {steps.map((s) => (
                <div key={s.n} className="relative z-10 flex flex-col items-center text-center">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full border-4 border-white bg-brand text-xl font-bold text-white shadow-lg">
                    {s.n}
                  </div>
                  <h3 className="text-xl font-bold text-ink">{s.t}</h3>
                  <p className="mt-3 max-w-[200px] text-sm leading-relaxed text-body">{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <section className="section-y bg-white">
        <div className="container-x">
          <div className="rounded-[2.5rem] bg-ink p-12 text-white md:p-20">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-serif text-3xl md:text-5xl">
                Our mission is to be the most accountable outbound partner you&apos;ve ever worked with.
              </h2>
              <div className="mt-10 h-1 w-20 bg-brand mx-auto" />
              <p className="mt-10 text-xl font-medium text-white/80">
                — The Yuba Media Leadership Team
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
