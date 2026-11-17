import { ArrowDown, ArrowUpRight } from 'lucide-react';

const nav = [
  ['Tentang', '#tentang'],
  ['Prinsip', '#prinsip'],
  ['Kontak', '#kontak'],
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#konten">Lewati ke konten utama</a>
      <header className="header">
        <a className="wordmark" href="#beranda" aria-label="Wahyu, kembali ke beranda">WAHYU<span>.</span></a>
        <nav className="desktop-nav" aria-label="Navigasi utama">
          {nav.map(([label, href]) => <a key={label} href={href}>{label}</a>)}
        </nav>
        <details className="mobile-menu">
          <summary aria-label="Buka navigasi"><span className="menu-label">MENU</span><span className="menu-symbol" aria-hidden="true">+</span></summary>
          <nav className="mobile-nav" aria-label="Navigasi mobile">
            {nav.map(([label, href]) => <a key={label} href={href}>{label}<ArrowUpRight size={17} aria-hidden="true" /></a>)}
          </nav>
        </details>
      </header>

      <main id="konten">
        <section className="hero" id="beranda" aria-labelledby="hero-title">
          <div className="hero-topline"><span>CATATAN PERSONAL</span><span>INDONESIA</span></div>
          <div className="hero-main">
            <div className="hero-copy">
              <p className="eyebrow">SENANG BERTEMU DENGANMU</p>
              <h1 id="hero-title">Halo,<br />saya <em>Wahyu.</em></h1>
              <p className="hero-description">Ini ruang kecil untuk mengenal saya, melihat hal yang sedang saya pikirkan, dan mengikuti hal-hal yang ingin saya bagikan.</p>
              <div className="hero-actions">
                <a className="button-primary" href="#tentang">Kenali saya <ArrowUpRight size={16} aria-hidden="true" /></a>
                <a className="text-link" href="#prinsip">Lihat lebih jauh <ArrowDown size={15} aria-hidden="true" /></a>
              </div>
            </div>
            <div className="hero-art" aria-label="Monogram W sebagai identitas visual">
              <div className="art-frame"><span className="art-monogram">W.</span><span className="art-caption">RUANG PERSONAL<br />WAHYU</span></div>
              <span className="art-index">SEBUAH PERKENALAN</span>
            </div>
          </div>
          <div className="hero-bottom"><span>SEDIKIT TENTANG SAYA</span><span className="scroll-line" aria-hidden="true" /><span>01 — 03</span></div>
        </section>

        <section className="intro-section" id="tentang" aria-labelledby="about-title">
          <div className="section-label"><span>01</span><span>TENTANG SAYA</span></div>
          <div className="intro-grid">
            <div><h2 id="about-title">Ruang untuk<br /><span>terus</span> <em>bertumbuh.</em></h2></div>
            <div className="intro-text">
              <p className="large-copy">Saya Wahyu. Saya menikmati proses memahami hal baru, mencoba gagasan, dan mengubahnya menjadi sesuatu yang bermanfaat.</p>
              <p>Halaman ini saya buat sebagai ruang personal yang sederhana. Tidak semua hal perlu dipajang; saya ingin membagikan sesuatu ketika memang ada cerita atau nilai yang layak dibagikan.</p>
            </div>
          </div>
        </section>

        <section className="principles-section" id="prinsip" aria-labelledby="principles-title">
          <div className="section-label"><span>02</span><span>CARA PANDANG</span></div>
          <div className="principles-heading">
            <h2 id="principles-title">Hal yang ingin <em>saya jaga.</em></h2>
            <p>Bukan daftar pencapaian, melainkan pengingat sederhana tentang cara saya ingin menjalani proses.</p>
          </div>
          <div className="principles">
            <article><span>01</span><strong>Terus belajar</strong><p>Tetap terbuka pada pengetahuan, pengalaman, dan sudut pandang baru.</p></article>
            <article><span>02</span><strong>Memberi nilai</strong><p>Mengutamakan hal yang berguna, bukan sekadar terlihat menarik.</p></article>
          </div>
        </section>

        <section className="contact-section" id="kontak" aria-labelledby="contact-title">
          <div className="section-label"><span>03</span><span>KONTAK</span></div>
          <div className="contact-content">
            <div><p className="eyebrow">TERBUKA UNTUK TERHUBUNG</p><h2 id="contact-title">Ada yang ingin<br /><em>disampaikan?</em></h2></div>
            <div className="contact-note">
              <p>Saya ingin menyediakan jalur komunikasi melalui email. Alamat email belum dicantumkan di website ini.</p>
              <span className="contact-status">EMAIL BELUM DIPUBLIKASIKAN</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <a className="wordmark" href="#beranda" aria-label="Kembali ke beranda">WAHYU<span>.</span></a>
        <span>RUANG PERSONAL.</span>
        <a className="footer-top" href="#beranda">KEMBALI KE ATAS <ArrowUpRight size={13} aria-hidden="true" /></a>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} WAHYU.</span><span>DIBUAT DENGAN SEDERHANA.</span></div>
      </footer>
    </>
  );
}
