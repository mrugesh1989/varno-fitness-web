import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { gallery, media } from "@/content/media";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Gallery",
  description: `Inside ${site.name} in Atlantic Highlands, NJ — our training floor, equipment, and community.`,
};

export default function GalleryPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <div className="mb-6">
        <Image
          src={media.varnoMark}
          alt=""
          width={400}
          height={130}
          className="h-12 w-auto max-w-[240px] sm:h-14 sm:max-w-[280px]"
        />
      </div>
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-accent">
        Inside the gym
      </p>
      <h1 className="mt-2 font-display text-4xl font-bold uppercase tracking-wide text-white sm:text-5xl">
        Gallery
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-stone-300">
        A look at the space, the equipment, and the community that makes {site.name} home.
      </p>

      <div className="mt-12 columns-2 gap-4 sm:columns-3 lg:gap-5">
        {gallery.map((photo) => (
          <div
            key={photo.src}
            className="mb-4 break-inside-avoid overflow-hidden rounded-xl border border-white/10 lg:mb-5"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              width={800}
              height={600}
              sizes="(max-width: 640px) 50vw, 33vw"
              className="h-auto w-full object-cover"
            />
          </div>
        ))}
      </div>

      <div className="mt-14 rounded-xl border border-dashed border-white/20 p-8 text-center">
        <p className="text-stone-300">
          Ready to train with us? Start with a complimentary assessment.
        </p>
        <Link
          href="/contact"
          className="mt-5 inline-flex rounded-md bg-brand-accent px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-accentHover"
        >
          Book your free assessment
        </Link>
      </div>
    </div>
  );
}
