import Image from "next/image";
import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { media } from "@/content/media";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact & free assessment",
  description: `Contact ${site.name} in Atlantic Highlands — book a complimentary assessment or ask a question.`,
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
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
            Contact
          </h1>
          <p className="mt-4 text-lg text-stone-300">
            Start with a complimentary fitness assessment. Tell us your goals and we will follow
            up with next steps.
          </p>
          <div className="mt-10 space-y-4 text-stone-300">
            <p>
              <span className="text-stone-500">Phone</span>
              <br />
              <a className="font-semibold text-brand-accentHover hover:underline" href={`tel:${site.phoneTel}`}>
                {site.phoneDisplay}
              </a>
            </p>
            <p>
              <span className="text-stone-500">Email</span>
              <br />
              <a
                className="font-semibold text-brand-accentHover hover:underline"
                href={`mailto:${site.email}`}
              >
                {site.email}
              </a>
            </p>
            <p>
              <span className="text-stone-500">Address</span>
              <br />
              {site.address.street}
              <br />
              {site.address.city}, {site.address.state} {site.address.postalCode}
            </p>
          </div>
        </div>
        <div className="rounded-2xl border border-white/10 bg-brand-surface/50 p-8">
          <h2 className="text-lg font-semibold text-white">Send a message</h2>
          <p className="mt-2 text-sm text-stone-500">
            We typically reply within one business day.
          </p>
          <div className="mt-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
