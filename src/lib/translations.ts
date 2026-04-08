export const translations = {
  en: {
    // Navigation
    home: "Home",
    about: "About",
    services: "Services",
    projects: "Projects",
    testimonials: "Feedback",
    contact: "Contact",

    // Hero
    tagline: "Developer who transforms",
    taglineAccent: "design into code",
    taglineEnd: "that's clean",
    description: "I build modern digital products that are responsive, fast, and pleasant to use — from websites to mobile apps. This portfolio showcases personal projects and ready-to-use code implementations.",
    available: "Available for projects",

    // About
    aboutTitle: "About Me",
    aboutText: "I'm Iqbal Rasetio, a frontend developer & mobile specialist. I transform designs into real digital experiences that are neat, fast, and professional across all devices. From Figma to code, I focus on UI, performance, and user flow so products feel solid and easy to use.",

    // Services
    servicesTitle: "Services",
    servicesWebTitle: "Web Interface & Dashboard",
    servicesWebDesc: "Building interactive web applications that are responsive, user-friendly, and ready to serve as prototypes or MVPs.",
    servicesMobileTitle: "Mobile App & PWA",
    servicesMobileDesc: "Designing and developing smooth mobile experiences that are intuitive and suitable for smartphones or tablets.",
    servicesDesignTitle: "Design → Code",
    servicesDesignDesc: "Converting Figma designs into clean frontend code with responsive layouts, animations, and detailed UI elements.",
    servicesPerfTitle: "Performance & UI Polish",
    servicesPerfDesc: "Optimizing performance and UI interactions so products feel fast and professional across all devices.",

    // Skills
    skillsTitle: "Skills & Tech Stack",

    // Process
    processTitle: "Work Process",
    processBriefStep: "Idea & Brief",
    processBriefDesc: "Determine product goals, core features, and desired user experiences.",
    processDesignStep: "UI Design",
    processDesignDesc: "Build visual displays and interactions before moving to development phase.",
    processBuildStep: "Build Frontend",
    processBuildDesc: "Implement interfaces with React/Next.js, Flutter, Tailwind, and TypeScript.",
    processTestStep: "Test & Optimize",
    processTestDesc: "Test responsiveness, performance, and user experience before final delivery.",

    // Projects
    projectsTitle: "Featured Projects",
    projectsSubtitle: "Examples of personal work showing design flow, implementation, and user experience on web and mobile.",
    backToPortfolio: "← Back to Portfolio",
    projectAbout: "About Project",
    features: "Key Features",
    techStack: "Tech Stack",
    screenshots: "Screenshots",
    viewOnGitHub: "View on GitHub",
    liveDemo: "Live Demo",
    screenshotComingSoon: "* Screenshots will be added after project deployment",

    // Testimonials
    testimonialsTitle: "Feedback",

    // Contact
    contactTitle: "Let's Work Together",
    contactHeading: "Have a project in mind?",
    contactDescription: "I'd love to hear about it and discuss how we can bring your ideas to life.",
    getInTouch: "Get In Touch",

    // Footer
    footerText: "Built with Next.js, Tailwind CSS, and TypeScript",

    // Language
    language: "Language",
    indonesian: "Indonesian",
    english: "English"
  },
  id: {
    // Navigation
    home: "Beranda",
    about: "Tentang",
    services: "Layanan",
    projects: "Proyek",
    testimonials: "Feedback",
    contact: "Kontak",

    // Hero
    tagline: "Developer yang ubah",
    taglineAccent: "desain jadi kode",
    taglineEnd: "yang bersih",
    description: "Saya membangun produk digital modern yang responsif, cepat, dan nyaman dipakai — dari website hingga mobile app. Portofolio ini menampilkan personal project, dan implementasi kode yang siap dipakai.",
    available: "Tersedia untuk project",

    // About
    aboutTitle: "Tentang Saya",
    aboutText: "Saya Iqbal Rasetio, frontend developer & mobile specialist. Saya mengubah desain jadi pengalaman digital nyata yang rapi, cepat, dan profesional di semua device. Dari Figma ke kode, saya fokus pada UI, performa, dan alur pengguna agar produk terasa solid dan mudah digunakan.",

    // Services
    servicesTitle: "Layanan",
    servicesWebTitle: "Web Interface & Dashboard",
    servicesWebDesc: "Membangun aplikasi web interaktif yang responsif, mudah dipakai, dan siap tampil sebagai prototipe atau MVP.",
    servicesMobileTitle: "Mobile App & PWA",
    servicesMobileDesc: "Mendesain dan mengembangkan mobile experience yang halus, intuitif, dan cocok untuk smartphone atau tablet.",
    servicesDesignTitle: "Design → Code",
    servicesDesignDesc: "Mengonversi desain Figma jadi kode Frontend bersih dengan layout responsif, animasi, dan detail UI yang rapi.",
    servicesPerfTitle: "Performance & UI polish",
    servicesPerfDesc: "Mengoptimalkan performa dan interaksi UI sehingga produk terasa cepat dan profesional di semua device.",

    // Skills
    skillsTitle: "Skills & Tech Stack",

    // Process
    processTitle: "Proses Kerja",
    processBriefStep: "Ide & Brief",
    processBriefDesc: "Menentukan tujuan produk, fitur inti, dan pengalaman pengguna yang ingin dicapai.",
    processDesignStep: "Desain UI",
    processDesignDesc: "Membangun tampilan visual dan interaksi sebelum masuk ke tahap development.",
    processBuildStep: "Build Frontend",
    processBuildDesc: "Mengimplementasikan antarmuka dengan React/Next.js, Flutter, Tailwind, dan TypeScript.",
    processTestStep: "Uji & Optimasi",
    processTestDesc: "Menguji responsif, performa, dan pengalaman pengguna sebelum menampilkan hasil akhir.",

    // Projects
    projectsTitle: "Project Pilihan",
    projectsSubtitle: "Contoh karya personal yang menunjukkan alur desain, implementasi, dan pengalaman pengguna di web maupun mobile.",
    backToPortfolio: "← Kembali ke Portfolio",
    projectAbout: "Tentang Project",
    features: "Fitur Utama",
    techStack: "Tech Stack",
    screenshots: "Screenshots",
    viewOnGitHub: "Lihat di GitHub",
    liveDemo: "Live Demo",
    screenshotComingSoon: "* Screenshots akan ditambahkan setelah project di-deploy",

    // Testimonials
    testimonialsTitle: "Feedback",

    // Contact
    contactTitle: "Mari Bekerja Sama",
    contactHeading: "Punya project dalam pikiran?",
    contactDescription: "Saya ingin mendengarnya dan mendiskusikan bagaimana kita bisa mewujudkan ide Anda.",
    getInTouch: "Hubungi Saya",

    // Footer
    footerText: "Dibuat dengan Next.js, Tailwind CSS, dan TypeScript",

    // Language
    language: "Bahasa",
    indonesian: "Indonesia",
    english: "Inggris"
  }
};

export type Language = 'en' | 'id';
export type TranslationKey = keyof typeof translations.en;