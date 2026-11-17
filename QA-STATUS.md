# Status QA — Wahyu Personal Website v1.5.0

## Perubahan pada branch `qa/final-polish-v7`
- Dependensi dipatok pada versi eksplisit; dependency ESLint flat-config dideklarasikan langsung.
- Runtime Node.js minimum ditetapkan ke 20.9.0.
- Menambahkan `.gitignore` dan `.env.example`.
- `metadataBase` tidak lagi memakai host placeholder `example.invalid`; canonical hanya aktif saat URL publik dikonfigurasi.
- Logika tema membaca `data-theme` hasil skrip awal sebelum menyelaraskan state React.
- Navigasi mobile: tautan menutup menu; Escape memulihkan fokus ke tombol pemicu.
- Karya tidak ditampilkan sebelum ada proyek nyata.
- Metadata Open Graph image, sitemap, robots, dan favicon dipertahankan.
- Menambahkan GitHub Actions untuk menjalankan ESLint dan production build pada setiap pull request menuju `main`.

## Verifikasi yang masih diperlukan
- Workflow GitHub Actions harus selesai dengan status sukses.
- Workflow membuat lockfile dari versi dependensi langsung yang dipatok, lalu menjalankan `npm ci`; lockfile diunggah sebagai artefak untuk dapat diperiksa.
- Pengujian browser desktop/mobile, keyboard, reduced motion, persistensi tema, dan preview berbagi belum dilakukan.
- Mengisi `NEXT_PUBLIC_SITE_URL` dengan domain final.
- Deployment Vercel belum dilakukan.

Status: perubahan dikirim melalui pull request; kelulusan CI dan build produksi masih menunggu hasil workflow.
