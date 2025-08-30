import type { Recipe } from "./types";
import { SUBSTITUTIONS } from "./substitutions";

export type MatchResult = {
  recipe: Recipe;
  score: number; // now a percentage 0–100
  missing: string[];
  matched: string[];
};

const normalize = (s: string) => s.toLowerCase().replace(/[^a-z0-9 ]+/g, " ").trim();

export function scoreRecipe(recipe: Recipe, pantry: string[], diet: Set<string>): MatchResult {
  const pset = new Set(pantry.map(normalize));
  const matched: string[] = [];
  const missing: string[] = [];

  // diet filter: if recipe violates diet, big penalty
 // replace these:
// const violates = [...diet].some(d => !recipe.dietary.includes(d));
// let score = violates ? -50 : 0;

// with these:
const normalizeDiet = (s: string) => s.toLowerCase().trim();
const rDietSet = new Set<string>((recipe.dietary ?? []).map(normalizeDiet));

const violates =
  diet.size > 0 && [...diet].some(d => !rDietSet.has(normalizeDiet(d)));

let score = violates ? -50 : 0;


  for (const ing of recipe.ingredients) {
    const n = normalize(ing.name);
    let got = false;

    // exact match
    for (const p of pset) {
      if (p === n) { score += 5; got = true; matched.push(ing.name); break; }
    }
    if (got) continue;

    // partial match
    for (const p of pset) {
      if (p.includes(n) || n.includes(p)) { score += 2; got = true; matched.push(ing.name); break; }
    }
    if (got) continue;

    // substitution match (more flexible)
    let subs: string[] = [];
    for (const [key, values] of Object.entries(SUBSTITUTIONS)) {
      if (n.includes(normalize(key))) {
        subs = values.map(s => normalize(s));
        break;
      }
    }
    for (const p of pset) {
      if (subs.includes(p)) { score += 1; got = true; matched.push(ing.name + " (sub)"); break; }
    }

    if (!got) missing.push(ing.name);
  }

  // bonus for short time and easy difficulty
  if (recipe.timeMinutes <= 30) score += 2;
  if (recipe.difficulty === "easy") score += 2;

  // convert to percentage 0–100
  const maxScore = recipe.ingredients.length * 5; // each ingredient best = 5
  score = Math.max(0, Math.round((score / Math.max(maxScore, 1)) * 100));

  return { recipe, score, missing, matched };
}

export function rankRecipes(recipes: Recipe[], pantry: string[], diet: string[]) {
  const dietSet = new Set(diet);
  const results = recipes.map(r => scoreRecipe(r, pantry, dietSet));
  return results.sort((a, b) => b.score - a.score);
}
