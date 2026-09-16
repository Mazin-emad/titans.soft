"use client";

import { useState, type FormEvent, type ChangeEvent } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input, Textarea, Label, FieldError } from "@/components/ui/field";
import type { Dictionary } from "@/dictionaries/en";
import type { SiteLocale } from "@/lib/site";

type Status = "idle" | "sending" | "success" | "error";

const PROJECT_TYPES = ["web", "mobile", "desktop", "custom", "ecommerce", "saas", "ai", "other"] as const;
const BUDGETS = ["small", "medium", "large", "enterprise", "undecided"] as const;

export function ContactForm({ locale, dict }: { locale: SiteLocale; dict: Dictionary }) {
  const t = dict.contact.form;
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [values, setValues] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    country: "",
    projectType: "",
    budget: "",
    message: "",
  });

  const set = (key: keyof typeof values) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setValues((v) => ({ ...v, [key]: e.target.value }));
    setErrors((errs) => {
      if (!errs[key]) return errs;
      const next = { ...errs };
      delete next[key];
      return next;
    });
  };

  const validate = () => {
    const next: Record<string, string> = {};
    if (values.name.trim().length < 2) next.name = t.errors.name;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) next.email = t.errors.email;
    if (!values.projectType) next.projectType = t.errors.projectType;
    if (values.message.trim().length < 10) next.message = t.errors.message;
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (status === "sending") return;
    if (!validate()) return;
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ ...values, locale }),
      });
      if (!res.ok) throw new Error("request failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div role="status" className="rounded-lg border border-border bg-card p-8 text-center">
        <CheckCircle2 className="mx-auto size-10 text-emerald-500" aria-hidden="true" />
        <h3 className="mt-4 text-xl font-semibold">{t.successTitle}</h3>
        <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">{t.successBody}</p>
        <Button variant="outline" className="mt-6" onClick={() => { setStatus("idle"); setValues({ name: "", company: "", email: "", phone: "", country: "", projectType: "", budget: "", message: "" }); }}>
          {t.sendAnother}
        </Button>
      </div>
    );
  }

  const selectClass =
    "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-2 focus-visible:outline-brand disabled:opacity-50";

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-lg border border-border bg-card p-6 sm:p-8" aria-label={dict.contact.title}>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="cf-name">{t.name} *</Label>
          <Input id="cf-name" name="name" autoComplete="name" className="mt-2" placeholder={t.namePlaceholder} value={values.name} onChange={set("name")} aria-invalid={!!errors.name} aria-describedby={errors.name ? "cf-name-err" : undefined} />
          <FieldError id="cf-name-err" message={errors.name} />
        </div>
        <div>
          <Label htmlFor="cf-company">{t.company}</Label>
          <Input id="cf-company" name="company" autoComplete="organization" className="mt-2" placeholder={t.companyPlaceholder} value={values.company} onChange={set("company")} />
        </div>
        <div>
          <Label htmlFor="cf-email">{t.email} *</Label>
          <Input id="cf-email" name="email" type="email" autoComplete="email" dir="ltr" className="mt-2" placeholder={t.emailPlaceholder} value={values.email} onChange={set("email")} aria-invalid={!!errors.email} aria-describedby={errors.email ? "cf-email-err" : undefined} />
          <FieldError id="cf-email-err" message={errors.email} />
        </div>
        <div>
          <Label htmlFor="cf-phone">{t.phone}</Label>
          <Input id="cf-phone" name="phone" type="tel" autoComplete="tel" dir="ltr" className="mt-2" placeholder={t.phonePlaceholder} value={values.phone} onChange={set("phone")} />
        </div>
        <div>
          <Label htmlFor="cf-country">{t.country}</Label>
          <Input id="cf-country" name="country" autoComplete="country-name" className="mt-2" placeholder={t.countryPlaceholder} value={values.country} onChange={set("country")} />
        </div>
        <div>
          <Label htmlFor="cf-type">{t.projectType} *</Label>
          <select id="cf-type" value={values.projectType} onChange={set("projectType")} aria-invalid={!!errors.projectType} aria-describedby={errors.projectType ? "cf-type-err" : undefined} className={`${selectClass} mt-2`}>
            <option value="">{t.projectTypePlaceholder}</option>
            {PROJECT_TYPES.map((k) => (
              <option key={k} value={k}>{t.types[k]}</option>
            ))}
          </select>
          <FieldError id="cf-type-err" message={errors.projectType} />
        </div>
        <div className="sm:col-span-2">
          <Label htmlFor="cf-budget">{t.budget}</Label>
          <select id="cf-budget" value={values.budget} onChange={set("budget")} className={`${selectClass} mt-2`}>
            <option value="">{t.budgetPlaceholder}</option>
            {BUDGETS.map((k) => (
              <option key={k} value={k}>{t.budgets[k]}</option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <Label htmlFor="cf-message">{t.message} *</Label>
          <Textarea id="cf-message" name="message" rows={5} className="mt-2" placeholder={t.messagePlaceholder} value={values.message} onChange={set("message")} aria-invalid={!!errors.message} aria-describedby={errors.message ? "cf-message-err" : undefined} />
          <FieldError id="cf-message-err" message={errors.message} />
        </div>
      </div>

      {status === "error" ? (
        <p role="alert" className="mt-5 flex items-start gap-2 rounded-md border border-destructive/40 bg-destructive/5 p-3 text-sm">
          <AlertCircle className="mt-0.5 size-4 shrink-0 text-destructive" aria-hidden="true" />
          <span><strong>{t.errorTitle}</strong> {t.errorBody}</span>
        </p>
      ) : null}

      <Button type="submit" size="lg" variant="brand" disabled={status === "sending"} className="mt-6 w-full sm:w-auto">
        {status === "sending" ? (
          <>
            <Loader2 className="size-4 animate-spin" aria-hidden="true" />
            {t.sending}
          </>
        ) : (
          <>
            <Send className="size-4 rtl:-scale-x-100" aria-hidden="true" />
            {t.submit}
          </>
        )}
      </Button>
    </form>
  );
}
