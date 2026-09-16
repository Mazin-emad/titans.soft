import type { LocalizedText } from "./services";

export interface Industry {
  slug: string;
  title: LocalizedText;
  description: LocalizedText;
}

/** Easy to modify. No claimed experience — only capability. */
export const industries: Industry[] = [
  { slug: "retail", title: { en: "Retail", ar: "التجزئة" }, description: { en: "POS, inventory, and omnichannel operations.", ar: "نقاط البيع والمخازن والعمليات متعددة القنوات." } },
  { slug: "healthcare", title: { en: "Healthcare", ar: "الرعاية الصحية" }, description: { en: "Scheduling, queues, and records.", ar: "الجدولة وقوائم الانتظار والسجلات." } },
  { slug: "education", title: { en: "Education", ar: "التعليم" }, description: { en: "Courses, enrollment, and progress.", ar: "الكورسات والتسجيل وتتبع التقدم." } },
  { slug: "real-estate", title: { en: "Real Estate", ar: "العقارات" }, description: { en: "Listings, inquiries, and pipelines.", ar: "الإعلانات والاستفسارات وخطوط المتابعة." } },
  { slug: "logistics", title: { en: "Logistics", ar: "اللوجستيات" }, description: { en: "Shipments, tracking, and dispatch.", ar: "الشحنات والتتبع والإرسال." } },
  { slug: "finance", title: { en: "Finance", ar: "المالية" }, description: { en: "Ledgers, approvals, and reporting.", ar: "الدفاتر والاعتمادات والتقارير." } },
  { slug: "hr", title: { en: "HR", ar: "الموارد البشرية" }, description: { en: "Attendance, requests, and files.", ar: "الحضور والطلبات والملفات." } },
  { slug: "ecommerce", title: { en: "E-commerce", ar: "التجارة الإلكترونية" }, description: { en: "Catalogs, carts, and fulfillment.", ar: "الكتالوجات والسلات والتنفيذ." } },
  { slug: "professional-services", title: { en: "Professional Services", ar: "الخدمات المهنية" }, description: { en: "Clients, matters, and billing.", ar: "العملاء والملفات والفوترة." } },
  { slug: "startups", title: { en: "Startups", ar: "الشركات الناشئة" }, description: { en: "MVPs that can grow into platforms.", ar: "منتجات أولية قابلة للنمو لمنصات." } },
];
