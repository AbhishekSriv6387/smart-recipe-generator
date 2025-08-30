"use client";
import * as React from "react";
import { RECIPES } from "@/lib/recipes";
import RecipeCard from "@/components/RecipeCard";
import Filters from "@/components/Filters";

export default function RecipesPage() {
  const [filters, setFilters] = React.useState<{difficulty?: string; time?: number; cuisine?: string; diet?: string[]}>({});
  const [results, setResults] = React.useState(RECIPES);

  React.useEffect(() => {
    let r = RECIPES.slice();
    if (filters.difficulty) r = r.filter(x => x.difficulty === filters.difficulty);
    if (filters.time && filters.time > 0) r = r.filter(x => x.timeMinutes <= (filters.time as number));
    if (filters.cuisine) r = r.filter(x => x.cuisine === filters.cuisine);
    if (filters.diet && filters.diet.length) r = r.filter(x => filters.diet!.every(d => x.dietary.includes(d as any)));
    setResults(r);
  }, [filters]);

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">All Recipes</h1>
      <Filters onChange={setFilters} />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {results.map(r => <RecipeCard key={r.id} r={r} />)}
      </div>
    </div>
  );
}
