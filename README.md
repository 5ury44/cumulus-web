# Cumulus Cloud Landing Page

A modern, animated landing page for Cumulus Cloud - an elastic GPU marketplace that optimizes compute allocation based on time/budget constraints.

## Features

- ✨ Modern, clean design inspired by astrosaas theme
- 🎨 Beautiful gradient animations and hover effects
- 🎮 3D floating GPU card animation using React Three Fiber
- 📱 Fully responsive design
- ⚡ Optimized performance with Next.js 14
- 🎭 Smooth scroll-triggered animations with Framer Motion

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS 3**
- **Framer Motion** (animations)
- **React Three Fiber** & **@react-three/drei** (3D graphics)
- **Lucide React** (icons)

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
cumulus-web/
├── app/
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Main page
│   └── globals.css      # Global styles
├── components/
│   ├── Navbar.tsx       # Navigation bar
│   ├── Hero.tsx         # Hero section with 3D GPU card
│   ├── GPUCard.tsx      # 3D GPU card component
│   ├── Features.tsx     # Features section
│   ├── HowItWorks.tsx   # How it works section
│   ├── Benefits.tsx     # Benefits section
│   └── CTA.tsx          # Call-to-action section
└── public/              # Static assets
```

## Key Sections

- **Hero**: Bold headline with 3D floating GPU card animation
- **Features**: 6 key features with animated cards
- **How It Works**: 4-step process visualization
- **Benefits**: Three-column layout for users, providers, and market
- **CTA**: Final call-to-action with contact information

## Design Inspiration

This landing page is inspired by the [astrosaas theme](https://github.com/michael-andreuzza/astrosaas) with:

- Clean, minimal aesthetic
- Modern typography
- Subtle gradients and shadows
- Smooth animations
- Professional dark color scheme

## License

Private project - All rights reserved
