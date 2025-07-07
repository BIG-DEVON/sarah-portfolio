import localFont from 'next/font/local';

export const maglin = localFont({
  src: '../public/fonts/Maglin.ttf',
  variable: '--font-display',
  display: 'swap',
});

export const faginta = localFont({
  src: '../public/fonts/Faginta.ttf',
  variable: '--font-header',
  display: 'swap',
});

export const thickBlack = localFont({
  src: '../public/fonts/ThickBlack.ttf',
  variable: '--font-accent',
  display: 'swap',
});

export const naome = localFont({
  src: '../public/fonts/Naome.ttf',
  variable: '--font-body',
  display: 'swap',
});
