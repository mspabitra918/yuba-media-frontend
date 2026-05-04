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

  if (pathname?.startsWith("/admin")) return null;

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/90 backdrop-blur">
      <div className="container-x flex h-16 items-center justify-between">
        <Link href="/" className="font-serif text-xl tracking-tight">
          Yuba Media
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm transition hover:text-ink ${
                isActive(l.href)
                  ? "font-semibold text-ink"
                  : "font-normal text-body"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary !py-2 !text-xs">
            Get in Touch
          </Link>
        </nav>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-line"
        >
          {/* <span className="sr-only">Menu</span>
          <div className="space-y-1.5">
            <span className="block h-0.5 w-5 bg-ink" />
            <span className="block h-0.5 w-5 bg-ink" />
            <span className="block h-0.5 w-5 bg-ink" />
          </div> */}

          {open ? <RiMenuFoldFill size={27} /> : <RiMenuFold4Fill size={27} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-line bg-white md:hidden">
          <div className="container-x flex flex-col gap-1 py-4">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`rounded-md px-3 py-2 text-sm ${
                  isActive(l.href)
                    ? "bg-infobg text-brand"
                    : "text-body hover:bg-offwhite"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="btn-primary mt-2 w-full"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
