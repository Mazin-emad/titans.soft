/**
 * Analytics placeholder — no provider hardcoded, no tracking by default.
 * Set NEXT_PUBLIC_ANALYTICS_ID and implement the chosen provider here.
 */

export function Analytics() {
  if (!process.env.NEXT_PUBLIC_ANALYTICS_ID) return null;
  // TODO: render the chosen analytics script (privacy-friendly preferred).
  return null;
}
