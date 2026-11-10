/** Quiet skeleton in the page's own grid, so navigation never "jumps". */
export default function Loading() {
  return (
    <div className="mx-auto w-full max-w-[1400px] px-5 pb-28 pt-24 sm:px-8 sm:pt-28 lg:px-12" role="status" aria-live="polite">
      <div className="h-px bg-rule-strong" />
      <div className="mt-10 h-24 w-3/4 animate-pulse bg-paper-alt" />
      <div className="mt-4 h-24 w-1/2 animate-pulse bg-paper-alt" />
      <div className="mt-10 grid gap-8 lg:grid-cols-12">
        <div className="h-6 animate-pulse bg-paper-alt lg:col-span-7 lg:col-start-4" />
      </div>
      <span className="sr-only">Loading…</span>
    </div>
  );
}
