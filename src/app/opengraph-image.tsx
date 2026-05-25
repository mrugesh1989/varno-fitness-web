import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const dynamic = "force-static";

export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #0c0a09 0%, #1c1917 45%, #431407 100%)",
          padding: 64,
          color: "#fafaf9",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 12,
              height: 64,
              borderRadius: 6,
              background: "#ea580c",
            }}
          />
          <span style={{ fontSize: 28, letterSpacing: 4, textTransform: "uppercase" }}>
            {site.name}
          </span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 56, fontWeight: 700, lineHeight: 1.1, maxWidth: 900 }}>
            {site.tagline}
          </div>
          <div style={{ marginTop: 24, fontSize: 28, color: "#d6d3d1" }}>
            Atlantic Highlands · Group · Private · Youth
          </div>
        </div>
        <div style={{ fontSize: 22, color: "#a8a29e" }}>
          {`${site.google.rating.toFixed(1)} ★ on Google · ${site.google.reviewCount} reviews`}
        </div>
      </div>
    ),
    { ...size }
  );
}
