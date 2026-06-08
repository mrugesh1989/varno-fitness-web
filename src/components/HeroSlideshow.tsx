"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { gallery } from "@/content/media";

const SLIDES = gallery.slice(0, 5);
const INTERVAL_MS = 4000;

export function HeroSlideshow() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % SLIDES.length);
    }, INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative h-full w-full">
      <div
        className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/40 lg:aspect-auto lg:h-full lg:min-h-[30rem]"
        role="group"
        aria-roledescription="carousel"
        aria-label="Inside Varno Fitness"
      >
        {SLIDES.map((photo, i) => (
          <Image
            key={photo.src}
            src={photo.src}
            alt={photo.alt}
            fill
            priority={i === 0}
            sizes="(max-width: 1024px) 100vw, 50vw"
            className={`object-cover object-center transition-opacity duration-1000 ${
              i === active ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-brand-dark/90 to-transparent"
          aria-hidden
        />

        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">
              Inside the gym
            </p>
            <Link
              href="/gallery"
              className="mt-1 inline-flex items-center gap-1 font-display text-lg font-bold uppercase text-white transition hover:text-brand-accentHover"
            >
              View full gallery
              <span aria-hidden>→</span>
            </Link>
          </div>

          <div className="flex gap-2 pb-1">
            {SLIDES.map((photo, i) => (
              <button
                key={photo.src}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Show photo ${i + 1}`}
                aria-current={i === active}
                className={`h-2 rounded-full transition-all ${
                  i === active ? "w-6 bg-brand-accent" : "w-2 bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
