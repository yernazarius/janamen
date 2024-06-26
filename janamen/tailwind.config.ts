import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'futura-book': 'var(--font-futura-pt-book)',
        'futura-bold': 'var(--font-futura-pt-bold)',
      },
      colors: {
        primary: "#F58811",
        primary_dark: "#0F0F0F",
        tartyl_primary: "#9B92E8",
      },
      backgroundImage: {
        'body-bg': "url('/bg-concrete.png')",
      }
    },
  },
  plugins: [],
};
export default config;
