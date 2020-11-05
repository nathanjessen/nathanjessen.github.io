# NathanJessen.github.io

My personal website and blog.

# Directories

Some directories are created using GitHub pages in other repositories.

* [/tokenlist/](https://github.com/nathanjessen/tokenlist)
* [/slides/](https://github.com/nathanjessen/slides)
* [/ioextendedlv/](https://github.com/nathanjessen/ioextendedlv)
* [/knowledge/](https://github.com/nathanjessen/knowledge/)
* [/ada-pub/](https://github.com/nathanjessen/ada-pub/)
* [/eth-allowance/](https://github.com/nathanjessen/eth-allowance/)
* [/octolist/](https://github.com/nathanjessen/octolist/)

## Technologies

- [Github Pages](http://pages.github.com/)
- [Jekyll](http://jekyllrb.com/)
- [Gulp](http://gulpjs.com/)
- [PostCSS](http://postcss.org/)
- [Yarn](https://yarnpkg.com/)
- [EditorConfig](http://editorconfig.org/)
- [Tailwind](https://tailwindcss.com)
- [WebSlides](https://webslides.tv/)
- [Google Fonts](https://fonts.google.com/)

## Issues

If you discover a bug, [report it here](https://github.com/nathanjessen/nathanjessen.github.com/issues) or even better, edit and send a pull-request with the fix.

## Gulpfile

A Gulpfile does the following:

  * Compiles Tailwind
  * Strips out unused CSS using Tailwind's `purge` option
  * Runs [Autoprefixer](https://github.com/postcss/autoprefixer)
  * Minifies your CSS
  * Compiles Jekyll
  * Runs [Browsersync](https://www.browsersync.io/) for local development

## What is Tailwind?
>"Tailwind is a utility-first CSS framework for rapidly building custom user interfaces."
–[Tailwind](https://tailwindcss.com)

## What is Jekyll?
>"Jekyll is a simple, blog-aware, static site generator perfect for personal, project, or organization sites. Think of it like a file-based CMS, without all the complexity. Jekyll takes your content, renders Markdown and Liquid templates, and spits out a complete, static website ready to be served by Apache, Nginx or another web server. Jekyll is the engine behind GitHub Pages, which you can use to host sites right from your GitHub repositories."
–[Jekyll](https://jekyllrb.com/)

## Requirements
* [Bundler](http://bundler.io/)
* [Jekyll](https://jekyllrb.com/)
* [Node.js](https://nodejs.org/en/)
* [npm](https://www.npmjs.com/)
* [Ruby](https://www.ruby-lang.org/en/)

## Get started
* `bundle install` to install Ruby gems
* `npm ci` to install npm packages listed in `package-lock.json`
* `npm run start` or `npm run dev` to compile the site with development settings and run BrowserSync

## Build your site
* `npm run build:dev` to compile the site with development settings
* `npm run build:production` or `npm run build` to compile the site for production


## Development

To clear a gem and reinstall while developing the gem.

```ruby
gem cleanup blogtheme
bundle
bundle exec jekyll serve
```
Local config

`bundle exec jekyll serve --config _config.yml,_config_local.yml --verbose`
