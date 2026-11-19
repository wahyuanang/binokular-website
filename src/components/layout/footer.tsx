import {getTranslations} from 'next-intl/server';
import {Container} from './container';

export async function Footer() { const t = await getTranslations('footer'); return <footer className="border-t py-6"><Container className="text-sm text-muted-foreground">{t('copyright', {year: new Date().getFullYear()})}</Container></footer>; }
