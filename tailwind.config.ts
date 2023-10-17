import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "ping-slow": "ping 3s cubic-bezier(0, 0, 0.2, 1) infinite ",
      },
      screens: {
        ssm: "330px",
      },
    },
    container: {
      center: true,
      screens: {
        sm: "100%",
        // md: "768px",
        // lg: "1024px",
        xl: "1200px",
        // "2xl": "1440px",
      },
      padding: {
        DEFAULT: "1.75rem",
      },
    },
  },
  plugins: [],
};
export default config;
