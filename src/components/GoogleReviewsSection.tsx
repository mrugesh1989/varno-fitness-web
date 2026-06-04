import Link from "next/link";
import { site, testimonials } from "@/content/site";
import { StarRating } from "@/components/StarRating";

export function GoogleReviewsSection() {
  const locationLabel = `${site.address.city}, ${site.address.state}`;

  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-brand-surface/30 py-16 sm:py-24">
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 100%, rgba(234,88,12,0.2), transparent)",
        }}
      />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-accent">
            Google reviews
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold uppercase tracking-wide text-white sm:text-4xl">
            Trusted and loved by hundreds of {locationLabel} residents
          </h2>
          <div className="mx-auto mt-8 inline-flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-brand-dark/80 px-8 py-6 sm:flex-row sm:gap-6">
            <StarRating value={site.google.rating} />
            <div className="text-center sm:text-left">
              <p className="font-display text-4xl font-bold text-white">
                {site.google.rating.toFixed(1)}
                <span className="text-2xl text-amber-400"> ★</span>
              </p>
              <p className="mt-1 text-sm text-stone-400">
                Based on {site.google.reviewCount} Google reviews
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <blockquote
              key={t.name}
              className="flex flex-col rounded-xl border border-white/10 bg-brand-dark/60 p-6 shadow-lg"
            >
              <StarRating value={t.rating} small />
              <p className="mt-4 flex-1 text-sm leading-relaxed text-stone-300">
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer className="mt-5 flex items-center gap-3 border-t border-white/5 pt-4">
                <div
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-accent/20 font-display text-sm font-bold text-brand-accent"
                  aria-hidden
                >
                  {t.name.charAt(0)}
                </div>
                <div className="text-xs">
                  <cite className="not-italic font-semibold text-stone-300">{t.name}</cite>
                  <p className="text-stone-500">
                    {t.when} · Google
                  </p>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <a
            href={site.google.mapsUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 rounded-md border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/5"
          >
            Read all {site.google.reviewCount} reviews on Google
            <span aria-hidden>→</span>
          </a>
          <a
            href={site.google.writeReviewUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 rounded-md bg-brand-accent px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-accentHover"
          >
            Leave us a Google review
            <span aria-hidden>★</span>
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-md border border-brand-accent/40 px-6 py-3 text-sm font-semibold text-brand-accentHover transition hover:bg-brand-accent/10"
          >
            Book a free assessment
          </Link>
        </div>
      </div>
    </section>
  );
}
