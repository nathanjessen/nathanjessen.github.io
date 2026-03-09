import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./_includes/**/*.{html,md}",
    "./_layouts/**/*.{html,md}",
    "./_pages/**/*.{html,md,markdown}",
    "./_posts/**/*.{html,md,markdown}",
    "./*.{html,md,markdown}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    typography,
  ],
};
