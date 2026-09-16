import type { LocalizedText } from "./services";

export interface WhyPoint {
  slug: string;
  title: LocalizedText;
  description: LocalizedText;
}

export const whyPoints: WhyPoint[] = [
  {
    slug: "business-first",
    title: { en: "Business-first engineering", ar: "هندسة تبدأ من العمل" },
    description: {
      en: "We don't just build features. We understand the business problem behind them — then scope the smallest system that solves it.",
      ar: "لا نبني مزايا فقط. نفهم مشكلة العمل وراءها — ثم نحدد أصغر نظام يحلها.",
    },
  },
  {
    slug: "custom-default",
    title: { en: "Custom by default", ar: "مخصص بالأساس" },
    description: {
      en: "We build software around your workflow instead of forcing your business into generic solutions.",
      ar: "نبني البرمجيات حول سير عملك بدل إجبار عملك على حلول عامة.",
    },
  },
  {
    slug: "modern-tech",
    title: { en: "Modern technology", ar: "تقنيات حديثة" },
    description: {
      en: "Modern frameworks and engineering practices — so the product stays maintainable long after launch.",
      ar: "أطر وممارسات هندسية حديثة — ليبقى المنتج قابلًا للصيانة بعد الإطلاق بزمن.",
    },
  },
  {
    slug: "mena-ready",
    title: { en: "MENA-ready", ar: "جاهزون للمنطقة" },
    description: {
      en: "We understand how businesses in Egypt and MENA operate — Arabic/English, local payments, and remote-first delivery.",
      ar: "نفهم كيف تعمل الشركات في مصر والمنطقة — العربية والإنجليزية والمدفوعات المحلية والعمل عن بُعد.",
    },
  },
  {
    slug: "long-term",
    title: { en: "Long-term partnership", ar: "شراكة طويلة المدى" },
    description: {
      en: "The relationship doesn't end at launch. We maintain, improve, and scale the product with you.",
      ar: "العلاقة لا تنتهي عند الإطلاق. نصون المنتج ونحسّنه ونوسّعه معك.",
    },
  },
];
