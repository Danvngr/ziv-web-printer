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

Optional: set `NEXT_PUBLIC_SITE_ORIGIN` (for example `https://example.com`) if a guide QR code should encode an absolute URL. When it is unset, the code encodes only the path `/printers/{id}`.
