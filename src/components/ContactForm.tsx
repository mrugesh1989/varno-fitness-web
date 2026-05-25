"use client";

import { useId, useState } from "react";
import { site } from "@/content/site";

const GYM_INBOX = "varnofitness@gmail.com";
const endpoint = `https://formsubmit.co/ajax/${GYM_INBOX}`;

const AUTORESPONSE = `Hi,

Thanks for reaching out to ${site.name}! We've received your message and a coach will reply within one business day.

If it is urgent, please call us at ${site.phoneDisplay}.

— The ${site.name} team
${site.address.street}, ${site.address.city}, ${site.address.state} ${site.address.postalCode}`;

type FormsubmitResponse = {
  success?: string | boolean;
  message?: string;
};

export function ContactForm() {
  const id = useId();
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setErrorMessage(null);

    const form = event.currentTarget;
    const fd = new FormData(form);
    const name = String(fd.get("name") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    const phone = String(fd.get("phone") ?? "").trim();
    const message = String(fd.get("message") ?? "").trim();
    const honeypot = String(fd.get("_honey") ?? "");

    if (honeypot) {
      setStatus("success");
      form.reset();
      return;
    }

    const payload = {
      name,
      email,
      phone: phone || "(not provided)",
      message: message || "(no message body)",
      _subject: `Website inquiry from ${name || "anonymous"}`,
      _replyto: email,
      _template: "table",
      _captcha: "false",
      _autoresponse: AUTORESPONSE,
    };

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = (await res.json().catch(() => ({}))) as FormsubmitResponse;
      const ok = res.ok && (data.success === true || data.success === "true");
      if (!ok) {
        setStatus("error");
        setErrorMessage(
          data.message ?? "Could not send message. Please try again or call us."
        );
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please try again.");
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-5">
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
          disabled={status === "sending"}
          className="w-full rounded-md bg-brand-accent py-3 text-sm font-semibold text-white transition hover:bg-brand-accentHover disabled:cursor-not-allowed disabled:opacity-50"
        >
          {status === "sending" ? "Sending…" : "Send message"}
        </button>
      </form>
      {status === "success" ? (
        <p className="mt-4 text-sm font-medium text-emerald-400" role="status">
          Thanks — we sent the gym your message and a confirmation to your inbox. A coach
          will reply within one business day.
        </p>
      ) : null}
      {status === "error" && errorMessage ? (
        <p className="mt-4 text-sm font-medium text-red-400" role="alert">
          {errorMessage}
        </p>
      ) : null}
    </div>
  );
}
