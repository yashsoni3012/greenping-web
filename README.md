# Greenping Solutions — Next.js Website

A professional, production-ready WhatsApp Business Solution landing page built with **Next.js 14 (App Router)** + **Tailwind CSS** + **TypeScript**.

---

## ✨ Features

- **App Router** (Next.js 14) — modern file-based routing
- **TypeScript** — fully typed throughout
- **Tailwind CSS** — utility-first styling with custom design tokens
- **Dark theme** — rich dark green/black brand aesthetic
- **Animated Hero** — cycling headline words, floating dashboard mockup
- **Marquee ticker** — scrolling trust indicators
- **Animated stat counters** — Intersection Observer triggered
- **Features grid** — 12 feature cards with hover effects
- **API showcase** — live code block mockup
- **Pricing table** — 3 plans × 4 billing cycles toggle
- **FAQ accordion** — smooth collapse/expand
- **Contact form** — with success state
- **Responsive** — fully mobile-first
- **Glass morphism** — backdrop blur cards
- **Custom scrollbar**, selection, and noise overlay

---

## 📁 Folder Structure

```
greenping/
├── public/                          # Static assets
│   ├── favicon.ico
│   └── images/
│       └── og-image.png
│
├── src/
│   ├── app/                         # Next.js App Router
│   │   ├── globals.css              # Global styles, CSS variables, animations
│   │   ├── layout.tsx               # Root layout (metadata, fonts, body)
│   │   └── page.tsx                 # Home page — composes all sections
│   │
│   ├── components/
│   │   ├── layout/                  # Persistent layout components
│   │   │   ├── Navbar.tsx           # Sticky responsive navbar with mobile menu
│   │   │   └── Footer.tsx           # Footer with links, social, copyright
│   │   │
│   │   ├── sections/                # Page sections (order = visual order)
│   │   │   ├── HeroSection.tsx      # Full-screen hero with dashboard mockup
│   │   │   ├── TickerSection.tsx    # Scrolling marquee trust bar
│   │   │   ├── StatsSection.tsx     # Animated counter stat cards
│   │   │   ├── FeaturesSection.tsx  # 12-feature grid with icons
│   │   │   ├── ApiSection.tsx       # WhatsApp Cloud API showcase + code block
│   │   │   ├── PricingSection.tsx   # 3-plan pricing with billing toggle
│   │   │   ├── FaqSection.tsx       # Accordion FAQ
│   │   │   └── ContactSection.tsx   # Contact form + info cards
│   │   │
│   │   └── ui/                      # Reusable atomic UI components
│   │       ├── Button.tsx           # (extend as needed)
│   │       ├── Badge.tsx
│   │       └── Card.tsx
│   │
│   ├── hooks/                       # Custom React hooks
│   │   ├── useScrolled.ts           # Detect scroll position
│   │   └── useIntersection.ts       # IntersectionObserver hook
│   │
│   ├── lib/                         # Utilities
│   │   └── utils.ts                 # cn() — clsx + tailwind-merge
│   │
│   └── types/                       # TypeScript type definitions
│       └── index.ts                 # Shared types (Plan, Feature, NavLink...)
│
├── .eslintrc.json
├── .gitignore
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.ts
└── tsconfig.json
```

---

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 2. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for production

```bash
npm run build
npm start
```

---

## 🎨 Design Tokens (CSS Variables)

Defined in `src/app/globals.css`:

| Variable          | Value       | Usage                    |
|-------------------|-------------|--------------------------|
| `--accent`        | `#00D46A`   | Primary green brand color|
| `--accent-dark`   | `#00B558`   | Hover states             |
| `--bg`            | `#0A0F0D`   | Page background          |
| `--card`          | `#111914`   | Card backgrounds         |
| `--border`        | `#1E2B22`   | Card borders             |
| `--muted`         | `#4B6B57`   | Muted text               |

---

## 📦 Key Dependencies

| Package            | Version   | Purpose                         |
|--------------------|-----------|---------------------------------|
| `next`             | 14.2.5    | Framework                       |
| `react`            | ^18       | UI library                      |
| `typescript`       | ^5        | Type safety                     |
| `tailwindcss`      | ^3.4.1    | Utility CSS                     |
| `framer-motion`    | ^11.3     | Advanced animations (optional)  |
| `lucide-react`     | ^0.383    | Icon library                    |
| `clsx`             | ^2.1.1    | Class name merging              |
| `tailwind-merge`   | ^2.4.0    | Tailwind class deduplication    |

---

## 🔧 Extending the Project

### Adding a new page (e.g., `/about`)

```
src/app/about/page.tsx
```

### Adding a new reusable component

```
src/components/ui/MyComponent.tsx
```

### Adding a new section

1. Create `src/components/sections/MySection.tsx`
2. Import and add to `src/app/page.tsx`

### Adding fonts (Google Fonts)

Update the `@import` in `globals.css` and the CSS variables `--font-display` / `--font-body`.

---

## 📱 Responsive Breakpoints (Tailwind defaults)

| Prefix | Min-width | Target              |
|--------|-----------|---------------------|
| `sm`   | 640px     | Large phones        |
| `md`   | 768px     | Tablets             |
| `lg`   | 1024px    | Laptops             |
| `xl`   | 1280px    | Desktops            |
| `2xl`  | 1536px    | Large screens       |

---

## 🌐 Deployment

### Vercel (Recommended)

```bash
npx vercel
```

Or connect your GitHub repo to [vercel.com](https://vercel.com) for automatic deployments.

### Docker

```dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public
EXPOSE 3000
CMD ["node", "server.js"]
```

---

## 📄 License

MIT — feel free to customize for your business.
