"use client";

import { Suspense, useId } from "react";
import { useSearchParams } from "next/navigation";
import { site } from "@/content/site";

const GYM_INBOX = "varnofitness@gmail.com";
const endpoint = `https://formsubmit.co/${GYM_INBOX}`;

const AUTORESPONSE = `Hi,

Thanks for reaching out to ${site.name}! We've received your message and a coach will reply within one business day.

If it is urgent, please call us at ${site.phoneDisplay}.

— The ${site.name} team
${site.address.street}, ${site.address.city}, ${site.address.state} ${site.address.postalCode}`;

const NEXT_URL = `${site.url}/contact/?sent=1`;

function SuccessBanner() {
  const params = useSearchParams();
  if (params.get("sent") !== "1") return null;
  return (
    <div
      role="status"
      className="mb-6 rounded-md border border-emerald-500/40 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-300"
    >
      Thanks — your message is on the way to the gym, and a confirmation has been
      emailed to you. A coach will reply within one business day.
    </div>
  );
}

function FormBody() {
  const id = useId();

  return (
    <form action={endpoint} method="POST" className="space-y-5">
      <input type="hidden" name="_subject" value={`Website inquiry from ${site.name} site`} />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_autoresponse" value={AUTORESPONSE} />
      <input type="hidden" name="_next" value={NEXT_URL} />
      <input
        type="text"
        name="_honey"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
        defaultValue=""
      />

      <div>
        <label htmlFor={`${id}-name`} className="block text-sm font-medium text-stone-300">
          Name
        </label>
        <input
          id={`${id}-name`}
          name="name"
          required
          autoComplete="name"
          className="mt-2 w-full rounded-md border border-white/10 bg-brand-dark px-4 py-3 text-stone-100 outline-none ring-brand-accent focus:ring-2"
        />
      </div>

      <div>
        <label htmlFor={`${id}-email`} className="block text-sm font-medium text-stone-300">
          Email
        </label>
        <input
          id={`${id}-email`}
          name="email"
          type="email"
          required
          autoComplete="email"
          className="mt-2 w-full rounded-md border border-white/10 bg-brand-dark px-4 py-3 text-stone-100 outline-none ring-brand-accent focus:ring-2"
        />
      </div>

      <div>
        <label htmlFor={`${id}-phone`} className="block text-sm font-medium text-stone-300">
          Phone <span className="text-stone-500">(optional)</span>
        </label>
        <input
          id={`${id}-phone`}
          name="phone"
          type="tel"
          autoComplete="tel"
          className="mt-2 w-full rounded-md border border-white/10 bg-brand-dark px-4 py-3 text-stone-100 outline-none ring-brand-accent focus:ring-2"
        />
      </div>

      <div>
        <label htmlFor={`${id}-message`} className="block text-sm font-medium text-stone-300">
          Message
        </label>
        <textarea
          id={`${id}-message`}
          name="message"
          rows={5}
          className="mt-2 w-full rounded-md border border-white/10 bg-brand-dark px-4 py-3 text-stone-100 outline-none ring-brand-accent focus:ring-2"
          placeholder="Tell us about your goals or ask a question."
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-md bg-brand-accent py-3 text-sm font-semibold text-white transition hover:bg-brand-accentHover"
      >
        Send message
      </button>

      <p className="text-xs text-stone-500">
        You may briefly see a confirmation page before being returned here. A
        Google reCAPTCHA challenge may appear the first time you submit from a
        new device — that is normal spam protection.
      </p>
    </form>
  );
}

export function ContactForm() {
  return (
    <div>
      <Suspense fallback={null}>
        <SuccessBanner />
      </Suspense>
      <FormBody />
    </div>
  );
}
