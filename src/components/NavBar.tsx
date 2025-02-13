// components/Navbar.js
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { ThemeSwitch } from './ThemeSwitch';
import { LanguageSwitcher } from './LanguageSwitcher';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Menu, Terminal } from 'lucide-react';
import { Separator } from '@radix-ui/react-dropdown-menu';
import { getLocale } from 'next-intl/server';

interface MenuItem {
  label: string;
  href: string;
}

export const NavBar = async () => {
  const t = useTranslations('Navbar');
  const locale = await getLocale();
  const menuItems: MenuItem[] = [
    { label: 'contact', href: `${locale}/contact` },
  ];

  return (
    <>
      <nav className="flex items-center justify-between px-8 py-4">
        <div className="text-xl font-bold">
          <Link href="/">
            <Terminal className="h-10 w-10" />
          </Link>
        </div>

        <div className="hidden md:flex space-x-4">
          <LanguageSwitcher btnClassName="border-transparent shadow-none hover:bg-background hover:border-primary" />
          <ThemeSwitch btnClassName="border-transparent shadow-none hover:bg-background hover:border-primary" />
          {menuItems.map(({ label, href }) => (
            <Link key={href} href={href}>
              <Button
                variant="outline"
                className="border-transparent shadow-none hover:bg-background hover:border-primary"
              >
                {t(label)}
              </Button>
            </Link>
          ))}
        </div>

        <div className="md:hidden flex justify-center items-center">
          <LanguageSwitcher />
          <ThemeSwitch btnClassName="border-transparent shadow-none hover:bg-background hover:border-primary mx-4" />

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="!h-7 !w-7" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {menuItems.map(({ label, href }) => (
                <DropdownMenuItem key={href}>
                  <Link href={href} className="w-full text-center">
                    {t(label)}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
      <Separator className="h-1 bg-primary" />
    </>
  );
};
