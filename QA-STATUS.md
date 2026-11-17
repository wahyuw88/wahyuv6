# Status QA — Wahyu Personal Website

Tanggal pemeriksaan: 17 November 2026

## Pemeriksaan yang berhasil
- Arsip sumber versi 5.0 berhasil diekstrak dan struktur proyek diperiksa.
- `node --check` berhasil untuk `lib/site-url.js`, `app/sitemap.js`, dan `app/robots.js`.
- Helper URL diuji untuk kondisi tanpa konfigurasi, URL valid dengan trailing slash, dan URL tidak valid.
- Pemeriksaan struktur navigasi, target anchor, metadata, sitemap, robots, dan konfigurasi tema dilakukan secara statis.
- Perbaikan aksesibilitas: skip link ke konten, fokus keyboard yang terlihat, dan pengembalian fokus saat menu mobile ditutup.
- Helper URL publik dipusatkan dan dibuat tahan terhadap nilai environment variable yang tidak valid.
- Aturan reduced-motion CSS digabungkan dan disempurnakan.

## Belum dapat diverifikasi
- `npm install` tidak selesai karena koneksi ke registry dependensi mengalami timeout.
- `npm run lint` tidak dapat dijalankan: executable `eslint` belum tersedia karena dependensi belum terpasang.
- `npm run build` tidak dapat dijalankan: executable `next` belum tersedia karena dependensi belum terpasang.
- Pengujian browser desktop/mobile belum dapat dilakukan karena aplikasi Next.js tidak dapat dijalankan tanpa dependensi.
- Deployment GitHub/Vercel belum dilakukan; diperlukan repository tujuan dan akses akun pengguna.

## Langkah untuk menyelesaikan QA di komputer lokal
1. Jalankan `npm install` hingga selesai; commit `package-lock.json` yang dihasilkan.
2. Jalankan `npm run lint` dan perbaiki semua temuan.
3. Jalankan `npm run build` sampai berhasil.
4. Jalankan `npm run start`, lalu uji desktop, mobile, tema, menu keyboard, dan metadata.
5. Isi `NEXT_PUBLIC_SITE_URL` dengan domain final sebelum deployment produksi.

Status: **perbaikan statis selesai; QA produksi belum lulus**.
