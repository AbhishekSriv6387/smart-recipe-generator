# Smart Recipe Generator

Production-ready Next.js (TypeScript) app that suggests recipes from ingredients you type or detect from photos. Clean, responsive UI built with Tailwind and minimal shadcn-style components; animations via Framer Motion.

## Tech
- Next.js 14 (App Router) + TypeScript
- Tailwind CSS + minimal shadcn/ui-like primitives (Button, Card, Input, Badge, Skeleton)
- Framer Motion, lucide-react
- Minimal backend: Edge function for ingredient recognition via Hugging Face Inference API
- Static dataset (22 recipes) in `lib/recipes.ts`

## Getting Started
```bash
pnpm i   # or npm i / yarn
cp .env.example .env.local
pnpm dev
```
Open http://localhost:3000

### Environment
Create `.env.local`:
```
HUGGINGFACE_API_KEY=your-hf-token
```
If unset, the app still runs but image ingredient recognition returns an empty list with a note.

## Ingredient Classification (Approach)
We call the free Hugging Face Inference API (model: `nateraw/food`) from an Edge route (`/api/recognize`). The top labels are normalized and mapped to a curated ingredient list (e.g., "noodles" → "noodles", "mozzarella" → "mozzarella"). This avoids over-prediction and aligns with the recipe dataset. Errors from the API are surfaced to the user; if the API key is missing or rate-limited we gracefully fall back.

## Matching Logic
A weighted scorer computes a per-ingredient score: exact match (5), partial (2), substitution (1) using `lib/substitutions.ts`. Diet violations apply a large negative bias. We add small bonuses for quick and easy recipes, and normalize by ingredient count. Top-ranked recipes surface first on the Home page.

## Substitution Map
Common practical swaps (butter↔oil/ghee, milk↔plant milks, egg↔flax egg, etc.) live in `lib/substitutions.ts` and are referenced during scoring and suggestions.

## Filters & Scaling
Filters (difficulty, max time, cuisine, dietary) run client-side on the dataset. Serving size is adjustable on the recipe detail page; ingredient quantities and nutrition scale linearly by a factor.

## User Feedback & Personalization
Ratings (1–5 stars) and Favorites persist in `localStorage` via lightweight hooks. A future enhancement could recommend by similar cuisines weighted by rating.

## Error Handling & UX
- Graceful error messaging for failed API calls
- Loading/disabled states for uploads
- Empty states on Favorites and recipe grids
- Responsive layout; sensible keyboard targets and alt text

## Deploy
- Push to GitHub then “Import Project” on Vercel. No extra config required.
- Set `HUGGINGFACE_API_KEY` in Vercel Project → Settings → Environment Variables.
- Add the live URL to this README.

## Notes
- Images use placeholder Unsplash/Picsum seeds; replace with your assets if needed.
- The dataset is illustrative; nutrition values are approximate.
- Keep your total development time within your target window.

---

© 2025-08-30 Smart Recipe Generator
