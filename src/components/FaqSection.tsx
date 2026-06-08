import { faqs } from "@/content/site";

/** Visible FAQ accordion. Pairs with FaqJsonLd for FAQ rich results. */
export function FaqSection() {
  return (
    <section className="border-t border-white/10 py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-accent">
            FAQ
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold uppercase tracking-wide text-white sm:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-stone-400">
            Everything you need to know about training at the best gym in Atlantic Highlands, NJ.
          </p>
        </div>

        <div className="mt-10 space-y-3">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-xl border border-white/10 bg-brand-surface/40 px-5 py-4 transition hover:border-brand-accent/30"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-base font-semibold uppercase tracking-wide text-white">
                {faq.question}
                <span
                  className="shrink-0 text-brand-accent transition-transform duration-200 group-open:rotate-45"
                  aria-hidden
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-stone-300">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
