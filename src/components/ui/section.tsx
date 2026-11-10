import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12", className)}>{children}</div>;
}

/** Mono section index, e.g. "(02) Services". */
export function IndexLabel({ index, children, className }: { index?: string; children: ReactNode; className?: string }) {
  return (
    <p className={cn("label flex items-center gap-2 text-muted", className)}>
      {index ? <span className="text-ink">({index})</span> : null}
      <span>{children}</span>
    </p>
  );
}

/**
 * Editorial section header: full-width rule, index label in the left column,
 * large heading + optional lede in the right nine columns.
 */
export function SectionHeader({
  id,
  index,
  label,
  title,
  body,
  aside,
  as: H = "h2",
}: {
  id?: string;
  index?: string;
  label: string;
  title: ReactNode;
  body?: ReactNode;
  aside?: ReactNode;
  as?: "h1" | "h2";
}) {
  return (
    <header className="reveal">
      <div className="rule-draw h-px bg-rule-strong" aria-hidden="true" />
      <div className="grid gap-6 pt-5 lg:grid-cols-12 lg:gap-8">
        <IndexLabel index={index} className="self-start lg:col-span-3 lg:pt-3">
          {label}
        </IndexLabel>
        <div className="lg:col-span-9">
          <H id={id} className={cn(H === "h1" ? "display text-[clamp(2.6rem,7vw,6.5rem)]" : "display-md text-[clamp(2rem,4.6vw,4rem)]")}>
            {title}
          </H>
          {body || aside ? (
            <div className="mt-6 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              {body ? <p className="max-w-2xl text-lg text-ink-soft">{body}</p> : <span />}
              {aside}
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
}

export function Section({
  children,
  className,
  labelledBy,
  id,
}: {
  children: ReactNode;
  className?: string;
  labelledBy?: string;
  id?: string;
}) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={cn("py-20 sm:py-28 lg:py-32", className)}>
      <Container>{children}</Container>
    </section>
  );
}
