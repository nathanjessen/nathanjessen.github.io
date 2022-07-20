/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: ["_site/**/*.html"],
  theme: {
    extend: {
      colors: {
        badass: "#bada55",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
    require("daisyui"),
  ],
  daisyui: {
    prefix: "",
    darkTheme: "custom",
    themes: [
      {
        custom: {
          primary: colors.emerald[600],
          "primary-focus": colors.emerald[700],
          "primary-content": colors.emerald[50],
          secondary: "#1888dd",
          // "secondary-focus": colors.green[900],
          // "secondary-content": colors.green[200],
          accent: colors.fuchsia[700],
          "accent-focus": colors.fuchsia[800],
          "accent-content": colors.fuchsia[100],
          // neutral: colors.slate[800],
          // "neutral-focus": colors.slate[700],
          // "neutral-content": colors.slate[100],
          "base-100": "#303134",
          "base-200": "#292a2d",
          "base-300": "#242528",
          "base-content": colors.zinc[300],
          info: "#00b0e6",
          "info-content": colors.sky[100],
          success: "#00dc96",
          "success-content": colors.emerald[900],
          warning: "#ffbd00",
          "warning-content": colors.yellow[900],
          error: "#fc5547",
          "error-content": colors.red[900],

          "--rounded-box": "0.5rem", // border radius rounded-box utility class, used in card and other large boxes
          "--rounded-btn": "0.25rem", // border radius rounded-btn utility class, used in buttons and similar element
          // "--rounded-badge": "1.9rem", // border radius rounded-badge utility class, used in badges and similar
          // "--animation-btn": "0.25s", // duration of animation when you click on button
          // "--animation-input": "0.2s", // duration of animation for inputs like checkbox, toggle, radio, etc
          // "--btn-text-case": "uppercase", // set default text transform for buttons
          // "--btn-focus-scale": "0.95", // scale transform of button when you focus on it
          // "--border-btn": "1px", // border width of buttons
          // "--tab-border": "1px", // border width of tabs
          // "--tab-radius": "0.25rem", // border radius of tabs
        },
      },
    ],
  },
};
