import Image from "next/image";
import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { media } from "@/content/media";
import { seoKeywords, site } from "@/content/site";

export const metadata: Metadata = {
  title: "Free fitness assessment | Contact",
  description: `Book a free gym assessment at ${site.name} in Atlantic Highlands, NJ — best hybrid gym for group fitness, personal training & CrossFit Kids near Highlands & Monmouth County.`,
  keywords: [...seoKeywords],
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <div className="mb-10 text-center lg:text-left">
        <div className="mb-6 flex justify-center lg:justify-start">
          <Image
            src={media.varnoMark}
            alt=""
            width={400}
            height={130}
            className="h-12 w-auto max-w-[240px] sm:h-14 sm:max-w-[280px]"
          />
        </div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-accent">
          Atlantic Highlands, NJ · Monmouth County
        </p>
        <h1 className="mt-3 font-display text-4xl font-bold uppercase tracking-wide text-white sm:text-5xl">
          Book your free assessment
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-stone-300 lg:mx-0">
          Tell us your goals — we will meet you where you are and map a plan that fits your life.
          Same complimentary assessment we offer to every new member at the best gym in Atlantic Highlands.
        </p>
      </div>

      <div className="grid gap-10 lg:grid-cols-5 lg:gap-12">
        <div className="lg:col-span-3">
          <div className="relative overflow-hidden rounded-2xl border-2 border-brand-accent/50 bg-brand-surface/80 shadow-2xl shadow-brand-accent/15 ring-1 ring-brand-accent/30">
            <div
              className="pointer-events-none absolute inset-0 opacity-30"
              aria-hidden
              style={{
                background:
                  "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(234,88,12,0.25), transparent)",
              }}
            />
            <div className="relative border-b border-brand-accent/20 bg-brand-accent/10 px-6 py-5 sm:px-8">
              <span className="inline-block rounded-full bg-brand-accent px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                Free · No obligation
              </span>
              <h2 className="mt-3 font-display text-2xl font-bold uppercase tracking-wide text-white">
                Request your free assessment
              </h2>
              <p className="mt-2 text-sm text-stone-400">
                Fill out the form — a coach typically replies within one business day.
              </p>
            </div>
            <div className="relative px-6 py-8 sm:px-8">
              <ContactForm variant="assessment" />
            </div>
          </div>
        </div>

        <aside className="lg:col-span-2">
          <div className="rounded-xl border border-white/10 bg-brand-dark/60 p-6">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-stone-500">
              Or reach us directly
            </h2>
            <div className="mt-6 space-y-5 text-stone-300">
              <p>
                <span className="block text-xs font-semibold uppercase text-stone-500">Phone</span>
                <a
                  className="mt-1 inline-block font-semibold text-brand-accentHover hover:underline"
                  href={`tel:${site.phoneTel}`}
                >
                  {site.phoneDisplay}
                </a>
              </p>
              <p>
                <span className="block text-xs font-semibold uppercase text-stone-500">Email</span>
                <a
                  className="mt-1 inline-block font-semibold text-brand-accentHover hover:underline"
                  href={`mailto:${site.email}`}
                >
                  {site.email}
                </a>
              </p>
              <p>
                <span className="block text-xs font-semibold uppercase text-stone-500">Address</span>
                <span className="mt-1 block">
                  {site.address.street}
                  <br />
                  {site.address.city}, {site.address.state} {site.address.postalCode}
                </span>
                <a
                  href={site.google.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-sm font-medium text-brand-accentHover hover:underline"
                >
                  Directions on Google Maps →
                </a>
              </p>
            </div>
          </div>
          <p className="mt-6 text-xs leading-relaxed text-stone-500">
            Serving athletes and families from Atlantic Highlands, Highlands, Middletown, Red Bank,
            Rumson, and across Monmouth County looking for group fitness, HIIT, strength training,
            and personal coaching.
          </p>
        </aside>
      </div>
    </div>
  );
}
