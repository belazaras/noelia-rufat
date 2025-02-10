import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        nav: 'var(--height-nav)',
        screen: 'var(--screen-height, 100vh)',
      },
      fontSize: {
        display: ['var(--font-size-display)', '1.1'],
        heading: ['var(--font-size-heading)', '1.25'],
        lead: ['var(--font-size-lead)', '1.333'],
        copy: ['var(--font-size-copy)', '1.5'],
        fine: ['var(--font-size-fine)', '1.333'],
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 100s linear 1s',
        'infinite-scroll-reverse': 'infinite-scroll-reverse 100s linear 1s',
        'slow-spin': 'slow-spin 40s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
        'infinite-scroll-reverse': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(100%)' },
        },
        'slow-spin': {
          to: { transform: 'rotate(360deg)' },
        },
      }
    },
  },
  plugins: [],
} satisfies Config;
