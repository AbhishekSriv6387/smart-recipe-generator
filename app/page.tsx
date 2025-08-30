"use client";

import * as React from "react";
import IngredientInput from "@/components/IngredientInput";
import { RECIPES } from "@/lib/recipes";
import { rankRecipes } from "@/lib/match";
import RecipeCard from "@/components/RecipeCard";
import Filters from "@/components/Filters";
import { motion } from "framer-motion";
import { DietaryFilters } from "@/components/DietaryFilters";
import { getSuggestions } from "@/lib/recommend";

export default function HomePage() {
  const [pantry, setPantry] = React.useState<string[]>([]);
  const [diet, setDiet] = React.useState<string[]>([]);
  const [filtered, setFiltered] = React.useState(RECIPES);
  const [query, setQuery] = React.useState("");
  const [filters, setFilters] = React.useState<{
    difficulty?: string;
    time?: number;
    cuisine?: string;
    diet?: string[];
  }>({});

  React.useEffect(() => {
    let r = RECIPES.slice();
    if (filters.difficulty) r = r.filter(x => x.difficulty === filters.difficulty);
    if (filters.time && filters.time > 0) r = r.filter(x => x.timeMinutes <= (filters.time as number));
    if (filters.cuisine) r = r.filter(x => x.cuisine === filters.cuisine);
    if (filters.diet && filters.diet.length)
      r = r.filter(x => filters.diet!.every(d => x.dietary.includes(d as any)));
    if (query)
      r = r.filter(
        x =>
          x.name.toLowerCase().includes(query.toLowerCase()) ||
          x.tags?.some(t => t.includes(query.toLowerCase()))
      );
    setFiltered(r);
  }, [filters, query]);

  const ranked = React.useMemo(() => rankRecipes(filtered, pantry, diet), [filtered, pantry, diet]);

  return (
    <div className="space-y-12">
      {/* 🔹 Hero Section */}
      <section className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-white shadow-xl p-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
            Smart Recipe Generator 🍳
          </h1>
          <p className="mt-4 text-lg max-w-xl text-white/90">
            Discover delicious recipes from the ingredients you already have.  
            Smarter cooking, healthier eating, faster decisions.
          </p>
        </motion.div>
      </section>

      {/* 🔹 Ingredient & Filters */}
      <section className="card backdrop-blur-md bg-white/70 dark:bg-neutral-900/70 p-8 shadow-lg rounded-2xl space-y-6">
        <h2 className="text-xl font-semibold">Get Started</h2>
        <p className="text-gray-600 dark:text-neutral-300">
          Add your pantry items, choose dietary preferences, and filter recipes that match your lifestyle.
        </p>

        <IngredientInput onChange={setPantry} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {/* Search */}
          <form
            onSubmit={e => e.preventDefault()}
            className="flex rounded-lg overflow-hidden shadow"
          >
            <input
              className="flex-1 px-3 py-2 text-gray-700 focus:outline-none"
              placeholder="Search recipes..."
              value={query}
              onChange={e => setQuery(e.target.value)}
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-5 py-2 font-medium hover:opacity-90 transition"
            >
              Search
            </button>
          </form>

          {/* Dietary Preferences */}
          <div className="rounded-xl p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-neutral-800 dark:to-neutral-700 shadow-inner">
            <p className="text-sm font-medium text-gray-700 dark:text-gray-200">Dietary preferences</p>
            <div className="mt-3">
              <DietaryFilters selected={diet} onChange={setDiet} />
            </div>
          </div>

          {/* Pantry */}
          <div className="rounded-xl p-4 bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-neutral-800 dark:to-neutral-700 shadow-inner">
            <p className="text-sm font-medium text-gray-700 dark:text-gray-200">Pantry ({pantry.length})</p>
            <p className="mt-2 text-sm text-gray-600 dark:text-neutral-300">
              {pantry.join(", ") || "Add ingredients to get started."}
            </p>
          </div>
        </div>
      </section>

      {/* 🔹 Filters */}
      <Filters onChange={setFilters} />

      {/* 🔹 Top Matches */}
      <section>
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold">✨ Top Matches</h2>
          <p className="text-sm text-gray-500">{ranked.length} recipes found</p>
        </div>
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {ranked.map(r => (
            <RecipeCard key={r.recipe.id} r={r.recipe} />
          ))}
        </motion.div>
      </section>

      {/* 🔹 Suggested Recipes */}
      <section>
        <h2 className="text-2xl font-bold mb-6">💡 Suggested for You</h2>
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {getSuggestions().map(r => (
            <RecipeCard key={r.id} r={r} />
          ))}
        </motion.div>
      </section>
    </div>
  );
}
