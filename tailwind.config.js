/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0F0F0F",
        brand: "#1A56DB",
        offwhite: "#FAFAFA",
        muted: "#888888",
        line: "#E5E5E5",
        infobg: "#EFF4FF",
        body: "#4A4A4A",
      },
      fontFamily: {
        serif: ['"DM Serif Display"', "Georgia", "serif"],
        sans: ['"DM Sans"', "-apple-system", "system-ui", "sans-serif"],
      },
      maxWidth: { content: "1200px" },
      borderRadius: { card: "10px", btn: "7px" },
    },
  },
  plugins: [],
};
