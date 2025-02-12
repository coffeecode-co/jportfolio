'use client';

import { usePathname } from 'next/navigation';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { Button } from './ui/button';
import Link from 'next/link';
import { Languages } from 'lucide-react';

// TODO: this is a initial state of component.

export const LanguageSwitcher = () => {
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
            <Link href={changeLanguage('en')}>
              <Button>En</Button>
            </Link>
            <Link href={changeLanguage('es')}>
              <Button>Es</Button>
            </Link>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
