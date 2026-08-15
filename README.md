# D&V Detailing

Responsive Hebrew RTL landing page for a mobile car-detailing service in Israel.

## Live demo

[volk-detailing-israel.daniv.chatgpt.site](https://volk-detailing-israel.daniv.chatgpt.site)

## Highlights

- Fully responsive right-to-left interface
- Service and pricing sections
- Mobile navigation
- Interactive package selection
- Booking form that prepares a WhatsApp enquiry
- Custom branding, typography, animations, and responsive layouts
- SEO metadata and accessible labels

## Tech stack

- TypeScript
- React 19
- Next.js 16 App Router
- Tailwind CSS 4 with custom CSS
- Vite + Vinext
- Cloudflare-compatible worker runtime
- OpenAI Sites hosting

The current public version does not use a database. Drizzle/D1 support is included in the project scaffold but is not connected to the booking flow.

## Run locally

Requires Node.js 22.13 or newer.

```bash
npm ci
npm run dev
```

Then open the local URL printed in the terminal.

## Production build

```bash
npm run build
npm run start
```

## Project structure

```text
app/        Page, layout, metadata, and global styles
public/     Images and icons
worker/     Cloudflare-compatible runtime entry
scripts/    Build and validation helpers
```

## Status

Portfolio project / production-ready landing page. The WhatsApp destination can be connected to a business number before commercial use.
