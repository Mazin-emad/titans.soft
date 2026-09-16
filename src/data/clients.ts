export interface Client {
  slug: string;
  name: string;
  logo: string;
  url?: string;
}

/**
 * Intentionally empty — never invent client logos.
 * Add real clients here when available; the section hides itself while empty.
 */
export const clients: Client[] = [];
