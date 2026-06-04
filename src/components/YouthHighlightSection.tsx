import Image from "next/image";
import Link from "next/link";
import { youthSectionImage } from "@/content/media";
import { site, youthHighlight } from "@/content/site";

export function YouthHighlightSection() {
  return (
    <section className="border-y border-white/10 bg-brand-surface/20 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/40">
            <Image
              src={youthSectionImage}
              alt="Youth fitness at Varno Fitness"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-accent">
              {youthHighlight.subtitle}
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold uppercase tracking-wide text-white sm:text-4xl">
              {youthHighlight.title}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-stone-300">
              {youthHighlight.description}
            </p>
            <ul className="mt-6 space-y-3">
              {youthHighlight.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3 text-sm text-stone-400">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-accent" />
                  {bullet}
                </li>
              ))}
            </ul>
            <div className="mt-6 rounded-lg border border-white/10 bg-white/[0.03] p-4 text-sm text-stone-300">
              <p>
                <span className="font-semibold text-white">Schedule:</span> {site.kids.schedule}
              </p>
              <p className="mt-1">
                <span className="font-semibold text-white">Price:</span> {site.kids.price}
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={`tel:${site.kids.phoneTel}`}
                className="rounded-md bg-brand-accent px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-accentHover"
              >
                Call {site.kids.phoneDisplay}
              </a>
              <Link
                href="/programs#youth"
                className="rounded-md border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/5"
              >
                Program details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
