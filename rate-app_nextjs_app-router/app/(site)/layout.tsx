import './globals.css';
import type { Metadata } from 'next';
import { Noto_Sans } from 'next/font/google';
import styles from './layout.module.css';
import { Header } from '@/components/Header/Header';
import { Footer } from '@/components/Footer/Footer';
import { Sidebar } from '@/components/Sidebar/Sidebar';
import Menu from './components/menu';

const noto_sans = Noto_Sans({
  variable: '--noto-sans-font',
  weight: ['300', '400', '500', '700'],
  style: ['normal'],
  fallback: ['sans-serif'],
  subsets: ['cyrillic', 'cyrillic-ext', 'latin', 'latin-ext'],
  preload: true,
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <html lang='ru'>
      <body className={noto_sans.className}>
        <div className={styles.wrapper}>
          <Header className={styles.header} />
          <Sidebar className={styles.sidebar}>
            <Menu />
          </Sidebar>
          <div className={styles.body}>{children}</div>
          <Footer className={styles.footer} />
        </div>
      </body>
    </html>
  );
}
