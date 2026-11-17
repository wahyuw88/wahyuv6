# Status QA — Wahyu Personal Website v1.6.0

## Perubahan pada branch `qa/final-polish-v7`
- Upgrade Next.js dan ESLint config Next.js ke 15.5.29.
- Upgrade React dan React DOM ke 19.1.8.
- Migrasi dari `framer-motion` ke paket Motion dengan import `motion/react`, menghindari ketidakcocokan internal `motion-dom`.
- Dependensi langsung dipatok pada versi eksplisit; runtime Node.js minimum ditetapkan ke 20.9.0.
- Menambahkan `.gitignore` dan `.env.example`.
- `metadataBase` tidak memakai host placeholder yang tidak valid; canonical aktif saat URL publik dikonfigurasi.
- Logika tema membaca `data-theme` hasil skrip awal sebelum menyelaraskan state React.
- Navigasi mobile: Escape memulihkan fokus ke tombol pemicu; tautan menutup menu tanpa memindahkan fokus ke elemen yang disembunyikan.
- Karya tidak ditampilkan sebelum ada proyek nyata.
- Metadata Open Graph image, sitemap, robots, dan favicon dipertahankan.
- GitHub Actions menjalankan ESLint dan production build. Setelah build sukses, lockfile di-commit ke branch PR agar instalasi berikutnya dapat direproduksi.

## Hasil CI
- Run pertama: ESLint lulus, build gagal karena ekspor internal `activeAnimations` tidak tersedia pada versi `motion-dom` yang terselesaikan bersama Framer Motion lama.
- Run kedua: instalasi dependensi, ESLint, dan Next.js production build lulus setelah pembaruan paket animasi dan framework.
- Lockfile dihasilkan di CI dan disiapkan untuk dikomit ke branch PR setelah build berhasil.

## Pemeriksaan yang masih diperlukan
- Run CI terbaru harus menyelesaikan verifikasi menggunakan lockfile yang sudah dikomit.
- Preview Vercel perlu dipastikan berstatus Ready.
- Pengujian visual browser desktop/mobile dan Lighthouse belum dilakukan.
- Mengisi `NEXT_PUBLIC_SITE_URL` dengan domain final sebelum deployment produksi.
- Deployment produksi belum dilakukan.

Status: build sukses pada CI kedua; menunggu verifikasi ulang dengan lockfile permanen dan status Preview Vercel.
