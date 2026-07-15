# Portfolio

A personal portfolio website built with Angular, fully static and pre-rendered for maximum performance and SEO.

## Features
- **Static Site Generation (SSG):** Fully prerendered HTML output generated at compile-time for instantaneous load speeds.
- **Hacker/Terminal Aesthetic:** Clean monochrome dark theme with golden accents and monospaced typography (`JetBrains Mono`).
- **Optimal Web Vitals:** Locally bundled WebP assets, font adjustments, and dynamic CSS layouts for a perfect 100/100 Lighthouse score.
- **No Heavy Libraries:** Dynamic navbar toggling implemented via Angular signals instead of Bootstrap's JavaScript bundle.

## Development

Run `npm run start` to launch a local development server at `http://localhost:4200/`.

## Building

Run `npm run build` to build and statically prerender the application. The output files are created in `dist/portfolio/browser/` and are ready to be hosted on any static provider.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
