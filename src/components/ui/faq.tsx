import { JsonLdScript, faqJsonLd } from "@/lib/jsonld";

/** Ruled FAQ on native <details> (no JS, keyboard-accessible) + FAQPage JSON-LD. */
export function Faq({ items, name = "faq" }: { items: { q: string; a: string }[]; name?: string }) {
  return (
    <>
      <div className="border-t border-rule-strong">
        {items.map((item, i) => (
          <details key={i} name={name} className="group border-b border-rule">
            <summary className="flex items-start gap-5 py-6 transition-colors hover:text-accent-ink">
              <span className="label w-6 shrink-0 pt-1.5 text-muted">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="heading flex-1 text-lg sm:text-xl">{item.q}</h3>
              <span className="relative mt-2 block size-4 shrink-0" aria-hidden="true">
                <span className="absolute inset-x-0 top-1/2 h-[1.5px] -translate-y-1/2 bg-current" />
                <span className="absolute inset-y-0 left-1/2 w-[1.5px] -translate-x-1/2 bg-current transition-transform duration-300 group-open:scale-y-0" />
              </span>
            </summary>
            <p className="max-w-2xl pb-7 ps-11 text-ink-soft">{item.a}</p>
          </details>
        ))}
      </div>
      <JsonLdScript data={faqJsonLd(items)} />
    </>
  );
}
