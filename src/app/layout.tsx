import './globals.scss';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from './containers/Header/Header';
import styles from './layout.module.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Home page',
  description: 'Starting meaningless description',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className={styles.main}>{children}</main>
      </body>
    </html>
  );
}
