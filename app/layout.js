import './globals.css';
import { siteUrl } from '../lib/site-url';

export const metadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  title: { default: 'Wahyu — Ruang Personal', template: '%s — Wahyu' },
  description: 'Ruang personal Wahyu untuk memperkenalkan diri, berbagi prinsip, dan menampilkan hal-hal yang ingin dibagikan.',
  applicationName: 'Wahyu — Ruang Personal',
  alternates: siteUrl ? { canonical: siteUrl } : undefined,
  openGraph: {
    title: 'Wahyu — Ruang Personal',
    description: 'Ruang sederhana untuk mengenal Wahyu dan hal-hal yang ingin dibagikan.',
    type: 'website', locale: 'id_ID', siteName: 'Wahyu',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Wahyu — Ruang Personal' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wahyu — Ruang Personal',
    description: 'Ruang sederhana untuk mengenal Wahyu dan hal-hal yang ingin dibagikan.',
    images: ['/opengraph-image']
  },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }) {
  return <html lang="id"><body>{children}</body></html>;
}
