"use client";

import { useState, type ChangeEvent, type FormEvent, type ReactNode } from "react";
import { Arrow } from "@/components/ui/arrow";
import { Button } from "@/components/ui/button";
import { ChoiceGroup, FieldError, Input, Label, Textarea } from "@/components/ui/field";
import type { Dictionary } from "@/dictionaries/en";
import type { SiteLocale } from "@/lib/site";

type Status = "idle" | "sending" | "success" | "error";

const PROJECT_TYPES = ["web", "mobile", "desktop", "custom", "ecommerce", "saas", "ai", "other"] as const;
const BUDGETS = ["small", "medium", "large", "enterprise", "undecided"] as const;
const EMPTY = { name: "", company: "", email: "", phone: "", country: "", projectType: "", budget: "", message: "", website: "" };

function Part({ n, title, children }: { n: string; title: string; children: ReactNode }) {
  return (
    <div className="grid gap-6 border-t border-rule-strong pt-6 lg:grid-cols-12 lg:gap-8">
      <p className="label text-muted lg:col-span-3">
        <span className="text-ink">({n})</span> {title}
      </p>
      <div className="grid gap-6 sm:grid-cols-2 lg:col-span-9">{children}</div>
    </div>
  );
}

export function ContactForm({ locale, dict }: { locale: SiteLocale; dict: Dictionary }) {
  const t = dict.contact.form;
  const ar = locale === "ar";
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [values, setValues] = useState(EMPTY);

  const setValue = (key: keyof typeof values, v: string) => {
    setValues((s) => ({ ...s, [key]: v }));
    setErrors((errs) => {
      if (!errs[key]) return errs;
      const next = { ...errs };
      delete next[key];
      return next;
    });
  };
  const bind = (key: keyof typeof values) => ({
    value: values[key],
    onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setValue(key, e.target.value),
  });

  const validate = () => {
    const next: Record<string, string> = {};
    if (values.name.trim().length < 2) next.name = t.errors.name;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) next.email = t.errors.email;
    if (!values.projectType) next.projectType = t.errors.projectType;
    if (values.message.trim().length < 10) next.message = t.errors.message;
    setErrors(next);
    const first = Object.keys(next)[0];
    if (first) {
      const el = first === "projectType" ? document.querySelector<HTMLInputElement>('input[name="projectType"]') : document.getElementById(`cf-${first}`);
      el?.focus();
    }
    return !first;
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (status === "sending" || !validate()) return;
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
      <div role="status" className="border-t border-rule-strong pt-10">
        <p className="label text-muted">✓</p>
        <h2 className="display-md mt-4 text-4xl">{t.successTitle}</h2>
        <p className="mt-4 max-w-lg text-lg text-ink-soft">{t.successBody}</p>
        <Button
          variant="outline"
          className="mt-8"
          onClick={() => {
            setStatus("idle");
            setValues(EMPTY);
          }}
        >
          {t.sendAnother}
        </Button>
      </div>
    );
  }

  const req = <span className="text-accent-ink"> *</span>;

  return (
    <form onSubmit={onSubmit} noValidate aria-label={dict.contact.title} className="space-y-12">
      <Part n="01" title={ar ? "عنك" : "About you"}>
        <div>
          <Label htmlFor="cf-name">
            {t.name}
            {req}
          </Label>
          <Input id="cf-name" name="name" autoComplete="name" required className="mt-2" placeholder={t.namePlaceholder} {...bind("name")} aria-invalid={!!errors.name} aria-describedby={errors.name ? "cf-name-err" : undefined} />
          <FieldError id="cf-name-err" message={errors.name} />
        </div>
        <div>
          <Label htmlFor="cf-company">{t.company}</Label>
          <Input id="cf-company" name="company" autoComplete="organization" className="mt-2" placeholder={t.companyPlaceholder} {...bind("company")} />
        </div>
        <div>
          <Label htmlFor="cf-email">
            {t.email}
            {req}
          </Label>
          <Input id="cf-email" name="email" type="email" inputMode="email" autoComplete="email" required dir="ltr" className="mt-2 text-start" placeholder={t.emailPlaceholder} {...bind("email")} aria-invalid={!!errors.email} aria-describedby={errors.email ? "cf-email-err" : undefined} />
          <FieldError id="cf-email-err" message={errors.email} />
        </div>
        <div>
          <Label htmlFor="cf-phone">{t.phone}</Label>
          <Input id="cf-phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" dir="ltr" className="mt-2 text-start" placeholder={t.phonePlaceholder} {...bind("phone")} />
        </div>
        <div className="sm:col-span-2">
          <Label htmlFor="cf-country">{t.country}</Label>
          <Input id="cf-country" name="country" autoComplete="country-name" className="mt-2" placeholder={t.countryPlaceholder} {...bind("country")} />
        </div>
      </Part>

      <Part n="02" title={ar ? "عن المشروع" : "About the project"}>
        <div className="sm:col-span-2">
          <ChoiceGroup
            name="projectType"
            legend={
              <>
                {t.projectType}
                {req}
              </>
            }
            options={PROJECT_TYPES.map((k) => ({ value: k, label: t.types[k] }))}
            value={values.projectType}
            onChange={(v) => setValue("projectType", v)}
            required
            error={errors.projectType}
            errorId="cf-type-err"
          />
        </div>
        <div className="sm:col-span-2">
          <ChoiceGroup
            name="budget"
            legend={t.budget}
            options={BUDGETS.map((k) => ({ value: k, label: t.budgets[k] }))}
            value={values.budget}
            onChange={(v) => setValue("budget", v)}
          />
        </div>
        <div className="sm:col-span-2">
          <Label htmlFor="cf-message">
            {t.message}
            {req}
          </Label>
          <Textarea id="cf-message" name="message" rows={6} required className="mt-2" placeholder={t.messagePlaceholder} {...bind("message")} aria-invalid={!!errors.message} aria-describedby={errors.message ? "cf-message-err" : undefined} />
          <FieldError id="cf-message-err" message={errors.message} />
        </div>
        {/* Honeypot — invisible to people, tempting to bots. */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="cf-website">Website</label>
          <input id="cf-website" name="website" tabIndex={-1} autoComplete="off" {...bind("website")} />
        </div>
      </Part>

      <div className="grid gap-6 border-t border-rule-strong pt-6 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-9 lg:col-start-4">
          {status === "error" ? (
            <p role="alert" className="mb-6 border-s-[3px] border-danger ps-4 text-[15px]">
              <strong>{t.errorTitle}</strong> {t.errorBody}
            </p>
          ) : null}
          <Button type="submit" size="lg" disabled={status === "sending"} className="w-full sm:w-auto">
            {status === "sending" ? t.sending : t.submit}
            {status === "sending" ? null : <Arrow />}
          </Button>
        </div>
      </div>
    </form>
  );
}
