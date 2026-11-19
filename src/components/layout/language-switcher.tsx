'use client';
import {useLocale} from 'next-intl';
import {usePathname, useRouter} from '@/i18n/navigation';
import {Button} from '@/components/ui/button';
import type {Locale} from '@/types';

export function LanguageSwitcher() {
  const locale = useLocale() as Locale; const pathname = usePathname(); const router = useRouter();
  const nextLocale: Locale = locale === 'en' ? 'id' : 'en';
  return <Button variant="ghost" size="sm" aria-label={locale === 'en' ? 'Switch to Indonesian' : 'Ganti ke bahasa Inggris'} onClick={() => router.replace(pathname, {locale: nextLocale})}>{nextLocale.toUpperCase()}</Button>;
}
