# Wahyu — Ruang Personal

Website personal berbahasa Indonesia dengan identitas visual monogram. Konten sengaja dijaga tetap faktual: website tidak menampilkan biodata, proyek, pengalaman, atau alamat kontak yang belum diberikan.

## Teknologi
- Next.js 15 (App Router)
- React 19
- JavaScript
- Lucide React

Halaman utama menggunakan Server Component. Interaksi navigasi mobile memakai elemen HTML `details/summary`, sehingga tidak memerlukan state atau JavaScript client khusus.

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
Atur `NEXT_PUBLIC_SITE_URL` ke domain final. Nilai ini digunakan untuk canonical URL, sitemap, dan robots.

## Deploy Vercel
1. Pastikan Framework Preset menggunakan **Next.js**.
2. Pastikan Root Directory menunjuk ke folder aplikasi pada repository.
3. Atur `NEXT_PUBLIC_SITE_URL` ke domain publik.
4. Deploy, lalu periksa tampilan pada lebar 320 px, 375 px, 768 px, dan desktop.
5. Uji navigasi keyboard, menu mobile, metadata sharing, sitemap, robots, dan halaman 404.

## Catatan konten
- Bagian Karya/Portofolio belum ditampilkan karena belum ada proyek nyata yang dikonfirmasi.
- Bagian Kontak sudah disiapkan, tetapi alamat email belum dicantumkan. Tambahkan alamat email yang benar sebelum mengaktifkan tautan `mailto:`.
- Tidak ada database atau login.
