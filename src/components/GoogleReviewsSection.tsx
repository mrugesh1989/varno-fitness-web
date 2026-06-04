import { site, testimonials } from "@/content/site";
import { StarRating } from "@/components/StarRating";

const AVATAR_COLORS = [
  "#ea4335",
  "#4285f4",
  "#34a853",
  "#fbbc05",
  "#a142f4",
  "#ff7043",
] as const;

function GoogleGlyph({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden>
      <path
        fill="#4285F4"
        d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z"
      />
      <path
        fill="#34A853"
        d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z"
      />
      <path
        fill="#FBBC05"
        d="M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.7H4.34C2.85 17.09 2 20.45 2 24s.85 6.91 2.34 9.88l7.35-5.7z"
      />
      <path
        fill="#EA4335"
        d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z"
      />
    </svg>
  );
}

function ReviewCard({
  quote,
  name,
  when,
  rating,
  color,
}: {
  quote: string;
  name: string;
  when: string;
  rating: number;
  color: string;
}) {
  return (
    <figure className="flex w-80 shrink-0 flex-col rounded-2xl border border-white/10 bg-brand-dark/70 p-6 shadow-lg">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span
            className="flex h-10 w-10 items-center justify-center rounded-full font-display text-base font-bold text-white"
            style={{ backgroundColor: color }}
            aria-hidden
          >
            {name.charAt(0)}
          </span>
          <div className="text-sm">
            <figcaption className="font-semibold text-white">{name}</figcaption>
            <p className="text-xs text-stone-500">{when}</p>
          </div>
        </div>
        <GoogleGlyph />
      </div>
      <div className="mt-4">
        <StarRating value={rating} small />
      </div>
      <blockquote className="mt-3 line-clamp-5 flex-1 text-sm leading-relaxed text-stone-300">
        {quote}
      </blockquote>
    </figure>
  );
}

export function GoogleReviewsSection() {
  const locationLabel = `${site.address.city}, ${site.address.state}`;
  const loop = [...testimonials, ...testimonials];

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
      <div className="relative">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="font-display text-3xl font-bold uppercase tracking-wide text-white sm:text-4xl">
            Trusted and loved by hundreds of {locationLabel} residents
          </h2>
          <div className="mx-auto mt-8 inline-flex flex-col items-center gap-4 rounded-2xl border border-white/10 bg-brand-dark/80 px-8 py-6 sm:flex-row sm:gap-6">
            <GoogleGlyph className="h-10 w-10" />
            <div className="flex items-center gap-4">
              <p className="font-display text-5xl font-bold text-white">
                {site.google.rating.toFixed(1)}
              </p>
              <div className="text-left">
                <StarRating value={site.google.rating} />
                <p className="mt-1 text-sm text-stone-400">
                  {site.google.reviewCountDisplay} Google reviews
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="marquee-track mt-12 flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
          <ul className="animate-marquee flex shrink-0 gap-6 pr-6" aria-label="Member reviews from Google">
            {loop.map((t, i) => (
              <li key={`${t.name}-${i}`}>
                <ReviewCard
                  quote={t.quote}
                  name={t.name}
                  when={t.when}
                  rating={t.rating}
                  color={AVATAR_COLORS[i % AVATAR_COLORS.length]}
                />
              </li>
            ))}
          </ul>
        </div>

        <div className="mx-auto mt-12 flex max-w-3xl flex-wrap items-center justify-center gap-4 px-4 sm:px-6">
          <a
            href={site.google.writeReviewUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-stone-800 shadow-lg transition hover:bg-stone-100"
          >
            <GoogleGlyph />
            Review us on Google
          </a>
          <a
            href={site.google.mapsUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/5"
          >
            Read all {site.google.reviewCountDisplay} reviews
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
