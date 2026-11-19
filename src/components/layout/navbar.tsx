import {getTranslations} from 'next-intl/server';
import {Link} from '@/i18n/navigation';
import {Container} from './container';
import {LanguageSwitcher} from './language-switcher';

export async function Navbar() {
  const t = await getTranslations('navigation');
  return <header className="border-b"><Container className="flex h-16 items-center justify-between"><Link href="/" className="font-bold tracking-tight">Binokular</Link><nav aria-label="Main navigation" className="flex items-center gap-5 text-sm"><Link href="/" className="text-muted-foreground hover:text-foreground">{t('home')}</Link><a href="#about" className="hidden text-muted-foreground hover:text-foreground sm:inline">{t('about')}</a><a href="#contact" className="hidden text-muted-foreground hover:text-foreground sm:inline">{t('contact')}</a><LanguageSwitcher/></nav></Container></header>;
}
