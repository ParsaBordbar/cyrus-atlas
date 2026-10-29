# Cyrus Atlas

An interactive atlas of the reign of Cyrus the Great (c. 600–530 BCE), drawn in the style of a hand-coloured 19th-century engraved map. Step through his life on the scale bar and the satrapies fill with watercolour as they come under his rule; the camera flies to where each event took place. English and Persian (RTL).

Live: https://parsabordbar.github.io/cyrus-atlas/

```sh
npm install
npm run dev      # http://localhost:5173
npm run build
GITHUB_PAGES=true npm run build   # build for the /cyrus-atlas/ subpath, as CI does
npm run geo      # rebuild src/data/*.geojson (needs Natural Earth files in .cache/)
```

## Data

- `src/data/events.ts`: life events, the places each one frames, and their sources
- `src/data/places.ts`: towns and map lettering
- `src/data/sources.ts`: ancient sources (cuneiform from his lifetime vs. later Greek/Roman)
- `src/data/gallery.ts`: relics and portraits of the kings he faced, with credits (images in `public/relics/`)
- `src/data/shahnameh.ts`: couplets from Ferdowsi's Shahnameh, copied from ganjoor.net
- `src/i18n/en.ts`, `fa.ts`: all text, including event stories, picture captions and verse translations
- `scripts/build-geo.mjs`: hand-drawn satrapy outlines, clipped to Natural Earth coastlines

Satrapy borders are approximate reconstructions, not surveyed frontiers.

Images come from Wikimedia Commons under CC0, CC BY, CC BY-SA or public domain; each picture's author and licence is shown in its viewer. Cyrus is not named in the Shahnameh: the verses are about Kay Khosrow, whom some scholars connect with him, and the app says so.

To refresh the Natural Earth inputs:

```sh
mkdir -p .cache && for f in ne_50m_land ne_50m_lakes ne_50m_lakes_historic ne_50m_rivers_lake_centerlines; do
  curl -sfL -o .cache/$f.geojson https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/$f.geojson
done
```
