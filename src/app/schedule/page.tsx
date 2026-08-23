import Link from "next/link";
import type { Metadata } from "next";
import { schedule, seoKeywords, site } from "@/content/site";

export const metadata: Metadata = {
  title: "Class Schedule — Gym in Atlantic Highlands, NJ",
  description:
    "Weekly VF60 group fitness and HIIT class schedule at Varno Fitness in Atlantic Highlands, NJ — classes Monday through Saturday, plus kids classes. New members start with a free assessment.",
  keywords: [...seoKeywords],
};

export default function SchedulePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-accent">
        Atlantic Highlands, NJ
      </p>
      <h1 className="mt-2 font-display text-4xl font-bold uppercase tracking-wide text-white sm:text-5xl">
        Weekly schedule
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-stone-300">
        VF60 group classes run Monday through Saturday. New athletes complete a complimentary
        assessment before joining a class.
      </p>

      <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">
        {schedule.map((d) => (
          <article
            key={d.day}
            className="flex flex-col rounded-xl border border-white/10 bg-white/[0.02] p-5"
          >
            <h2 className="font-display text-base font-semibold uppercase tracking-wider text-white">
              {d.day}
            </h2>
            <ul className="mt-4 flex-1 space-y-3">
              {d.classes.length === 0 ? (
                <li className="text-sm text-stone-500">MISC</li>
              ) : (
                d.classes.map((c, i) => (
                  <li
                    key={`${c.time}-${i}`}
                    className="rounded-lg border border-white/5 bg-brand-dark/60 px-3 py-2"
                  >
                    <p className="font-mono text-sm font-semibold text-brand-accent">{c.time}</p>
                    <p className="mt-1 text-xs text-stone-400">{c.name}</p>
                  </li>
                ))
              )}
            </ul>
          </article>
        ))}
      </div>

      <section className="mt-16 grid gap-6 rounded-xl border border-white/10 bg-brand-surface/30 p-6 sm:grid-cols-2 sm:p-8">
        <div>
          <h2 className="font-display text-xl font-bold uppercase tracking-wide text-white">
            Kids class
          </h2>
          <p className="mt-3 text-sm text-stone-300">
            Youth fitness in a supportive, coached environment for ages 4–12 — build confidence,
            develop skills, and have fun.
          </p>
          <p className="mt-2 text-sm text-stone-400">
            <span className="font-semibold text-stone-200">Season:</span> {site.kids.season}
          </p>
          <p className="text-sm text-stone-400">
            <span className="font-semibold text-stone-200">When:</span> {site.kids.schedule}
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {site.kids.priceOptions.map((opt) => (
              <span
                key={opt}
                className="rounded-full border border-brand-gold/50 bg-brand-gold/10 px-4 py-1.5 text-sm font-bold text-brand-gold"
              >
                {opt}
              </span>
            ))}
          </div>
          <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-stone-400">
            {site.kids.priceNote}
          </p>
          <div className="mt-4 rounded-lg border border-brand-gold/40 bg-brand-gold/10 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-brand-gold">
              Kids enrollment — dedicated line
            </p>
            <a
              href={`tel:${site.kids.phoneTel}`}
              className="mt-3 inline-flex items-center gap-2 rounded-md bg-brand-gold px-4 py-2.5 text-sm font-bold text-brand-dark transition hover:bg-brand-accentHover"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24 11.36 11.36 0 0 0 3.57.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.36 11.36 0 0 0 .57 3.57 1 1 0 0 1-.25 1.02Z" />
              </svg>
              Call {site.kids.contactName} · {site.kids.phoneDisplay}
            </a>
            <p className="mt-2 text-xs text-stone-500">
              {site.kids.contactName} handles all kids enrollment.
            </p>
          </div>
        </div>
        <div>
          <h2 className="font-display text-xl font-bold uppercase tracking-wide text-white">
            New to Varno?
          </h2>
          <p className="mt-3 text-sm text-stone-300">
            Start with a complimentary assessment so we can build the right plan and set you up for
            your first class.
          </p>
          <Link
            href="/contact"
            className="mt-5 inline-flex rounded-md bg-brand-accent px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-accentHover"
          >
            Book your free assessment
          </Link>
        </div>
      </section>

      <p className="mt-10 text-xs text-stone-500">
        Holidays and weather may affect specific classes—call{" "}
        <a href={`tel:${site.phoneTel}`} className="text-stone-400 hover:underline">
          {site.phoneDisplay}
        </a>{" "}
        to confirm before you head over.
      </p>
    </div>
  );
}
