// lib/recommend.ts
import { RECIPES } from "./recipes";

export function getSuggestions(): typeof RECIPES {
  let favIds = RECIPES.filter(r => localStorage.getItem(`fav-${r.id}`) === "true").map(r => r.id);
  
  if (favIds.length === 0) {
    // fallback: top rated recipes
    return RECIPES.filter(r => {
      const rating = Number(localStorage.getItem(`rating-${r.id}`) || 0);
      return rating >= 4;
    });
  }

  // Suggest same cuisine as favorite recipes
  const favCuisines = new Set(
    RECIPES.filter(r => favIds.includes(r.id)).map(r => r.cuisine)
  );
  return RECIPES.filter(r => favCuisines.has(r.cuisine)).slice(0, 6);
}
