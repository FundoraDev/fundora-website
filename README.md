# Fundora

Professional wealth advisory website for Fundora — helping Africans build, grow, protect, and transfer wealth with discipline and long-term thinking.

**Tagline:** Build. Grow. Protect. Transfer Wealth With Clarity.

---

## Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org) (App Router)
- **UI:** [React 19](https://react.dev), [TypeScript](https://www.typescriptlang.org)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com)
- **Icons:** [React Icons](https://react-icons.github.io/react-icons/)

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Install

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
```

### Production

```bash
npm start
```

### Lint

```bash
npm run lint
```

---

## Project Structure

```
fundora-web/
├── app/
│   ├── layout.tsx          # Root layout (Navbar, Footer, fonts)
│   ├── page.tsx            # Home
│   ├── globals.css         # Global styles
│   ├── about/page.tsx      # About Fundora
│   ├── programs/page.tsx   # Programs (e.g. FACAP)
│   ├── invest/page.tsx     # Invest
│   ├── protect/page.tsx    # Protect
│   ├── contact-us/page.tsx # Contact
│   ├── not-found.tsx       # 404 page
│   ├── components/         # Navbar, Footer, SVG components
│   ├── font/               # Local fonts (Aileron, Satoshi)
│   └── ...
├── public/
│   └── images/             # Static images
├── package.json
└── README.md
```

---

## Fonts

- **Aileron** — Primary font (body and general UI). Loaded via `next/font/local`; CSS variable: `--font-aileron`. Use with Tailwind: default (no class) or `font-sans` where Aileron is set as sans.
- **Satoshi** — Secondary font for headings and emphasis. CSS variable: `--font-satoshi`. Use with Tailwind: `font-satoshi` (defined in `globals.css`).

Font files live under `app/font/aileron/` and `app/font/satoshi/`.

---

## Main Pages

| Route       | Description                          |
|------------|--------------------------------------|
| `/`        | Home — hero, value proposition       |
| `/about`   | About Fundora, mission, vision, team  |
| `/programs`| Programs (e.g. FACAP)                |
| `/invest`  | Investing approach                   |
| `/protect` | Wealth protection                    |
| `/contact-us` | Contact                             |

---

## Key Features

- Responsive layout with mobile-first breakpoints
- “Book a Consultation” links open [Calendly](https://calendly.com/seyi-fundorahq/30min) in a new tab app-wide
- Custom 404 page (`not-found.tsx`)
- Local fonts (Aileron, Satoshi) with no external font requests
- Reusable SVG components in `app/components/svg.tsx`

---

## Deployment

Build and run with the scripts above, or deploy to [Vercel](https://vercel.com) (recommended for Next.js):

1. Push the repo to GitHub/GitLab/Bitbucket.
2. Import the project in Vercel and deploy.

See [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying) for more options.
