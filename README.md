# Wahyu — Ruang Personal

Website pribadi berbahasa Indonesia dengan pendekatan premium minimalist. Konten dibatasi pada informasi yang memang ingin dibagikan.

## Teknologi
- Next.js 15 (App Router)
- React 19
- JavaScript
- Motion (animasi)
- Lucide React

## Menjalankan lokal
```bash
npm install
npm run dev
```
Buka http://localhost:3000.

## QA dan build
```bash
npm run lint
npm run build
npm run start
```

## URL publik
Salin .env.example menjadi .env.local dan isi NEXT_PUBLIC_SITE_URL dengan URL domain final. Nilai ini digunakan untuk canonical URL, sitemap, dan robots.

## Deploy Vercel
1. Import repository GitHub ke Vercel.
2. Framework: Next.js.
3. Atur NEXT_PUBLIC_SITE_URL setelah domain final ditentukan.
4. Deploy, lalu uji pada lebar 320 px, 375 px, 768 px, dan desktop.
5. Uji navigasi keyboard (Tab, Shift+Tab, Enter, Escape), tombol tema, preferensi tema, dan reduced motion.
6. Periksa metadata sharing, sitemap, robots, serta halaman 404.

Tidak ada database atau login. Bagian Karya tidak ditampilkan sebelum ada proyek nyata.
