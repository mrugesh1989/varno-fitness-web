"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { site } from "@/content/site";
import { media } from "@/content/media";

const nav = [
  { href: "/", label: "Home" },
  { href: "/programs", label: "Programs" },
  { href: "/schedule", label: "Schedule" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

function linkClass(active: boolean) {
  return [
    "rounded-md px-3 py-2 text-sm font-medium transition-colors",
    active
      ? "bg-white/10 text-white"
      : "text-stone-300 hover:bg-white/5 hover:text-white",
  ].join(" ");
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-brand-dark/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-3 text-white"
          onClick={() => setOpen(false)}
        >
          <Image
            src={media.varnoMark}
            alt=""
            width={360}
            height={120}
            className="h-9 w-auto max-w-[min(200px,55vw)] sm:h-10"
            priority
          />
          <span className="font-display text-xl tracking-wide sm:text-2xl">{site.name}</span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={linkClass(pathname === item.href)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-2 rounded-md bg-brand-accent px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-accentHover"
          >
            Free assessment
          </Link>
        </nav>
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md border border-white/15 p-2 text-stone-200 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Toggle menu</span>
          {open ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>
      {open && (
        <div
          id="mobile-nav"
          className="border-t border-white/10 bg-brand-dark px-4 pb-4 md:hidden"
        >
          <div className="flex flex-col gap-1 pt-2">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={linkClass(pathname === item.href)}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-2 rounded-md bg-brand-accent px-4 py-3 text-center text-sm font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              Free assessment
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
