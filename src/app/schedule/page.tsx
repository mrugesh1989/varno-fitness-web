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
            Youth fitness in a supportive, coached environment for ages confirmed by our team.
          </p>
          <p className="mt-2 text-sm text-stone-400">
            <span className="font-semibold text-stone-200">When:</span> {site.kids.schedule}
          </p>
          <p className="text-sm text-stone-400">
            <span className="font-semibold text-stone-200">Price:</span> {site.kids.price}
          </p>
          <p className="mt-3 text-sm text-stone-400">
            Call{" "}
            <a
              href={`tel:${site.kids.phoneTel}`}
              className="font-semibold text-brand-accentHover hover:underline"
            >
              {site.kids.phoneDisplay}
            </a>{" "}
            to enroll.
          </p>
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
