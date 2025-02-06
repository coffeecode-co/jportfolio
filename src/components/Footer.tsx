import Link from 'next/link';
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { AboutApp } from './AboutApp';
import { Button } from './ui/button';

import type { IconType } from 'react-icons/lib';

interface SotialMedia {
  name: string;
  url: string;
  icon: IconType;
}

const sotialMedias: SotialMedia[] = [
  { name: 'github', url: 'https://github.com/coffeecode-co', icon: FaGithub },
  {
    name: 'linkedin',
    url: 'https://www.linkedin.com/in/jpleonmaya/',
    icon: FaLinkedin,
  },
  {
    name: 'instagram',
    url: 'https://www.instagram.com/jp_maya',
    icon: FaInstagram,
  },
  {
    name: 'twitter',
    url: 'https://twitter.com/coffeecode_co',
    icon: FaTwitter,
  },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white py-8">
      <div className="container mx-auto px-4">
        {/* Social Media Links */}
        <div className="flex justify-center space-x-1 mb-6">
          {sotialMedias.map((sm) => {
            return (
              <Button key={sm.name} variant={'ghost'} asChild>
                <Link href={sm.url} target="_blank">
                  <sm.icon className="!h-5 !w-5" />
                </Link>
              </Button>
            );
          })}
        </div>

        {/* Copyright Info */}
        <div className="text-center text-sm">
          © {currentYear} Juan Pablo Leon. All rights reserved.
        </div>

        {/* About App Component */}
        <div className="mt-4 text-center text-xs">
          <AboutApp />
        </div>
      </div>
    </footer>
  );
};
