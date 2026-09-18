# Next Chapter — The Controlled Build

A simple one-page tribute website celebrating Jackson, a beloved companion remembered with photos, heartfelt notes, and a gallery-inspired layout.

## Overview

This project is a static HTML/CSS/JavaScript page built as a personal memorial and keepsake. The experience is intentionally minimal and focused: a hero section, a photo gallery, and a small interactive media section styled with a soft glassmorphism look and a gradient backdrop.

## Features

- Responsive single-page layout
- Hero section with a centered headline and personal message
- Photo gallery built from local image assets
- Interactive flip cards for the media section
- Clean, modern styling with glass panels and layered gradients
- No build tooling or package installation required

## Project Structure

- `index.html` — page structure and content
- `css/styles.css` — global styling, layout, glassmorphism cards, and responsive grid
- `js/main.js` — click behavior for the flip cards
- `assets/` — project images used in the gallery and hero section
- `doc/PROJECT_GUIDELINES.md` — project requirements and build constraints
- `doc/prompt.md` — prompt log documenting the build process

## Run Locally

Because this is a static website, you can view it directly in a browser by opening `index.html`.

For a local web server, run:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Notes

This project follows the "Controlled Build" approach: keep the scope small, verify each change, and document the prompts and fixes as the page evolves.

## License

This project is licensed under the ISC License.
