import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./_site/**/*.html",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    typography,
  ],
};
