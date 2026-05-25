/**
 * Static assets under /public/images.
 * Primary Varno logo: `varno_fitness_logo.webp` (replace file in /public/images to update site-wide).
 * Partner/program artwork from isabellafitness.com; hero from legacy site export.
 */
export const media = {
  varnoMark: "/images/varno_fitness_logo.webp",
  varnoHero: "/images/varno-hero.jpg",
  partnerLogo: "/images/isabella-logo.png",
  gymFloor: "/images/gym-floor.jpg",
  programGroup: "/images/program-group.png",
  programPrivate: "/images/program-private.png",
  programYouth: "/images/program-youth.png",
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
