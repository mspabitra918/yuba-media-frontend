import ContactForm from "@/components/ContactForm";
import {
  RiCalendarCheckLine,
  RiMailLine,
  RiMapPin2Line,
  RiPhoneLine,
  RiTimeLine,
} from "react-icons/ri";

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-white py-24 md:py-32">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="container-x relative">
          <div className="max-w-3xl">
            <span className="eyebrow">Contact Us</span>
            <h1 className="h-display mt-6">
              Let&apos;s talk <span className="text-brand">pipeline.</span>
            </h1>
            <p className="mt-8 text-xl leading-relaxed text-body">
              Whether you need cold-calling seats, a pay-per-call campaign, or a
              full sales pod — tell us what you&apos;re building and we&apos;ll
              design a high-performance outbound strategy.
            </p>
          </div>
        </div>
      </section>

      <section className="section-y bg-offwhite">
        <div className="container-x">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-24">
            <div className="lg:col-span-7">
              <div className="relative">
                <div className="absolute -inset-4 rounded-[2.5rem] bg-brand/5 blur-2xl" />
                <div className="relative">
                  <ContactForm />
                </div>
              </div>
            </div>

            <aside className="lg:col-span-5">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-ink">
                    Get in touch directly
                  </h3>
                  <p className="mt-4 text-body">
                    Skip the form? Reach out via any of these channels. Our team
                    is responsive.
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-1">
                  <div className="flex items-center gap-6 rounded-3xl border border-line bg-white p-6 shadow-sm">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                      <RiMailLine size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-muted">
                        Email
                      </p>
                      <p className="mt-1 font-semibold text-ink">
                        hello@yubamedia.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 rounded-3xl border border-line bg-white p-6 shadow-sm">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
                      <RiPhoneLine size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-muted">
                        Phone
                      </p>
                      <p className="mt-1 font-semibold text-ink">
                        (747) 208-0334
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 rounded-3xl border border-line bg-white p-6 shadow-sm">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
                      <RiMapPin2Line size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-muted">
                        Address
                      </p>
                      <p className="mt-1 font-semibold text-ink">
                        1968 South Coast Highway #9099, Laguna Beach, CA 92651
                      </p>
                    </div>
                  </div>

                  {/* <div className="flex items-center gap-6 rounded-3xl border border-line bg-white p-6 shadow-sm">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-50 text-amber-600">
                      <RiMapPin2Line size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-muted">
                        Region
                      </p>
                      <p className="mt-1 font-semibold text-ink">
                        North America (US & Canada)
                      </p>
                    </div>
                  </div> */}

                  <div className="flex items-center gap-6 rounded-3xl border border-line bg-white p-6 shadow-sm">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-purple-50 text-purple-600">
                      <RiTimeLine size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-muted">
                        Business Hours
                      </p>
                      <p className="mt-1 font-semibold text-ink">
                        Mon–Fri, 9am–6pm EST
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-[2rem] bg-ink p-8 text-white shadow-xl shadow-ink/10">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand text-white mb-6">
                    <RiCalendarCheckLine size={24} />
                  </div>
                  <h4 className="text-xl font-bold">Fast Response Time</h4>
                  <p className="mt-4 text-sm leading-relaxed text-white/70">
                    We review all inquiries within 24 business hours. For
                    existing clients, please reach out directly via your
                    dedicated Slack channel.
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
