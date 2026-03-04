import {
  defineRouting,
  RoutingConfig,
  LocalePrefixMode,
} from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';
import { AvailableLocales } from './types';

interface MyRoutingConfig extends RoutingConfig<
  readonly AvailableLocales[],
  LocalePrefixMode,
  never,
  never
> {
  locales: AvailableLocales[];
  defaultLocale: AvailableLocales;
}

const myRoutingConfig: MyRoutingConfig = {
  // A list of all locales that are supported
  locales: ['en', 'es'],

  // Used when no locale matches
  defaultLocale: 'en',
};

export const routing = defineRouting(myRoutingConfig);

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
