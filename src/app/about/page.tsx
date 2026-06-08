import type { Metadata } from "next";
import { seoKeywords, site } from "@/content/site";

export const metadata: Metadata = {
  title: "About — Best Gym in Atlantic Highlands, NJ",
  description: `About ${site.name} — the hybrid gym in Atlantic Highlands, NJ serving Highlands, Middletown & Monmouth County. Our mission, hours, location, and free parking.`,
  keywords: [...seoKeywords],
};

const mapQuery = encodeURIComponent(
  `${site.address.street}, ${site.address.city}, ${site.address.state} ${site.address.postalCode}`
);

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-accent">
        Atlantic Highlands, NJ
      </p>
      <h1 className="mt-2 font-display text-4xl font-bold uppercase tracking-wide text-white sm:text-5xl">
        About {site.name}
      </h1>
      <div className="mt-10 grid gap-12 lg:grid-cols-2 lg:items-start">
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-brand-accent">
            Mission
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-stone-300">
            We believe everyone deserves professional coaching and a plan that respects where you
            are today. Hybrid training—strength, HIIT, and conditioning—lets us build resilient
            athletes without sacrificing form or fun.
          </p>
          <h2 className="mt-10 text-sm font-semibold uppercase tracking-wide text-brand-accent">
            Hours
          </h2>
          <ul className="mt-4 space-y-2 text-stone-300">
            {site.hours.map((h) => (
              <li key={h.days} className="flex justify-between border-b border-white/5 py-2">
                <span>{h.days}</span>
                <span className="text-stone-400">{h.time}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-brand-accent">
            Location
          </h2>
          <address className="mt-4 not-italic text-stone-300">
            {site.address.street}
            <br />
            {site.address.city}, {site.address.state} {site.address.postalCode}
          </address>
          <div className="mt-6 overflow-hidden rounded-xl border border-white/10">
            <iframe
              title="Map — Varno Fitness"
              className="aspect-video w-full grayscale contrast-125"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
            />
          </div>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-block text-sm font-semibold text-brand-accentHover hover:underline"
          >
            Open in Google Maps
          </a>
        </div>
      </div>
    </div>
  );
}
