import { serviceAreas, site, testimonials } from "@/content/site";

/** LocalBusiness + Organization structured data for SEO. */
export function SiteJsonLd() {
  const json = {
    "@context": "https://schema.org",
    "@type": "ExerciseGym",
    name: site.name,
    description: site.seoDescription,
    url: site.url,
    areaServed: serviceAreas.map((name) => ({
      "@type": "City",
      name,
      containedInPlace: { "@type": "State", name: "New Jersey" },
    })),
    geo: {
      "@type": "GeoCoordinates",
      latitude: 40.4079,
      longitude: -74.0343,
    },
    priceRange: "$$",
    knowsAbout: [
      "Hybrid fitness training",
      "Group fitness classes",
      "Personal training",
      "CrossFit Kids",
      "Fitness assessment",
    ],
    telephone: site.phoneTel,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.state,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "05:00",
        closes: "07:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "07:30",
        closes: "09:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "07:30",
        closes: "09:30",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: site.google.rating,
      reviewCount: site.google.reviewCount,
      bestRating: 5,
      worstRating: 1,
    },
    review: testimonials.map((t) => ({
      "@type": "Review",
      author: { "@type": "Person", name: t.name },
      reviewRating: {
        "@type": "Rating",
        ratingValue: t.rating,
        bestRating: 5,
        worstRating: 1,
      },
      reviewBody: t.quote,
    })),
    sameAs: [site.social.facebook, site.social.instagram, site.google.mapsUrl],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}
