"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  if (pathname?.startsWith("/admin") || pathname?.startsWith("/admin-login")) return null;

  return (
    <footer className="border-t border-line bg-white py-20">
      <div className="container-x">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-4">
            <Link href="/" className="font-serif text-2xl tracking-tighter">
              Yuba Media
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              Premium outbound sales solutions for North American businesses. We turn cold leads into warm opportunities.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8 md:col-span-5">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-ink">Company</p>
              <nav className="mt-6 flex flex-col gap-4 text-sm text-body">
                <Link href="/about" className="hover:text-brand transition-colors">About Us</Link>
                <Link href="/careers" className="hover:text-brand transition-colors">Careers</Link>
                <Link href="/why-us" className="hover:text-brand transition-colors">Why Choose Us</Link>
              </nav>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-ink">Solutions</p>
              <nav className="mt-6 flex flex-col gap-4 text-sm text-body">
                <Link href="/services" className="hover:text-brand transition-colors">Services</Link>
                <Link href="/contact" className="hover:text-brand transition-colors">Get Started</Link>
              </nav>
            </div>
          </div>

          <div className="md:col-span-3">
            <p className="text-xs font-bold uppercase tracking-widest text-ink">Contact</p>
            <p className="mt-6 text-sm text-body">
              Ready to scale? <br />
              <Link href="/contact" className="mt-2 inline-block font-semibold text-brand underline underline-offset-4 decoration-brand/30 hover:decoration-brand">
                Book a consultation
              </Link>
            </p>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-center justify-between gap-6 border-t border-line pt-10 md:flex-row">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} Yuba Media Inc. All rights reserved.
          </p>
          <div className="flex gap-8 text-xs text-muted">
            <Link href="#" className="hover:text-ink">Privacy Policy</Link>
            <Link href="#" className="hover:text-ink">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
