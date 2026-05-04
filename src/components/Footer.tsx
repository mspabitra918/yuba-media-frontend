"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  if (pathname?.startsWith("/admin")) return null;

  return (
    <footer className="border-t border-line bg-white">
      <div className="container-x flex flex-col items-start justify-between gap-6 py-10 md:flex-row md:items-center">
        <div>
          <p className="font-serif text-lg">Yuba Media</p>
          <p className="text-sm text-muted">
            Outbound sales, done right. North America.
          </p>
        </div>
        <nav className="flex flex-wrap gap-6 text-sm text-body">
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/why-us">Why Us</Link>
          <Link href="/careers">Careers</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <p className="text-xs text-muted">
          © {new Date().getFullYear()} Yuba Media. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
