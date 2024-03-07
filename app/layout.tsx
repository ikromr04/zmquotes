import { Metadata } from 'next';
import './style.scss';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  robots: 'noindex,nofollow',
  title: 'Zafar Mirzo\'s Author Site',
  icons: [
    {
      rel: 'shortcut icon',
      type: 'image/x-icon',
      url: '/favicon.ico',
      sizes: 'any',
    },
    {
      rel: 'icon',
      type: 'image/svg+xml',
      url: '/icon.svg',
      sizes: 'any'
    },
    {
      rel: 'apple-touch-icon',
      type: 'image/png',
      url: '/images/favicons/apple-touch-icon.png',
      sizes: '180x180',
    },
    {
      rel: 'icon',
      type: 'image/png',
      url: '/images/favicons/android-chrome-192.png',
      sizes: '192x192',
    },
    {
      rel: 'icon',
      type: 'image/png',
      url: '/images/favicons/android-chrome-512.png',
      sizes: '512x512',
    },
  ],
};

function RootLayout({
  children
}: {
  children: ReactNode
}): JSX.Element {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

export default RootLayout;
