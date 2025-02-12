'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { Button } from './ui/button';
import { Languages } from 'lucide-react';
import { AvalibleLocales } from '@/i18n/types';

const locales: AvalibleLocales[] = ['en', 'es']; // Add more languages as needed

export const LanguageSwitcher = () => {
  const t = useTranslations('LangSwitcher');
  const pathname = usePathname();

  const changeLanguage = (locale: string) => {
    // Replace the current locale in the URL
    const newPath = pathname.replace(/\/en|\/es/, `/${locale}`);
    return newPath;
  };

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger
            showArrowIcon={false}
            className="border border-transparent p-2 h-9 w-9 hover:!bg-background hover:border-primary"
          >
            <Languages size={16} />
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            {locales.map((local) => (
              <Link key={local} href={changeLanguage(local)}>
                <Button variant={'ghost'} className="w-full">
                  {t(local)}
                </Button>
              </Link>
            ))}
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
