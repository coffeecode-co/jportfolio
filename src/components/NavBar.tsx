// components/Navbar.js
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Link from 'next/link';
import { Menu, Terminal } from 'lucide-react';
import { Separator } from '@radix-ui/react-dropdown-menu';

interface MenuItem {
  label: string;
  href: string;
}

const menuItems: MenuItem[] = [{ label: 'Say Hello!', href: '/contact' }];

export const NavBar = () => {
  return (
    <>
      <nav className="flex items-center justify-between px-8 py-4">
        <div className="text-xl font-bold">
          <Link href="/">
            <Terminal className="h-10 w-10" />
          </Link>
        </div>

        <div className="hidden md:flex space-x-4">
          {menuItems.map(({ label, href }) => (
            <Link key={href} href={href}>
              <Button
                variant="outline"
                className="border-transparent shadow-none hover:bg-background hover:border-primary"
              >
                {label}
              </Button>
            </Link>
          ))}
        </div>

        <div className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="!h-7 !w-7" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {menuItems.map(({ label, href }) => (
                <DropdownMenuItem key={href}>
                  <Link href={href} className="w-full">
                    {label}
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
