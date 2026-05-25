/**
 * Static assets under /public/images.
 * Primary Varno logo: `varno_fitness_logo.webp` (replace file in /public/images to update site-wide).
 * Partner/program artwork from isabellafitness.com; hero from legacy site export.
 *
 * When the site is served from a sub-path (e.g. `/varno-fitness-web` on the
 * github.io URL), Next.js does not auto-prefix paths that come from raw string
 * literals like these. We prepend `NEXT_PUBLIC_BASE_PATH` so `<Image src>` and
 * metadata icons resolve correctly under both root-served and project-page
 * deployments.
 */
const BASE_PATH = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(/\/$/, "");

const asset = (path: string): string => `${BASE_PATH}${path}`;

export const media = {
  varnoMark: asset("/images/varno_fitness_logo.webp"),
  varnoHero: asset("/images/varno-hero.jpg"),
  partnerLogo: asset("/images/isabella-logo.png"),
  gymFloor: asset("/images/gym-floor.jpg"),
  programGroup: asset("/images/program-group.png"),
  programPrivate: asset("/images/program-private.png"),
  programYouth: asset("/images/program-youth.png"),
} as const;

export function programCardImage(slug: string): string {
  switch (slug) {
    case "group":
      return media.programGroup;
    case "private":
      return media.programPrivate;
    case "youth":
      return media.programYouth;
    default:
      return media.programGroup;
  }
}
