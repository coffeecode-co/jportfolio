'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from './ui/button';
import { Languages } from 'lucide-react';
import { AvalibleLocales } from '@/i18n/types';
import { cn } from '@/lib/utils';

const locales: AvalibleLocales[] = ['en', 'es']; // Add more languages as needed

export const LanguageSwitcher = ({
  btnClassName,
}: {
  btnClassName?: string;
}) => {
  const t = useTranslations('LangSwitcher');
  const pathname = usePathname();

  const changeLanguage = (locale: string) => {
    // Replace the current locale in the URL
    const newPath = pathname.replace(/\/en|\/es/, `/${locale}`);
    return newPath;
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className={cn(btnClassName)}>
          <Languages />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {locales.map((local) => (
          <Link key={local} href={changeLanguage(local)}>
            <Button variant={'ghost'} className="w-full">
              {t(local)}
            </Button>
          </Link>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
