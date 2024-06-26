// pages/_app.tsx or pages/index.tsx
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Inter } from 'next/font/google';
import './globals.css';
import { conthrax, futuraPT } from '../styles/fonts';

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();


  return (
    <html lang={locale}>
      <body className={` ${conthrax.className} ${futuraPT.className}`}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
