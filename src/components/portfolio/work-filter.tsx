"use client";

import { useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Text-tab category filter with live counts. Cards are server-rendered and passed in. */
export function WorkFilter({
  allLabel,
  label,
  categories,
  items,
}: {
  allLabel: string;
  label: string;
  categories: string[];
  items: { key: string; category: string; node: ReactNode }[];
}) {
  const [active, setActive] = useState<string | null>(null);
  const visible = active ? items.filter((i) => i.category === active) : items;
  const count = (c: string | null) => (c ? items.filter((i) => i.category === c).length : items.length);

  return (
    <>
      <div role="group" aria-label={label} className="flex flex-wrap gap-x-7 gap-y-3 border-b border-rule-strong pb-4">
        {[null, ...categories].map((c) => {
          const on = active === c;
          return (
            <button
              key={c ?? "all"}
              type="button"
              aria-pressed={on}
              onClick={() => setActive(c)}
              className={cn("group relative text-[17px] font-medium transition-colors", on ? "text-ink" : "text-muted hover:text-ink")}
            >
              {c ?? allLabel}
              <sup className="label ms-1 text-[10px]">{count(c)}</sup>
              <span
                aria-hidden="true"
                className={cn(
                  "absolute inset-x-0 -bottom-[17px] h-[3px] origin-left bg-accent transition-transform duration-500 ease-out-expo rtl:origin-right",
                  on ? "scale-x-100" : "scale-x-0",
                )}
              />
            </button>
          );
        })}
      </div>
      <ul className="mt-12 grid gap-x-8 gap-y-16 md:grid-cols-2" aria-live="polite">
        {visible.map((i) => (
          <li key={i.key} className="animate-[reveal-up_0.6s_var(--ease-out-expo)_both]">
            {i.node}
          </li>
        ))}
      </ul>
    </>
  );
}
