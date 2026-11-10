import { ViewTransition, type ReactNode } from "react";

/**
 * Soft fade/rise between routes via the browser View Transitions API.
 * Must wrap each page (not the layout) — layouts persist, so enter/exit never fire there.
 */
export function PageTransition({ children }: { children: ReactNode }) {
  return (
    <ViewTransition enter="page-in" exit="page-out" default="none">
      {children}
    </ViewTransition>
  );
}
