// lib/storage.ts

export type RatingsMap = Record<string, number>;

const KEYS = {
  favorites: "sr_favorites",
  ratings: "sr_ratings",
} as const;

// --- Favorites ---
export function getFavorites(): string[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem(KEYS.favorites) || "[]");
  } catch {
    return [];
  }
}

export function setFavorites(ids: string[]) {
  if (typeof window === "undefined") return;
  localStorage.setItem(KEYS.favorites, JSON.stringify(ids));
}

export function toggleFavorite(id: string): string[] {
  const curr = getFavorites();
  const idx = curr.indexOf(id);
  if (idx >= 0) curr.splice(idx, 1);
  else curr.push(id);
  setFavorites(curr);
  return curr;
}

// --- Ratings ---
export function getRatings(): RatingsMap {
  if (typeof window === "undefined") return {};
  try {
    return JSON.parse(localStorage.getItem(KEYS.ratings) || "{}");
  } catch {
    return {};
  }
}

export function setRating(id: string, value: number): RatingsMap {
  // clamp to 1–5, remove if 0
  const ratings = getRatings();
  if (value <= 0) delete ratings[id];
  else ratings[id] = Math.max(1, Math.min(5, Math.round(value)));

  if (typeof window !== "undefined") {
    localStorage.setItem(KEYS.ratings, JSON.stringify(ratings));
  }
  return ratings;
}

// Optional helpers
export function clearStorage() {
  if (typeof window === "undefined") return;
  localStorage.removeItem(KEYS.favorites);
  localStorage.removeItem(KEYS.ratings);
}
