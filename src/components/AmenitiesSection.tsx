import Link from "next/link";
import type { ReactNode } from "react";
import { amenities } from "@/content/site";

const iconClass = "h-7 w-7";

const icons: Record<string, ReactNode> = {
  "changing-rooms": (
    <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 10h16M6 10V6a2 2 0 012-2h2a2 2 0 012 2M5 10l1.2 9a2 2 0 002 1.8h7.6a2 2 0 002-1.8L19 10" />
    </svg>
  ),
  bodybuilding: (
    <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.5 6.5l11 11M4 8l1-1m0 0l2 2m-2-2l-1 1m16 8l-1 1m0 0l-2-2m2 2l1-1M8 4l-1 1m0 0L5 7m2-2l1 1m9 11l1-1m0 0l2 2m-2-2l-1-1" />
    </svg>
  ),
  kids: (
    <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden>
      <circle cx="12" cy="5" r="2" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v6m0 0l-3 5m3-5l3 5m-7-9l4 1 4-1" />
    </svg>
  ),
  coaching: (
    <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  assessment: (
    <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
    </svg>
  ),
  "members-app": (
    <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden>
      <rect x="7" y="2.5" width="10" height="19" rx="2.5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M11 18.5h2" />
    </svg>
  ),
};

export function AmenitiesSection() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-accent">
            Our facility
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold uppercase tracking-wide text-white sm:text-4xl">
            Everything you need to crush your fitness goals
          </h2>
          <p className="mt-4 text-stone-400">
            From coached classes to dedicated training space—built for real results in Atlantic
            Highlands.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {amenities.map((item) => (
            <article
              key={item.slug}
              className="rounded-xl border border-white/10 bg-brand-surface/40 p-6 transition hover:border-brand-accent/30"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-accent/15 text-brand-accent">
                {icons[item.slug]}
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold uppercase text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-400">{item.description}</p>
              {item.slug === "kids" && (
                <Link
                  href="/programs#youth"
                  className="mt-4 inline-block text-sm font-semibold text-brand-accentHover hover:underline"
                >
                  Learn about kids classes →
                </Link>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
