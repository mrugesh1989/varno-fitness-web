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
