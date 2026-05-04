import CareersForm from "@/components/CareersForm";

const culture = [
  {
    title: "Remote-Friendly",
    body: "Most roles are fully remote across North American time zones, with optional onsite hubs.",
  },
  {
    title: "Performance Rewards",
    body: "Base + uncapped commission for sales roles. Quarterly bonuses for ops and QA teams.",
  },
  {
    title: "Real Growth",
    body: "Voice agents move into trainer, team-lead, and SDR seats. We promote from within.",
  },
];

const positions = [
  { title: "Voice Process Agent", level: "Entry", type: "Full-time", location: "Remote / Onsite", shift: "NA time zones" },
  { title: "Voice Trainer", level: "Mid", type: "Full-time", location: "Remote / Onsite", shift: "NA time zones" },
  { title: "Team Leader — Voice Ops", level: "Senior", type: "Full-time", location: "Remote / Onsite", shift: "NA time zones" },
  { title: "Sales Development Representative (SDR)", level: "Entry–Mid", type: "Full-time", location: "Remote", shift: "NA time zones" },
  { title: "Quality Analyst — Voice", level: "Mid", type: "Full-time", location: "Remote", shift: "Flexible" },
];

export default function CareersPage() {
  return (
    <>
      <section className="section-y">
        <div className="container-x max-w-3xl">
          <p className="eyebrow mb-4">Careers</p>
          <h1 className="h-display">Build your career in sales.</h1>
          <p className="mt-6 text-lg">
            We hire curious, coachable people and turn them into world-class
            voice and sales talent. If you want to learn fast and earn faster,
            you&apos;ll fit right in.
          </p>
        </div>
      </section>

      <section className="border-y border-line bg-white">
        <div className="container-x grid grid-cols-1 gap-6 py-10 md:grid-cols-3">
          {culture.map((c) => (
            <div key={c.title}>
              <h3 className="font-serif text-xl">{c.title}</h3>
              <p className="mt-2 text-sm">{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-y">
        <div className="container-x">
          <p className="eyebrow mb-3">Open Positions</p>
          <h2 className="h-section">We&apos;re hiring across 5 roles.</h2>

          <div className="mt-8 overflow-x-auto rounded-card border border-line bg-white">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-offwhite text-left text-muted">
                  <th className="p-4 font-medium">Job Title</th>
                  <th className="p-4 font-medium">Level</th>
                  <th className="p-4 font-medium">Type</th>
                  <th className="p-4 font-medium">Location</th>
                  <th className="p-4 font-medium">Shift</th>
                </tr>
              </thead>
              <tbody>
                {positions.map((p) => (
                  <tr key={p.title} className="border-t border-line">
                    <td className="p-4 font-medium">{p.title}</td>
                    <td className="p-4 text-body">{p.level}</td>
                    <td className="p-4 text-body">{p.type}</td>
                    <td className="p-4 text-body">{p.location}</td>
                    <td className="p-4 text-body">{p.shift}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section-y border-t border-line bg-white">
        <div className="container-x max-w-3xl">
          <p className="eyebrow mb-3">Application</p>
          <h2 className="h-section">Apply now.</h2>
          <p className="mt-3 text-sm">
            Fill out the form below and attach your CV. We review every
            application — expect to hear back within a week.
          </p>
          <div className="mt-8">
            <CareersForm />
          </div>
        </div>
      </section>
    </>
  );
}
