# Guess the Arsenal Player

A modern, minimal quiz game where you identify Arsenal first-team players from their photos. Built with React, TypeScript, and Tailwind CSS — inspired by Apple's design language.

![Screenshot](screenshot.png)

## Features

- 25 current Arsenal players (2025–2026 squad)
- Smart name matching (accepts surnames, common nicknames)
- Randomized order, no duplicates
- Score tracking with grade system (A+ to F)
- Dark / light mode
- Confetti animation on correct answers
- Loading skeletons while images load
- Local storage best score persistence
- Fully responsive (desktop + mobile)

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

## Adding Player Images

Place headshot images in `public/players/`:

```
public/players/
├── saka.jpg
├── rice.jpg
├── odegaard.jpg
└── ...
```

Image filenames are defined in `src/data/players.ts`. The app shows a fallback icon when images are missing.

## Tech Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS v4
- No external UI libraries

## Project Structure

```
src/
├── components/       # UI components
├── data/             # Player data + name matching logic
├── hooks/            # Game state + dark mode
├── types/            # TypeScript interfaces
├── App.tsx           # Root component
└── index.css         # Tailwind + animations
```

## License

MIT
