import Link from "next/link";
import { gettingStarted } from "@/content/site";

export function GettingStartedSection() {
  return (
    <section className="border-y border-white/10 bg-brand-surface/30 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-accent">
            New here?
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold uppercase tracking-wide text-white sm:text-4xl">
            Getting started is easy
          </h2>
          <p className="mt-4 text-stone-400">
            Three simple steps from first visit to feeling at home in our community.
          </p>
        </div>

        <ol className="mt-12 grid gap-8 md:grid-cols-3">
          {gettingStarted.map((item) => (
            <li
              key={item.step}
              className="relative rounded-xl border border-white/10 bg-brand-dark/60 p-8"
            >
              <span
                className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-accent font-display text-xl font-bold text-white"
                aria-hidden
              >
                {item.step}
              </span>
              <h3 className="mt-6 font-display text-xl font-semibold uppercase text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-stone-400">{item.description}</p>
            </li>
          ))}
        </ol>

        <div className="mt-12 text-center">
          <Link
            href="/contact"
            className="inline-flex rounded-md bg-brand-accent px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-accent/25 transition hover:bg-brand-accentHover"
          >
            Book your free assessment
          </Link>
        </div>
      </div>
    </section>
  );
}
