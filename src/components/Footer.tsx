import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";
import { media } from "@/content/media";

export function Footer() {
  const fullAddress = `${site.address.street}, ${site.address.city}, ${site.address.state} ${site.address.postalCode}`;

  return (
    <footer className="border-t border-white/10 bg-brand-surface">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src={media.varnoMark}
              alt=""
              width={280}
              height={96}
              className="h-11 w-auto max-w-[180px] opacity-90"
            />
            <p className="font-display text-2xl text-white">{site.name}</p>
          </div>
          <p className="mt-2 max-w-sm text-sm text-stone-400">{site.tagline}</p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-stone-500">
            Visit
          </p>
          <address className="mt-3 not-italic text-sm text-stone-300">
            {fullAddress}
          </address>
          <p className="mt-3 text-sm">
            <a className="text-brand-accentHover hover:underline" href={`tel:${site.phoneTel}`}>
              {site.phoneDisplay}
            </a>
          </p>
          <p className="mt-1 text-sm">
            <a
              className="text-brand-accentHover hover:underline"
              href={`mailto:${site.email}`}
            >
              {site.email}
            </a>
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-stone-500">
            Hours
          </p>
          <ul className="mt-3 space-y-2 text-sm text-stone-300">
            {site.hours.map((h) => (
              <li key={h.days} className="flex justify-between gap-4">
                <span className="text-stone-400">{h.days}</span>
                <span>{h.time}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex gap-4">
            <a
              href={site.social.facebook}
              target="_blank"
              rel="noreferrer noopener"
              className="text-sm font-medium text-stone-300 hover:text-white"
            >
              Facebook
            </a>
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noreferrer noopener"
              className="text-sm font-medium text-stone-300 hover:text-white"
            >
              Instagram
            </a>
            <Link href="/contact" className="text-sm font-medium text-stone-300 hover:text-white">
              Contact form
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/5 py-6 text-center text-xs text-stone-500">
        © {new Date().getFullYear()} {site.name}. All rights reserved.
      </div>
    </footer>
  );
}
