import {getTranslations} from 'next-intl/server';
import {Button} from '@/components/ui/button';
import {Container} from '@/components/layout/container';
import {FadeIn} from '@/components/animations/fade-in';

export default async function HomePage() {
  const t = await getTranslations('home');
  return <Container className="flex min-h-[70vh] items-center py-20"><FadeIn className="mx-auto max-w-3xl text-center"><p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">Binokular</p><h1 className="font-heading text-balance text-4xl font-bold tracking-tight sm:text-6xl">{t('title')}</h1><p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-muted-foreground">{t('description')}</p><Button className="mt-8">{t('cta')}</Button></FadeIn></Container>;
}
