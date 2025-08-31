"use client";

import React from "react";
import { useParams } from "next/navigation";
import { RECIPES } from "@/lib/recipes";
import { Clock, ChefHat, Utensils } from "lucide-react";
import Rating from "@/components/Rating";
import { getRatings, setRating, toggleFavorite, getFavorites } from "@/lib/storage";
import { motion } from "framer-motion";

export default function RecipeDetail() {
  const { slug } = useParams();
  const recipe = RECIPES.find((r) => r.slug === slug);

  const [rating, setRatingState] = React.useState<number>(0);
  const [favorites, setFavorites] = React.useState<string[]>([]);
  const [hydrated, setHydrated] = React.useState(false);

  // ✅ Hydrate localStorage data only on client
  React.useEffect(() => {
    if (recipe) {
      setRatingState(getRatings()[recipe.id] || 0);
    }
    setFavorites(getFavorites());
    setHydrated(true);
  }, [recipe]);

  if (!recipe) {
    return <p className="p-10 text-center text-gray-500">Recipe not found.</p>;
  }

  const isFav = favorites.includes(recipe.id);

  const handleRating = (val: number) => {
    setRatingState(val);
    setRating(recipe.id, val);
  };

  const handleFav = () => {
    const newFavs = toggleFavorite(recipe.id);
    setFavorites(newFavs);
  };

  return (
    <div className="min-h-screen">
      {/* 🔹 Hero Section */}
      <div className="relative h-72 md:h-[28rem] w-full overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.name}
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute bottom-8 left-8 text-white"
        >
          <h1 className="text-3xl md:text-5xl font-extrabold drop-shadow-lg">
            {recipe.name}
          </h1>
          <p className="mt-2 text-lg text-gray-200">{recipe.cuisine} cuisine</p>
        </motion.div>
      </div>

      {/* 🔹 Content */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 p-6 md:p-10">
        {/* Left Sidebar */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="md:col-span-1 space-y-8"
        >
          {/* Meta Info */}
          <div className="rounded-2xl p-5 shadow-lg bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md space-y-4">
            <div className="flex flex-wrap gap-3">
              <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300 text-sm">
                <Clock size={16} /> {recipe.timeMinutes} min
              </span>
              <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 text-sm">
                <ChefHat size={16} /> {recipe.difficulty}
              </span>
              <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300 text-sm">
                <Utensils size={16} /> Serves {recipe.servings}
              </span>
            </div>
            {hydrated && (
              <div>
                <Rating value={rating} onChange={handleRating} />
                <button
                  onClick={handleFav}
                  className={`mt-3 w-full px-4 py-2 rounded-lg text-sm font-medium transition
                  ${
                    isFav
                      ? "bg-red-500 text-white"
                      : "bg-gray-200 hover:bg-gray-300 dark:bg-neutral-700 dark:hover:bg-neutral-600"
                  }`}
                >
                  {isFav ? "❤️ In Favorites" : "♡ Add to Favorites"}
                </button>
              </div>
            )}
          </div>

          {/* Ingredients */}
          <div className="rounded-2xl p-6 shadow-lg bg-gradient-to-br from-purple-50 to-pink-50 dark:from-neutral-800 dark:to-neutral-700">
            <h2 className="text-lg font-bold mb-4">📝 Ingredients</h2>
            <ul className="space-y-2 text-sm">
              {recipe.ingredients.map((ing, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2 p-2 rounded-lg hover:bg-white/60 dark:hover:bg-neutral-800/60 transition"
                >
                  <span className="text-purple-500">🥕</span>
                  {ing.quantity} {ing.unit} {ing.name}
                </li>
              ))}
            </ul>
          </div>

          {/* Nutrition */}
          <div className="rounded-2xl p-6 shadow-lg bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-neutral-800 dark:to-neutral-700">
            <h2 className="text-lg font-bold mb-4">🥗 Nutrition (per serving)</h2>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="p-3 rounded-xl bg-white/60 dark:bg-neutral-800/60 text-center">
                <p className="font-bold">{recipe.nutritionPerServing.calories}</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">Calories</p>
              </div>
              <div className="p-3 rounded-xl bg-white/60 dark:bg-neutral-800/60 text-center">
                <p className="font-bold">{recipe.nutritionPerServing.protein}g</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">Protein</p>
              </div>
              <div className="p-3 rounded-xl bg-white/60 dark:bg-neutral-800/60 text-center">
                <p className="font-bold">{recipe.nutritionPerServing.carbs}g</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">Carbs</p>
              </div>
              <div className="p-3 rounded-xl bg-white/60 dark:bg-neutral-800/60 text-center">
                <p className="font-bold">{recipe.nutritionPerServing.fat}g</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">Fat</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Steps */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="md:col-span-2 space-y-6"
        >
          <div className="rounded-2xl p-6 shadow-lg bg-white/90 dark:bg-neutral-900/80 backdrop-blur-md">
            <h2 className="text-xl font-bold mb-6">👩‍🍳 Steps</h2>
            <div className="space-y-4">
              {recipe.steps.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-r from-purple-50 to-pink-50 dark:from-neutral-800 dark:to-neutral-700 shadow-sm"
                >
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold">
                    {i + 1}
                  </span>
                  <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                    {s}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
