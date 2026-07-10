# Learnings — Arsenal Player Quiz

## Project Structure

```
src/
├── components/         # UI components (TeamSelector, HomeScreen, QuizScreen, EndScreen, PlayerCard, etc.)
├── data/
│   ├── teams/          # Per-team player data (arsenal.ts, mancity.ts, etc.)
│   │   └── index.ts    # Teams registry
│   └── matching.ts     # Shared name-matching logic (fuzzy + exact)
├── hooks/
│   ├── useGameState.ts # Quiz state machine
│   └── useDarkMode.ts  # Theme toggle
├── types/index.ts      # Team, Player, GameState types
└── App.tsx             # Root with screen routing
```

## Key Architecture Decisions

### Multi-team support
- Each team is a `Team` object with `id`, `name`, `color`, `logo`, `players[]`
- Team data lives in `src/data/teams/{teamId}.ts`
- `src/data/teams/index.ts` is the single registry — add a team there
- Images stored in `public/players/{teamId}/` and logos in `public/logos/`
- Game state tracks `selectedTeam` so quiz/end screens use team colors

### Image paths (GitHub Pages)
- **CRITICAL**: Use `import.meta.env.BASE_URL` for all asset paths in data files
- Vite's `base: '/arsenal-player-quiz/'` config doesn't transform string literals in data files
- Example: `` `${BASE}players/saka.jpg` `` not `'/players/saka.jpg'`
- Root-relative paths (`/players/...`) resolve to `github.io/players/...` (wrong on Pages)

### Name matching system
- **Tier 1**: Exact full name match
- **Tier 2**: Unique surname match (auto-detected from squad)
- **Tier 3**: Unique first name match (auto-detected)
- **Tier 4**: First + last in any order
- **Tier 5**: Substring containment (`vieira` matches `Fábio Vieira`)
- **Tier 6**: Starts-with (`bukayo s` matches `Bukayo Saka`)
- **Tier 7**: Hyphenated parts (`lewis` matches `Lewis-Skelly`)
- **Tier 8**: Fuzzy full name match (fast-fuzzy, threshold 0.82)
- **Tier 9**: Fuzzy surname match (threshold 0.82)
- Ambiguous names (e.g. `gabriel`, `martin`) are rejected when multiple players share them

### Image sourcing
- **Arsenal**: `https://www.arsenal.com/men/players` — images in `player_card_extra_large` style
- **Man City**: `https://www.mancity.com/players/mens` — Next.js app, data in `__NEXT_DATA__`
- **Liverpool**: `https://www.liverpoolfc.com/team/first-team` — images from `backend.liverpoolfc.com`
- **Chelsea**: `https://www.chelseafc.com/en/teams/men` — Cloudinary via `img.chelseafc.com`
  - Use `w_400,h_400,c_fill,g_face` params for faster/smaller downloads
- **Tottenham**: `https://www.tottenhamhotspur.com/teams/mens/squad` — PulseLive CDN
  - Images from `resources.thfc.pulselive.com`
  - Add `?width=400&height=400` params for faster downloads
  - Referer header required: `https://www.tottenhamhotspur.com/`

### Logo sourcing
- Always fetch from official sites, never create placeholder SVGs
- Arsenal: `https://www.arsenal.com/themes/custom/arsenal_main/logo.svg`
- Man City: `https://www.mancity.com/dist/images/logos/crest.svg`
- Liverpool: Wikipedia SVG (rate-limited, use with delays)
- Chelsea: `http://img.chelseafc.com/image/upload/v1782904361/Site%20Chelsea%20Badges/Chelsea_club_badge_crest_logo_2026-27.png`
- Tottenham: `https://resources.thfc.pulselive.com/thfc/document/.../logo.svg`

### Image download tips
- Arsenal: Easy, no auth needed
- Man City: Easy, no auth needed
- Liverpool: Easy, no auth needed
- Chelsea: Cloudinary CDN, use size params for speed (`w_400,h_400,c_fill,g_face`)
- Tottenham: PulseLive CDN, needs Referer header + size params
- Some CDNs timeout on large images — always use size constraints
- Check file headers (FF D8 = JPEG) to verify actual format

### Headshot cropping
- Use `object-top` on images to prevent head cutting (especially for tall portraits)
- Man City images are very tall — `object-position: top` ensures heads stay visible

## Adding a New Team

1. Create `src/data/teams/{teamId}.ts` with player data
2. Create `public/players/{teamId}/` and download headshots
3. Download logo to `public/logos/{teamId}.svg` or `.png`
4. Add team to `src/data/teams/index.ts` with color and logo path
5. Build and test — images should load on the team selector

## Common Pitfalls
- Forgetting `import.meta.env.BASE_URL` for asset paths → 404s on GitHub Pages
- Using `.gitignore` to exclude `public/players/*.jpg` → images never deployed
- Placeholder logos instead of real ones → looks unprofessional
- Not checking file format headers → wrong extension causes MIME issues
- CDN timeouts on full-size images → always use size constraints
