import autoprefixer from "autoprefixer";
import atimport from "postcss-import";
import cssnano from "cssnano";
import tailwindcss from "tailwindcss";

export default {
  plugins: [atimport, tailwindcss, autoprefixer, cssnano],
};
