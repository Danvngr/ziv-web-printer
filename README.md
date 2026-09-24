# PrinterGuides

Hebrew printer installation guides. Static Next.js site. The printer names in the catalog are placeholders, not a final product list.

## Run locally

```bash
npm install
npm run dev
```

The dev server listens on port **43123**:

http://127.0.0.1:43123

```bash
npm run check
npm run build
```

## Add content

Edit `data/printers.ts`:

- **New printer:** add an object to the `printers` array.
- **New guide:** add an object to that printer's `guides` array (`id`, `title`, `description`, `steps`).

Routes: `/printers/{id}` (guide list) → `/printers/{id}/{guideId}` (steps).
