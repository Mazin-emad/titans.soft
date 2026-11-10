import { NextResponse } from "next/server";
import { sendContactMessage } from "@/lib/contact";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message, projectType, company, phone, country, budget, locale, website } = body ?? {};

    // Honeypot filled → silently accept and drop (don't tell bots they were caught).
    if (typeof website === "string" && website.trim() !== "") {
      return NextResponse.json({ ok: true });
    }

    if (typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json({ error: "Invalid name" }, { status: 400 });
    }
    if (typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }
    if (typeof message !== "string" || message.trim().length < 10) {
      return NextResponse.json({ error: "Invalid message" }, { status: 400 });
    }
    if (typeof projectType !== "string" || !projectType) {
      return NextResponse.json({ error: "Invalid project type" }, { status: 400 });
    }

    const result = await sendContactMessage({
      name: name.trim(),
      company: typeof company === "string" ? company.trim() : undefined,
      email: email.trim(),
      phone: typeof phone === "string" ? phone.trim() : undefined,
      country: typeof country === "string" ? country.trim() : undefined,
      projectType,
      budget: typeof budget === "string" ? budget : undefined,
      message: message.trim(),
      locale: typeof locale === "string" ? locale : "en",
    });

    if (!result.ok) return NextResponse.json({ error: "Delivery failed" }, { status: 502 });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Bad request" }, { status: 400 });
  }
}
