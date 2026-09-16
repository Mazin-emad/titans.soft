export interface LocalizedText {
  en: string;
  ar: string;
}

export interface Service {
  slug: string;
  icon: "globe" | "smartphone" | "monitor" | "boxes" | "server" | "sparkles";
  title: LocalizedText;
  description: LocalizedText;
  tags: string[];
}

export const services: Service[] = [
  {
    slug: "web-development",
    icon: "globe",
    title: { en: "Web Development", ar: "تطوير الويب" },
    description: {
      en: "Custom websites, web applications, dashboards, SaaS platforms, e-commerce systems, and business portals.",
      ar: "مواقع مخصصة وتطبيقات ويب ولوحات تحكم ومنصات SaaS وأنظمة تجارة إلكترونية وبوابات أعمال.",
    },
    tags: ["Next.js", "React", "Angular", "TypeScript"],
  },
  {
    slug: "mobile-development",
    icon: "smartphone",
    title: { en: "Mobile Development", ar: "تطوير الموبايل" },
    description: {
      en: "Cross-platform and native mobile applications for iOS and Android, built around real user workflows.",
      ar: "تطبيقات موبايل عابرة للمنصات وأصيلة لـ iOS وأندرويد، مصممة حول سير عمل المستخدم الحقيقي.",
    },
    tags: ["Flutter", "iOS", "Android"],
  },
  {
    slug: "desktop-software",
    icon: "monitor",
    title: { en: "Desktop Software", ar: "برمجيات سطح المكتب" },
    description: {
      en: "Custom desktop applications designed around specific business workflows — inventory, POS, operations.",
      ar: "تطبيقات سطح مكتب مخصصة مصممة حول سير عمل محدد — مخازن ونقاط بيع وعمليات تشغيلية.",
    },
    tags: [".NET", "Windows", "Offline-first"],
  },
  {
    slug: "custom-software",
    icon: "boxes",
    title: { en: "Custom Software", ar: "برمجيات مخصصة" },
    description: {
      en: "End-to-end software systems designed specifically around a company's requirements — not generic tools.",
      ar: "أنظمة برمجية متكاملة مصممة خصيصًا حول متطلبات الشركة — ليست أدوات عامة.",
    },
    tags: ["ERP", "HR", "Internal tools"],
  },
  {
    slug: "backend-apis",
    icon: "server",
    title: { en: "Backend & APIs", ar: "الخلفية وواجهات API" },
    description: {
      en: "Scalable APIs, databases, authentication, integrations, and backend infrastructure you can rely on.",
      ar: "واجهات API قابلة للتوسع وقواعد بيانات ومصادقة وتكاملات وبنية خلفية موثوقة.",
    },
    tags: [".NET", "Node.js", "PostgreSQL", "REST"],
  },
  {
    slug: "ai-automation",
    icon: "sparkles",
    title: { en: "AI & Automation", ar: "الذكاء الاصطناعي والأتمتة" },
    description: {
      en: "AI-powered features, intelligent workflows, integrations, and business automation with measurable value.",
      ar: "مزايا مدعومة بالذكاء الاصطناعي وسير عمل ذكي وتكاملات وأتمتة للأعمال بقيمة قابلة للقياس.",
    },
    tags: ["LLM integrations", "AI APIs", "Automation"],
  },
];
