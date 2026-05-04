import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <section className="section-y">
      <div className="container-x">
        <p className="eyebrow mb-4">Contact</p>
        <h1 className="h-display max-w-3xl">Let&apos;s talk pipeline.</h1>
        <p className="mt-6 max-w-xl text-lg">
          Whether you need cold-calling seats, a pay-per-call campaign, or a
          full sales pod — tell us what you&apos;re building and we&apos;ll
          come back with a plan.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <ContactForm />
          </div>
          <aside className="md:col-span-5">
            <div className="rounded-card border border-line bg-white p-6">
              <h3 className="font-serif text-xl">Reach us directly</h3>
              <dl className="mt-4 space-y-4 text-sm">
                <div>
                  <dt className="text-muted">Email</dt>
                  <dd className="text-ink">hello@yubamedia.com</dd>
                </div>
                <div>
                  <dt className="text-muted">Phone</dt>
                  <dd className="text-ink">+1 (555) 010-2025</dd>
                </div>
                <div>
                  <dt className="text-muted">Operating Region</dt>
                  <dd className="text-ink">North America (US &amp; Canada)</dd>
                </div>
                <div>
                  <dt className="text-muted">Hours</dt>
                  <dd className="text-ink">Mon–Fri, 9am–6pm EST</dd>
                </div>
              </dl>
            </div>
            <div className="mt-6 rounded-card border border-line bg-infobg p-6 text-sm">
              <p className="font-medium text-ink">Hiring inquiries?</p>
              <p className="mt-1">
                Head over to our{" "}
                <a href="/careers" className="text-brand underline">
                  Careers page
                </a>{" "}
                — applications go through the form there so we don&apos;t miss
                them.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
