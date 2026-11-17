'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowDown, ArrowUpRight, Menu, X } from 'lucide-react';

const nav = [['Tentang', '#tentang']];

function Reveal({ children, className = '', delay = 0 }) {
  const reduceMotion = useReducedMotion();
  return <motion.div className={className} initial={reduceMotion ? false : { opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: reduceMotion ? 0 : 0.4, delay, ease: [0.2, 0.7, 0.2, 1] }}>{children}</motion.div>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!menuOpen) return undefined;
    document.querySelector('#mobile-navigation a')?.focus();
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [menuOpen]);

  return (
    <>
      <a className="skip-link" href="#konten">Lewati ke konten utama</a>
      <header className="header">
        <a className="wordmark" href="#beranda" aria-label="Wahyu, kembali ke beranda">WAHYU<span>.</span></a>
        <nav className="desktop-nav" aria-label="Navigasi utama">{nav.map(([label, href]) => <a key={label} href={href}>{label}</a>)}</nav>
        <button ref={menuButtonRef} className="menu-toggle" type="button" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? 'Tutup navigasi' : 'Buka navigasi'} aria-expanded={menuOpen} aria-controls="mobile-navigation">
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </header>
      <nav id="mobile-navigation" className="mobile-nav" aria-label="Navigasi mobile" hidden={!menuOpen}>
        {nav.map(([label, href]) => <a key={label} href={href} onClick={() => setMenuOpen(false)}>{label}<ArrowUpRight size={17} aria-hidden="true" /></a>)}
      </nav>
      <main id="konten">
      <section className="hero" id="beranda" aria-labelledby="hero-title">
        <div className="hero-topline"><span>SEBUAH RUANG PERSONAL</span><span>INDONESIA</span></div>
        <div className="hero-main">
          <motion.div className="hero-copy" initial={reduceMotion ? false : { opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reduceMotion ? 0 : 0.5, ease: [0.2, 0.7, 0.2, 1] }}>
            <p className="eyebrow">SELAMAT DATANG</p>
            <h1 id="hero-title">Halo,<br />saya <em>Wahyu.</em></h1>
            <p className="hero-description">Saya senang mempelajari hal baru, mengeksplorasi gagasan, dan membuat sesuatu yang bermanfaat.</p>
            <div className="hero-actions">
              <a className="button-primary" href="#tentang">Kenali saya <ArrowUpRight size={16} aria-hidden="true" /></a>
              <a className="text-link" href="#tentang">Jelajahi <ArrowDown size={15} aria-hidden="true" /></a>
            </div>
          </motion.div>
          <motion.div className="hero-art" initial={reduceMotion ? false : { opacity: 0, scale: 0.985 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: reduceMotion ? 0 : 0.55, delay: reduceMotion ? 0 : 0.08 }} aria-hidden="true">
            <div className="art-frame"><span className="art-monogram">W.</span><span className="art-caption">RUANG PERSONAL<br />WAHYU</span></div>
            <span className="art-index">IDENTITAS / 001</span>
          </motion.div>
        </div>
        <div className="hero-bottom"><span>GULIR UNTUK MENJELAJAH</span><span className="scroll-line" aria-hidden="true" /><span>BERANDA / TENTANG</span></div>
      </section>
      <section className="intro-section" id="tentang" aria-labelledby="about-title">
        <div className="section-label"><span>01</span><span>TENTANG SAYA</span></div>
        <div className="intro-grid">
          <Reveal><h2 id="about-title">Terus belajar.<br /><span>Terus</span> <em>bertumbuh.</em></h2></Reveal>
          <Reveal className="intro-text" delay={0.06}>
            <p className="large-copy">Saya Wahyu. Saya menikmati proses memahami hal baru, mencoba gagasan, dan mengubahnya menjadi sesuatu yang bermanfaat.</p>
            <p>Website ini adalah ruang sederhana untuk memperkenalkan diri dan membagikan hal-hal yang memang ingin saya tampilkan. Saya memilih untuk menjaga hal personal tetap personal, dan membagikan hal yang punya nilai.</p>
          </Reveal>
        </div>
        <div className="principles" aria-label="Prinsip yang saya pegang">
          <Reveal><div><span>01</span><strong>Terus belajar</strong><p>Terbuka pada pengetahuan dan sudut pandang baru.</p></div></Reveal>
          <Reveal delay={0.07}><div><span>02</span><strong>Memberi nilai</strong><p>Mengutamakan hal yang berguna dan bermakna.</p></div></Reveal>
        </div>
      </section>
      <footer className="footer">
        <a className="wordmark" href="#beranda" aria-label="Kembali ke beranda">WAHYU<span>.</span></a><span>RUANG PERSONAL.</span>
        <a className="footer-top" href="#beranda">KEMBALI KE ATAS <ArrowUpRight size={13} aria-hidden="true" /></a>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} WAHYU.</span><span>DIBUAT DENGAN SEDERHANA.</span></div>
      </footer>
      </main>
    </>
  );
}
