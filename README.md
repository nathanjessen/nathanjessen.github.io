# NathanJessen.github.io

Personal website and portfolio of Nathan Jessen, built with Jekyll and deployed to GitHub Pages.

## Development

This site uses Jekyll with Docker for local development, eliminating the need to install Ruby or gems directly on your machine.

### Prerequisites

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)
- [Node.js](https://nodejs.org/) (version 20 or higher)
- npm (version 10 or higher)

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

- `npm run dev` or `npm start` — Start the development server with Docker
- `npm run stop` — Stop the development server
- `npm run clean` — Stop the server and remove volumes
- `npm run build` — Compile production CSS and run Jekyll build (outputs to `_site/`)

### Development Workflow

In development, [Tailwind CSS Play CDN](https://tailwindcss.com/docs/installation/play-cdn) is loaded in the browser — any Tailwind class you add to HTML works instantly with no build step required.

### Deployment

Pushing to `master` automatically triggers a GitHub Actions workflow that builds the site and deploys it to GitHub Pages. No manual build step is needed.

To verify the production build locally before pushing:
```bash
npm run build
```

> **Note:** Running `npm run build` locally requires Node.js (v20+), npm (v10+), Ruby, and Bundler installed on your machine.

## Directories

Some directories are created using GitHub Pages in other repositories.

* [/tokenlist/](https://github.com/nathanjessen/tokenlist)
* [/slides/](https://github.com/nathanjessen/slides)

## Technologies

* [GitHub Pages](http://pages.github.com/)
* [Jekyll](http://jekyllrb.com/)
* [Docker](https://www.docker.com/)
* [Tailwind CSS](https://tailwindcss.com)
* [PostCSS](http://postcss.org/)

## Issues

If you discover a bug, [report it here](https://github.com/nathanjessen/nathanjessen.github.io/issues) or submit a pull request with a fix.
