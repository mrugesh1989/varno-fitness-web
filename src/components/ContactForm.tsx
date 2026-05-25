"use client";

import { useId, useState } from "react";
import { site } from "@/content/site";

const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "";
const endpoint = "https://api.web3forms.com/submit";

type Web3FormsResponse = {
  success?: boolean;
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

    if (!accessKey) {
      setStatus("error");
      setErrorMessage(
        "Contact form is not configured. Set NEXT_PUBLIC_WEB3FORMS_KEY in the build environment."
      );
      return;
    }

    const form = event.currentTarget;
    const fd = new FormData(form);
    const name = String(fd.get("name") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    const phone = String(fd.get("phone") ?? "").trim();
    const message = String(fd.get("message") ?? "").trim();
    const botcheck = String(fd.get("botcheck") ?? "");

    if (botcheck) {
      setStatus("success");
      form.reset();
      return;
    }

    const payload = {
      access_key: accessKey,
      subject: `Website inquiry from ${name || "anonymous"}`,
      from_name: `${site.name} website`,
      replyto: email,
      name,
      email,
      phone: phone || "(not provided)",
      message: message || "(no message body)",
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

      const data = (await res.json().catch(() => ({}))) as Web3FormsResponse;
      if (!res.ok || !data.success) {
        setStatus("error");
        setErrorMessage(data.message ?? "Could not send message. Please try again.");
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
          type="checkbox"
          name="botcheck"
          tabIndex={-1}
          aria-hidden="true"
          className="hidden"
          defaultChecked={false}
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
          Thanks — we will get back to you shortly.
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
