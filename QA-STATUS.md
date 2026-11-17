# Status QA — Wahyu Personal Website v1.5.0

## Perubahan pada branch qa/final-polish-v7
- Dependensi dipatok pada versi eksplisit; dependency ESLint flat-config dideklarasikan langsung.
- Menambahkan .gitignore dan .env.example.
- metadataBase selalu valid; canonical hanya diaktifkan saat URL publik tersedia.
- Logika tema membaca data-theme hasil skrip awal sebelum menyelaraskan state React.
- Navigasi mobile: tautan menutup menu tanpa memindahkan fokus secara keliru; Escape memulihkan fokus ke pemicu.
- Karya tidak ditampilkan sebelum ada proyek nyata.
- Metadata Open Graph image, sitemap, robots, dan favicon dipertahankan.

## Verifikasi yang masih diperlukan
- npm install dan menghasilkan package-lock.json.
- npm run lint.
- npm run build.
- Tes browser desktop dan mobile.
- Uji keyboard, reduced motion, persistensi tema, dan preview berbagi.
- Mengisi NEXT_PUBLIC_SITE_URL dengan domain final.
- Deployment Vercel.

Status: perubahan kode dikomit pada branch terpisah; build produksi belum diklaim lulus.
