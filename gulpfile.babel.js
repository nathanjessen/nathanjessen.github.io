import autoprefixer from "autoprefixer";
import cssnano from "cssnano";
import { dest, series, src, task, watch } from "gulp";
import postcss from "gulp-postcss";
import atimport from "postcss-import";
import tailwindcss from "tailwindcss";

const isDevelopmentBuild = process.env.NODE_ENV === "development";

const PRE_BUILD_STYLESHEET = "./_styles/style.css";
const POST_BUILD_STYLESHEET = isDevelopmentBuild ? "./_site/assets/css/" : "./assets/css/";
const TAILWIND_CONFIG = "./tailwind.config.js";

task("processStyles", () => {
  return src(PRE_BUILD_STYLESHEET)
    .pipe(
      postcss([
        atimport(),
        tailwindcss(TAILWIND_CONFIG),
        ...(isDevelopmentBuild ? [] : [autoprefixer(), cssnano()]),
      ])
    )
    .pipe(dest(POST_BUILD_STYLESHEET));
});

task("watch", () => {
  watch([PRE_BUILD_STYLESHEET, TAILWIND_CONFIG], series("processStyles"));
});

task("default", series("processStyles", "watch"));
