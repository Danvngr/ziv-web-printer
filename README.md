# YAIR Smart Office guides

Hebrew, mobile-first help site for printer and copier counter readings and toner changes. The models in the catalog are sample content, not verified instructions.

One QR sticker on every machine should open the homepage. The site does not map a code to a specific machine.

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

## Add a model

Edit `data/printers.ts`. Add an object to `machines`:

- `id`: stable URL slug
- `brand`, `model`, `aliases` for search
- `image`: optional file under `public/`
- `sample`: `true` until the instructions are verified
- `guides.counter` and `guides.toner`: each has `intro` and `steps` (`title`, `text`, `image`, `alt`)

Leave a guide out, or give it an empty `steps` array, to show “המדריך יעלה בקרוב”.

Routes: `/` (search) → `/printers/{id}` → `/printers/{id}/counter` or `/printers/{id}/toner`.

WhatsApp number and the site name live in `data/site.ts`.
