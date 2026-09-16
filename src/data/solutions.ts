import type { LocalizedText } from "./services";

export interface Solution {
  slug: string;
  title: LocalizedText;
  description: LocalizedText;
}

export const solutions: Solution[] = [
  {
    slug: "saas-platforms",
    title: { en: "SaaS Platforms", ar: "منصات SaaS" },
    description: { en: "Multi-tenant products with billing, roles, and dashboards.", ar: "منتجات متعددة المستأجرين مع فوترة وصلاحيات ولوحات تحكم." },
  },
  {
    slug: "erp-systems",
    title: { en: "ERP / Business Systems", ar: "أنظمة ERP والأعمال" },
    description: { en: "Finance, inventory, and operations in one coherent system.", ar: "المالية والمخازن والعمليات في نظام واحد متماسك." },
  },
  {
    slug: "hr-systems",
    title: { en: "HR Management Systems", ar: "أنظمة إدارة الموارد البشرية" },
    description: { en: "Attendance, payroll inputs, requests, and employee records.", ar: "الحضور ومدخلات الرواتب والطلبات وسجلات الموظفين." },
  },
  {
    slug: "ecommerce",
    title: { en: "E-commerce Platforms", ar: "منصات التجارة الإلكترونية" },
    description: { en: "Storefronts, carts, payments, and order management.", ar: "واجهات متاجر وسلات ومدفوعات وإدارة طلبات." },
  },
  {
    slug: "booking",
    title: { en: "Booking Platforms", ar: "منصات الحجز" },
    description: { en: "Schedules, availability, reservations, and notifications.", ar: "جداول وتوافر وحجوزات وإشعارات." },
  },
  {
    slug: "dashboards",
    title: { en: "Dashboards", ar: "لوحات التحكم" },
    description: { en: "Operational views your team actually checks every day.", ar: "شاشات تشغيلية يعتمد عليها فريقك يوميًا." },
  },
  {
    slug: "marketplaces",
    title: { en: "Marketplaces", ar: "الأسواق الإلكترونية" },
    description: { en: "Buyers, sellers, listings, and commissions handled cleanly.", ar: "مشترون وبائعون وإعلانات وعمولات بمعالجة سليمة." },
  },
  {
    slug: "portals",
    title: { en: "Customer Portals", ar: "بوابات العملاء" },
    description: { en: "Self-service accounts, requests, documents, and status.", ar: "حسابات ذاتية وطلبات ومستندات وحالة المتابعة." },
  },
  {
    slug: "internal-tools",
    title: { en: "Internal Business Tools", ar: "أدوات الأعمال الداخلية" },
    description: { en: "Small sharp tools that remove daily manual work.", ar: "أدوات دقيقة تزيل العمل اليدوي اليومي." },
  },
  {
    slug: "mobile-apps",
    title: { en: "Mobile Applications", ar: "تطبيقات الموبايل" },
    description: { en: "Customer and field-team apps for iOS and Android.", ar: "تطبيقات للعملاء وفرق الميدان لـ iOS وأندرويد." },
  },
  {
    slug: "desktop-apps",
    title: { en: "Desktop Applications", ar: "تطبيقات سطح المكتب" },
    description: { en: "Reliable on-premise software for branches and back offices.", ar: "برمجيات موثوقة للفروع والمكاتب الخلفية." },
  },
  {
    slug: "ai-apps",
    title: { en: "AI-powered Applications", ar: "تطبيقات مدعومة بالذكاء الاصطناعي" },
    description: { en: "Search, summarization, and automation inside your product.", ar: "بحث وتلخيص وأتمتة داخل منتجك." },
  },
];
