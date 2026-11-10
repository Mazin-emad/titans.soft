export interface LocalizedText {
  en: string;
  ar: string;
}

export type ServiceIcon = "globe" | "smartphone" | "monitor" | "boxes" | "server" | "sparkles";

export interface Service {
  slug: string;
  icon: ServiceIcon;
  title: LocalizedText;
  /** One-line card description. */
  description: LocalizedText;
  /** Landing-page introduction (2–3 sentences, keyword-rich but natural). */
  intro: LocalizedText;
  deliverables: LocalizedText[];
  tags: string[];
  faqs: { q: LocalizedText; a: LocalizedText }[];
  seo: { title: LocalizedText; description: LocalizedText };
}

export const services: Service[] = [
  {
    slug: "web-development",
    icon: "globe",
    title: { en: "Web Development", ar: "تطوير مواقع وتطبيقات الويب" },
    description: {
      en: "Fast, SEO-ready websites, web apps, dashboards, portals and SaaS platforms.",
      ar: "مواقع وتطبيقات ويب سريعة ومهيأة لمحركات البحث، ولوحات تحكم وبوابات ومنصات SaaS.",
    },
    intro: {
      en: "We build web applications that load fast, rank well and scale with your business — from marketing websites and customer portals to complex dashboards and multi-tenant SaaS platforms. Every project ships with clean architecture, responsive design and full Arabic/English support.",
      ar: "نبني تطبيقات ويب سريعة التحميل، تتصدر نتائج البحث، وتنمو مع أعمالك — من المواقع التعريفية وبوابات العملاء إلى لوحات التحكم المعقدة ومنصات SaaS متعددة العملاء. كل مشروع يُسلَّم بمعمارية نظيفة وتصميم متجاوب ودعم كامل للعربية والإنجليزية.",
    },
    deliverables: [
      { en: "Corporate websites & landing pages", ar: "المواقع التعريفية للشركات وصفحات الهبوط" },
      { en: "Web applications & customer portals", ar: "تطبيقات الويب وبوابات العملاء" },
      { en: "Admin dashboards & internal tools", ar: "لوحات تحكم الإدارة والأدوات الداخلية" },
      { en: "SaaS platforms with roles & billing", ar: "منصات SaaS بالصلاحيات والاشتراكات" },
      { en: "E-commerce stores & checkout flows", ar: "المتاجر الإلكترونية وعمليات الدفع" },
      { en: "Technical SEO & Core Web Vitals tuning", ar: "تحسين محركات البحث التقني وسرعة الأداء" },
    ],
    tags: ["Next.js", "React", "Angular", "TypeScript", "Tailwind CSS"],
    faqs: [
      {
        q: { en: "Which framework do you use for web development?", ar: "ما التقنية التي تستخدمونها في تطوير الويب؟" },
        a: {
          en: "Mostly Next.js and React with TypeScript, and Angular for large enterprise dashboards. We pick the stack that fits your product, team and hosting — not the other way around.",
          ar: "نعتمد غالبًا على Next.js و React مع TypeScript، و Angular للوحات التحكم الكبيرة في المؤسسات. نختار التقنية التي تناسب منتجك وفريقك واستضافتك — وليس العكس.",
        },
      },
      {
        q: { en: "Will my website be SEO-friendly and fast?", ar: "هل سيكون موقعي سريعًا ومهيأً لمحركات البحث؟" },
        a: {
          en: "Yes. We build with server rendering, structured data, optimized images and Core Web Vitals in mind, so your site is fast for users and easy for Google to index.",
          ar: "نعم. نبني بالعرض من جهة الخادم والبيانات المنظمة والصور المحسّنة مع مراعاة مؤشرات Core Web Vitals، ليكون موقعك سريعًا للمستخدمين وسهل الفهرسة لجوجل.",
        },
      },
      {
        q: { en: "Can you redesign or take over an existing web app?", ar: "هل يمكنكم تطوير أو استلام تطبيق ويب قائم؟" },
        a: {
          en: "Yes. We start with a technical audit, then either modernize the existing codebase step by step or plan a safe migration to a new one.",
          ar: "نعم. نبدأ بمراجعة تقنية شاملة، ثم نطوّر الكود الحالي تدريجيًا أو نخطط لانتقال آمن إلى نظام جديد.",
        },
      },
    ],
    seo: {
      title: { en: "Web Development Company in Egypt & Saudi Arabia", ar: "شركة تطوير مواقع وتطبيقات ويب في مصر والسعودية" },
      description: {
        en: "Custom web development: fast, SEO-ready websites, web apps, dashboards and SaaS platforms built with Next.js and React for businesses in Egypt, KSA and MENA.",
        ar: "تصميم وتطوير مواقع وتطبيقات ويب سريعة ومهيأة لمحركات البحث، ولوحات تحكم ومنصات SaaS بتقنيات Next.js و React للشركات في مصر والسعودية.",
      },
    },
  },
  {
    slug: "mobile-app-development",
    icon: "smartphone",
    title: { en: "Mobile App Development", ar: "برمجة تطبيقات الجوال" },
    description: {
      en: "iOS and Android apps built around real user journeys — from MVP to App Store.",
      ar: "تطبيقات iOS وأندرويد مبنية حول رحلة المستخدم الحقيقية — من النسخة الأولى حتى المتجر.",
    },
    intro: {
      en: "We design and develop mobile apps for iOS and Android that customers enjoy using and teams can rely on in the field. Using Flutter, we ship one high-quality codebase to both stores — with native modules where performance or device features demand it.",
      ar: "نصمم ونطوّر تطبيقات جوال لنظامي iOS وأندرويد يستمتع بها عملاؤك ويعتمد عليها فريقك في الميدان. باستخدام Flutter نطلق كودًا واحدًا عالي الجودة على المتجرين — مع وحدات أصلية حين يتطلب الأداء أو مزايا الجهاز ذلك.",
    },
    deliverables: [
      { en: "Cross-platform apps with Flutter", ar: "تطبيقات متعددة المنصات بتقنية Flutter" },
      { en: "Customer apps, booking & e-commerce", ar: "تطبيقات العملاء والحجز والتجارة الإلكترونية" },
      { en: "Field-team & delivery apps", ar: "تطبيقات الفرق الميدانية والتوصيل" },
      { en: "Push notifications, maps & payments", ar: "الإشعارات والخرائط وبوابات الدفع" },
      { en: "Offline mode & data sync", ar: "العمل دون اتصال ومزامنة البيانات" },
      { en: "App Store & Google Play publishing", ar: "النشر على App Store و Google Play" },
    ],
    tags: ["Flutter", "iOS", "Android", "Firebase", "REST APIs"],
    faqs: [
      {
        q: { en: "Do you build native or cross-platform apps?", ar: "هل تبنون تطبيقات أصلية أم متعددة المنصات؟" },
        a: {
          en: "Mostly cross-platform with Flutter: one codebase, native performance, lower cost. When a product needs deep platform APIs, we add native modules.",
          ar: "غالبًا متعددة المنصات بتقنية Flutter: كود واحد، وأداء قريب من الأصلي، وتكلفة أقل. وعندما يحتاج المنتج واجهات خاصة بالنظام نضيف وحدات أصلية.",
        },
      },
      {
        q: { en: "Will you publish the app to the App Store and Google Play?", ar: "هل تتولون نشر التطبيق على المتاجر؟" },
        a: {
          en: "Yes. We handle store listings, review guidelines and releases — published under your own developer accounts so you stay in control.",
          ar: "نعم. نتولى صفحات المتجر ومتطلبات المراجعة والإصدارات — وننشره باسم حساباتك أنت لتبقى السيطرة لديك.",
        },
      },
      {
        q: { en: "Can the app support Arabic and English?", ar: "هل يدعم التطبيق العربية والإنجليزية؟" },
        a: {
          en: "Yes — full right-to-left layouts, Arabic typography and language switching are built in from the start.",
          ar: "نعم — واجهات كاملة من اليمين لليسار، وخطوط عربية واضحة، والتبديل بين اللغتين مدمج من البداية.",
        },
      },
    ],
    seo: {
      title: { en: "Mobile App Development Company — iOS & Android", ar: "شركة برمجة تطبيقات جوال iOS وأندرويد في مصر والسعودية" },
      description: {
        en: "Mobile app development for iOS and Android with Flutter. Customer apps, booking, e-commerce and field-team apps for businesses in Egypt, Saudi Arabia and MENA.",
        ar: "برمجة وتصميم تطبيقات الجوال لنظامي iOS وأندرويد بتقنية Flutter: تطبيقات العملاء والحجز والمتاجر والفرق الميدانية للشركات في مصر والسعودية.",
      },
    },
  },
  {
    slug: "desktop-software-development",
    icon: "monitor",
    title: { en: "Desktop Software", ar: "برامج سطح المكتب" },
    description: {
      en: "Reliable Windows applications for POS, inventory, branches and back offices.",
      ar: "برامج ويندوز موثوقة لنقاط البيع والمخازن والفروع والمكاتب الخلفية.",
    },
    intro: {
      en: "Some work belongs on the desktop: point-of-sale, warehouses, branch operations and hardware-connected workflows. We build fast, offline-capable Windows applications in .NET that sync safely with your central systems.",
      ar: "بعض الأعمال مكانها سطح المكتب: نقاط البيع، والمخازن، وعمليات الفروع، والأعمال المرتبطة بالأجهزة. نبني برامج ويندوز سريعة تعمل دون اتصال بتقنية .NET وتتزامن بأمان مع أنظمتك المركزية.",
    },
    deliverables: [
      { en: "Point-of-sale (POS) systems", ar: "أنظمة نقاط البيع (POS)" },
      { en: "Inventory & warehouse software", ar: "برامج المخازن والمستودعات" },
      { en: "Branch & back-office applications", ar: "تطبيقات الفروع والمكاتب الخلفية" },
      { en: "Printer, scanner & device integration", ar: "التكامل مع الطابعات والماسحات والأجهزة" },
      { en: "Offline-first with cloud sync", ar: "العمل دون اتصال مع المزامنة السحابية" },
      { en: "Installers, updates & licensing", ar: "حزم التثبيت والتحديثات والتراخيص" },
    ],
    tags: [".NET", "C#", "WPF", "SQL Server", "Offline-first"],
    faqs: [
      {
        q: { en: "Why choose desktop software over a web app?", ar: "لماذا أختار برنامج سطح مكتب بدل تطبيق ويب؟" },
        a: {
          en: "When you need to work without internet, connect to local hardware like printers and scanners, or need maximum speed at a counter, a desktop app is often the better choice.",
          ar: "عندما تحتاج للعمل دون إنترنت، أو للربط مع أجهزة محلية كالطابعات والماسحات، أو لأقصى سرعة عند نقطة البيع، يكون برنامج سطح المكتب غالبًا الخيار الأفضل.",
        },
      },
      {
        q: { en: "Can the desktop app sync with a web dashboard?", ar: "هل يمكن مزامنة البرنامج مع لوحة تحكم على الويب؟" },
        a: {
          en: "Yes. We design a shared API so branches work offline and sync to a central web dashboard when they reconnect.",
          ar: "نعم. نصمم واجهة API مشتركة لتعمل الفروع دون اتصال ثم تتزامن مع لوحة التحكم المركزية عند عودة الاتصال.",
        },
      },
      {
        q: { en: "Can you modernize our old desktop system?", ar: "هل يمكنكم تحديث نظامنا القديم؟" },
        a: {
          en: "Yes. We can migrate legacy systems to modern .NET while keeping your data and the workflows your team already knows.",
          ar: "نعم. ننقل الأنظمة القديمة إلى .NET الحديثة مع الحفاظ على بياناتك وطريقة العمل التي اعتاد عليها فريقك.",
        },
      },
    ],
    seo: {
      title: { en: "Desktop Software Development — POS, Inventory & ERP", ar: "تطوير برامج سطح المكتب — نقاط البيع والمخازن" },
      description: {
        en: "Custom Windows desktop software in .NET: POS systems, inventory and warehouse apps, branch operations — offline-first with cloud sync. Built in Egypt for MENA businesses.",
        ar: "تطوير برامج سطح مكتب مخصصة بتقنية .NET: أنظمة نقاط البيع والمخازن وإدارة الفروع، تعمل دون اتصال مع مزامنة سحابية، للشركات في مصر والسعودية.",
      },
    },
  },
  {
    slug: "custom-software-development",
    icon: "boxes",
    title: { en: "Custom Business Software", ar: "أنظمة إدارة أعمال مخصصة" },
    description: {
      en: "ERP, HR, CRM and operations systems designed around how your company works.",
      ar: "أنظمة ERP والموارد البشرية وإدارة العملاء والعمليات، مصممة حول طريقة عمل شركتك.",
    },
    intro: {
      en: "Off-the-shelf tools force your team to work around the software. We build custom business systems — ERP, HR, CRM and operations platforms — that model your real approvals, roles and reports, and grow with you instead of holding you back.",
      ar: "الأدوات الجاهزة تُجبر فريقك على التكيّف مع البرنامج. نحن نبني أنظمة أعمال مخصصة — ERP والموارد البشرية وإدارة العملاء والعمليات — تعكس اعتماداتك وصلاحياتك وتقاريرك الحقيقية، وتنمو معك بدل أن تعيقك.",
    },
    deliverables: [
      { en: "ERP & operations management", ar: "أنظمة ERP وإدارة العمليات" },
      { en: "HR, attendance & payroll inputs", ar: "الموارد البشرية والحضور ومدخلات الرواتب" },
      { en: "CRM & sales pipelines", ar: "إدارة علاقات العملاء ومسارات المبيعات" },
      { en: "Approval workflows & audit trails", ar: "مسارات الاعتماد وسجلات المراجعة" },
      { en: "Role-based dashboards & reports", ar: "لوحات وتقارير حسب الصلاحيات" },
      { en: "Integrations with existing tools", ar: "التكامل مع الأدوات الحالية" },
    ],
    tags: ["ERP", "HR", "CRM", ".NET", "PostgreSQL"],
    faqs: [
      {
        q: { en: "Is custom software better than an off-the-shelf ERP?", ar: "هل النظام المخصص أفضل من ERP جاهز؟" },
        a: {
          en: "If your workflows are standard, a ready-made tool may be enough. When your processes are your competitive edge — or licenses keep growing — custom software fits better and costs less over time.",
          ar: "إذا كانت إجراءاتك قياسية فقد تكفيك أداة جاهزة. أما إذا كانت طريقة عملك هي ميزتك التنافسية — أو كانت تكلفة التراخيص في تزايد — فالنظام المخصص يناسبك أكثر ويكلّف أقل على المدى الطويل.",
        },
      },
      {
        q: { en: "Can you migrate our data from Excel or an old system?", ar: "هل يمكنكم نقل بياناتنا من Excel أو نظام قديم؟" },
        a: {
          en: "Yes. Data migration and cleanup are part of the plan, so your team starts on day one with complete, trustworthy records.",
          ar: "نعم. نقل البيانات وتنظيفها جزء من الخطة، ليبدأ فريقك من اليوم الأول بسجلات كاملة وموثوقة.",
        },
      },
      {
        q: { en: "Can the system integrate with our accounting or other tools?", ar: "هل يتكامل النظام مع برنامج المحاسبة أو أدوات أخرى؟" },
        a: {
          en: "Yes. We integrate with accounting software, payment gateways, government e-invoicing and messaging tools through their APIs.",
          ar: "نعم. نربط النظام ببرامج المحاسبة وبوابات الدفع والفوترة الإلكترونية الحكومية وأدوات المراسلة عبر واجهاتها البرمجية.",
        },
      },
    ],
    seo: {
      title: { en: "Custom Software Development — ERP, HR & Business Systems", ar: "تطوير أنظمة مخصصة — ERP والموارد البشرية وإدارة الأعمال" },
      description: {
        en: "Custom business software built around your workflow: ERP, HR, CRM, approvals and reporting systems for companies in Egypt, Saudi Arabia and MENA.",
        ar: "تطوير برامج وأنظمة إدارة أعمال مخصصة: ERP والموارد البشرية وإدارة العملاء والاعتمادات والتقارير للشركات في مصر والسعودية والمنطقة.",
      },
    },
  },
  {
    slug: "api-backend-development",
    icon: "server",
    title: { en: "Backend & APIs", ar: "الأنظمة الخلفية وواجهات API" },
    description: {
      en: "Secure, scalable APIs, databases, integrations and cloud infrastructure.",
      ar: "واجهات API آمنة وقابلة للتوسع، وقواعد بيانات، وتكاملات، وبنية سحابية.",
    },
    intro: {
      en: "Behind every great product is a backend you never have to think about. We design APIs, databases and integrations that are secure, documented and ready to scale — powering your web, mobile and desktop apps from one reliable core.",
      ar: "وراء كل منتج ناجح نظام خلفي لا يقلقك. نصمم واجهات API وقواعد بيانات وتكاملات آمنة وموثقة وجاهزة للتوسع — تشغّل تطبيقات الويب والجوال وسطح المكتب من نواة واحدة موثوقة.",
    },
    deliverables: [
      { en: "REST APIs with full documentation", ar: "واجهات REST API موثقة بالكامل" },
      { en: "Database design & optimization", ar: "تصميم قواعد البيانات وتحسين أدائها" },
      { en: "Authentication, roles & security", ar: "المصادقة والصلاحيات والأمان" },
      { en: "Payment, SMS & third-party integrations", ar: "تكامل الدفع والرسائل والخدمات الخارجية" },
      { en: "Cloud deployment with Docker & CI/CD", ar: "النشر السحابي باستخدام Docker و CI/CD" },
      { en: "Monitoring, logging & backups", ar: "المراقبة والسجلات والنسخ الاحتياطي" },
    ],
    tags: [".NET", "Node.js", "PostgreSQL", "Docker", "REST"],
    faqs: [
      {
        q: { en: "Which backend technologies do you use?", ar: "ما التقنيات الخلفية التي تستخدمونها؟" },
        a: {
          en: ".NET and Node.js for services, PostgreSQL, SQL Server and MongoDB for data, and Docker with CI/CD for reliable deployments.",
          ar: ".NET و Node.js للخدمات، و PostgreSQL و SQL Server و MongoDB للبيانات، و Docker مع CI/CD لنشر موثوق.",
        },
      },
      {
        q: { en: "Can you integrate local payment gateways?", ar: "هل يمكنكم ربط بوابات الدفع المحلية؟" },
        a: {
          en: "Yes. We integrate regional and international payment providers, SMS gateways and shipping services used across Egypt and the Gulf.",
          ar: "نعم. نربط بوابات الدفع المحلية والدولية وخدمات الرسائل والشحن المستخدمة في مصر ودول الخليج.",
        },
      },
      {
        q: { en: "Where will my system be hosted?", ar: "أين ستتم استضافة النظام؟" },
        a: {
          en: "On the cloud provider that fits your needs and data-residency requirements — under your own account, with infrastructure documented and handed over.",
          ar: "على مزود الخدمة السحابية الذي يناسب احتياجاتك ومتطلبات حفظ البيانات — باسم حسابك أنت، مع توثيق البنية وتسليمها لك.",
        },
      },
    ],
    seo: {
      title: { en: "Backend & API Development — .NET, Node.js & Cloud", ar: "تطوير الأنظمة الخلفية وواجهات API — .NET و Node.js" },
      description: {
        en: "Secure, scalable backend and API development with .NET and Node.js: databases, authentication, payment integrations and cloud deployment for MENA businesses.",
        ar: "تطوير أنظمة خلفية وواجهات API آمنة وقابلة للتوسع بتقنيات .NET و Node.js: قواعد البيانات والمصادقة وربط بوابات الدفع والنشر السحابي.",
      },
    },
  },
  {
    slug: "ai-automation",
    icon: "sparkles",
    title: { en: "AI & Automation", ar: "الذكاء الاصطناعي والأتمتة" },
    description: {
      en: "AI features and automated workflows that save real hours every week.",
      ar: "مزايا ذكاء اصطناعي وأتمتة لسير العمل توفر ساعات حقيقية كل أسبوع.",
    },
    intro: {
      en: "We add AI where it creates measurable value: assistants grounded in your own data, document processing, smart search and automated workflows that remove repetitive manual work — integrated safely into the systems you already use.",
      ar: "نضيف الذكاء الاصطناعي حيث يصنع قيمة قابلة للقياس: مساعدات ذكية مبنية على بياناتك، ومعالجة المستندات، والبحث الذكي، وأتمتة تزيل العمل اليدوي المتكرر — مدمجة بأمان في الأنظمة التي تستخدمها بالفعل.",
    },
    deliverables: [
      { en: "AI assistants & chatbots on your data", ar: "مساعدات ذكية وروبوتات محادثة على بياناتك" },
      { en: "Document extraction & OCR (Arabic too)", ar: "استخراج البيانات من المستندات (بالعربية أيضًا)" },
      { en: "Smart search & summarization", ar: "البحث الذكي والتلخيص" },
      { en: "Workflow & report automation", ar: "أتمتة سير العمل والتقارير" },
      { en: "LLM integration into existing products", ar: "دمج النماذج اللغوية في منتجاتك الحالية" },
      { en: "Privacy-aware, cost-controlled setups", ar: "إعدادات تحافظ على الخصوصية وتضبط التكلفة" },
    ],
    tags: ["LLM integrations", "AI APIs", "OCR", "Automation", "Python"],
    faqs: [
      {
        q: { en: "Does the AI work with Arabic?", ar: "هل يعمل الذكاء الاصطناعي باللغة العربية؟" },
        a: {
          en: "Yes. Modern language models handle Arabic well, and we test prompts, search and document extraction on real Arabic content before launch.",
          ar: "نعم. النماذج اللغوية الحديثة تتعامل مع العربية بكفاءة، ونختبر البحث واستخراج المستندات على محتوى عربي حقيقي قبل الإطلاق.",
        },
      },
      {
        q: { en: "Is our data safe when using AI?", ar: "هل بياناتنا آمنة عند استخدام الذكاء الاصطناعي؟" },
        a: {
          en: "We design for privacy: minimal data sent to providers, no training on your data, access controls and full logging of what the AI can see.",
          ar: "نصمم مع مراعاة الخصوصية: أقل قدر من البيانات يُرسل للمزود، ولا تدريب على بياناتك، مع ضبط الصلاحيات وتسجيل كل ما يمكن للذكاء الاصطناعي الوصول إليه.",
        },
      },
      {
        q: { en: "Where should we start with AI?", ar: "من أين نبدأ مع الذكاء الاصطناعي؟" },
        a: {
          en: "With one repetitive, high-volume task. We prototype it quickly, measure the time saved, then decide together whether to scale it.",
          ar: "بمهمة واحدة متكررة وكثيفة. نبني نموذجًا أوليًا بسرعة، ونقيس الوقت الذي يوفره، ثم نقرر معًا التوسع فيه.",
        },
      },
    ],
    seo: {
      title: { en: "AI Integration & Business Automation Services", ar: "حلول الذكاء الاصطناعي وأتمتة الأعمال" },
      description: {
        en: "AI assistants, Arabic document extraction, smart search and workflow automation integrated into your business systems. AI development for companies in Egypt and KSA.",
        ar: "مساعدات ذكية، واستخراج بيانات المستندات العربية، والبحث الذكي، وأتمتة سير العمل مدمجة في أنظمة شركتك. حلول ذكاء اصطناعي للشركات في مصر والسعودية.",
      },
    },
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
