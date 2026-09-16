import type { LocalizedText } from "./services";

export interface ProcessStep {
  index: string;
  title: LocalizedText;
  description: LocalizedText;
}

export const processSteps: ProcessStep[] = [
  {
    index: "01",
    title: { en: "Discover", ar: "الاكتشاف" },
    description: {
      en: "Understand the business, users, requirements, and goals before writing anything.",
      ar: "نفهم العمل والمستخدمين والمتطلبات والأهداف قبل كتابة أي سطر.",
    },
  },
  {
    index: "02",
    title: { en: "Plan", ar: "التخطيط" },
    description: {
      en: "Define scope, architecture, UX, milestones, and technical direction.",
      ar: "نحدد النطاق والمعمارية وتجربة الاستخدام والمعالم والاتجاه التقني.",
    },
  },
  {
    index: "03",
    title: { en: "Design", ar: "التصميم" },
    description: {
      en: "Create the product experience and interface around real workflows.",
      ar: "نصمم تجربة المنتج والواجهة حول سير العمل الحقيقي.",
    },
  },
  {
    index: "04",
    title: { en: "Build", ar: "البناء" },
    description: {
      en: "Develop the software using modern engineering practices and reviewable code.",
      ar: "نطور البرمجيات بممارسات هندسية حديثة وكود قابل للمراجعة.",
    },
  },
  {
    index: "05",
    title: { en: "Test", ar: "الاختبار" },
    description: {
      en: "Validate functionality, performance, responsiveness, and reliability.",
      ar: "نتحقق من الوظائف والأداء والاستجابة والموثوقية.",
    },
  },
  {
    index: "06",
    title: { en: "Launch", ar: "الإطلاق" },
    description: {
      en: "Deploy, monitor, and support the product — then keep improving it.",
      ar: "ننشر المنتج ونراقبه وندعمه — ثم نواصل تحسينه.",
    },
  },
];
