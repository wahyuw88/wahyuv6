import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Wahyu — Ruang Personal';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div style={{
        width: '100%', height: '100%', display: 'flex', flexDirection: 'row',
        alignItems: 'center', justifyContent: 'space-between', padding: '72px 88px',
        background: '#f4f3ef', color: '#20211f'
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', flex: 1 }}>
          <div style={{ display: 'flex', fontSize: 22, letterSpacing: '5px', fontWeight: 700 }}>
            WAHYU<span style={{ color: '#755a32' }}>.</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontSize: 19, letterSpacing: '4px', color: '#755a32', marginBottom: 24 }}>CATATAN PERSONAL</div>
            <div style={{ fontSize: 76, lineHeight: 1.05, letterSpacing: '-3px' }}>Halo, saya</div>
            <div style={{ fontSize: 92, lineHeight: 1.05, fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>Wahyu.</div>
            <div style={{ fontSize: 23, color: '#686960', marginTop: 24 }}>Ruang kecil untuk mengenal dan berbagi.</div>
          </div>
          <div style={{ display: 'flex', fontSize: 15, letterSpacing: '3px', color: '#686960' }}>RUANG PERSONAL · INDONESIA</div>
        </div>
        <div style={{
          width: 310, height: 390, marginLeft: 55, border: '1px solid #d4d2c9',
          background: 'linear-gradient(145deg, #e8e5dc, #f4f3ef)', display: 'flex',
          alignItems: 'center', justifyContent: 'center', position: 'relative'
        }}>
          <div style={{ fontSize: 170, fontFamily: 'Georgia, serif', color: '#20211f', letterSpacing: '-12px' }}>W.</div>
          <div style={{ position: 'absolute', left: 22, top: 22, width: 34, height: 1, background: '#755a32' }} />
          <div style={{ position: 'absolute', left: 22, top: 22, width: 1, height: 34, background: '#755a32' }} />
        </div>
      </div>
    ),
    size
  );
}
