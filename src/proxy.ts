import { NextResponse, type NextRequest } from "next/server";
import { isLocale, defaultLocale } from "@/lib/i18n/config";

export default function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Skip API, static assets, and Next internals
  if (
    pathname.startsWith("/api") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon") ||
    /\.[a-zA-Z0-9]+$/.test(pathname.split("/").pop() ?? "")
  ) {
    return NextResponse.next();
  }

  const segments = pathname.split("/");
  const maybeLocale = segments[1];

  if (maybeLocale === "" || maybeLocale === undefined) {
    // Root: send Arabic-preferring browsers to /ar, everyone else to the default.
    const accept = req.headers.get("accept-language")?.toLowerCase() ?? "";
    const prefersArabic = /^\s*ar\b/.test(accept);
    return NextResponse.redirect(new URL(`/${prefersArabic ? "ar" : defaultLocale}`, req.url));
  }

  if (!isLocale(maybeLocale)) {
    // Unknown first segment that isn't a file: send to default locale home
    // (lets [locale]/not-found handle /en/bad-route instead of hijacking)
    if (segments.length === 2) {
      return NextResponse.redirect(new URL(`/${defaultLocale}`, req.url));
    }
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)"],
};
