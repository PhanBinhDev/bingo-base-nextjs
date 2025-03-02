import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/app/globals.css';

const inter = Inter({ subsets: ['latin'] });

import { Locale } from '@/features/internationalization/i18n-config';

export const metadata: Metadata = {
  title: 'Next.js for production',
  description: 'Next.js for production with BinhDev',
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: Locale }>;
}>) {
  const { lang } = await params;

  return (
    <html lang={lang}>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
