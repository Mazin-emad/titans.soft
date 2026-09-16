import type { LocalizedText } from "./services";

export type PlatformType = "Web" | "Mobile" | "Desktop" | "Web + Mobile" | "API / Backend" | "AI Feature";

export interface Project {
  slug: string;
  /** Set false once real client work is added and placeholders are removed. */
  placeholder: boolean;
  featured: boolean;
  category: LocalizedText;
  industry: LocalizedText;
  platform: PlatformType;
  title: LocalizedText;
  tagline: LocalizedText;
  description: LocalizedText;
  problem: LocalizedText;
  solution: LocalizedText;
  outcome: LocalizedText | null;
  technologies: string[];
  year: string;
  url?: string;
  accent: string;
}

/**
 * PLACEHOLDER case studies — clearly marked, easy to replace.
 * Do not present these as real clients. Add real work here later.
 */
export const projects: Project[] = [
  {
    slug: "hr-management-suite",
    placeholder: true,
    featured: true,
    category: { en: "HR Management", ar: "إدارة الموارد البشرية" },
    industry: { en: "Human Resources", ar: "الموارد البشرية" },
    platform: "Web + Mobile",
    title: { en: "HR Management Suite", ar: "منظومة إدارة الموارد البشرية" },
    tagline: {
      en: "Attendance, requests, and employee records in one system.",
      ar: "الحضور والطلبات وسجلات الموظفين في نظام واحد.",
    },
    description: {
      en: "Placeholder case study showing how we present HR systems: shifts and attendance, leave and request approvals, employee files, and role-based dashboards for HR and managers.",
      ar: "دراسة حالة مؤقتة توضح طريقة عرضنا لأنظمة الموارد البشرية: الورديات والحضور والإجازات واعتماد الطلبات وملفات الموظفين ولوحات صلاحيات للموارد البشرية والمديرين.",
    },
    problem: {
      en: "Placeholder: attendance tracked in spreadsheets, requests handled over chat, and no single source of truth for employee data.",
      ar: "محتوى مؤقت: الحضور في جداول متفرقة، والطلبات عبر المحادثات، ولا يوجد مصدر واحد لبيانات الموظفين.",
    },
    solution: {
      en: "Placeholder: role-based web portal plus mobile check-in, approval flows, and audit-friendly records backed by a single API.",
      ar: "محتوى مؤقت: بوابة ويب بالصلاحيات مع تسجيل حضور بالموبايل، وسير اعتماد، وسجلات قابلة للمراجعة عبر API موحد.",
    },
    outcome: null,
    technologies: ["Next.js", "TypeScript", ".NET", "PostgreSQL", "Flutter"],
    year: "2025",
    accent: "#0284c7",
  },
  {
    slug: "commerce-platform",
    placeholder: true,
    featured: true,
    category: { en: "E-commerce", ar: "التجارة الإلكترونية" },
    industry: { en: "Retail", ar: "التجزئة" },
    platform: "Web",
    title: { en: "Commerce Platform", ar: "منصة التجارة" },
    tagline: {
      en: "Storefront, orders, and inventory that stay in sync.",
      ar: "واجهة متجر وطلبات ومخزون متزامنة دائمًا.",
    },
    description: {
      en: "Placeholder case study showing how we present commerce work: catalog and search, cart and checkout, payments, order management, and inventory visibility.",
      ar: "دراسة حالة مؤقتة توضح طريقة عرضنا لأعمال التجارة: الكتالوج والبحث والسلة والدفع وإدارة الطلبات ورؤية المخزون.",
    },
    problem: {
      en: "Placeholder: manual order handling, stock mismatches between channels, and a storefront that is hard to update.",
      ar: "محتوى مؤقت: معالجة يدوية للطلبات، واختلاف المخزون بين القنوات، وواجهة صعبة التحديث.",
    },
    solution: {
      en: "Placeholder: composable storefront with a single inventory source, admin workflows for catalog and orders, and clear integration points for payments and shipping.",
      ar: "محتوى مؤقت: واجهة مركبة مع مصدر مخزون واحد، وسير عمل للإدارة للكتالوج والطلبات، ونقاط تكامل واضحة للمدفوعات والشحن.",
    },
    outcome: null,
    technologies: ["Next.js", "Node.js", "PostgreSQL", "REST APIs"],
    year: "2025",
    accent: "#0d9488",
  },
  {
    slug: "learning-portal",
    placeholder: true,
    featured: true,
    category: { en: "Education", ar: "التعليم" },
    industry: { en: "Education", ar: "التعليم" },
    platform: "Web + Mobile",
    title: { en: "Learning Portal", ar: "بوابة التعلم" },
    tagline: {
      en: "Courses, progress, and cohorts without the chaos.",
      ar: "كورسات وتقدم ومجموعات دون فوضى.",
    },
    description: {
      en: "Placeholder case study showing how we present education products: course libraries, enrollment, progress tracking, and instructor dashboards.",
      ar: "دراسة حالة مؤقتة توضح طريقة عرضنا لمنتجات التعليم: مكتبات الكورسات والتسجيل وتتبع التقدم ولوحات المحاضرين.",
    },
    problem: {
      en: "Placeholder: content scattered across drives and chats, no visibility into learner progress.",
      ar: "محتوى مؤقت: المحتوى مبعثر بين الملفات والمحادثات، ولا توجد رؤية لتقدم المتعلمين.",
    },
    solution: {
      en: "Placeholder: structured course model, cohort management, and progress analytics with mobile-friendly lessons.",
      ar: "محتوى مؤقت: نموذج كورسات منظم وإدارة مجموعات وتحليلات تقدم مع دروس مناسبة للموبايل.",
    },
    outcome: null,
    technologies: ["React", "Node.js", "MongoDB", "Flutter"],
    year: "2024",
    accent: "#7c3aed",
  },
  {
    slug: "clinic-operations",
    placeholder: true,
    featured: false,
    category: { en: "Healthcare", ar: "الرعاية الصحية" },
    industry: { en: "Healthcare", ar: "الرعاية الصحية" },
    platform: "Web",
    title: { en: "Clinic Operations Board", ar: "لوحة تشغيل العيادات" },
    tagline: {
      en: "Appointments, queues, and records for busy clinics.",
      ar: "مواعيد وقوائم انتظار وسجلات للعيادات المزدحمة.",
    },
    description: {
      en: "Placeholder case study showing how we present operations dashboards for appointment-heavy environments.",
      ar: "دراسة حالة مؤقتة توضح طريقة عرضنا للوحات التشغيل في البيئات كثيفة المواعيد.",
    },
    problem: {
      en: "Placeholder: double bookings, unclear queues, and paperwork slowing down reception.",
      ar: "محتوى مؤقت: حجوزات مزدوجة وقوائم غير واضحة وأعمال ورقية تبطئ الاستقبال.",
    },
    solution: {
      en: "Placeholder: booking rules, live queue board, and a reception workflow designed with clinic staff.",
      ar: "محتوى مؤقت: قواعد حجز ولوحة انتظار حية وسير عمل استقبال مصمم مع طاقم العيادة.",
    },
    outcome: null,
    technologies: ["Angular", ".NET", "SQL Server"],
    year: "2024",
    accent: "#dc2626",
  },
  {
    slug: "property-listings",
    placeholder: true,
    featured: false,
    category: { en: "Real Estate", ar: "العقارات" },
    industry: { en: "Real Estate", ar: "العقارات" },
    platform: "Web + Mobile",
    title: { en: "Property Listings Hub", ar: "منصة العقارات" },
    tagline: {
      en: "Listings, inquiries, and agent workflows in one place.",
      ar: "إعلانات واستفسارات وسير عمل الوكلاء في مكان واحد.",
    },
    description: {
      en: "Placeholder case study showing how we present marketplace-style products for property.",
      ar: "دراسة حالة مؤقتة توضح طريقة عرضنا لمنتجات شبيهة بالأسواق في مجال العقارات.",
    },
    problem: {
      en: "Placeholder: listings spread across spreadsheets and chats, slow follow-up on inquiries.",
      ar: "محتوى مؤقت: الإعلانات مبعثرة بين الجداول والمحادثات، ومتابعة بطيئة للاستفسارات.",
    },
    solution: {
      en: "Placeholder: searchable listings, inquiry routing to agents, and a pipeline view from inquiry to viewing.",
      ar: "محتوى مؤقت: إعلانات قابلة للبحث وتوجيه الاستفسارات للوكلاء وشاشة متابعة من الاستفسار إلى المعاينة.",
    },
    outcome: null,
    technologies: ["Next.js", "PostgreSQL", "Flutter"],
    year: "2024",
    accent: "#ca8a04",
  },
  {
    slug: "business-command-center",
    placeholder: true,
    featured: false,
    category: { en: "SaaS", ar: "SaaS" },
    industry: { en: "Professional Services", ar: "الخدمات المهنية" },
    platform: "Web",
    title: { en: "Business Command Center", ar: "مركز قيادة الأعمال" },
    tagline: {
      en: "One dashboard for sales, operations, and finance.",
      ar: "لوحة واحدة للمبيعات والعمليات والمالية.",
    },
    description: {
      en: "Placeholder case study showing how we present internal SaaS dashboards that consolidate business data.",
      ar: "دراسة حالة مؤقتة توضح طريقة عرضنا للوحات SaaS الداخلية التي تجمع بيانات العمل.",
    },
    problem: {
      en: "Placeholder: leadership decisions made from stale, disconnected reports.",
      ar: "محتوى مؤقت: قرارات الإدارة تُبنى على تقارير قديمة ومنفصلة.",
    },
    solution: {
      en: "Placeholder: warehouse-friendly API layer, role-based dashboards, and scheduled snapshots for month-end review.",
      ar: "محتوى مؤقت: طبقة API مهيأة للتجميع ولوحات بالصلاحيات ولقطات مجدولة لمراجعة نهاية الشهر.",
    },
    outcome: null,
    technologies: ["Next.js", ".NET", "PostgreSQL", "Docker"],
    year: "2025",
    accent: "#059669",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export const featuredProjects = projects.filter((p) => p.featured);
