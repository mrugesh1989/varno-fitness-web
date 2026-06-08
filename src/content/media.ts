/**
 * Static assets under /public/images and /public/gallery.
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
  { src: asset("/gallery/IMG_6722.JPG"), alt: "Training floor at Varno Fitness gym in Atlantic Highlands, NJ" },
  { src: asset("/gallery/IMG_6834.JPG"), alt: "Members strength training at Varno Fitness in Atlantic Highlands" },
  { src: asset("/gallery/IMG_6853.JPG"), alt: "VF60 group fitness class in session at Varno Fitness" },
  { src: asset("/gallery/IMG_9078.JPG"), alt: "Coach leading strength training at Varno Fitness, Monmouth County" },
  { src: asset("/gallery/IMG_2083.jpeg"), alt: "Functional fitness equipment at Varno Fitness gym in Atlantic Highlands" },
  { src: asset("/gallery/IMG_3604.JPG"), alt: "Interior of Varno Fitness hybrid gym in Atlantic Highlands, NJ" },
  { src: asset("/gallery/IMG_5411.jpeg"), alt: "Athletes training together in a group class at Varno Fitness" },
  { src: asset("/gallery/IMG_2415.JPG"), alt: "Fitness community at Varno Fitness near Highlands, NJ" },
  { src: asset("/gallery/IMG_4934.jpeg"), alt: "Weightlifting and strength area at Varno Fitness, Atlantic Highlands" },
  { src: asset("/gallery/IMG_9551.jpeg"), alt: "Open training space at Varno Fitness gym in Atlantic Highlands" },
  { src: asset("/gallery/IMG_0148.jpeg"), alt: "Members during a HIIT workout at Varno Fitness, Monmouth County" },
  { src: asset("/gallery/IMG_9038.JPG"), alt: "Varno Fitness gym facility in Atlantic Highlands, New Jersey" },
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
