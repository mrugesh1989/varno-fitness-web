import Image from "next/image";
import Link from "next/link";
import { amenityImages } from "@/content/media";
import { amenities } from "@/content/site";

export function AmenitiesSection() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-accent">
            Our facility
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold uppercase tracking-wide text-white sm:text-4xl">
            Everything you need to crush your fitness goals
          </h2>
          <p className="mt-4 text-stone-400">
            From coached classes to dedicated training space—built for real results in Atlantic
            Highlands.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {amenities.map((item) => {
            const image = amenityImages[item.slug];
            return (
              <article
                key={item.slug}
                className="group overflow-hidden rounded-xl border border-white/10 bg-brand-surface/40 transition hover:border-brand-accent/30"
              >
                {image && (
                  <div className="relative aspect-[16/10] overflow-hidden bg-stone-900">
                    <Image
                      src={image}
                      alt=""
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 to-transparent" />
                  </div>
                )}
                <div className="p-6">
                  <h3 className="font-display text-lg font-semibold uppercase text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone-400">{item.description}</p>
                  {item.slug === "kids-teens" && (
                    <Link
                      href="/programs#youth"
                      className="mt-4 inline-block text-sm font-semibold text-brand-accentHover hover:underline"
                    >
                      Learn about youth programs →
                    </Link>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
