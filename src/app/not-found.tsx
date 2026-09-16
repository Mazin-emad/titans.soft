import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function GlobalNotFound() {
  return (
    <html lang="en">
      <body style={{ fontFamily: "system-ui, sans-serif", textAlign: "center", padding: "6rem 1rem" }}>
        <p style={{ color: "#0284c7", fontFamily: "monospace" }}>404</p>
        <h1>This page doesn&apos;t exist.</h1>
        <p>
          <Link href="/en">Go to English homepage</Link> · <Link href="/ar">الصفحة الرئيسية</Link>
        </p>
        <p>
          <Button asChild>
            <Link href="/en">Back to home</Link>
          </Button>
        </p>
      </body>
    </html>
  );
}
