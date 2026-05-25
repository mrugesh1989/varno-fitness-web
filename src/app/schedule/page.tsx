import Image from "next/image";
import type { Metadata } from "next";
import { media } from "@/content/media";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Class schedule",
  description: "View the official Varno Fitness class schedule hosted by Isabella Fitness.",
};

export default function SchedulePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
      <div className="mb-6">
        <Image
          src={media.varnoMark}
          alt=""
          width={400}
          height={130}
          className="h-12 w-auto max-w-[240px] sm:h-14 sm:max-w-[280px]"
        />
      </div>
      <h1 className="font-display text-4xl font-bold uppercase tracking-wide text-white sm:text-5xl">
        Schedule
      </h1>
      <p className="mt-6 text-lg text-stone-300">
        Our live class calendar is published on the {site.partner.name} site so you always see
        the latest times, coaches, and updates.
      </p>
      <a
        href={site.partner.scheduleUrl}
        target="_blank"
        rel="noreferrer"
        className="mt-10 inline-flex rounded-md bg-brand-accent px-8 py-4 text-center text-base font-semibold text-white shadow-lg shadow-brand-accent/20 transition hover:bg-brand-accentHover"
      >
        Open exact schedule
      </a>
      <p className="mt-6 text-sm text-stone-500">
        Link opens{" "}
        <span className="text-stone-400">{site.partner.scheduleUrl}</span> in a new tab.
      </p>
    </div>
  );
}
