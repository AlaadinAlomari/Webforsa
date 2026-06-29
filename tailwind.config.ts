import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        black: '#06060A',
        surface: '#0D0D13',
        lift: '#14141C',
        border: 'rgba(255,255,255,0.09)',
        gold: '#C9A96E',
        'gold-lt': '#E8D4A8',
        ivory: '#F5F2EC',
        body: '#D0CBC1',
        muted: '#7A7670',
      },
      fontFamily: {
        display: ['var(--font-cormorant)', 'Georgia', 'serif'],
        sans: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        up: {
          from: { opacity: '0', transform: 'translateY(22px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        reveal: {
          from: { clipPath: 'inset(0 100% 0 0)' },
          to: { clipPath: 'inset(0 0% 0 0)' },
        },
        tick: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        up: 'up 0.8s forwards',
        reveal: 'reveal 1.15s cubic-bezier(.77,0,.18,1) forwards',
        tick: 'tick 26s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;
