import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { programCardImage } from "@/content/media";
import { programs, seoKeywords, site } from "@/content/site";

export const metadata: Metadata = {
  title: "Programs, Classes & Pricing — Atlantic Highlands Gym",
  description:
    "Explore Varno Fitness programs in Atlantic Highlands, NJ: VF60 group fitness, private personal training, and CrossFit Kids. See pricing and start with a free assessment.",
  keywords: [...seoKeywords],
};

export default function ProgramsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <p className="text-sm font-semibold uppercase tracking-widest text-brand-accent">
        Training
      </p>
      <h1 className="mt-3 font-display text-4xl font-bold uppercase tracking-wide text-white sm:text-5xl">
        Programs
      </h1>
      <p className="mt-4 max-w-2xl text-stone-400">
        Every path starts with a complimentary assessment so we can coach you safely and
        effectively—then we place you in the right mix of group and private work.
      </p>

      <div className="mt-14 space-y-12">
        {programs.map((p) => (
          <article
            key={p.slug}
            id={p.slug}
            className="scroll-mt-28 overflow-hidden rounded-2xl border border-white/10 bg-brand-surface/40 sm:flex"
          >
            <div className="relative h-52 w-full shrink-0 bg-stone-900 sm:h-64 sm:w-72 md:h-72 md:w-80">
              <Image
                src={programCardImage(p.slug)}
                alt=""
                fill
                sizes="(max-width: 640px) 100vw, 320px"
                className="object-contain object-center p-6"
              />
            </div>
            <div className="flex flex-1 flex-col p-8 sm:p-10">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h2 className="font-display text-2xl font-bold uppercase text-white sm:text-3xl">
                    {p.title}
                  </h2>
                  <p className="mt-2 text-lg font-semibold text-brand-accent">{p.price}</p>
                </div>
                <Link
                  href="/contact"
                  className="w-fit rounded-md bg-brand-accent px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-accentHover"
                >
                  Request info
                </Link>
              </div>
              <p className="mt-6 text-stone-300">{p.summary}</p>
              <ul className="mt-6 list-disc space-y-2 pl-5 text-sm text-stone-400">
                {p.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              {p.slug === "youth" && (
                <div className="mt-6">
                  <div className="flex flex-wrap gap-2">
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
                </div>
              )}
              {p.slug === "youth" && (
                <div className="mt-5 flex flex-wrap items-center justify-between gap-4 rounded-lg border border-brand-gold/40 bg-brand-gold/10 px-5 py-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.15em] text-brand-gold">
                      Kids enrollment — dedicated line
                    </p>
                    <p className="mt-1 text-sm text-stone-300">
                      Enrollment for kids classes goes through {site.kids.contactName}.
                    </p>
                  </div>
                  <a
                    href={`tel:${site.kids.phoneTel}`}
                    className="inline-flex items-center gap-2 rounded-md bg-brand-gold px-5 py-2.5 text-sm font-bold text-brand-dark transition hover:bg-brand-accentHover"
                  >
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24 11.36 11.36 0 0 0 3.57.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.36 11.36 0 0 0 .57 3.57 1 1 0 0 1-.25 1.02Z" />
                    </svg>
                    Call {site.kids.contactName} · {site.kids.phoneDisplay}
                  </a>
                </div>
              )}
            </div>
          </article>
        ))}
      </div>

      <div className="mt-16 rounded-xl border border-dashed border-white/20 p-8 text-center">
        <p className="text-stone-300">
          Questions about the right program? Call{" "}
          <a className="font-semibold text-brand-accentHover hover:underline" href={`tel:${site.phoneTel}`}>
            {site.phoneDisplay}
          </a>{" "}
          or{" "}
          <Link href="/contact" className="font-semibold text-brand-accentHover hover:underline">
            send a message
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
