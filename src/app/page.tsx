import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { AmenitiesSection } from "@/components/AmenitiesSection";
import { GallerySection } from "@/components/GallerySection";
import { GettingStartedSection } from "@/components/GettingStartedSection";
import { GoogleReviewsSection } from "@/components/GoogleReviewsSection";
import { SocialLinks } from "@/components/SocialLinks";
import { programCardImage, media } from "@/content/media";
import { programs, site } from "@/content/site";

export const metadata: Metadata = {
  title: "Atlantic Highlands hybrid gym",
  description: site.description,
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
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-2 lg:gap-14 lg:py-28">
          <div>
            <div className="mb-6">
              <Image
                src={media.varnoMark}
                alt=""
                width={420}
                height={140}
                priority
                className="h-14 w-auto max-w-[min(280px,85vw)] sm:h-16"
              />
            </div>
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
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">
                Follow us
              </span>
              <SocialLinks variant="buttons" />
            </div>
            <div className="mt-12 grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {[
                { label: "Assessment-first", value: "Personal roadmap before class" },
                { label: "Hybrid training", value: "Strength · HIIT · conditioning" },
                {
                  label: `${site.google.rating.toFixed(1)} ★ on Google`,
                  value: `${site.google.reviewCount} member reviews`,
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
            </div>
          </div>
          <div className="relative mx-auto aspect-[4/3] w-full max-w-xl lg:max-w-none lg:translate-y-2">
            <Image
              src={media.varnoHero}
              alt="Varno Fitness training floor"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="rounded-2xl border border-white/10 object-cover object-center shadow-2xl shadow-black/40"
            />
          </div>
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
      <GallerySection />

      <section className="relative overflow-hidden">
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
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <h2 className="font-display text-3xl font-bold uppercase tracking-wide text-white">
            Our mission
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-stone-300">
            At {site.name}, we empower you to reach your goals through personalized guidance—not
            generic templates. Whether you are new, returning from time off, or leveling up, we meet
            you where you are and build a plan that fits your life.
          </p>
        </div>
      </section>

      <GoogleReviewsSection />

      <section className="border-t border-white/10 bg-brand-surface/30 py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:grid-cols-2 sm:px-6">
          <div>
            <h2 className="font-display text-3xl font-bold uppercase tracking-wide text-white">
              Visit us
            </h2>
            <p className="mt-4 text-stone-400">
              {site.address.street}, {site.address.city}, {site.address.state}{" "}
              {site.address.postalCode}
            </p>
            <p className="mt-2">
              <a href={`tel:${site.phoneTel}`} className="font-medium text-brand-accentHover hover:underline">
                {site.phoneDisplay}
              </a>
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-stone-500">
              Hours
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-stone-300">
              {site.hours.map((h) => (
                <li key={h.days} className="flex justify-between gap-4 border-b border-white/5 py-2">
                  <span>{h.days}</span>
                  <span className="text-stone-400">{h.time}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="mt-6 inline-block rounded-md bg-brand-accent px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-accentHover"
            >
              Get directions &amp; contact
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
