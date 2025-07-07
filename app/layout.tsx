import './globals.css';
import type { Metadata } from 'next';
import { maglin, faginta, thickBlack, naome } from '@/lib/fonts';

export const metadata: Metadata = {
  title: 'Sarah Osagie | Copywriter Portfolio',
  description: 'The most elegant and bold portfolio site for a creative Nigerian copywriter.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${maglin.variable} ${faginta.variable} ${thickBlack.variable} ${naome.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
