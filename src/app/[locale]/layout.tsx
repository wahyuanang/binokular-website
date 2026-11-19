import type {Metadata} from 'next';
import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {getMessages, getTranslations} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import {Navbar} from '@/components/layout/navbar';
import {Footer} from '@/components/layout/footer';
import './globals.css';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('metadata');
  return {title: t('title'), description: t('description')};
}
export function generateStaticParams() { return routing.locales.map((locale) => ({locale})); }
export default async function LocaleLayout({children, params}: Readonly<{children: React.ReactNode; params: Promise<{locale: string}>}>) {
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  const messages = await getMessages();
  return <html lang={locale}><body className="min-h-screen bg-background font-sans text-foreground antialiased"><NextIntlClientProvider messages={messages}><div className="flex min-h-screen flex-col"><Navbar/><main className="flex-1">{children}</main><Footer/></div></NextIntlClientProvider></body></html>;
}
