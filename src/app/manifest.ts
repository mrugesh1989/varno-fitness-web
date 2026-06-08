import type { MetadataRoute } from "next";
import { media } from "@/content/media";
import { site } from "@/content/site";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${site.name} — Gym in Atlantic Highlands, NJ`,
    short_name: site.name,
    description: site.seoDescription,
    start_url: "/",
    display: "standalone",
    background_color: "#0c0a09",
    theme_color: "#0c0a09",
    icons: [
      {
        src: media.varnoMark,
        sizes: "any",
        type: "image/webp",
      },
    ],
  };
}
