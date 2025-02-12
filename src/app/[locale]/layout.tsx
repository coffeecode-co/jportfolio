import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

import { Noto_Sans_Mono, Source_Code_Pro } from 'next/font/google';
import '../globals.css';
import { Footer } from '@/components/Footer';
import { NavBar } from '@/components/NavBar';
import { ThemeProvider } from '@/components/ThemeProvider';

const notoSansMono = Noto_Sans_Mono({
  variable: '--font-noto-sans-mono',
  subsets: ['latin'],
});

const sourceCodePro = Source_Code_Pro({
  variable: '--font-source-code-pro',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Juan Pablo Leon - Portfolio',
  description: 'Frontend Developer | Web Developer | Professional Portfolio',
  keywords: ['frontend', 'developer', 'portfolio', 'web development'],
  authors: [{ name: 'Juan Pablo Leon' }],
  openGraph: {
    title: 'Juan Pablo Leon - Portfolio',
    description: 'Frontend Developer | Web Developer | Professional Portfolio',
    url: 'https://juanpabloleonmaya.vercel.app/',
    siteName: 'Juan Pablo Leon Portfolio',
    type: 'website',
  },
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  // const locale = await getLocale();
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();
  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${notoSansMono.variable} ${sourceCodePro.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider messages={messages}>
            <NavBar />
            {children}
            <Footer />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
