import Link from "next/link";
import { RiArrowRightLine, RiCheckLine, RiPriceTag3Line, RiShieldStarLine, RiUserStarLine } from "react-icons/ri";

const services = [
  {
    id: "cold-calling",
    title: "Cold Calling Services",
    icon: <RiUserStarLine className="text-3xl" />,
    color: "bg-blue-600",
    lightColor: "bg-blue-50",
    textColor: "text-blue-600",
    desc: [
      "Trained voice agents make outbound calls on behalf of your business — scripted, monitored, and coached every week.",
      "Goal: turn cold prospects into warm pipeline. We book appointments, qualify leads, and where appropriate, close on the call.",
    ],
    features: [
      "Dedicated North American time-zone coverage",
      "Custom scripts built around your product and ICP",
      "Daily call recordings with QA scoring",
      "CRM-ready handoff (HubSpot, Pipedrive, Salesforce)",
      "Weekly performance and pipeline reviews",
    ],
  },
  {
    id: "pay-per-call",
    title: "Pay Per Call",
    icon: <RiPriceTag3Line className="text-3xl" />,
    color: "bg-amber-600",
    lightColor: "bg-amber-50",
    textColor: "text-amber-600",
    desc: [
      "Performance-based campaigns where you only pay for calls that meet a defined quality threshold — typically a 90+ second connected call.",
      "We run the campaign, generate the volume, and route only qualified calls to you.",
    ],
    features: [
      "Billed per qualifying call — not per agent or hour",
      "Quality threshold defined upfront and audited",
      "Real-time call routing to your team",
      "Industry-tuned for finance, home services, and SaaS",
      "Transparent reporting on volume and quality",
    ],
  },
  {
    id: "sales-outsourcing",
    title: "Sales Outsourcing",
    icon: <RiShieldStarLine className="text-3xl" />,
    color: "bg-emerald-600",
    lightColor: "bg-emerald-50",
    textColor: "text-emerald-600",
    desc: [
      "A full, end-to-end outsourced sales function. Yuba Media takes ownership of the entire pipeline — prospecting through closing.",
      "You get a dedicated sales pod operating as an extension of your team, reporting into your stand-ups and dashboards.",
    ],
    features: [
      "Dedicated sales pod (SDRs + closers + team lead)",
      "Full-funnel ownership from list to close",
      "Embedded in your CRM and reporting tools",
      "Weekly business reviews and forecast calls",
      "Scales up or down with your roadmap",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-white py-24 md:py-32">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="container-x relative">
          <div className="max-w-3xl">
            <span className="eyebrow">Our Solutions</span>
            <h1 className="h-display mt-6">Three engagement models. One outcome.</h1>
            <p className="mt-8 text-xl leading-relaxed text-body">
              Pick the model that matches how you want to buy outbound — by the
              seat, by the qualified call, or by the entire pipeline.
            </p>
          </div>
        </div>
      </section>

      <div className="bg-offwhite">
        {services.map((s, idx) => (
          <section
            key={s.id}
            id={s.id}
            className="section-y border-t border-line first:border-none"
          >
            <div className="container-x">
              <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-20">
                <div className="lg:col-span-5">
                  <div className={`mb-8 flex h-16 w-16 items-center justify-center rounded-2xl ${s.lightColor} ${s.textColor}`}>
                    {s.icon}
                  </div>
                  <span className="text-xs font-bold uppercase tracking-[0.3em] text-muted">0{idx + 1}</span>
                  <h2 className="h-section mt-4">{s.title}</h2>
                  <div className="mt-8 space-y-6">
                    {s.desc.map((p, i) => (
                      <p key={i} className="text-lg leading-relaxed text-body">{p}</p>
                    ))}
                  </div>
                  <div className="mt-10">
                    <Link href="/contact" className="btn-primary flex items-center gap-3">
                      Start with this model <RiArrowRightLine />
                    </Link>
                  </div>
                </div>
                
                <div className="lg:col-span-7">
                  <div className="rounded-[2rem] border border-line bg-white p-8 md:p-12 shadow-sm">
                    <h3 className="text-xl font-bold uppercase tracking-wider text-ink">Key Features</h3>
                    <ul className="mt-8 space-y-4">
                      {s.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-center gap-4 rounded-xl border border-line bg-offwhite p-4 transition-colors hover:border-brand/30"
                        >
                          <div className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${s.color} text-white`}>
                            <RiCheckLine size={14} />
                          </div>
                          <span className="text-[15px] font-medium text-ink">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      <section className="section-y bg-white">
        <div className="container-x">
          <div className="text-center">
            <span className="eyebrow">Comparison</span>
            <h2 className="h-section mt-4 text-balance">Pricing model at a glance.</h2>
          </div>
          
          <div className="mt-16 overflow-hidden rounded-[2rem] border border-line shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-ink text-white">
                    <th className="p-6 text-left text-xs font-bold uppercase tracking-widest">Service</th>
                    <th className="p-6 text-left text-xs font-bold uppercase tracking-widest">Pricing Model</th>
                    <th className="p-6 text-left text-xs font-bold uppercase tracking-widest">Best For</th>
                    <th className="p-6 text-left text-xs font-bold uppercase tracking-widest">Handoff</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  <tr className="transition-colors hover:bg-offwhite">
                    <td className="p-6 font-serif text-xl">Cold Calling</td>
                    <td className="p-6 text-sm font-semibold text-brand">Per agent / Month</td>
                    <td className="p-6 text-sm text-body">Steady ongoing outbound</td>
                    <td className="p-6 text-sm text-body">Qualified Meetings</td>
                  </tr>
                  <tr className="transition-colors hover:bg-offwhite">
                    <td className="p-6 font-serif text-xl">Pay Per Call</td>
                    <td className="p-6 text-sm font-semibold text-brand">Per qualifying call</td>
                    <td className="p-6 text-sm text-body">Performance-only buyers</td>
                    <td className="p-6 text-sm text-body">Live Transfers</td>
                  </tr>
                  <tr className="transition-colors hover:bg-offwhite">
                    <td className="p-6 font-serif text-xl">Sales Outsourcing</td>
                    <td className="p-6 text-sm font-semibold text-brand">Per pod / Month</td>
                    <td className="p-6 text-sm text-body">Full-funnel ownership</td>
                    <td className="p-6 text-sm text-body">Closed Deals</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-muted">Need a hybrid model or custom solution?</p>
            <Link href="/contact" className="mt-4 inline-block font-bold text-brand underline underline-offset-8 decoration-brand/30 hover:decoration-brand">
              Contact our solutions team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
