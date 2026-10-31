<img width="2560" height="1445" alt="telegram-cloud-photo-size-4-5987822282446934263-w" src="https://github.com/user-attachments/assets/1c82f95e-0448-4e66-bfff-77ae0f020cb1" />

# Cyrus Atlas

<p align="center">
  <a href="https://parsabordbar.github.io/cyrus-atlas/">
    <img src="https://img.shields.io/badge/Explore-Live%20Atlas-C49A5A?style=for-the-badge&logo=googlemaps&logoColor=white" alt="Explore Live Atlas">
  </a>
</p>

<p align="center">
  An interactive historical atlas exploring the life and reign of Cyrus the Great.
  <br />
  <i>Explore the ancient world through history, geography, and storytelling.</i>
</p>

<p align="center">
  <a href="https://github.com/ParsaBordbar/cyrus-atlas/stargazers">
    <img src="https://img.shields.io/github/stars/ParsaBordbar/cyrus-atlas?style=flat-square&color=C49A5A" alt="GitHub Stars">
  </a>
  <a href="https://github.com/ParsaBordbar/cyrus-atlas">
    <img src="https://img.shields.io/github/repo-size/ParsaBordbar/cyrus-atlas?style=flat-square" alt="Repository Size">
  </a>
  <a href="https://github.com/ParsaBordbar/cyrus-atlas/commits/main">
    <img src="https://img.shields.io/github/last-commit/ParsaBordbar/cyrus-atlas?style=flat-square" alt="Last Commit">
  </a>
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black" alt="React 19">
  <img src="https://img.shields.io/badge/TypeScript-7-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/Vite-8-646CFF?style=flat-square&logo=vite&logoColor=white" alt="Vite">
</p>

---

## Overview

**Cyrus Atlas** is an interactive historical atlas dedicated to the life and reign of **Cyrus the Great (c. 559–530 BCE)**, founder of the Achaemenid Persian Empire.

Inspired by hand-coloured 19th-century engraved maps, the project combines historical cartography with an interactive timeline.

As you explore Cyrus's life, the map reveals the territories associated with his reign, highlights historical regions, and navigates to the locations connected with important events.

The experience is available in both **English and Persian**, including full right-to-left (RTL) support.

<p align="center">
  <a href="https://parsabordbar.github.io/cyrus-atlas/">
    <strong>→ Explore the Live Atlas</strong>
  </a>
</p>

## Features

- **Interactive Historical Map:** Explore the ancient world through an interactive geographical interface.
- **Historical Timeline:** Follow major events in Cyrus the Great's life.
- **Animated Map Navigation:** Automatically navigate to the geographical locations associated with historical events.
- **Historical Territories:** Discover reconstructed satrapies with watercolor-inspired map styling.
- **Bilingual Interface:** Switch between English and Persian.
- **Persian RTL Support:** Native right-to-left layout and Persian content.
- **Historical Sources:** Explore the distinction between contemporary cuneiform evidence and later Greek and Roman accounts.
- **Historical Gallery:** Discover artifacts, relics, and portraits with image credits and licensing information.
- **Persian Literature:** Explore selected verses from Ferdowsi's Shahnameh with historical context.

## Technology Stack

| Technology | Purpose |
|---|---|
| React 19 | UI development |
| TypeScript | Type safety |
| Vite | Development and build tooling |
| MapLibre GL | Interactive mapping |
| React MapLibre | React map integration |
| Tailwind CSS 4 | Styling |
| Turf.js | Geospatial processing |
| Natural Earth | Geographic datasets |

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

Clone the repository:

```bash
git clone https://github.com/ParsaBordbar/cyrus-atlas.git
cd cyrus-atlas
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local development URL:

```text
http://localhost:5173
```

### Production Build

Build the application:

```bash
npm run build
```

To build specifically for GitHub Pages:

```bash
GITHUB_PAGES=true npm run build
```

Preview the production build:

```bash
npm run preview
```

### Geographic Data Generation

The project includes a geographic data generation script:

```bash
npm run geo
```

This script rebuilds the geographic data in `src/data/*.geojson`.

It requires Natural Earth source files in the `.cache/` directory.

To download the required datasets:

```bash
mkdir -p .cache

for f in ne_50m_land ne_50m_lakes ne_50m_lakes_historic ne_50m_rivers_lake_centerlines; do
  curl -sfL -o .cache/$f.geojson \
    https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/$f.geojson
done
```

## Project Structure

```text
cyrus-atlas/
├── public/
│   └── relics/
├── scripts/
│   └── build-geo.mjs
├── src/
│   └── data/
│       ├── events.ts
│       ├── places.ts
│       ├── sources.ts
│       ├── gallery.ts
│       └── shahnameh.ts
│   └── i18n/
│       ├── en.ts
│       └── fa.ts
├── .github/
│   └── workflows/
├── index.html
├── package.json
└── vite.config.ts
```

### Data Organization

- `events.ts`: Historical events, associated locations, and sources.
- `places.ts`: Historical towns and map labels.
- `sources.ts`: Historical references and source classifications.
- `gallery.ts`: Artifacts, portraits, image credits, and licenses.
- `shahnameh.ts`: Selected verses from Ferdowsi's Shahnameh.
- `i18n/en.ts`: English interface and narrative content.
- `i18n/fa.ts`: Persian interface and narrative content.
- `scripts/build-geo.mjs`: Geographic data generation and satrapy boundaries.

## Historical Accuracy & Sources

Historical geography is complex, especially when reconstructing ancient political boundaries.

A few important considerations:

- Satrapy boundaries are approximate historical reconstructions, not surveyed frontiers.
- Contemporary cuneiform evidence is distinguished from later Greek and Roman historical accounts.
- Cyrus is not explicitly named in Ferdowsi's Shahnameh. The included verses concern Kay Khosrow, a figure whom some scholars have connected with Cyrus.

The project aims to distinguish historical evidence, scholarly interpretation, and literary tradition rather than presenting them as the same thing.

## Image Credits & Licensing

Images are sourced from Wikimedia Commons under various licenses, including:

- CC0
- CC BY
- CC BY-SA
- Public Domain

Individual image authorship and licensing information is displayed in the corresponding image viewer.

## Contributing

Contributions, corrections, and suggestions are welcome.

If you notice a historical inaccuracy, have suggestions for additional geographical information, or want to improve the bilingual experience, feel free to open an issue or submit a pull request.

1. Fork the repository.
2. Create a feature branch.
3. Commit your changes.
4. Open a pull request.

## Links

- **Live Atlas:** https://parsabordbar.github.io/cyrus-atlas/
- **GitHub Repository:** https://github.com/ParsaBordbar/cyrus-atlas

---

<p align="center">
  <i>Exploring the ancient world through geography, history, and technology.</i>
  <br /><br />
  Made with curiosity and a passion for history.
</p>
