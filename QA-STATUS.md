# Status QA — Wahyu Personal Website v1.6.0

## Perubahan pada branch `qa/final-polish-v7`
- Upgrade Next.js dan eslint-config-next ke 15.5.29.
- Upgrade React dan React DOM ke 19.1.8.
- Migrasi dari `framer-motion` lama ke paket Motion dengan import `motion/react`.
- Dependensi langsung dipatok pada versi eksplisit; runtime Node.js minimum 20.9.0.
- Menambahkan lockfile npm, `.gitignore`, dan `.env.example`.
- `metadataBase` tidak memakai host placeholder; canonical aktif saat URL publik dikonfigurasi.
- Logika tema membaca `data-theme` awal sebelum menyelaraskan state React.
- Navigasi mobile mendukung Escape dan fokus keyboard.
- Metadata Open Graph, sitemap, robots, dan favicon dipertahankan.
- GitHub Actions memakai `npm ci` dari lockfile yang dikomit, kemudian menjalankan ESLint dan production build.

## Hasil verifikasi
- Run CI pertama: ESLint lulus, build gagal karena ketidakcocokan Framer Motion lama dengan `motion-dom`.
- Setelah upgrade Next.js, React, dan Motion: instalasi dependensi, ESLint, dan `next build` lulus pada CI.
- Lockfile yang dihasilkan dari instalasi sukses sudah dikomit ke branch PR.
- CI disederhanakan menjadi read-only dan akan menjalankan ulang seluruh pemeriksaan langsung dari lockfile permanen.

## Belum diverifikasi
- CI terbaru menggunakan lockfile permanen.
- Preview Vercel berstatus Ready.
- Pengujian browser visual desktop/mobile dan Lighthouse.
- Domain publik final untuk `NEXT_PUBLIC_SITE_URL`.
- Deployment produksi.

Status: build telah berhasil menggunakan dependency lock yang sama; menunggu run terakhir pada commit dengan lockfile permanen.
