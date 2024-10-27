import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'navy': '#1F3541',
        'bluegrotto':'#5289B5',
        'baby': '#AFD8F2',
        'white': '#EDF2F3'
      },
    },
  },
  plugins: [],
};
export default config;
