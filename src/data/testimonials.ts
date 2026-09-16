import type { LocalizedText } from "./services";

export interface Testimonial {
  slug: string;
  quote: LocalizedText;
  name: string;
  role: LocalizedText;
  company: string;
}

/**
 * Intentionally empty — never fabricate client quotes.
 * Add real testimonials here when available; the section hides itself while empty.
 */
export const testimonials: Testimonial[] = [];
