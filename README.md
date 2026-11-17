# Wahyu — Ruang Personal

Website pribadi berbahasa Indonesia dengan pendekatan premium minimalist. Fokus pada identitas personal dan informasi yang memang ingin dibagikan.

## Teknologi
- Next.js 15 (App Router)
- React 19
- JavaScript
- Framer Motion
- Lucide React

## Menjalankan secara lokal

```bash
npm install
npm run dev
```

Buka http://localhost:3000.

## Pemeriksaan dan build produksi

```bash
npm run lint
npm run build
npm run start
```

## Konfigurasi URL publik

Salin `.env.example` menjadi `.env.local`, lalu isi `NEXT_PUBLIC_SITE_URL` dengan domain publik yang benar, misalnya `https://domain-anda.id`. URL ini digunakan untuk canonical URL, sitemap, dan robots metadata. Pada deployment Vercel, `VERCEL_URL` digunakan sebagai fallback untuk URL deployment.

## Deploy ke Vercel
1. Push isi folder proyek ke repository GitHub.
2. Import repository melalui https://vercel.com/new.
3. Pastikan framework terdeteksi sebagai Next.js.
4. Atur `NEXT_PUBLIC_SITE_URL` pada Environment Variables setelah domain final ditentukan.
5. Deploy dan periksa halaman desktop, mobile, pergantian tema, serta metadata sharing.

Tidak ada database atau environment variable wajib untuk menjalankan website.

## Konten dan privasi
- Website hanya menampilkan beranda dan bagian Tentang sampai ada karya nyata yang siap dipublikasikan.
- Tidak ada halaman catatan, kontak, atau proyek contoh yang dibuat-buat.
- Jangan menambahkan informasi pribadi yang tidak ingin dipublikasikan.
