export default function Loading() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6" role="status" aria-live="polite">
      <div className="mx-auto max-w-md space-y-4">
        <div className="h-4 w-32 animate-pulse rounded bg-border" />
        <div className="h-10 animate-pulse rounded-lg border border-border bg-card" />
        <div className="h-40 animate-pulse rounded-lg border border-border bg-card" />
        <span className="sr-only">Loading…</span>
      </div>
    </div>
  );
}
