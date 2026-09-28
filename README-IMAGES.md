# Files to upload

Put these files in `public/` using these exact names (lowercase). Until an image is added, the site shows a placeholder.

| File | What it is | Suggested size |
|---|---|---|
| `public/images/company/dunify.png` | Dunify logo | 200×200, transparent PNG |
| `public/images/company/offneo.png` | Offneo logo | 200×200, transparent PNG |
| `public/images/company/codings-first.png` | Codings First logo (optional — a temporary `codings-first.svg` is in use; after adding the PNG, change `.svg` to `.png` in `src/constants/index.ts`) | 200×200, transparent PNG |
| `public/images/projects/octopus-var.png` | Octopus VAR screenshot (dashboard or compliance report) | 1200×800 |
| `public/images/projects/carops.png` | CarOps.io screenshot (branch dashboard) | 1200×800 |
| `public/images/projects/megamarket.png` | MegaMarket screenshot (home page or seller dashboard) | 1200×800 |
| `public/Memona-Sehrish-Resume.pdf` | Your latest resume | — |
| `public/logo.png` | Your personal logo in the navbar (optional, replaces the current one) | 200×200 |

# Contact form setup

1. Go to https://web3forms.com, enter the email that should receive messages, and copy the access key sent to you.
2. Copy `.env.example` to `.env` and paste the key after `VITE_WEB3FORMS_ACCESS_KEY=`.
3. If you deploy (Vercel/Netlify), add the same variable in the host's environment settings.
