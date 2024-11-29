# NathanJessen.github.io

My (old) personal website and blog.

My portfolio has moved to a NextJS implementation. This repository is now *Deprecated*.

## Development

This site uses Jekyll with Docker for local development. This approach eliminates the need to install Ruby and gems directly on your machine.

### Prerequisites

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)
- [Node.js and npm](https://nodejs.org/)

### Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/nathanjessen/nathanjessen.github.io.git
   cd nathanjessen.github.io
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

   The site will be available at http://localhost:4000 with live reload enabled.

4. To stop the server:
   ```bash
   npm run stop
   ```

### Available Commands

- `npm run dev` or `npm start` - Start the development server
- `npm run stop` - Stop the development server
- `npm run clean` - Stop the server and remove volumes
- `npm run build:dev` - Build the site with development settings
- `npm run build` or `npm run build:production` - Build the site for production

## Directories

Some directories are created using GitHub pages in other repositories.

* [/tokenlist/](https://github.com/nathanjessen/tokenlist)
* [/slides/](https://github.com/nathanjessen/slides)
* [/ioextendedlv/](https://github.com/nathanjessen/ioextendedlv)
* [/knowledge/](https://github.com/nathanjessen/knowledge/)
* [/ada-pub/](https://github.com/nathanjessen/ada-pub/)
* [/eth-allowance/](https://github.com/nathanjessen/eth-allowance/)
* [/octolist/](https://github.com/nathanjessen/octolist/)

## Technologies

* [Github Pages](http://pages.github.com/)
* [Jekyll](http://jekyllrb.com/)
* [Docker](https://www.docker.com/)
* [Gulp](http://gulpjs.com/)
* [PostCSS](http://postcss.org/)
* [Yarn](https://yarnpkg.com/)
* [EditorConfig](http://editorconfig.org/)
* [Tailwind](https://tailwindcss.com)
* [WebSlides](https://webslides.tv/)
* [Google Fonts](https://fonts.google.com/)

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

Jekyll is a static site generator. It takes text written in your favorite markup language and uses layouts to create a static website. You can tweak the site's look and feel, URLs, the data displayed on the page, and more.
