import type { CSSProperties } from "react";
import { site } from "@/content/site";

type SocialLinksProps = {
  /** Visual style: solid pill buttons (hero) or icon circles (footer). */
  variant?: "buttons" | "icons";
  className?: string;
};

const INSTAGRAM_GRADIENT =
  "linear-gradient(45deg, #feda75 0%, #fa7e1e 25%, #d62976 50%, #962fbf 75%, #4f5bd5 100%)";

type Network = {
  name: string;
  href: string;
  brandStyle: CSSProperties;
  icon: React.ReactNode;
};

const networks: Network[] = [
  {
    name: "Facebook",
    href: site.social.facebook,
    brandStyle: { backgroundColor: "#1877F2" },
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className="h-5 w-5">
        <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.9 3.78-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.44 2.91h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: site.social.instagram,
    brandStyle: { backgroundImage: INSTAGRAM_GRADIENT },
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className="h-5 w-5">
        <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.72 3.72 0 01-1.38-.9 3.72 3.72 0 01-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zm0 1.62c-3.15 0-3.52.01-4.76.07-1.15.05-1.77.24-2.19.4-.55.22-.94.47-1.35.88-.41.41-.66.8-.88 1.35-.16.42-.35 1.04-.4 2.19-.06 1.24-.07 1.61-.07 4.76s.01 3.52.07 4.76c.05 1.15.24 1.77.4 2.19.22.55.47.94.88 1.35.41.41.8.66 1.35.88.42.16 1.04.35 2.19.4 1.24.06 1.61.07 4.76.07s3.52-.01 4.76-.07c1.15-.05 1.77-.24 2.19-.4.55-.22.94-.47 1.35-.88.41-.41.66-.8.88-1.35.16-.42.35-1.04.4-2.19.06-1.24.07-1.61.07-4.76s-.01-3.52-.07-4.76c-.05-1.15-.24-1.77-.4-2.19a3.64 3.64 0 00-.88-1.35 3.64 3.64 0 00-1.35-.88c-.42-.16-1.04-.35-2.19-.4-1.24-.06-1.61-.07-4.76-.07zm0 2.76a5.3 5.3 0 110 10.6 5.3 5.3 0 010-10.6zm0 1.62a3.68 3.68 0 100 7.36 3.68 3.68 0 000-7.36zm5.48-.85a1.24 1.24 0 110 2.48 1.24 1.24 0 010-2.48z" />
      </svg>
    ),
  },
];

export function SocialLinks({ variant = "icons", className = "" }: SocialLinksProps) {
  if (variant === "buttons") {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        {networks.map((n) => (
          <a
            key={n.name}
            href={n.href}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={`Follow Varno Fitness on ${n.name}`}
            style={n.brandStyle}
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-white shadow-lg ring-1 ring-white/20 transition hover:scale-105 hover:shadow-xl"
          >
            {n.icon}
            <span>{n.name}</span>
          </a>
        ))}
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {networks.map((n) => (
        <a
          key={n.name}
          href={n.href}
          target="_blank"
          rel="noreferrer noopener"
          aria-label={`Follow Varno Fitness on ${n.name}`}
          style={n.brandStyle}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full text-white shadow-md ring-1 ring-white/20 transition hover:scale-110 hover:shadow-lg"
        >
          {n.icon}
        </a>
      ))}
    </div>
  );
}
