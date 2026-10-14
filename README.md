# YSO | Yair Smart Office

Hebrew company site for יאיר סמארט אופיס, with the printer and copier guide hub kept on the same app.

The homepage is the company gateway. Guides stay at `/guides`, and model pages stay at `/printers/{id}`.

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

Contact details live in `data/site.ts`. Domain copy lives in `data/domains.ts`. Printer models live in `data/printers.ts`.
