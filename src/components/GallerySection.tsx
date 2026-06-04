import Image from "next/image";
import Link from "next/link";
import { gallery } from "@/content/media";

const TEASER_COUNT = 4;

export function GallerySection() {
  const photos = gallery.slice(0, TEASER_COUNT);

  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-accent">
              Inside the gym
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold uppercase tracking-wide text-white sm:text-4xl">
              Train with us
            </h2>
            <p className="mt-4 text-stone-400">
              A look at the space, the equipment, and the community that makes Varno home.
            </p>
          </div>
          <Link
            href="/gallery"
            className="text-sm font-semibold text-brand-accentHover hover:underline"
          >
            View full gallery →
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-5">
          {photos.map((photo) => (
            <div
              key={photo.src}
              className="relative aspect-square overflow-hidden rounded-xl border border-white/10"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover transition duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Link
            href="/gallery"
            className="inline-flex rounded-md border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/5"
          >
            View full gallery
          </Link>
        </div>
      </div>
    </section>
  );
}
