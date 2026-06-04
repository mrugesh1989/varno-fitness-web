import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { AmenitiesSection } from "@/components/AmenitiesSection";
import { GettingStartedSection } from "@/components/GettingStartedSection";
import { GoogleReviewsSection } from "@/components/GoogleReviewsSection";
import { HeroSlideshow } from "@/components/HeroSlideshow";
import { SocialLinks } from "@/components/SocialLinks";
import { programCardImage, media } from "@/content/media";
import { programs, seoKeywords, site } from "@/content/site";

export const metadata: Metadata = {
  title: "Best gym in Atlantic Highlands NJ | Hybrid fitness & free assessment",
  description: site.seoDescription,
  keywords: [...seoKeywords],
};

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          aria-hidden
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(234,88,12,0.35), transparent), radial-gradient(ellipse 60% 40% at 100% 0%, rgba(217,119,6,0.2), transparent)",
          }}
        />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-2 lg:items-stretch lg:gap-14 lg:py-28">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-accent">
              Atlantic Highlands, NJ
            </p>
            <h1 className="mt-4 max-w-4xl font-display text-4xl font-bold uppercase leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              {site.tagline}
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-stone-300">
              Achieve your goals with coached hybrid training—strength, HIIT, and conditioning
              scaled to you. Start with a complimentary assessment so we can build the right plan.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-md bg-brand-accent px-6 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-brand-accent/25 transition hover:bg-brand-accentHover"
              >
                Book your free assessment
              </Link>
              <Link
                href="/programs"
                className="rounded-md border border-white/20 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/5"
              >
                View programs
              </Link>
            </div>
            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              {[
                { label: "Assessment-first", value: "Personal roadmap before class" },
                { label: "Hybrid training", value: "Strength · HIIT · conditioning" },
                {
                  label: `${site.google.rating.toFixed(1)} ★ on Google`,
                  value: `${site.google.reviewCountDisplay} member reviews`,
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-lg border border-white/10 bg-white/[0.03] p-5"
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-brand-accent">
                    {item.label}
                  </p>
                  <p className="mt-2 text-sm text-stone-300">{item.value}</p>
                </div>
              ))}
              <div className="rounded-lg border border-white/10 bg-white/[0.03] p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-accent">
                  Follow us
                </p>
                <div className="mt-3">
                  <SocialLinks />
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto w-full max-w-xl lg:h-full lg:max-w-none">
            <HeroSlideshow />
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0">
          <Image
            src={media.gymFloor}
            alt=""
            fill
            className="object-cover opacity-20"
            sizes="100vw"
            aria-hidden
          />
          <div className="absolute inset-0 bg-brand-dark/85" aria-hidden />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <h2 className="font-display text-3xl font-bold uppercase tracking-wide text-white">
            Our mission
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-stone-300">
            At {site.name}, we empower you to reach your goals through personalized guidance—not
            generic templates. Whether you are new, returning from time off, or leveling up, we meet
            you where you are and build a plan that fits your life.
          </p>
        </div>
      </section>

      <GettingStartedSection />

      <section className="border-y border-white/10 bg-brand-surface/40 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <h2 className="font-display text-3xl font-bold uppercase tracking-wide text-white">
              Programs
            </h2>
            <Link href="/programs" className="text-sm font-semibold text-brand-accentHover hover:underline">
              Full program details →
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {programs.map((p) => (
              <article
                key={p.slug}
                className="flex flex-col overflow-hidden rounded-xl border border-white/10 bg-brand-dark/80 shadow-xl"
              >
                <div className="relative aspect-[16/10] w-full bg-stone-900">
                  <Image
                    src={programCardImage(p.slug)}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-contain object-center p-4"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-xl font-semibold uppercase text-white">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm font-semibold text-brand-accent">{p.price}</p>
                  <p className="mt-4 flex-1 text-sm text-stone-400">{p.summary}</p>
                  <Link
                    href={p.slug === "youth" ? "/programs#youth" : "/programs"}
                    className="mt-6 text-sm font-semibold text-white hover:text-brand-accentHover"
                  >
                    Learn more
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <AmenitiesSection />

      <GoogleReviewsSection />

      <section className="border-t border-white/10 bg-brand-surface/30 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-accent">
            Atlantic Highlands &amp; Monmouth County
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-wide text-white sm:text-4xl">
            Ready to find your gym home?
          </h2>
          <p className="mt-4 text-lg text-stone-400">
            Whether you searched for the <strong className="text-stone-200">best gym in Atlantic Highlands</strong>,
            group fitness near Highlands, or personal training in Monmouth County — start with a
            complimentary assessment. Hours, directions, and contact details are in the footer below.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-md bg-brand-accent px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-accent/25 transition hover:bg-brand-accentHover"
          >
            Book your free assessment
          </Link>
        </div>
      </section>
    </>
  );
}
