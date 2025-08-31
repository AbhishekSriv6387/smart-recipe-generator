"use client";

import * as React from "react";
import { RECIPES } from "@/lib/recipes";
import { getFavorites } from "@/lib/storage";
import RecipeCard from "@/components/RecipeCard";

export default function FavoritesPage() {
  const [favorites, setFavorites] = React.useState<string[]>([]);
  const [hydrated, setHydrated] = React.useState(false);

  // ✅ Hydrate from localStorage only on the client
  React.useEffect(() => {
    setFavorites(getFavorites());
    setHydrated(true);
  }, []);

  if (!hydrated) {
    return <p className="p-10 text-center text-gray-500">Loading favorites...</p>;
  }

  const favRecipes = RECIPES.filter((r) => favorites.includes(r.id));

  return (
    <div className="space-y-6 p-10">
      <h1 className="text-3xl font-bold">❤️ Favorites</h1>

      {favRecipes.length === 0 ? (
        <p className="text-sm text-gray-600 dark:text-neutral-300">
          No favorites yet. Add some from the recipe cards.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {favRecipes.map((r) => (
            <RecipeCard key={r.id} r={r} />
          ))}
        </div>
      )}
    </div>
  );
}
