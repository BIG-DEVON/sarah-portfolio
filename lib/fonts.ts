// lib/fonts.ts
import localFont from 'next/font/local';

export const maglin = localFont({
  src: './fonts/Maglin.ttf',
  variable: '--font-display',
  display: 'swap',
});

export const faginta = localFont({
  src: './fonts/Faginta.ttf',
  variable: '--font-header',
  display: 'swap',
});

export const thickBlack = localFont({
  src: './fonts/ThickBlack.ttf',
  variable: '--font-accent',
  display: 'swap',
});

export const naome = localFont({
  src: './fonts/Naome.ttf',
  variable: '--font-body',
  display: 'swap',
});
