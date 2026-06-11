"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/content/site";

/**
 * Persistent bottom CTA bar on phones. Hidden on /contact (the form is the
 * destination) and on md+ screens where the header CTA is always visible.
 */
export function StickyMobileCta() {
  const pathname = usePathname();
  if (pathname.startsWith("/contact")) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-brand-dark/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-md md:hidden">
      <div className="flex items-center gap-3 px-4 py-3">
        <Link
          href="/contact"
          className="flex-1 rounded-lg bg-brand-accent px-4 py-3.5 text-center text-sm font-bold uppercase tracking-wide text-white shadow-lg shadow-brand-accent/30 transition active:scale-[0.98]"
        >
          Book free assessment
        </Link>
        <a
          href={`tel:${site.phoneTel}`}
          aria-label={`Call ${site.name} at ${site.phoneDisplay}`}
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-white/20 bg-white/5 text-white transition active:scale-[0.98]"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
