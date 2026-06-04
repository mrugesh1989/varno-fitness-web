import Image from "next/image";
import { gallery } from "@/content/media";

export function GallerySection() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
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

        <div className="mt-10 columns-2 gap-4 sm:columns-3 lg:gap-5">
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
                className="h-auto w-full object-cover transition hover:scale-[1.02]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
