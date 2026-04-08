# Portfolio Next.js

Portfolio freelance yang responsive, fast, dan siap deploy. Dibangun dengan Next.js 14, Tailwind CSS, TypeScript, dan dark mode otomatis.

## Struktur Project

```
src/
├── app/
│   ├── layout.tsx       # Root layout + dark mode init
│   ├── page.tsx         # Halaman utama
│   └── globals.css      # Global styles + Tailwind
├── components/
│   ├── Navbar.tsx       # Sticky nav + dark mode toggle + mobile menu
│   ├── Hero.tsx         # Hero section + CTA
│   ├── About.tsx        # Bio + statistik
│   ├── Skills.tsx       # Tech stack pills
│   ├── Projects.tsx     # Project cards grid
│   ├── Testimonials.tsx # Testimoni client
│   ├── Contact.tsx      # Contact section
│   └── Footer.tsx       # Footer
└── data/
    └── portfolio.ts     # ⭐ EDIT INI untuk ganti semua konten
```

## Setup & Jalankan

```bash
# Install dependencies
npm install

# Jalankan dev server
npm run dev

# Buka di browser
# http://localhost:3000
```

## Cara Kustomisasi

**Semua konten ada di satu file:** `src/data/portfolio.ts`

Edit bagian ini sesuai info kamu:

```ts
export const siteConfig = {
  name: "Nama Kamu",
  handle: "nama.dev",
  tagline: "...",
  taglineAccent: "kata keren",
  description: "Deskripsi singkat tentang kamu",
  about: "Paragraf panjang tentang kamu",
  contact: {
    email: "kamu@email.com",
    whatsapp: "628xxxxxxxxx",
    linkedin: "https://linkedin.com/in/kamu",
    github: "https://github.com/kamu",
  },
};

export const skills = ["React", "Flutter", ...]; // Ganti skill kamu

export const projects = [...]; // Ganti dengan project nyata kamu

export const testimonials = [...]; // Ganti dengan testimoni asli
```

## Deploy ke Vercel (Gratis)

1. Push project ke GitHub
2. Buka [vercel.com](https://vercel.com) → Import repo
3. Klik Deploy — selesai! Domain gratis `nama.vercel.app`

## Deploy ke Netlify (Gratis)

```bash
npm run build
```
Upload folder `.next` ke [netlify.com/drop](https://app.netlify.com/drop)

## Fitur

- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Dark mode otomatis + toggle manual
- ✅ Sticky navbar dengan blur
- ✅ Mobile hamburger menu
- ✅ Smooth scroll antar section
- ✅ Hover animations di project cards
- ✅ SEO-ready (metadata di layout.tsx)
- ✅ TypeScript strict mode
- ✅ Semua konten di satu file data (mudah diedit)
