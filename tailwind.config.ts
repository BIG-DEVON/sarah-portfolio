import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx,js,jsx}',
    './components/**/*.{ts,tsx,js,jsx}',
    './sections/**/*.{ts,tsx,js,jsx}',
    './lib/**/*.{ts,tsx,js,jsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)', 'serif'], // Maglin
        header: ['var(--font-header)', 'serif'],   // Faginta
        accent: ['var(--font-accent)', 'cursive'], // Thick Black
        body: ['var(--font-body)', 'sans-serif'],  // Naome
      },
      colors: {
        primary: '#1A1A1A',
        accent: '#FF6200',
        background: '#0D0D0D',
      },
    },
  },
  plugins: [],
};

export default config;
