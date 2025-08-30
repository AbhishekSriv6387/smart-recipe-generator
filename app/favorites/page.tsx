"use client";
import * as React from "react";
import { RECIPES } from "@/lib/recipes";
import { useFaves } from "@/lib/ratings";
import RecipeCard from "@/components/RecipeCard";

export default function FavoritesPage() {
  const { faves } = useFaves();
  const list = RECIPES.filter(r => faves[r.id]);

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Favorites</h1>
      {list.length === 0 ? (
        <p className="text-sm text-gray-600 dark:text-neutral-300">No favorites yet. Add some from the recipe cards.</p>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {list.map(r => <RecipeCard key={r.id} r={r} />)}
        </div>
      )}
    </div>
  );
}
