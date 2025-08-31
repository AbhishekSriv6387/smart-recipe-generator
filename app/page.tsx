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
    <div className="space-y-16">
      {/* 🔹 Hero Section */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-purple-700 via-pink-600 to-orange-500 text-white shadow-2xl p-10 md:p-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-2xl"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
            Smart Recipe Generator 🍳
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/90 leading-relaxed">
            Discover recipes tailored to your pantry. Smarter cooking, healthier eating,  
            and creative meal ideas — instantly.
          </p>
        </motion.div>
        {/* Decorative blurred circle */}
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-white/20 rounded-full blur-3xl"></div>
      </section>

      {/* 🔹 Ingredient & Quick Filters */}
      <section className="card backdrop-blur-lg bg-white/70 dark:bg-neutral-900/70 p-10 shadow-xl rounded-3xl space-y-8">
        <h2 className="text-2xl font-semibold">Get Started</h2>
        <p className="text-gray-600 dark:text-neutral-300 max-w-xl">
          Add ingredients, select dietary preferences, and explore recipes that fit your lifestyle.
        </p>

        <IngredientInput onChange={setPantry} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {/* Search */}
          <form
            onSubmit={e => e.preventDefault()}
            className="flex rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-neutral-700"
          >
            <input
              className="flex-1 px-4 py-3 text-gray-800 dark:text-gray-200 bg-white dark:bg-neutral-900 placeholder-gray-400 focus:outline-none"
              placeholder="🔍 Search recipes..."
              value={query}
              onChange={e => setQuery(e.target.value)}
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 font-semibold hover:opacity-90 transition"
            >
              Search
            </button>
          </form>

          {/* Dietary Preferences */}
          <div className="rounded-2xl p-5 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-neutral-800 dark:to-neutral-700 shadow-inner">
            <p className="text-sm font-medium text-gray-700 dark:text-gray-200">Dietary preferences</p>
            <div className="mt-4">
              <DietaryFilters selected={diet} onChange={setDiet} />
            </div>
          </div>

          {/* Pantry */}
          <div className="rounded-2xl p-5 bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-neutral-800 dark:to-neutral-700 shadow-inner">
            <p className="text-sm font-medium text-gray-700 dark:text-gray-200">
              Pantry ({pantry.length})
            </p>
            <p className="mt-3 text-sm text-gray-600 dark:text-neutral-300">
              {pantry.join(", ") || "Add ingredients to get started."}
            </p>
          </div>
        </div>
      </section>

      {/* 🔹 Filters */}
      <Filters onChange={setFilters} />

      {/* 🔹 Top Matches */}
      <section>
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-3xl font-bold">✨ Top Matches</h2>
          <p className="text-sm text-gray-500">{ranked.length} recipes found</p>
        </div>
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {ranked.map(r => (
            <motion.div
              key={r.recipe.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <RecipeCard r={r.recipe} />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 🔹 Suggested Recipes */}
      <section>
        <h2 className="text-3xl font-bold mb-8">💡 Suggested for You</h2>
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {getSuggestions().map(r => (
            <motion.div
              key={r.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <RecipeCard r={r} />
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
