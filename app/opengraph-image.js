import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Wahyu — Ruang Personal';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div style={{
        width: '100%', height: '100%', display: 'flex', flexDirection: 'column',
        justifyContent: 'space-between', padding: '72px', background: '#f4f3ef', color: '#20211f'
      }}>
        <div style={{ display: 'flex', fontSize: 22, letterSpacing: '5px', fontWeight: 700 }}>
          WAHYU<span style={{ color: '#9b8053' }}>.</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 24, letterSpacing: '5px', color: '#9b8053', marginBottom: 22 }}>SEBUAH RUANG PERSONAL</div>
          <div style={{ fontSize: 88, lineHeight: 1.05, letterSpacing: '-4px' }}>Halo, saya Wahyu.</div>
          <div style={{ fontSize: 28, color: '#77776f', marginTop: 24 }}>Ruang sederhana untuk mengenal dan berbagi.</div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 17, letterSpacing: '3px', color: '#77776f' }}>
          <span>PERSONAL WEBSITE</span><span>INDONESIA</span>
        </div>
      </div>
    ),
    size
  );
}
