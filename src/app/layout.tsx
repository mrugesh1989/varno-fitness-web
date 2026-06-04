import type { Metadata, Viewport } from "next";
import { DM_Sans, Oswald } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SiteJsonLd } from "@/components/SiteJsonLd";
import { media } from "@/content/media";
import { seoKeywords, site } from "@/content/site";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0c0a09",
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Best gym in Atlantic Highlands, NJ`,
    template: `%s | ${site.name}`,
  },
  description: site.seoDescription,
  keywords: [...seoKeywords],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — Best gym in Atlantic Highlands, NJ`,
    description: site.seoDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.seoDescription,
  },
  alternates: {
    canonical: site.url,
  },
  icons: {
    icon: [{ url: media.varnoMark, type: "image/webp" }],
    apple: media.varnoMark,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${oswald.variable}`}>
      <body className="min-h-screen font-sans">
        <SiteJsonLd />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
