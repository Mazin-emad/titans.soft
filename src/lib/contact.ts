/**
 * Contact submission abstraction.
 * If no provider is configured, the API route stores nothing and returns ok
 * in development — wire a real provider (Resend, SMTP, CRM webhook) via env.
 */

export interface ContactPayload {
  name: string;
  company?: string;
  email: string;
  phone?: string;
  country?: string;
  projectType: string;
  budget?: string;
  message: string;
  locale: string;
}

export async function sendContactMessage(payload: ContactPayload): Promise<{ ok: boolean }> {
  const webhook = process.env.CONTACT_WEBHOOK_URL;
  const resendKey = process.env.RESEND_API_KEY;

  // No provider configured yet — log in development, succeed silently.
  if (!webhook && !resendKey) {
    if (process.env.NODE_ENV !== "production") {
      console.log("[contact] no provider configured, payload:", payload);
    }
    return { ok: true };
  }

  if (webhook) {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ ...payload, source: "titans-soft-website" }),
    });
    return { ok: res.ok };
  }

  // TODO: implement Resend (or chosen provider) here when keys are available.
  return { ok: true };
}
