import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';

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

interface MenuItem {
  label: string;
  href: string;
}

type FromProp = 'index' | 'contact';

export const NavBar = ({ from = 'index' }: { from?: FromProp }) => {
  const t = useTranslations('Navbar');
  const locale = useLocale();

  const menuItems: MenuItem[] = [
    { label: 'contact', href: `${locale}/contact` },
  ];
  const mobileMenu = menuItems.map((item) =>
    !item.href.includes(from) ? item : null
  );

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
              {mobileMenu.length !== 0 &&
                menuItems.map(({ label, href }) => (
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
