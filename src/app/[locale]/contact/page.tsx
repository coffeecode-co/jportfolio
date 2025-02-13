import { ContactForm } from '@/components/ContactForm';
import { NavBar } from '@/components/NavBar';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact me',
  description: 'Frontend Developer | Web Developer | Professional Portfolio',
  keywords: [
    'frontend',
    'developer',
    'portfolio',
    'web development',
    'email',
    'contact',
  ],
  authors: [{ name: 'Juan Pablo Leon' }],
  openGraph: {
    title: 'Juan Pablo Leon - Portfolio',
    description: 'Frontend Developer | Web Developer | Contact Form',
    url: 'https://juanpabloleonmaya.vercel.app/contact/',
    siteName: 'Juan Pablo Leon Portfolio',
    type: 'website',
  },
};

export default function Page() {
  return (
    <>
      <NavBar from="contact" />
      <ContactForm className="h-screen" />
    </>
  );
}
