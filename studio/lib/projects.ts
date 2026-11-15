export type ProjectCategory = "Commerce" | "Editorial" | "Platform" | "Creative" | "Data" | "Productivity";

export type Project = {
  slug: string;
  name: string;
  kicker: string;
  headline: string;
  summary: string;
  category: ProjectCategory;
  year: string;
  stack: string[];
  repo: string;
  live?: string;
  tint: "violet" | "blue" | "amber" | "cyan" | "green" | "pink";
  number: string;
  objective: string;
  contribution: string;
  highlights: string[];
  nextSteps: string[];
};

export const projects: Project[] = [
  {
    slug: "stryde",
    name: "STRYDE",
    kicker: "COMMERCE EXPERIENCE",
    headline: "Sebuah toko sepatu dengan pengalaman belanja modern.",
    summary: "Eksplorasi platform e-commerce sepatu: katalog, detail produk, keranjang, checkout, dan dashboard admin.",
    category: "Commerce", year: "2026", stack: ["Next.js", "TypeScript", "Supabase", "Tailwind"],
    repo: "https://github.com/Torrayz/tokosepatu", tint: "violet", number: "01",
    objective: "Mencoba merancang pengalaman belanja yang terasa premium tetapi tetap mudah digunakan di perangkat mobile.",
    contribution: "Eksplorasi struktur storefront, halaman produk, keranjang, akun, dan alur dashboard admin dalam satu aplikasi.",
    highlights: ["Katalog dan halaman detail produk", "Checkout dan riwayat pemesanan", "Dashboard admin dan pengelolaan produk", "Penerapan Supabase Auth dan PostgreSQL"],
    nextSteps: ["Audit checkout end-to-end", "Pengujian stok dan otorisasi", "Optimasi gambar dan performa mobile"]
  },
  {
    slug: "madura-store",
    name: "MADURA STORE",
    kicker: "CULINARY DISCOVERY",
    headline: "Mengangkat resep Madura menjadi pengalaman digital.",
    summary: "Website eksplorasi resep khas Madura dengan pencarian, koleksi favorit, dan sumber data Supabase.",
    category: "Creative", year: "2026", stack: ["Vite", "JavaScript", "Supabase", "CSS"],
    repo: "https://github.com/Torrayz/Torrayz.github.io", live: "https://madura-store-xi.vercel.app", tint: "amber", number: "02",
    objective: "Membuat katalog resep yang memberi ruang bagi identitas kuliner daerah dan lebih mudah dieksplorasi.",
    contribution: "Merancang halaman discovery, daftar resep, fitur favorit lokal, dan integrasi data resep yang dipublikasikan.",
    highlights: ["Katalog resep berbasis database", "Pencarian dan navigasi resep", "Favorit serta daftar belanja lokal", "Tampilan responsif untuk perangkat mobile"],
    nextSteps: ["Perluasan data resep terverifikasi", "Pengujian admin dan aksesibilitas", "Optimasi visual mobile"]
  },
  {
    slug: "newshub",
    name: "NEWSHUB",
    kicker: "EDITORIAL WORKSPACE",
    headline: "Ruang redaksi digital untuk ide dan tulisan.",
    summary: "Eksperimen CMS artikel dengan alur draft, publikasi, autentikasi editor, dan pengelolaan konten.",
    category: "Editorial", year: "2026", stack: ["React", "Vite", "Supabase", "PostgreSQL"],
    repo: "https://github.com/Torrayz/pemprograman2_13nov", live: "https://newshub-torray.vercel.app", tint: "blue", number: "03",
    objective: "Membawa latihan PHP/MySQL menjadi studio editorial berbasis React yang lebih mudah di-hosting.",
    contribution: "Membangun ulang antarmuka editorial dan menghubungkannya dengan artikel, autentikasi, serta izin berbasis role.",
    highlights: ["Studio penulisan dan pengeditan artikel", "Status draft dan publikasi", "Akses berbasis role melalui RLS", "Migrasi struktur data ke PostgreSQL"],
    nextSteps: ["Pengujian editor multi-akun", "Validasi publikasi end-to-end", "Penyempurnaan editor rich text"]
  },
  {
    slug: "mister-komputer",
    name: "MISTER KOMPUTER",
    kicker: "LEARNING PLATFORM",
    headline: "Belajar keterampilan digital dalam satu platform.",
    summary: "Prototipe kursus digital dengan katalog, pendaftaran, akun pengguna, dan simulasi review pembayaran.",
    category: "Platform", year: "2026", stack: ["React", "Vite", "Supabase", "PostgreSQL"],
    repo: "https://github.com/Torrayz/pemprograman2_21des", live: "https://mister-komputer-torray.vercel.app", tint: "cyan", number: "04",
    objective: "Menyederhanakan sistem kursus lama menjadi aplikasi modern dengan akses akun dan katalog yang mudah dicari.",
    contribution: "Migrasi tampilan dari PHP menjadi React serta pemisahan hak akses, data kursus, dan proses pembayaran demo.",
    highlights: ["Katalog kursus dan informasi program", "Pendaftaran per akun", "Dashboard pengelolaan kursus", "Alur pembayaran simulasi yang tidak otomatis lunas"],
    nextSteps: ["Pengujian pembayaran simulasi", "Validasi peran admin", "Penyempurnaan pengalaman belajar"]
  },
  {
    slug: "torray-student",
    name: "TORRAY STUDENT",
    kicker: "STUDENT WORKSPACE",
    headline: "Ruang kerja akademik yang lebih teratur.",
    summary: "Manajemen data mahasiswa dan perencana tugas akademik dengan autentikasi dan penyimpanan privat.",
    category: "Productivity", year: "2026", stack: ["Vite", "JavaScript", "Supabase", "Auth"],
    repo: "https://github.com/Torrayz/Torrayweb", live: "https://torray-student.vercel.app", tint: "green", number: "05",
    objective: "Mengubah latihan CRUD mahasiswa menjadi workspace pribadi yang lebih mudah digunakan.",
    contribution: "Dashboard mahasiswa, profil, form CRUD, filter, ekspor CSV, dan kartu perencanaan tugas demo.",
    highlights: ["CRUD data mahasiswa", "Profil akademik dan daftar tugas", "Ekspor CSV", "RLS per akun pengguna"],
    nextSteps: ["CRUD tugas secara menyeluruh", "Pengingat tenggat", "Pengujian privasi antar akun"]
  },
  {
    slug: "blooming-garden",
    name: "BLOOMING GARDEN",
    kicker: "CREATIVE CODE",
    headline: "Eksperimen gerak dan interaksi berbasis CSS.",
    summary: "Taman bunga animatif dengan motion yang dapat dijeda serta pengalaman yang lebih ramah perangkat mobile.",
    category: "Creative", year: "2026", stack: ["HTML", "CSS", "JavaScript"],
    repo: "https://github.com/Torrayz/bunga", tint: "pink", number: "06",
    objective: "Mempelajari bagaimana motion dan komposisi visual bisa membentuk pengalaman digital yang sederhana tetapi ekspresif.",
    contribution: "Pemulihan animasi, kontrol jeda/lanjut, dan penyesuaian preferensi gerak sistem.",
    highlights: ["CSS flower motion", "Kontrol pause dan resume", "Dukungan prefers-reduced-motion", "Tampilan mobile yang diperbarui"],
    nextSteps: ["Visual QA lintas browser", "Optimasi performa animasi", "Eksperimen theme variants"]
  }
];

export const selectedProjects = projects.slice(0, 4);
export function getProject(slug: string) { return projects.find(p => p.slug === slug); }