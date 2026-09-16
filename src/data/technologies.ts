import type { LocalizedText } from "./services";

export interface TechGroup {
  slug: string;
  title: LocalizedText;
  items: { name: string; note: LocalizedText }[];
}

/**
 * Only technologies Titans.Soft actually uses.
 * Edit this file to change the public stack.
 */
export const techGroups: TechGroup[] = [
  {
    slug: "frontend",
    title: { en: "Frontend", ar: "الواجهات" },
    items: [
      { name: "React", note: { en: "Interactive web interfaces", ar: "واجهات ويب تفاعلية" } },
      { name: "Next.js", note: { en: "Production web apps & portals", ar: "تطبيقات ويب وبوابات" } },
      { name: "Angular", note: { en: "Enterprise dashboards", ar: "لوحات تحكم للمؤسسات" } },
      { name: "TypeScript", note: { en: "Type-safe codebases", ar: "كود آمن بالأنواع" } },
      { name: "Tailwind CSS", note: { en: "Design-system styling", ar: "تنسيق بنظام تصميم" } },
    ],
  },
  {
    slug: "backend",
    title: { en: "Backend", ar: "الخلفية" },
    items: [
      { name: ".NET", note: { en: "Business systems & APIs", ar: "أنظمة الأعمال وواجهات API" } },
      { name: "Node.js", note: { en: "APIs & integrations", ar: "واجهات وتكاملات" } },
      { name: "Express", note: { en: "Lightweight services", ar: "خدمات خفيفة" } },
      { name: "REST APIs", note: { en: "Contracts mobile & web share", ar: "عقود مشتركة للويب والموبايل" } },
    ],
  },
  {
    slug: "mobile",
    title: { en: "Mobile", ar: "الموبايل" },
    items: [
      { name: "Flutter", note: { en: "Cross-platform iOS & Android", ar: "عابر للمنصات iOS وأندرويد" } },
      { name: "Native", note: { en: "When platform APIs demand it", ar: "عند الحاجة لواجهات النظام" } },
    ],
  },
  {
    slug: "databases",
    title: { en: "Databases", ar: "قواعد البيانات" },
    items: [
      { name: "PostgreSQL", note: { en: "Primary relational store", ar: "التخزين العلائقي الأساسي" } },
      { name: "SQL Server", note: { en: "Enterprise & .NET estates", ar: "بيئات المؤسسات و.NET" } },
      { name: "MongoDB", note: { en: "Flexible document workloads", ar: "أحمال مستندات مرنة" } },
    ],
  },
  {
    slug: "infrastructure",
    title: { en: "Infrastructure", ar: "البنية التحتية" },
    items: [
      { name: "Docker", note: { en: "Reproducible environments", ar: "بيئات قابلة لإعادة الإنتاج" } },
      { name: "Cloud platforms", note: { en: "Deploy, scale, observe", ar: "نشر وتوسع ومراقبة" } },
      { name: "CI/CD", note: { en: "Tested, reviewable releases", ar: "إصدارات مختبرة وقابلة للمراجعة" } },
    ],
  },
  {
    slug: "ai",
    title: { en: "AI", ar: "الذكاء الاصطناعي" },
    items: [
      { name: "LLM integrations", note: { en: "Grounded product features", ar: "مزايا منتج مؤسسة" } },
      { name: "AI APIs", note: { en: "Search, OCR, summarization", ar: "بحث وتعرف ضوئي وتلخيص" } },
      { name: "Automation", note: { en: "Workflows that save hours", ar: "سير عمل يوفر ساعات" } },
    ],
  },
];
