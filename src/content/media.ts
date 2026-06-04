/**
 * Static assets under /public/images and /public/galary.
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
  gymFloor: asset("/images/gym-floor.jpg"),
  programGroup: asset("/images/program-group.png"),
  programPrivate: asset("/images/program-private.png"),
  programYouth: asset("/images/program-youth.png"),
} as const;

export const gallery = [
  { src: asset("/galary/IMG_6722.JPG"), alt: "Varno Fitness training floor" },
  { src: asset("/galary/IMG_6834.JPG"), alt: "Members training at Varno Fitness" },
  { src: asset("/galary/IMG_6853.JPG"), alt: "Group class in session" },
  { src: asset("/galary/IMG_9078.JPG"), alt: "Coached strength training" },
  { src: asset("/galary/IMG_2083.jpeg"), alt: "Functional fitness equipment" },
  { src: asset("/galary/IMG_3604.JPG"), alt: "Varno Fitness gym interior" },
  { src: asset("/galary/IMG_5411.jpeg"), alt: "Athletes working out together" },
  { src: asset("/galary/IMG_2415.JPG"), alt: "Community at Varno Fitness" },
  { src: asset("/galary/IMG_4934.jpeg"), alt: "Weightlifting area" },
  { src: asset("/galary/IMG_9551.jpeg"), alt: "Training space at Varno Fitness" },
  { src: asset("/galary/IMG_0148.jpeg"), alt: "Members during a workout" },
  { src: asset("/galary/IMG_9038.JPG"), alt: "Varno Fitness facility" },
] as const;

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
