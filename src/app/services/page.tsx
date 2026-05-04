import Link from "next/link";

const services = [
  {
    id: "cold-calling",
    title: "Cold Calling Services",
    desc: [
      "Trained voice agents make outbound calls on behalf of your business — scripted, monitored, and coached every week.",
      "Goal: turn cold prospects into warm pipeline. We book appointments, qualify leads, and where appropriate, close on the call.",
    ],
    features: [
      "Dedicated North American time-zone coverage",
      "Custom scripts built around your product and ICP",
      "Daily call recordings with QA scoring",
      "CRM-ready handoff (HubSpot, Pipedrive, Airtable, Salesforce)",
      "Weekly performance and pipeline reviews",
    ],
  },
  {
    id: "pay-per-call",
    title: "Pay Per Call",
    desc: [
      "Performance-based campaigns where you only pay for calls that meet a defined quality threshold — typically a 90+ second connected call with a genuinely interested prospect.",
      "We run the campaign, generate the volume, and route only qualified calls to you.",
    ],
    features: [
      "Billed per qualifying call — not per agent or hour",
      "Quality threshold defined upfront and audited",
      "Real-time call routing to your team",
      "Industry-tuned for finance, home services, insurance, and SaaS",
      "Transparent reporting on volume and quality",
    ],
  },
  {
    id: "sales-outsourcing",
    title: "Sales Outsourcing",
    desc: [
      "A full, end-to-end outsourced sales function. Yuba Media takes ownership of the entire pipeline — prospecting, outreach, qualification, pitching, objection handling, and closing.",
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
      <section className="section-y">
        <div className="container-x max-w-3xl">
          <p className="eyebrow mb-4">Services</p>
          <h1 className="h-display">Three engagement models. One outcome.</h1>
          <p className="mt-6 text-lg">
            Pick the model that matches how you want to buy outbound — by the
            seat, by the qualified call, or by the entire pipeline.
          </p>
        </div>
      </section>

      {services.map((s, idx) => (
        <section
          key={s.id}
          id={s.id}
          className={`section-y border-t border-line ${
            idx % 2 === 0 ? "bg-white" : "bg-offwhite"
          }`}
        >
          <div className="container-x grid grid-cols-1 gap-10 md:grid-cols-12">
            <div className="md:col-span-5">
              <p className="eyebrow mb-3">0{idx + 1}</p>
              <h2 className="h-section">{s.title}</h2>
            </div>
            <div className="md:col-span-7">
              <div className="space-y-4">
                {s.desc.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <ul className="mt-8 grid grid-cols-1 gap-2">
                {s.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-3 border-t border-line py-3 text-sm"
                  >
                    <span className="mt-1 h-2 w-2 rounded-full bg-brand" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link href="/contact" className="btn-primary">
                  Talk to Sales
                </Link>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="section-y border-t border-line bg-white">
        <div className="container-x">
          <h2 className="h-section">Pricing model at a glance.</h2>
          <div className="mt-8 overflow-x-auto rounded-card border border-line">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-offwhite text-left text-muted">
                  <th className="p-4 font-medium">Service</th>
                  <th className="p-4 font-medium">Pricing Model</th>
                  <th className="p-4 font-medium">Best For</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-line">
                  <td className="p-4 font-medium">Cold Calling</td>
                  <td className="p-4">Per agent, per month</td>
                  <td className="p-4 text-body">Steady ongoing outbound</td>
                </tr>
                <tr className="border-t border-line">
                  <td className="p-4 font-medium">Pay Per Call</td>
                  <td className="p-4">Per qualifying call</td>
                  <td className="p-4 text-body">Performance-only buyers</td>
                </tr>
                <tr className="border-t border-line">
                  <td className="p-4 font-medium">Sales Outsourcing</td>
                  <td className="p-4">Per pod, per month</td>
                  <td className="p-4 text-body">Full-funnel ownership</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
