"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { RiMenu4Line, RiMenuFold4Fill, RiMenuFoldFill } from "react-icons/ri";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/why-us", label: "Why Us" },
  { href: "/careers", label: "Careers" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  if (pathname?.startsWith("/admin") || pathname?.startsWith("/admin-login")) return null;

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/80 backdrop-blur-md">
      <div className="container-x flex h-20 items-center justify-between">
        <Link href="/" className="font-serif text-2xl tracking-tighter hover:opacity-80 transition-opacity">
          Yuba Media
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-[13px] uppercase tracking-widest transition-all duration-200 hover:text-brand ${
                isActive(l.href)
                  ? "font-bold text-brand"
                  : "font-medium text-body"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary !py-2.5 !px-6 !text-[11px] uppercase tracking-wider">
            Get in Touch
          </Link>
        </nav>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white shadow-sm hover:bg-offwhite transition-colors"
        >
          {open ? <RiMenuFoldFill size={24} className="text-brand" /> : <RiMenuFold4Fill size={24} />}
        </button>
      </div>

      {open && (
        <div className="fixed inset-x-0 top-20 z-50 h-screen border-t border-line bg-white md:hidden">
          <div className="container-x flex flex-col gap-2 py-8">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`rounded-xl px-5 py-4 text-lg font-serif transition-colors ${
                  isActive(l.href)
                    ? "bg-infobg text-brand"
                    : "text-ink hover:bg-offwhite"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="btn-primary mt-6 w-full !py-5 text-base uppercase tracking-widest"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
