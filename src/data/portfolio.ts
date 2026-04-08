export const siteConfig = {
  name: "Iqbal Rasetio",
  handle: "Iqbal.Rasetio",
  tagline: "Developer yang ubah",
  taglineAccent: "desain jadi kode",
  taglineEnd: "yang bersih",
  description:
    "Saya membangun produk digital modern yang responsif, cepat, dan nyaman dipakai — dari website hingga mobile app. Portofolio ini menampilkan personal project, dan implementasi kode yang siap dipakai.",
  about:
    "Saya Iqbal Rasetio, frontend & mobile developer. Saya mengubah desain jadi pengalaman digital nyata yang rapi, cepat, dan profesional di semua device. Dari Figma ke kode, saya fokus pada UI, performa, dan alur pengguna agar produk terasa solid dan mudah digunakan.",
 
  contact: {
    email: "rasetioiqbal@gmail.com",
    whatsapp: "081324626295",
    linkedin: "https://linkedin.com/in/iqbalrasetio",
    github: "https://github.com/mrgball",
  },
  available: true,
};

export const skills = [
  "React / Next.js",
  "Tailwind CSS",
  "TypeScript",
  "Flutter",
  "Figma → Code",
  "REST API",
  "Responsive Web",
  "UI Animation",
  "Firebase",
  "Git & GitHub",
];

export const services = [
  {
    key: "web",
    title: "Web Interface & Dashboard",
    description:
      "Membangun aplikasi web interaktif yang responsif, mudah dipakai, dan siap tampil sebagai prototipe atau MVP.",
  },
  {
    key: "mobile",
    title: "Mobile App & PWA",
    description:
      "Mendesain dan mengembangkan mobile experience yang halus, intuitif, dan cocok untuk smartphone atau tablet.",
  },
  {
    key: "designToCode",
    title: "Design → Code",
    description:
      "Mengonversi desain Figma jadi kode Frontend bersih dengan layout responsif, animasi, dan detail UI yang rapi.",
  },
  {
    key: "performance",
    title: "Performance & UI polish",
    description:
      "Mengoptimalkan performa dan interaksi UI sehingga produk terasa cepat dan profesional di semua device.",
  },
];

export const workflow = [
  {
    key: "brief",
    step: "Ide & Brief",
    description:
      "Menentukan tujuan produk, fitur inti, dan pengalaman pengguna yang ingin dicapai.",
  },
  {
    key: "design",
    step: "Desain UI",
    description:
      "Membangun tampilan visual dan interaksi sebelum masuk ke tahap development.",
  },
  {
    key: "build",
    step: "Build Frontend",
    description:
      "Mengimplementasikan antarmuka dengan React/Next.js, Flutter, Tailwind, dan TypeScript.",
  },
  {
    key: "test",
    step: "Uji & Optimasi",
    description:
      "Menguji responsif, performa, dan pengalaman pengguna sebelum menampilkan hasil akhir.",
  },
];

export type Project = {
  title: string;
  description: string;
  type: string;
  highlight: string;
  tags: string[];
  icon: string;
  color: string;
  href: string;
  slug: string;
  fullDescription: string;
  features: string[];
  techStack: string[];
  screenshots: string[];
  githubUrl: string;
  demoUrl?: string;
};

export const projects: Project[] = [
  {
    title: "Find House App",
    type: "Mobile App",
    highlight: "Boarding Room Finder",
    description:
      "Aplikasi mobile untuk mencari kamar kos dengan pencarian berbasis map, filter lokasi, harga, dan fasilitas.",
    tags: ["Flutter", "Google Maps", "Dart"],
    icon: "🏠",
    color: "bg-orange-50 dark:bg-orange-950/30",
    href: "https://github.com/mrgball/find-house-app",
    slug: "find-house-app",
    fullDescription: "Find House adalah aplikasi mobile yang dirancang untuk memudahkan pencarian kamar kos di berbagai lokasi. Aplikasi ini menggunakan Google Maps API untuk menampilkan lokasi kamar kos secara real-time dan memungkinkan pengguna untuk melakukan filter berdasarkan harga, fasilitas, dan jarak.",
    features: [
      "Pencarian kamar kos berbasis lokasi dengan Google Maps",
      "Filter berdasarkan harga, fasilitas, dan jarak",
      "Detail informasi kamar kos lengkap",
      "Interface yang user-friendly dan responsif",
      "Offline map caching untuk performa optimal"
    ],
    techStack: ["Flutter", "Dart", "Google Maps API", "Provider (State Management)", "SQLite"],
    screenshots: ["/images/projects/find-house-1.png", "/images/projects/find-house-2.png", "/images/projects/find-house-3.png"],
    githubUrl: "https://github.com/mrgball/find-house-app",
  },
  {
    title: "Quranwise App",
    type: "Mobile App",
    highlight: "Quranic Reader",
    description:
      "Aplikasi Quran digital dengan pembacaan mudah, fitur audio, ukuran font yang dapat disesuaikan, dan warna teks.",
    tags: ["Flutter", "Audio API", "Dart"],
    icon: "📖",
    color: "bg-blue-50 dark:bg-blue-950/30",
    href: "https://github.com/mrgball/quranwise-app",
    slug: "quranwise-app",
    fullDescription: "Quranwise adalah aplikasi mobile untuk membaca Al-Quran dengan fitur-fitur modern yang memudahkan pengguna dalam membaca dan memahami ayat-ayat suci. Aplikasi ini menyediakan audio murottal, bookmark, dan pengaturan tampilan yang dapat disesuaikan.",
    features: [
      "Pembacaan Al-Quran dengan teks Arab, Latin, dan terjemahan",
      "Audio murottal dengan berbagai qori pilihan",
      "Bookmark ayat favorit",
      "Pengaturan ukuran font dan warna teks",
      "Mode malam untuk kenyamanan mata",
      "Pencarian ayat berdasarkan kata kunci"
    ],
    techStack: ["Flutter", "Dart", "Audio API", "Shared Preferences", "Provider"],
    screenshots: ["/images/projects/quranwise-1.png", "/images/projects/quranwise-2.png", "/images/projects/quranwise-3.png"],
    githubUrl: "https://github.com/mrgball/quranwise-app",
  },
  {
    title: "Presence GetX",
    type: "Mobile App",
    highlight: "GPS Attendance",
    description:
      "Aplikasi presensi berbasis lokasi dengan GPS tracking, pencatatan waktu, dan riwayat kehadiran yang detail.",
    tags: ["Flutter", "GetX", "GPS Location"],
    icon: "📍",
    color: "bg-purple-50 dark:bg-purple-950/30",
    href: "https://github.com/mrgball/presence-getx",
    slug: "presence-getx",
    fullDescription: "Presence GetX adalah aplikasi presensi digital yang menggunakan GPS untuk tracking lokasi kehadiran. Aplikasi ini dirancang untuk perusahaan atau institusi yang membutuhkan sistem presensi yang akurat dan real-time.",
    features: [
      "Presensi berbasis GPS dengan radius lokasi",
      "Pencatatan waktu check-in dan check-out otomatis",
      "Riwayat kehadiran lengkap dengan filter tanggal",
      "Dashboard admin untuk monitoring kehadiran",
      "Notifikasi reminder presensi",
      "Laporan kehadiran dalam format PDF"
    ],
    techStack: ["Flutter", "Dart", "GetX", "GPS Location API", "Firebase", "PDF Generator"],
    screenshots: ["/images/projects/presence-1.png", "/images/projects/presence-2.png", "/images/projects/presence-3.png"],
    githubUrl: "https://github.com/mrgball/presence-getx",
  },
  {
    title: "Dompetku App",
    type: "Mobile App",
    highlight: "Expense Tracker",
    description:
      "Aplikasi manajemen pengeluaran bulanan dengan tracking transaksi, kategori, dan laporan keuangan personal.",
    tags: ["Flutter", "SQLite", "Dart"],
    icon: "💰",
    color: "bg-green-50 dark:bg-green-950/30",
    href: "https://github.com/mrgball/dompetku-app",
    slug: "dompetku-app",
    fullDescription: "Dompetku adalah aplikasi manajemen keuangan personal yang membantu pengguna melacak pengeluaran dan pemasukan harian. Dengan interface yang sederhana dan fitur yang lengkap, aplikasi ini cocok untuk siapa saja yang ingin mengelola keuangan dengan lebih baik.",
    features: [
      "Pencatatan pemasukan dan pengeluaran harian",
      "Kategorisasi transaksi (makanan, transportasi, dll)",
      "Dashboard ringkasan keuangan bulanan",
      "Grafik visual pengeluaran berdasarkan kategori",
      "Budget planning dan reminder",
      "Backup data ke cloud",
      "Export laporan keuangan"
    ],
    techStack: ["Flutter", "Dart", "SQLite", "Provider", "Charts Library", "Google Drive API"],
    screenshots: ["/images/projects/dompetku-1.png", "/images/projects/dompetku-2.png", "/images/projects/dompetku-3.png"],
    githubUrl: "https://github.com/mrgball/dompetku-app",
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  initials: string;
  avatarColor: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Hasilnya rapi, mudah dipakai, dan terasa seperti interface yang sudah siap dipresentasikan.",
    name: "Andi Setiawan",
    role: "Rekan Desain UI",
    initials: "AS",
    avatarColor: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
  },
  {
    quote:
      "Proses build dan revisi jelas. Kode frontendnya bersih dan interaksinya halus di mobile.",
    name: "Dinda Rahmawati",
    role: "Rekan Developer",
    initials: "DR",
    avatarColor: "bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200",
  },
  {
    quote:
      "Design-to-code berjalan cepat, dan produk akhir terasa solid untuk portofolio maupun prototype.",
    name: "Budi Hartono",
    role: "Pengguna Beta",
    initials: "BH",
    avatarColor: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
  },
];
