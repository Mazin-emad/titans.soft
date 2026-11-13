import type { LocalizedText } from "./services";

export type PlatformType = "Web" | "Mobile" | "Desktop" | "Web + Mobile" | "API / Backend" | "AI Feature";

export interface Project {
  slug: string;
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
  /** ISO date (YYYY-MM-DD) of the last meaningful content change; drives sitemap lastmod. */
  updated?: string;
  /** Client display name; omit if under NDA. */
  client?: LocalizedText;
  /** Our role / scope on the engagement. */
  role?: LocalizedText;
  /** Delivery time, e.g. "4 months". */
  duration?: LocalizedText;
  /** Real, verifiable results only. Never invent numbers. */
  metrics?: { value: string; label: LocalizedText }[];
  /** Screenshots under /public/work/<slug>/, with localized alt text. */
  images?: { src: string; width: number; height: number; alt: LocalizedText }[];
  /** Optional detail blocks rendered under "What we built". */
  highlights?: { title: LocalizedText; body: LocalizedText }[];
  testimonial?: { quote: LocalizedText; name: string; role: LocalizedText };
}

/**
 * REAL client work — shipped, live and verifiable.
 * Every number here came from the delivered product; never invent one.
 */
export const projects: Project[] = [
  {
    slug: "elkhalily",
    featured: true,
    category: { en: "E-commerce", ar: "التجارة الإلكترونية" },
    industry: { en: "Retail — Tools & Equipment", ar: "التجزئة — الأدوات والمعدات" },
    platform: "Web",
    title: { en: "Elkhalily Tools", ar: "الخليلي للمعدات" },
    tagline: {
      en: "A complete commerce system for a tools retailer: real payments, automated shipping, and an admin dashboard that runs the whole store.",
      ar: "منظومة بيع متكاملة لتاجر أدوات ومعدات: دفع إلكتروني حقيقي، وشحن يعمل تلقائيًا، ولوحة تحكم تدير المتجر كله.",
    },
    description: {
      en: "Elkhalily is an Egyptian retailer of electric and hand tools and an authorized distributor for 28 brands, including Bosch, Total, Ingco and HiKOKI. What the business needed was not just a nicer website — it was a commerce system that takes an order from the first click to the customer's door with as little manual work as possible. We built the storefront and the logic-heavy flows on top of the platform's APIs: a full checkout connected to real payment gateways and payment methods, and the order and shipment states that follow it. The store is RTL-first, server-rendered with Next.js, and designed to feel instant on a phone. Behind it sits an admin dashboard that controls everything on the website — payment and shipping run through APIs on their own, while order and product management stay smart enough that the team spends its time selling, not chasing.",
      ar: "الخليلي تاجر أدوات ومعدات كهربائية ويدوية في مصر، وموزّع معتمد لـ 28 علامة تجارية منها Bosch وTotal وIngco وHiKOKI. لم يكن المطلوب موقعًا أجمل فحسب، بل منظومة بيع تأخذ الطلب من أول نقرة حتى باب العميل بأقل تدخّل يدوي ممكن. بنينا المتجر والمنطق الثقيل الذي يقوم عليه فوق واجهات الـ API الخاصة بالمنصة: عملية دفع كاملة مرتبطة ببوابات دفع ووسائل دفع حقيقية، وما يتبعها من حالات الطلب والشحن. والواجهة مبنية للعربية من الأساس، تُعرض من الخادم عبر Next.js، وتعمل على الجوال بسلاسة. ومن خلف المتجر لوحة تحكم تدير كل ما في الموقع — الدفع والشحن مرتبطان بواجهات API ويعملان تلقائيًا، وإدارة الطلبات والمنتجات ذكية بما يكفي ليتفرغ الفريق للبيع بدل المتابعة اليدوية.",
    },
    problem: {
      en: "A distributor of 28 brands was running a shop window, not a business system. Payment, shipping and order states had to be carried by hand between the storefront and the back office, the catalog of brands, categories, prices, discounts, stock and bundles had no single place to live, and the previous site was heavy enough to lose customers on mobile.",
      ar: "موزّع معتمد لـ 28 علامة تجارية كان يدير واجهة عرض، لا منظومة أعمال. كان الدفع والشحن وحالات الطلب تُنقل يدويًا بين المتجر والمكتب الخلفي، ولا مكان واحد تجمع الكتالوج من علامات وأقسام وأسعار وخصومات ومخزون وحِزم، وكان الموقع السابق ثقيلًا بما يكفي ليخسر العملاء على الجوال.",
    },
    solution: {
      en: "A full commerce platform, built RTL-first and server-rendered by default: a storefront with real filters, product pages, galleries, discounts and bundles; a checkout wired to live payment gateways; shipping connected through carrier APIs; and one admin dashboard that runs products, orders, payments and shipping day to day. On top of that, a contact layer built for a business with three branches — live open/closed status, map and directions, six phone lines, WhatsApp, Messenger and Telegram — and a mobile experience that behaves like an app.",
      ar: "منظومة بيع متكاملة، مبنية للعربية من اليمين إلى اليسار ومن الأساس، ومُعرضة من الخادم افتراضيًا: واجهة متجر بفلاتر حقيقية وصفحات منتجات بمعرض وخصومات وحِزم، وإتمام طلب مرتبط ببوابات دفع حقيقية، وشحن موصول بواجهات شركات الشحن، ولوحة تحكم واحدة تدير المنتجات والطلبات والدفع والشحن يومًا بعد يوم. وفوق ذلك طبقة تواصل تليق بنشاط حقيقي بثلاثة فروع: حالة فتح وإغلاق مباشرة، وخريطة واتجاهات، وستة أرقام هاتف، وواتساب وماسنجر وتيليجرام، وتجربة على الجوال تسلك سلوك التطبيق.",
    },
    outcome: {
      en: "The store shipped in November 2026 with the whole journey — browse, checkout, payment, shipment and tracking — running on its own, and a dashboard the team operates without a developer. On mobile, home-page network requests fell from about 271 to about 53 and first contentful paint from 3.0s to 1.1s, with roughly 60% better SEO against the previous site.",
      ar: "أُطلق المتجر في نوفمبر 2026 وقد تعملت الرحلة كاملة — التصفّح، وإتمام الطلب، والدفع، والشحن، والتتبّع — من تلقاء نفسها، مع لوحة تحكم يشغّلها الفريق دون الحاجة إلى مطوّر. وعلى الجوال انخفضت طلبات الشبكة في الصفحة الرئيسية من نحو 271 إلى نحو 53، وانخفض أول ظهور للمحتوى من 3.0 ثانية إلى 1.1 ثانية، مع تحسّن في السيو بنحو 60% مقارنةً بالموقع السابق.",
    },
    technologies: ["Next.js", "React", "Tailwind CSS", "shadcn/ui", "REST APIs", "Payment Gateways", "Shipping APIs", "Vercel"],
    year: "2026",
    url: "https://elkhalily.vercel.app",
    accent: "#e0614f",
    updated: "2026-11-12",
    client: { en: "Elkhalily Tools", ar: "الخليلي للمعدات" },
    role: { en: "Full-stack delivery, start to finish", ar: "تطوير متكامل من البداية حتى التسليم" },
    duration: { en: "Delivered November 2026", ar: "أُطلق في نوفمبر 2026" },
    metrics: [
      { value: "≈60%", label: { en: "SEO improvement vs. previous site", ar: "تحسّن السيو مقارنةً بالموقع السابق" } },
      { value: "271 → 53", label: { en: "network requests (home, mobile)", ar: "طلبات الشبكة (الرئيسية، جوال)" } },
      { value: "3.0s → 1.1s", label: { en: "first contentful paint (mobile)", ar: "أول ظهور للمحتوى (جوال)" } },
      { value: "28", label: { en: "authorized brands", ar: "علامة تجارية معتمدة" } },
    ],
    images: [
      { src: "/work/elkhalily/hero-desktop.webp", width: 1440, height: 900, alt: { en: "Home — hero and categories", ar: "الرئيسية — الواجهة والأقسام" } },
      { src: "/work/elkhalily/categories-desktop.webp", width: 1440, height: 900, alt: { en: "Categories and featured products", ar: "الأقسام وأحدث المنتجات" } },
      { src: "/work/elkhalily/home-mobile.webp", width: 780, height: 1328, alt: { en: "Home on mobile with bottom navigation", ar: "الرئيسية على الجوال مع الشريط السفلي" } },
      { src: "/work/elkhalily/categories-mobile.webp", width: 780, height: 1328, alt: { en: "Categories on mobile", ar: "الأقسام على الجوال" } },
      { src: "/work/elkhalily/featured-mobile.webp", width: 780, height: 1328, alt: { en: "Featured products on mobile", ar: "أحدث المنتجات على الجوال" } },
      { src: "/work/elkhalily/offer-desktop.webp", width: 1440, height: 900, alt: { en: "Bundle offer banner", ar: "بانر عرض الحزمة" } },
      { src: "/work/elkhalily/shop-real-desktop.webp", width: 1440, height: 900, alt: { en: "Shop with filters", ar: "المتجر مع الفلاتر" } },
      { src: "/work/elkhalily/shop-real-mobile.webp", width: 780, height: 1328, alt: { en: "Shop on mobile", ar: "المتجر على الجوال" } },
      { src: "/work/elkhalily/product-real-desktop.webp", width: 1440, height: 900, alt: { en: "Product page", ar: "صفحة المنتج" } },
      { src: "/work/elkhalily/product-real-mobile.webp", width: 780, height: 1328, alt: { en: "Product page on mobile", ar: "صفحة المنتج على الجوال" } },
      { src: "/work/elkhalily/brand-desktop.webp", width: 1440, height: 900, alt: { en: "Brand page", ar: "صفحة العلامة التجارية" } },
      { src: "/work/elkhalily/brand-mobile.webp", width: 780, height: 1328, alt: { en: "Brand page on mobile", ar: "صفحة العلامة التجارية على الجوال" } },
      { src: "/work/elkhalily/professions-desktop.webp", width: 1440, height: 900, alt: { en: "Shop by profession", ar: "تسوّق حسب المهنة" } },
      { src: "/work/elkhalily/contact-desktop.webp", width: 1440, height: 900, alt: { en: "Contact — branches and live status", ar: "التواصل — الفروع والحالة المباشرة" } },
      { src: "/work/elkhalily/footer-desktop.webp", width: 1440, height: 900, alt: { en: "Footer — authorized brands, quick links and branch numbers", ar: "التذييل — العلامات المعتمدة وروابط سريعة وأرقام الفروع" } },
      { src: "/work/elkhalily/login-desktop.webp", width: 1440, height: 900, alt: { en: "Sign in", ar: "تسجيل الدخول" } },
      { src: "/work/elkhalily/login-mobile.webp", width: 780, height: 1328, alt: { en: "Sign in on mobile", ar: "تسجيل الدخول على الجوال" } },
    ],
    highlights: [
      {
        title: { en: "Checkout wired to real payments", ar: "إتمام طلب مرتبط بدفع حقيقي" },
        body: {
          en: "A complete checkout connected to live payment gateways and multiple payment methods. The interface walks the customer through the whole payment journey, so they always know where their order stands.",
          ar: "عملية إتمام طلب كاملة مرتبطة ببوابات دفع حقيقية وعدة وسائل دفع. والواجهة ترافق العميل في رحلة الدفع كلها، فيعرف دائمًا أين وصل طلبه.",
        },
      },
      {
        title: { en: "Payment and shipping on autopilot", ar: "دفع وشحن بلا تدخّل يدوي" },
        body: {
          en: "Both are integrated through APIs and fully automated. Once an order is placed, payment and shipment move forward on their own — no one has to copy details between systems.",
          ar: "كلاهما مرتبط عبر واجهات API ويعمل تلقائيًا بالكامل. ما إن يُسجَّل الطلب حتى يتحرك الدفع والشحن من تلقاء نفسيهما، ولا أحد يضطر إلى نقل البيانات بين الأنظمة.",
        },
      },
      {
        title: { en: "An admin dashboard that runs the store", ar: "لوحة تحكم تدير المتجر" },
        body: {
          en: "One dashboard controls everything on the website — products, orders, shipping and payments — so the team operates the store day to day without a developer.",
          ar: "لوحة واحدة يتحكم منها الفريق في كل ما يخص الموقع — المنتجات والطلبات والشحن والدفع — ويشغّل المتجر يوميًا دون الحاجة إلى مطوّر.",
        },
      },
      {
        title: { en: "Smart order and product management", ar: "إدارة ذكية للطلبات والمنتجات" },
        body: {
          en: "Orders travel from purchase to delivery with far less follow-up, and the catalog — brands, categories, prices, discounts, stock and bundles — is managed from one place.",
          ar: "الطلبات تسير من الشراء حتى التسليم بمتابعة أقل بكثير، والكتالوج — بعلاماته وأقسامه وأسعاره وخصوماته ومخزونه وحِزمه — يُدار من مكان واحد.",
        },
      },
      {
        title: { en: "A storefront built to sell", ar: "متجر مبني ليبيع" },
        body: {
          en: "Real filters (price, availability, brand with live counts, sorting), product pages with galleries, discounts, tabs and “bought together” bundles, plus wishlist, compare-up-to-4 and order tracking.",
          ar: "فلاتر حقيقية (السعر والتوفر والعلامة التجارية بعدّاد حي والترتيب)، وصفحات منتجات بمعرض صور وخصومات وتبويبات وحزمة «اشترِ معه»، إضافة إلى المفضلة ومقارنة حتى 4 منتجات وتتبّع الطلبات.",
        },
      },
      {
        title: { en: "Contact built for a real business", ar: "تواصل يليق بنشاط حقيقي" },
        body: {
          en: "Three branches with live open/closed status, map and directions, six phone lines, WhatsApp, Messenger and Telegram, and a message form.",
          ar: "ثلاثة فروع بحالة فتح وإغلاق مباشرة، وخريطة واتجاهات، وستة أرقام هاتف، وواتساب وماسنجر وتيليجرام، ونموذج رسالة.",
        },
      },
      {
        title: { en: "App-like on mobile", ar: "تجربة كأنها تطبيق على الجوال" },
        body: {
          en: "A bottom tab bar (home, categories, offers, wishlist, account), a floating WhatsApp button, light and dark themes, and a profession picker for electricians, plumbers, carpenters, mechanics and more.",
          ar: "شريط تنقّل سفلي (الرئيسية، الأقسام، العروض، المفضلة، حسابي)، وزر واتساب عائم، ووضعان فاتح وداكن، واختيار حسب المهنة للكهربائي والسباك والنجار والميكانيكي وغيرهم.",
        },
      },
    ],
  },
  {
    slug: "wsyelh",
    featured: true,
    category: { en: "EdTech", ar: "منصة تعليمية" },
    industry: { en: "Education", ar: "التعليم" },
    platform: "Web",
    title: { en: "Wsyelh", ar: "وسيلة" },
    tagline: {
      en: "An exam preparation and correction platform with AI-driven features, live with real educators in the Saudi market.",
      ar: "منصة لتحضير الاختبارات وتصحيحها، مدعومة بالذكاء الاصطناعي، تعمل مع معلمين حقيقيين في السوق السعودي.",
    },
    description: {
      en: "Wsyelh is an exam preparation platform enhanced with AI-driven features that streamline how students and educators work. It was built for a private educational client in Saudi Arabia, and it runs today with real teachers and real students in a live market — not a demo. We delivered the platform end to end, including a modern, intuitive interface in React with shadcn/ui and Tailwind CSS, integrated with a .NET backend.",
      ar: "وسيلة منصة لتحضير الاختبارات، تستعين بالذكاء الاصطناعي لتخفّف العبء عن الطلاب والمعلمين. بُنيت لعميل تعليمي خاص في السعودية، وتعمل اليوم مع معلمين وطلاب حقيقيين في سوق حيّ — وليست عرضًا تجريبيًا. وقد سلّمنا المنصة كاملة من البداية حتى التشغيل، بواجهة حديثة وسهلة الاستخدام بـ React و shadcn/ui و Tailwind CSS، مرتبطة بخادم .NET.",
    },
    problem: {
      en: "Preparing an exam, collecting the answer sheets, correcting them and reporting back to the class was a manual loop for every teacher. A paper had to be formatted by hand, the sheets tracked on a side list, and each result turned by hand into something a student could read — while the class roster, the exam and the results lived in three disconnected places.",
      ar: "كان تحضير اختبار، ثم جمع أوراق الإجابة، ثم تصحيحها، ثم إبلاغ الطلاب بالنتائج، دورة يدوية بالكامل لكل معلم. كان على المعلم تنسيق ورقة الاختبار بنفسه، ومتابعة الأوراق على قائمة جانبية، وتحويل كل نتيجة يدويًا إلى صيغة يقرأها الطالب — بينما كانت الفصول والاختبارات والنتائج موزّعة في ثلاثة أماكن منفصلة.",
    },
    solution: {
      en: "An educator-first platform where the whole loop happens in one place: exams are prepared inside the platform itself, answer papers are uploaded through a dedicated flow and their correction reviewed in place, classes are managed alongside them, and a clear dashboard gives each educator a single overview of exams, classes and results. At the end of the loop, the report is generated automatically as a PDF through React PDF.",
      ar: "منصة تضع المعلم أولًا، حيث تجري الدورة كاملة في مكان واحد: يجهّز المعلم اختباراته من داخل المنصة نفسها، ويرفع أوراق الإجابة عبر مسار مخصص ثم يراجع نتيجة التصحيح في مكانها، وتُدار الفصول إلى جانبها، وتعرض لوحة معلومات واضحة لكل معلم صورة واحدة عن اختباراته وفصوله ونتائجه. وفي نهاية الدورة تُنشأ التقارير تلقائيًا بصيغة PDF عبر React PDF.",
    },
    outcome: {
      en: "Wsyelh is live in the Saudi market, serving real educators and real users rather than a pilot. What used to be a manual loop of formatting, collecting, correcting and reporting now runs as a single flow inside the platform, with the printable report produced automatically at the end of it.",
      ar: "وسيلة تعمل اليوم في السوق السعودي لخدمة معلمين ومستخدمين حقيقيين، لا تجربة تجريبية. ما كان دورة يدوية من التنسيق والجمع والتصحيح وإعداد التقارير أصبح مسارًا واحدًا داخل المنصة، مع إنتاج التقرير القابل للطباعة تلقائيًا في نهايته.",
    },
    technologies: ["React", "shadcn/ui", "Tailwind CSS", "React PDF", ".NET API"],
    year: "2025 — 2026",
    url: "https://examcorrection.wsyelhi.com/",
    accent: "#34d399",
    updated: "2026-11-12",
    role: { en: "Full-stack delivery, start to finish", ar: "تطوير متكامل من البداية حتى التسليم" },
    duration: { en: "Delivered across 2025 — 2026", ar: "أُطلق خلال 2025 — 2026" },
    images: [
      { src: "/work/wsyelh/dashboard.jpeg", width: 1280, height: 720, alt: { en: "Dashboard", ar: "لوحة المعلومات" } },
      { src: "/work/wsyelh/exams.jpeg", width: 1280, height: 720, alt: { en: "Exams", ar: "الاختبارات" } },
      { src: "/work/wsyelh/preparing-exam.jpeg", width: 1280, height: 720, alt: { en: "Preparing an exam", ar: "تحضير اختبار" } },
      { src: "/work/wsyelh/upload-exam.jpeg", width: 1280, height: 720, alt: { en: "Uploading papers", ar: "رفع الأوراق" } },
      { src: "/work/wsyelh/corection.jpeg", width: 1280, height: 720, alt: { en: "Correction", ar: "التصحيح" } },
      { src: "/work/wsyelh/classes.jpeg", width: 1280, height: 720, alt: { en: "Classes", ar: "الفصول" } },
      { src: "/work/wsyelh/reports.jpeg", width: 1280, height: 720, alt: { en: "Reports", ar: "التقارير" } },
      { src: "/work/wsyelh/login.jpeg", width: 1280, height: 720, alt: { en: "Login", ar: "تسجيل الدخول" } },
    ],
    highlights: [
      {
        title: { en: "Dynamic exam generation", ar: "إنشاء الاختبارات" },
        body: {
          en: "Educators prepare exams from within the platform, so the paper, its sections and its marks live in one structured object instead of a document that has to be retyped.",
          ar: "يجهّز المعلم اختباراته من داخل المنصة نفسها، فتصبح الورقة وأقسامها ودرجاتها كائنًا واحدًا منظمًا بدل مستند يجب إعادة كتابته.",
        },
      },
      {
        title: { en: "Upload and correction", ar: "رفع الأوراق وتصحيحها" },
        body: {
          en: "A dedicated flow to upload exam papers and review their correction, keeping the scan and the marks attached to the same exam.",
          ar: "مسار مخصص لرفع أوراق الإجابة ثم مراجعة نتيجة تصحيحها، تبقى فيه الصورة والدرجات مرتبطين بالاختبار نفسه.",
        },
      },
      {
        title: { en: "Classes and reports", ar: "الفصول والتقارير" },
        body: {
          en: "Class management plus automated PDF reports generated with React PDF, so the summary a teacher hands back is produced by the system rather than typed up.",
          ar: "إدارة للفصول، وتقارير PDF تُنشأ تلقائيًا بـ React PDF، فيصبح ملخص المعلم الذي يسلّمه للطلاب من إنتاج النظام لا من كتابته يدويًا.",
        },
      },
      {
        title: { en: "Dashboard", ar: "لوحة المعلومات" },
        body: {
          en: "A clear overview of exams, classes and results for each educator.",
          ar: "صورة واضحة لاختبارات المعلم وفصوله ونتائجه في مكان واحد.",
        },
      },
    ],
  },
  {
    slug: "hesabc-erp",
    featured: true,
    category: { en: "ERP / Business Systems", ar: "أنظمة ERP والأعمال" },
    industry: { en: "Retail — Home Appliances & Furnishings", ar: "التجزئة — الأجهزة المنزلية والأثاث" },
    platform: "Desktop",
    title: { en: "Hesabc", ar: "حسابك" },
    tagline: {
      en: "A desktop ERP for installment retail: customers, invoices, monthly installments and field collections in one system.",
      ar: "نظام ERP لسطح المكتب لتجارة التجزئة بالأقساط: عملاء وفواتير وأقساط شهرية وتحصيل ميداني في نظام واحد.",
    },
    description: {
      en: "Hesabc is a desktop ERP system built for a home-appliances and furnishings retailer that sells on installments and collects payments in the field. It replaces scattered paper records and Excel sheets with a single source of truth, linking customer → representative → collector → region → invoice → monthly installment → commission in one system. Built with WPF, C# and .NET 9 over SQL Server, it is a four-project layered solution — Core, Infrastructure, Service and UI — using a Generic Repository, Unit of Work, dependency injection and AutoMapper mapping, with roughly 30 entities, 45 views and 40 database migrations. Migrations and JSON seeding run automatically at startup, so the system always opens on a consistent database.",
      ar: "حسابك نظام ERP لسطح المكتب، بُني لمتجر أجهزة منزلية وأثاث يبيع بالأقساط ويحصّل التحصيل في الميدان. يحلّ محل الأوراق وجداول Excel متناثرة بمصدر واحد للحقيقة، ويربط في نظام واحد: العميل ← المندوب ← المحصّل ← المنطقة ← الفاتورة ← القسط الشهري ← العمولة. مبني بـ WPF و C# و .NET 9 فوق SQL Server، وهو حل مُقسّم إلى أربعة مشاريع بطبقات واضحة — Core و Infrastructure و Service و UI — يعتمد Generic Repository و Unit of Work وحقن الاعتماديات وخريطة AutoMapper، بما يقارب 30 كيانًا و45 شاشة و40 ترحيلًا لقاعدة البيانات. وتُنفَّذ الترحيلات وبيانات التهيئة بصيغة JSON تلقائيًا عند الإقلاع، فيفتح النظام دائمًا على قاعدة بيانات متسقة.",
    },
    problem: {
      en: "Installment retail runs on paperwork. Customer files, representative covenants, commissions and monthly collections were spread across paper ledgers and Excel sheets, so nobody could answer a simple question — what does this representative still owe, and which installments were collected this month — without reconciling several documents by hand. The data was also fragile: any edit to an invoice meant rebuilding its installment plan and its commissions from scratch, and deleting an invoice left stock and discounts out of step.",
      ar: "تجارة التجزئة بالأقساط تعمل على الورق. كانت ملفات العملاء وعهد المندوبين والعمولات والتحصيل الشهري موزّعة بين دفاتر ورقية وجداول Excel، فلا يستطيع أحد الإجابة عن سؤال بسيط — ما الذي ما زال على هذا المندوب، وأي الأقساط حُصّل هذا الشهر — دون تسوية عدة مستندات يدويًا. وكان ذلك هشاشةً في البيانات: أي تعديل على فاتورة يعني إعادة بناء خطة أقساطها وعمولاتها من الصفر، وحذف فاتورة كان يترك المخزون والخصومات في غير موضعها.",
    },
    solution: {
      en: "A Windows desktop ERP that treats the whole retail chain as a single transaction. Customer, invoice, items, installment plan and commissions are persisted atomically inside a database transaction that rolls back on failure, and installment generation runs sequentially across multiple plans in a single invoice. Commission values are stored as a snapshot per invoice item and re-synchronised when quantities change or a line is deleted. Soft delete and audit fields preserve financial history instead of erasing it, Arabic RTL receipts are generated as A5 PDFs with QuestPDF, and reports are styled for Excel with ClosedXML. Every screen ships with inline validation, loading states and a dark, light, blue and green theme set.",
      ar: "نظام ERP لسطح المكتب يعمل على Windows، ويعامل سلسلة التجزئة كلها كصفقة واحدة. يُحفظ العميل والفاتورة والأصناف وخطة الأقساط والعمولات ذرّيًا داخل معاملة واحدة في قاعدة البيانات مع التراجع عند الفشل، ويتولّد الأقساط بالتسلسل عبر عدة خطط داخل الفاتورة الواحدة. وتُحفظ قيمة العمولة كصورة ثابتة لكل صنف في الفاتورة وتُزامن من جديد عند تعديل الكميات أو حذف صنف. ويحفظ الحذف الناعم وحقول التدقيق التاريخ المالي بدل محوه. وتُولَّد الإيصالات العربية من اليمين إلى اليسار بصيغة PDF بمقاس A5 عبر QuestPDF، وتُنسَّق التقارير للإكسل عبر ClosedXML. وكل شاشة تأتي بتحقق فوري وحالات تحميل ومجموعة ثيمات داكنة وفاتحة وزرقاء وخضراء.",
    },
    outcome: {
      en: "Hesabc is the retailer's single source of truth. Paper ledgers and Excel sheets were retired, monthly collections and representative settlements now run from the system itself, and stock, covenants and commissions stay in step because they are updated by the same transaction that writes the invoice. The seeded catalog carries 716 products, and the codebase behind it is a layered solution the team can extend without rework.",
      ar: "حسابك هو مصدر الحقيقة الوحيد للمتجر. خرجت الدفاتر الورقية وجداول Excel من دورة العمل، وأصبح التحصيل الشهير وتسوية المندوبين يعملان من النظام نفسه، وبقي المخزون والعهد والعمولات متسقة لأنها تُحدَّث بالمعاملة نفسها التي تكتب الفاتورة. ويضم الكتالوج المبدئي 716 منتجًا، ويقوم خلفه حل مُقسّم إلى طبقات يستطيع الفريق توسيعها دون إعادة بناء.",
    },
    technologies: ["C#", ".NET 9", "WPF", "XAML", "Entity Framework Core 9", "SQL Server", "ClosedXML", "QuestPDF", "AutoMapper", "Dependency Injection"],
    year: "2025",
    accent: "#1E3A5F",
    updated: "2026-11-12",
    client: { en: "ErpSystem Beni Souef", ar: "إير بي سيستم — بني سويف" },
    role: { en: "Full-stack delivery, start to finish", ar: "تطوير متكامل من البداية حتى التسليم" },
    duration: { en: "Delivered 2025", ar: "أُطلق في 2025" },
    metrics: [
      { value: "716", label: { en: "products in the seeded catalog", ar: "منتجًا في الكتالوج المبدئي" } },
      { value: "45", label: { en: "screens in the desktop application", ar: "شاشة في تطبيق سطح المكتب" } },
      { value: "40", label: { en: "database migrations", ar: "ترحيلًا لقاعدة البيانات" } },
      { value: "12", label: { en: "connected business modules", ar: "وحدة أعمال مترابطة" } },
    ],
    images: [
      { src: "/work/hesabc-erp/1.jpeg", width: 1280, height: 720, alt: { en: "Dashboard — records, budgets, accounts and journal entries", ar: "لوحة التحكم — السجلات والموازنة والحسابات والقيود اليومية" } },
      { src: "/work/hesabc-erp/2.jpeg", width: 1280, height: 720, alt: { en: "Financial period with client and supplier filters and journal entries", ar: "الفترة المالية مع فلاتر العملاء والموردين والقيود اليومية" } },
      { src: "/work/hesabc-erp/3.jpeg", width: 1280, height: 720, alt: { en: "Clients — representative, sales totals and region", ar: "العملاء — المندوب وإجمالي المبيعات والمنطقة" } },
      { src: "/work/hesabc-erp/4.jpeg", width: 1280, height: 720, alt: { en: "Control dashboard with journal entry actions", ar: "لوحة التحكم مع إجراءات القيود اليومية" } },
      { src: "/work/hesabc-erp/5.jpeg", width: 1280, height: 720, alt: { en: "Financial periods — accounts, transactions and period totals", ar: "الفترات المالية — الحسابات والحركات وإجماليات الفترة" } },
      { src: "/work/hesabc-erp/6.jpeg", width: 1280, height: 720, alt: { en: "Main menu — pricing, reports, collections, purchases and expenses", ar: "القائمة الرئيسية — التسعير والتقارير والتحصيل والمشتريات والمصروفات" } },
      { src: "/work/hesabc-erp/7.jpeg", width: 1280, height: 720, alt: { en: "Dashboard with period filters and journal list", ar: "لوحة التحكم مع فلاتر الفترات وقائمة القيود" } },
      { src: "/work/hesabc-erp/8.jpeg", width: 1280, height: 720, alt: { en: "Chart of accounts — code, type, ledger and period balances", ar: "شيفرات الحسابات — الكود والنوع والدفتر وأرصدة الفترة" } },
      { src: "/work/hesabc-erp/9.jpeg", width: 1280, height: 720, alt: { en: "Client accounts with balances and counts", ar: "حسابات العملاء مع الأرصدة والأعداد" } },
      { src: "/work/hesabc-erp/10.jpeg", width: 1280, height: 720, alt: { en: "Users — accounts, roles and branch access", ar: "المستخدمون — الحسابات والأدوار والصلاحيات" } },
      { src: "/work/hesabc-erp/11.jpeg", width: 1280, height: 720, alt: { en: "Journal entries with a saved confirmation", ar: "القيود اليومية مع رسالة تأكيد الحفظ" } },
      { src: "/work/hesabc-erp/12.jpeg", width: 1280, height: 720, alt: { en: "Sign in", ar: "تسجيل الدخول" } },
    ],
    highlights: [
      {
        title: { en: "Installment sales — the core flow", ar: "البيع بالأقساط — المسار الأساسي" },
        body: {
          en: "Create the customer, the invoice, its items and the installment plan in one flow, inside a database transaction that also auto-generates the monthly installments and the per-item commissions. Editing recalculates, and deleting restores stock and reverses the discounts and commissions it created.",
          ar: "أنشئ العميل والفاتورة وأصنافها وخطة الأقساط في مسار واحد، داخل معاملة في قاعدة البيانات تولّد أيضًا الأقساط الشهرية وعمولة كل صنف تلقائيًا. والتعديل يعيد الحساب، والحذف يعيد المخزون ويلغي الخصومات والعمولات التي أنشأها.",
        },
      },
      {
        title: { en: "Monthly collection in the field", ar: "التحصيل الشهري في الميدان" },
        body: {
          en: "Load a collector's installments for a month, record the amounts actually collected, and have each installment marked paid automatically once it is complete.",
          ar: "حمّل أقساط محصّل عن شهر واحد، وسجّل المبالغ المحصّلة فعليًا، ويُعلَّم كل قسط كمدفوع تلقائيًا عند اكتماله.",
        },
      },
      {
        title: { en: "Covenants and commissions", ar: "العهد والعمولات" },
        body: {
          en: "Monthly representative covenants are loaded with product quantities, and each commission is stored as a snapshot per invoice item so it stays accurate after a quantity change or a deletion.",
          ar: "تُحمَّل عهد المندوبين الشهرية بكميات المنتجات، وتُحفظ كل عمولة كصورة ثابتة لكل صنف في الفاتورة، فتبقى دقيقة بعد تغيير الكمية أو الحذف.",
        },
      },
      {
        title: { en: "Product catalog with live margin", ar: "كتالوج منتجات بهامش محسوب" },
        body: {
          en: "Categories, purchase and sale prices, representative commission and an automatically calculated profit margin, with price validation and a seeded catalog of 716 products.",
          ar: "الأقسام وأسعار الشراء والبيع وعمولة المندوب وهامش ربح محسوب تلقائيًا، مع التحقق من الأسعار وكتالوج مبدئي يضم 716 منتجًا.",
        },
      },
      {
        title: { en: "Regions and people", ar: "المناطق والأفراد" },
        body: {
          en: "Hierarchical regions and sub-regions with custom numbering, cascading filters and soft delete, plus full records for representatives, collectors, storekeepers and suppliers.",
          ar: "مناطق ومناطق فرعية هرمية بترقيم مخصّص وفلاتر متتالية وحذف ناعم، إلى جانب سجلات كاملة للمندوبين والمحصّلين وأمناء المخزن والموردين.",
        },
      },
      {
        title: { en: "Cash sales and petty cash", ar: "المبيعات النقدية والصندوق النثرية" },
        body: {
          en: "A separate cash-invoice workflow with multi-item entry and live totals, and expense and withdrawal records kept apart from each other.",
          ar: "مسار منفصل لفواتير النقد بإدخال عدة أصناف وحسابات مباشرة، وسجلات مصروفات وسحوبات محفوظة بعيدًا عن بعضها.",
        },
      },
      {
        title: { en: "Receipts and Arabic PDFs", ar: "الإيصالات وملفات PDF العربية" },
        body: {
          en: "Three receipt views — all, by region and by collector — and A5 PDF generation that prints a single receipt, a selection, or every receipt into a single file.",
          ar: "ثلاثة عروض للإيصالات — الكل، بحسب المنطقة، بحسب المحصّل — وتوليد PDF بمقاس A5 يطبع إيصالًا واحدًا أو مجموعة أو كل الإيصالات في ملف واحد.",
        },
      },
      {
        title: { en: "Supplier invoices and statements", ar: "فواتير الموردين وكشوف الحساب" },
        body: {
          en: "Cash, due and return invoices, supplier payments, and a supplier statement over a date range with totals and outstanding balances.",
          ar: "فواتير نقدية وآجلة ومرتجعات، ومدفوعات للموردين، وكشف حساب مورد على مدى فترة بإجماليات وأرصدة مستحقة.",
        },
      },
      {
        title: { en: "Reports and Excel export", ar: "التقارير والتصدير للإكسل" },
        body: {
          en: "Reports for installment sales, cash sales, representative commissions and covenants, with a representative summary — deposits plus cash plus commissions equals net due — and professionally formatted Excel export.",
          ar: "تقارير للمبيعات بالأقساط والمبيعات النقدية وعمولات المندوبين والعهد، مع ملخص لكل مندوب — الودائع النقدية زائد التحصيل النقدي زائد العمولات يساوي المستحق الصافي — وتصدير منسّق للإكسل.",
        },
      },
      {
        title: { en: "Cross-aggregate consistency", ar: "اتساق بين الكيانات" },
        body: {
          en: "Customer, invoice, items, plans, installments and commissions are persisted atomically with rollback on failure, and EF Core relationship tuning cascades only where required and restricts elsewhere, avoiding multiple cascade paths.",
          ar: "يُحفظ العميل والفاتورة والأصناف والخطط والأقساط والعمولات ذرّيًا مع التراجع عند الفشل، وقد ضُبطت العلاقات في EF Core لتتصاعد عند الحاجة فقط وتُقيّد في غير ذلك، تفاديًا لمسارات التصعيد المتعددة.",
        },
      },
    ],
  },
  {
    slug: "titans-pharmacy",
    featured: false,
    category: { en: "Healthcare", ar: "الرعاية الصحية" },
    industry: { en: "Pharmacy & Retail", ar: "الصيدلات والتجارة" },
    platform: "Desktop",
    title: { en: "Pharmacy Management System", ar: "نظام إدارة الصيدلية" },
    tagline: {
      en: "A role-based Windows desktop application for pharmacy operations: medicine inventory, expiry monitoring, point-of-sale invoicing and staff accounts in one system.",
      ar: "تطبيق سطح مكتب لويندوز مبني على الصلاحيات لإدارة الصيدلية: مخزون الأدوية ومراقبة الصلاحية ونقطة البيع والفواتير وحسابات الموظفين في نظام واحد.",
    },
    description: {
      en: "The Pharmacy Management System is a role-based Windows desktop application that digitizes the daily workflow of a pharmacy. It was built with C# and .NET 9 on Windows Forms, with Entity Framework Core 9 over SQL Server, and it covers the four jobs that used to eat the day: keeping medicine stock accurate, knowing what is about to expire, ringing up sales, and controlling who can do what. Medicine inventory, expiry monitoring, point-of-sale invoicing and staff administration all live in one application behind a single dashboard shell — with the Admin, Pharmacist and Cashier roles seeded automatically on first run.",
      ar: "نظام إدارة الصيدلية تطبيق سطح مكتب لويندوز مبني على الصلاحيات، يرقمن العمل اليومي للصيدلية. بُني بـ C# و .NET 9 على Windows Forms، مع Entity Framework Core 9 فوق SQL Server، ويغطي المهام الأربع التي كانت تستهلك اليوم: حفظ مخزون الأدوية دقيقة، ومعرفة ما أوشك على الانتهاء، وبيع الفواتير، والتحكم في من يملك أي صلاحية. مخزون الأدوية، ومراقبة الصلاحية، ونقطة البيع والفواتير، وإدارة الموظفين كلها في تطبيق واحد داخل هيكل لوحة تحكم موحّد — مع أدوار Admin و Pharmacist و Cashier تُنشأ تلقائيًا عند أول تشغيل.",
    },
    problem: {
      en: "A pharmacy runs on four disconnected paper routines. Stock was counted by hand and rewritten onto a sheet, expiry dates were noticed only when a customer pointed at the box, the sale was written in a book that was never reconciled with the shelves, and staff access was a matter of whoever had the keys. Nothing was wrong with the people — the problem was that none of the four routines spoke to the others, so a wrong number in one place silently became a wrong decision everywhere else.",
      ar: "الصيدلية تعمل بأربع عادات ورقية منفصلة. كان المخزون يُعدّ باليد ويُعاد تدوينه في ورقة، وكانت تواريخ الصلاحية لا تُلاحظ إلا عندما يشير العميل إلى العلبة، وكان البيع يُكتب في دفتر لا يُسوّى أبدًا مع الرفوف، وصلاحية الموظفين أمر من يملك المفتاح. لم يكن الخلل في الأشخاص — بل في أن هذه العادات الأربع لم تكن تتحدث مع بعضها، فصار الرقم الخاطئ في مكان واحد قرارًا خاطئًا في كل مكان آخر.",
    },
    solution: {
      en: "A single Windows desktop application that carries the whole pharmacy on one database. Medicines are added with manufacturing date, expiry date, quantity and unit price, and every record is validated before it is saved — required fields, positive quantity and price, and an expiry date that must fall after the manufacturing date. Every medicine is then classified automatically as Expired, Expiring Soon (within 30 days) or Valid, and the grid colours them red, amber and green so the shelf can be read at a glance. At the counter, the pharmacist looks up a medicine by name, gets a live stock check before the line is added, and the invoice is written as a master–detail record that deducts the stock as it completes. On top of that sits the account layer: BCrypt-hashed passwords, a strong-password policy, unique indexes on email, username and phone, soft delete instead of destructive deletes, and role-based screen access enforced by the application rather than by hiding a button.",
      ar: "تطبيق سطح مكتب واحد لويندوز يحمل الصيدلية كاملة على قاعدة بيانات واحدة. تُضاف الأدوية بتاريخ التصنيع وتاريخ الانتهاء والكمية والسعر للوحدة، ويُتحقق من كل سجل قبل حفظه: الحقول المطلوبة، والكمية والسعر الموجبان، وتاريخ انتهاء يقع بعد تاريخ التصنيع. ثم يُصنَّف كل دواء تلقائيًا على أنه منتهٍ أو قارب على الانتهاء (خلال 30 يومًا) أو سليم، وتلوّن الشبكة السطور بالأحمر والكهرماني والأخضر لتُقرأ الرفوف بنظرة واحدة. وعند الصندوق يبحث الصيدلي عن الدواء بالاسم، ويتحقق من توافره مباشرة قبل إضافة السطر، وتُكتب الفاتورة سجلًا رئيسيًا بتفاصيلها مع خصم المخزون فور إتمامها. وفوق ذلك طبقة الحسابات: كلمات مرور مجزّأة بـ BCrypt، وسياسة كلمة مرور قوية، وفهارس فريدة على البريد واسم المستخدم ورقم الهاتف، وحذف ناعم بدل الحذف النهائي، وصلاحيات على مستوى الشاشات يفرضها التطبيق نفسه لا مجرد إخفاء زر.",
    },
    outcome: {
      en: "The pharmacy's daily loop now lives in one place. Expiry is caught before it costs money, the counter sells against real stock numbers, and every sale leaves a traceable invoice attributed to the member of staff who made it. Nothing is destroyed — deleted records are archived and can be restored, so the history behind the numbers survives. The screens are part of the deliverable too: one consistent shell, one typography scale, wheat-toned grid headers and inline validation, with toasts and confirmation dialogs instead of interruption-heavy message boxes — and below 1180 px the sidebar collapses into a drawer, so the same application still works in a narrow window.",
      ar: "أصبحت دورة العمل اليومية في الصيدلية في مكان واحد. تُلتقط صلاحية الأدوية قبل أن تكلّف مالًا، ويُبيع عند الصندوق على أرقام مخزون حقيقية، وتترك كل عملية بيع فاتورة قابلة للتتبع منسوبة إلى الموظف الذي أنشأها. ولا شيء يُدمَّر — السجلات المحذوفة تُؤرشف ويمكن استرجاعها، فيبقى التاريخ خلف الأرقام. والشاشات جزء من التسليم أيضًا: هيكل موحّد، ومقياس طباعي واحد، وترويسات شبكات بلون القمح، وتحقق فوري، مع إشعارات ونوافذ تأكيد بدل صناديق رسائل مقاطعة — وتحت عرض 1180 بكسل ينطوي الشريط الجانبي إلى درج، فيبقى التطبيق نفسه صالحًا للعمل في نافذة ضيقة.",
    },
    technologies: ["C# 13", ".NET 9", "Windows Forms", "Entity Framework Core 9", "SQL Server", "FluentValidation 12", "BCrypt.Net-Next", "ClosedXML"],
    year: "2026",
    accent: "#2F5FA8",
    updated: "2026-11-13",
    client: { en: "Titans — in-house product", ar: "تايتنز — منتج داخلي" },
    role: { en: "Full-stack delivery, start to finish", ar: "تطوير متكامل من البداية حتى التسليم" },
    duration: { en: "Delivered 2026", ar: "أُطلق في 2026" },
    metrics: [
      { value: "3", label: { en: "seeded roles with screen-level access", ar: "أدوار مبدوءة بصلاحيات على مستوى الشاشات" } },
      { value: "≤30 days", label: { en: "expiry warning window", ar: "نافذة التحذير قبل انتهاء الصلاحية" } },
      { value: "BCrypt", label: { en: "password hashing, never plain text", ar: "تجزئة كلمات المرور، لا تُحفظ نصًا أبدًا" } },
      { value: "0", label: { en: "destructive deletes — records are archived instead", ar: "حذف نهائي — السجلات تُؤرشف بدل حذفها" } },
    ],
    images: [
      { src: "/work/titans-pharamacy/03-admin-overview.png", width: 1618, height: 997, alt: { en: "Admin overview — units in stock, low stock, expiry alerts and today's sales", ar: "لوحة الأدمن — الوحدات في المخزون ونقص المخزون وتنبيهات الصلاحية ومبيعات اليوم" } },
      { src: "/work/titans-pharamacy/01-login.png", width: 998, height: 667, alt: { en: "Sign in", ar: "تسجيل الدخول" } },
      { src: "/work/titans-pharamacy/08-pharmacist-overview.png", width: 1618, height: 997, alt: { en: "Pharmacist overview", ar: "لوحة الصيدلي" } },
      { src: "/work/titans-pharamacy/09-pharmacist-inventory.png", width: 1618, height: 997, alt: { en: "Inventory with expiry badges, archive and edit actions", ar: "المخزون مع شارات الصلاحية وأرشفة وتعديل" } },
      { src: "/work/titans-pharamacy/10-pharmacist-validity.png", width: 1618, height: 997, alt: { en: "Validity report with filter chips and Excel export", ar: "تقرير الصلاحية مع شرائح التصفية وتصدير إكسل" } },
      { src: "/work/titans-pharamacy/11-pharmacist-sell.png", width: 1618, height: 997, alt: { en: "Point of sale — medicine picker, cart and total", ar: "نقطة البيع — اختيار الدواء والسلة والإجمالي" } },
      { src: "/work/titans-pharamacy/12-pharmacist-add-medicine.png", width: 638, height: 687, alt: { en: "Add a medicine", ar: "إضافة دواء" } },
      { src: "/work/titans-pharamacy/13-pharmacist-edit-medicine.png", width: 638, height: 667, alt: { en: "Update price with a stock preview", ar: "تحديث السعر مع معاينة المخزون" } },
      { src: "/work/titans-pharamacy/04-admin-invoices.png", width: 1618, height: 997, alt: { en: "Invoices — list, line items and total", ar: "الفواتير — القائمة وبنود الفاتورة والإجمالي" } },
      { src: "/work/titans-pharamacy/05-admin-users.png", width: 1618, height: 997, alt: { en: "Staff list with role, contact details and status", ar: "قائمة الموظفين بالدور وبيانات التواصل والحالة" } },
      { src: "/work/titans-pharamacy/06-admin-add-user.png", width: 658, height: 767, alt: { en: "Add user form with inline validation", ar: "نموذج إضافة مستخدم مع تحقق فوري" } },
      { src: "/work/titans-pharamacy/07-admin-profile.png", width: 1618, height: 997, alt: { en: "Profile — editable details and role", ar: "الملف الشخصي — بيانات قابلة للتعديل والدور" } },
      { src: "/work/titans-pharamacy/14-confirm-dialog.png", width: 478, height: 287, alt: { en: "Confirmation dialog", ar: "نافذة التأكيد" } },
      { src: "/work/titans-pharamacy/15-responsive-drawer.png", width: 1000, height: 780, alt: { en: "Narrow window — sidebar collapsed into a drawer", ar: "نافذة ضيقة — الشريط الجانبي مطوي في درج" } },
      { src: "/work/titans-pharamacy/16-toast-notification.png", width: 360, height: 78, alt: { en: "Toast notification", ar: "إشعار منبثق" } },
    ],
    highlights: [
      {
        title: { en: "Authentication and role-based access", ar: "المصادقة والصلاحيات حسب الدور" },
        body: {
          en: "Secure login with a username or an email, compared case-insensitively. Passwords are stored as BCrypt hashes and never in plain text, soft-deleted accounts are blocked from logging in, and each role lands on its own screen — Admin on the dashboard, Pharmacist in the operations workspace — with unauthorized roles denied outright. Admin, Pharmacist and Cashier are seeded automatically on first run.",
          ar: "تسجيل دخول آمن باسم المستخدم أو بالبريد الإلكتروني، مع مقارنة غير حساسة لحالة الأحرف. تُحفظ كلمات المرور مجزّأة بـ BCrypt ولا تُحفظ نصًا أبدًا، وتُمنع الحسابات المحذوفة منطقيًا من الدخول، ويصل كل دور إلى شاشته الخاصة — Admin على لوحة التحكم، وPharmacist في مساحة العمل — مع رفض الأدوار غير المخوّلة تمامًا. وتُنشأ أدوار Admin و Pharmacist و Cashier تلقائيًا عند أول تشغيل.",
        },
      },
      {
        title: { en: "User management", ar: "إدارة المستخدمين" },
        body: {
          en: "Create staff accounts with the full validation pipeline: names, email format, username pattern, a strong-password policy and Egyptian mobile-number format. Duplicate email, username or phone numbers are rejected and backed by unique database indexes, and the searchable users grid shows each account's role, contact details and live status.",
          ar: "أنشئ حسابات الموظفين عبر خط تحقق كامل: الأسماء، وصيغة البريد الإلكتروني، ونمط اسم المستخدم، وسياسة كلمة المرور القوية، وصيغة رقم الهاتف المصري. ويُرفض تكرار البريد أو اسم المستخدم أو رقم الهاتف مدعومًا بفهارس فريدة في قاعدة البيانات، وتعرض شبكة المستخدمين القابلة للبحث دور كل حساب وبيانات تواصله وحالته المباشرة.",
        },
      },
      {
        title: { en: "Medicine inventory", ar: "مخزون الأدوية" },
        body: {
          en: "Add a medicine with its manufacturing date, expiry date, quantity and price per unit, and let the domain rules guard the entry — required fields, positive quantity and price, and an expiry date that must be after the manufacturing date. The searchable grid keeps archived records out of the way while stock and pricing are changed from a dedicated update screen with medicine-name autocomplete.",
          ar: "أضف دواءً بتاريخ تصنيعه وتاريخ انتهاءه وكميته وسعر وحدته، ودع قواعد المجال تحرس الإدخال: الحقول المطلوبة، والكمية والسعر الموجبان، وتاريخ انتهاء يقع بعد تاريخ التصنيع. وتحافظ الشبكة القابلة للبحث على السجلات المؤرشفة بعيدًا، بينما يُعدَّل المخزون والتسعير من شاشة تحديث مخصصة مع إكمال تلقائي لأسماء الأدوية.",
        },
      },
      {
        title: { en: "Expiry and validity monitoring", ar: "مراقبة الصلاحية والانتهاء" },
        body: {
          en: "Every medicine is classified automatically as Expired, Expiring Soon or Valid, with a 30-day warning window, and the grid colours each row red, amber or green so the shelf can be scanned at a glance. Filter by medicine name and validity status together, then export the report to Excel with auto-fitted columns, a timestamped file name and a Reports folder created for you.",
          ar: "يُصنَّف كل دواء تلقائيًا على أنه منتهٍ أو قارب على الانتهاء أو سليم، ضمن نافذة تحذير مدتها 30 يومًا، وتلوّن الشبكة كل سطر بالأحمر أو الكهرماني أو الأخضر لتُمسح الرفوف بنظرة واحدة. وصفِّ حسب اسم الدواء وحالة الصلاحية معًا، ثم صدّر التقرير إلى إكسل بأعمدة مضبوطة تلقائيًا واسم ملف يحمل التاريخ ومجلد Reports يُنشأ تلقائيًا.",
        },
      },
      {
        title: { en: "Sales and invoicing", ar: "المبيعات والفواتير" },
        body: {
          en: "Look up a medicine by name and add it to the cart, with a live stock check before a line is added or its quantity increased. Duplicate cart lines merge automatically, subtotal and total update as you work, removing an item recalculates the total, and completing the sale writes a master–detail invoice and deducts the stock in the same step.",
          ar: "ابحث عن دواء بالاسم وأضِفه إلى السلة، مع تحقق مباشر من توافر المخزون قبل إضافة السطر أو زيادة كميته. وتُدمج الأسطر المكررة تلقائيًا، ويتحدث المجموع الفرعي والإجمالي أثناء العمل، ويُعاد حساب الإجمالي عند حذف صنف، ويُنشئ إتمام البيع فاتورة رئيسية بتفاصيلها مع خصم المخزون في الخطوة نفسها.",
        },
      },
      {
        title: { en: "Invoice management", ar: "إدارة الفواتير" },
        body: {
          en: "A chronological invoice list, newest first, with each invoice's total and the staff member responsible for it, optional date-based filtering, and a drill-down showing the medicine name, number, quantity and unit price behind every line.",
          ar: "قائمة فواتير مرتبة زمنيًا، الأحدث أولًا، بإجمالي كل فاتورة والموظف المسؤول عنها، مع فلترة اختيارية بالتاريخ، وتفصيل لكل فاتورة يعرض اسم الدواء ورقمه والكمية وسعر الوحدة خلف كل سطر.",
        },
      },
      {
        title: { en: "Data and architecture", ar: "البيانات والمعمارية" },
        body: {
          en: "A Code-First EF Core model with migrations and automatic default-data seeding on startup, centralized entity configurations for maximum lengths and unique constraints, reusable FluentValidation validators with shared regex and error constants, a soft-delete pattern carried by a shared BaseEntity, and async loading across the user, invoice and role screens.",
          ar: "نموذج EF Core بـ Code-First مع الترحيلات وتهيئة البيانات الافتراضية تلقائيًا عند الإقلاع، وإعدادات مركزية للكيانات تحدد الأطوال القصوى والقيود الفريدة، ومدققات FluentValidation قابلة لإعادة الاستخدام مع ثوابت منتظمة ورسائل أخطاء مشتركة، ونمط حذف ناعم تحمله كيان BaseEntity مشترك، وتحميل غير متزامن في شاشات المستخدمين والفواتير والأدوار.",
        },
      },
      {
        title: { en: "Security and data integrity", ar: "الأمن وسلامة البيانات" },
        body: {
          en: "BCrypt password hashing verified at login, a strong-password policy of uppercase, lowercase, digit and symbol with a minimum of eight characters, unique database indexes protecting email and username integrity, soft delete instead of destructive deletes so financial history survives, and role-based screen access enforced by the application rather than by UI-only hiding.",
          ar: "تجزئة كلمات المرور بـ BCrypt مع التحقق منها عند الدخول، وسياسة كلمة مرور قوية تتطلب حرفًا كبيرًا وصغيرًا ورقمًا ورمزًا وبحد أدنى ثمانية أحرف، وفهارس فريدة في قاعدة البيانات تحمي سلامة البريد واسم المستخدم، وحذف ناعم بدل الحذف النهائي ليبقى التاريخ المالي محفوظًا، وصلاحيات على مستوى الشاشات يفرضها التطبيق لا مجرد إخفاء عناصر من الواجهة.",
        },
      },
      {
        title: { en: "One shell for every role", ar: "هيكل واحد لكل الأدوار" },
        body: {
          en: "Admin and pharmacist screens share one navy sidebar, one header and one spacing scale, with unified typography, wheat-toned grid headers and selection highlighting. Below 1180 px the sidebar collapses into an overlay drawer and lists and toolbars reflow, so the same application still works in a narrow window — and inline errors and toasts replace message boxes so the work is never interrupted.",
          ar: "تشترك شاشات الأدمن والصيدلي في شريط جانبي كحلي واحد وترويسة واحدة ومقياس مسافات واحد، مع طباعة موحّدة وترويسات شبكات بلون القمح وإبراز للتحديد. وتحت عرض 1180 بكسل ينطوي الشريط الجانبي إلى درج تراكبي وتُعاد ترتيب القوائم وأشرطة الأدوات، فيبقى التطبيق نفسه صالحًا للعمل في نافذة ضيقة — وتحل رسائل الخطأ الفورية والإشعارات غير المتقطعة محل صناديق الرسائل، فلا يتوقف العمل.",
        },
      },
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export const featuredProjects = projects.filter((p) => p.featured);
