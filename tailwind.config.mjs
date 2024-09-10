/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        background: "#FFFFFF",
        foreground: "#1E1E1E",
        text: "#1E1E1E",
        "text-foreground": "#FFFFFF",
        primary: "#656565",
        card: "#1E1E1E/[0.04]",
        "card-foreground": "#FFFFFF/4",
      },
    },
  },

  plugins: [],
};
