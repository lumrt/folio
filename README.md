# /folio — lab-notebook portfolio

A static, ultra-light, 60-FPS personal portfolio with a scientific-notebook aesthetic.
Built with **Astro 5**, plain CSS, vanilla JS — **no client-side framework**, no SSR runtime.

```
output total ≈ 750 KB · HTML ≈ 40 KB · CSS ≈ 30 KB · the rest is self-hosted fonts
```

## Stack & philosophy

- **Astro** static output → only ships HTML + CSS, plus a few KB of vanilla JS
  for the menu and the carousel.
- **No JS framework, no Tailwind runtime, no images** required.
- **Self-hosted fonts** (`@fontsource`) — works offline and respects user privacy.
- **Inlined critical CSS**, dashed-rule patterns and SVG-only illustrations →
  the page is interactive in a single round-trip.
- Animations are 100 % CSS / `requestAnimationFrame`, GPU-friendly, paused for
  users with `prefers-reduced-motion`.

## Sections

| Section       | What lives there                                                     |
| ------------- | -------------------------------------------------------------------- |
| `Header`      | sticky lab-book logo, anchor nav, mobile drawer                      |
| `Hero`        | metadata sidebar, "Engineer / Scientist / Operator", motto, status   |
| `Projects`    | snap-scroll carousel, 1 card per page on mobile, 4 on desktop        |
| `Mission`     | availability dual-state, current project, stack bars, services       |
| `Contact`     | "let's build something." card with sticker badge & link rows         |
| `Footer`      | quote + circular stamp + back-to-top                                 |

## Develop

Requires Node ≥ 20 and `pnpm`.

```bash
pnpm install
pnpm dev          # http://localhost:4321
pnpm build        # static output in /dist
pnpm preview      # serve /dist locally
```

## Customise

All copy lives in [`src/data/site.ts`](./src/data/site.ts):

- `site` — name, handle, email, socials, motto
- `lab` — sidebar metadata (volume, date, status, …)
- `projects` — carousel items (chart type per item: `line | scatter | bell | bars`)
- `stack` / `tools` — competence bars + tag cloud
- `services` — the four mission types
- `current` — current project card
- `availability` — short missions / full-time states

Design tokens (palette, spacing, fonts) → [`src/styles/global.css`](./src/styles/global.css).

## Deploy on a tiny VPS

The output is **just static files**. Any web server works.

### nginx (recommended)

```bash
pnpm build
rsync -avz --delete dist/ user@your-vps:/var/www/folio/
```

`/etc/nginx/sites-available/folio.conf`:

```nginx
server {
    listen 80;
    server_name folio.example.com;

    root /var/www/folio;
    index index.html;

    # SPA-style fallback (also makes 404.html the default 404 page)
    error_page 404 /404.html;

    # gzip / brotli — text assets compress >70%
    gzip on;
    gzip_types text/css application/javascript image/svg+xml application/xml;
    gzip_min_length 256;

    # immutable hashed assets get long cache
    location /_astro/ {
        add_header Cache-Control "public, max-age=31536000, immutable";
        try_files $uri =404;
    }

    # short cache for HTML so deploys are picked up quickly
    location / {
        add_header Cache-Control "public, max-age=300, must-revalidate";
        try_files $uri $uri/ /index.html =404;
    }
}
```

Then `sudo ln -s ../sites-available/folio.conf /etc/nginx/sites-enabled/` and
`sudo nginx -t && sudo systemctl reload nginx`. Add HTTPS with
`sudo certbot --nginx -d folio.example.com`.

### Caddy (zero-config TLS)

```caddyfile
folio.example.com {
    root * /var/www/folio
    file_server
    encode zstd gzip
    header /_astro/* Cache-Control "public, max-age=31536000, immutable"
}
```

### Or push it anywhere

`dist/` works as-is on Cloudflare Pages, Netlify, GitHub Pages, S3+CloudFront,
or even a $4/mo VPS with no Node runtime needed.

## Performance notes

- The site has **zero client-side rendering**, so every byte is critical CSS.
- The carousel uses `scroll-snap` + `IntersectionObserver` — buttery on touch.
- Animations driven by `requestAnimationFrame`, `transform`/`opacity` only:
  60 FPS stable on low-end mobile.
- Replace the placeholder copy in `src/data/site.ts` and you're shipping.
