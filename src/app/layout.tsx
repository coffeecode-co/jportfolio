import type { Metadata } from 'next';
import { Noto_Sans_Mono, Source_Code_Pro } from 'next/font/google';
import './globals.css';
import { Footer } from '@/components/Footer';
import { NavBar } from '@/components/NavBar';

const notoSansMono = Noto_Sans_Mono({
  variable: '--font-noto-sans-mono',
  subsets: ['latin'],
});

const sourceCodePro = Source_Code_Pro({
  variable: '--font-source-code-pro',
  subsets: ['latin'],
});

// TODO: check metadata
export const metadata: Metadata = {
  title: 'Juan Pablo Leon - Portfolio',
  description: 'Frontend Developer | Web Developer | Professional Portfolio',
  keywords: ['frontend', 'developer', 'portfolio', 'web development'],
  authors: [{ name: 'Juan Pablo Leon' }],
  openGraph: {
    title: 'Juan Pablo Leon - Portfolio',
    description: 'Frontend Developer | Web Developer | Professional Portfolio',
    url: 'https://yourdomain.com',
    siteName: 'Juan Pablo Leon Portfolio',
    images: '/profile.jpg',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${notoSansMono.variable} ${sourceCodePro.variable} antialiased`}
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
