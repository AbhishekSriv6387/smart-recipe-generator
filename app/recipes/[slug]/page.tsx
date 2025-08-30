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
  const recipe = RECIPES.find(r => r.slug === slug);

  const [rating, setRatingState] = React.useState(() => (recipe ? getRatings()[recipe.id] || 0 : 0));
  const [favorites, setFavorites] = React.useState<string[]>(getFavorites());

  if (!recipe) return <p className="p-10 text-center text-gray-500">Recipe not found.</p>;

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
      {/* 🔹 Hero Image */}
      <div className="relative h-72 md:h-96 w-full overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/10"></div>
        <div className="absolute bottom-6 left-6 text-white">
          <h1 className="text-3xl md:text-4xl font-bold">{recipe.name}</h1>
          <p className="mt-1 text-sm text-gray-200">{recipe.cuisine} cuisine</p>
        </div>
      </div>

      {/* 🔹 Content */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 p-6 md:p-10">
        {/* Left Sidebar: Ingredients + Nutrition */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="md:col-span-1 space-y-6"
        >
          {/* Meta Info */}
          <div className="rounded-2xl p-5 shadow-lg bg-white/70 dark:bg-neutral-900/70 backdrop-blur-md">
            <div className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300">
              <Clock size={16} /> {recipe.timeMinutes} min
              <ChefHat size={16} /> {recipe.difficulty}
              <Utensils size={16} /> Serves {recipe.servings}
            </div>
            <div className="mt-3">
              <Rating value={rating} onChange={handleRating} />
              <button
                onClick={handleFav}
                className={`mt-3 px-4 py-2 rounded-lg text-sm font-medium transition
                ${isFav ? "bg-red-500 text-white" : "bg-gray-200 hover:bg-gray-300 dark:bg-neutral-700 dark:hover:bg-neutral-600"}`}
              >
                {isFav ? "❤️ In Favorites" : "♡ Add to Favorites"}
              </button>
            </div>
          </div>

          {/* Ingredients */}
          <div className="rounded-2xl p-5 shadow-lg bg-gradient-to-br from-purple-50 to-pink-50 dark:from-neutral-800 dark:to-neutral-700">
            <h2 className="text-lg font-semibold mb-3">📝 Ingredients</h2>
            <ul className="space-y-1 text-sm">
              {recipe.ingredients.map((ing, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-purple-500"></span>
                  {ing.quantity} {ing.unit} {ing.name}
                </li>
              ))}
            </ul>
          </div>

          {/* Nutrition */}
          <div className="rounded-2xl p-5 shadow-lg bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-neutral-800 dark:to-neutral-700">
            <h2 className="text-lg font-semibold mb-3">🥗 Nutrition (per serving)</h2>
            <ul className="text-sm space-y-1">
              <li>Calories: {recipe.nutritionPerServing.calories}</li>
              <li>Protein: {recipe.nutritionPerServing.protein}g</li>
              <li>Carbs: {recipe.nutritionPerServing.carbs}g</li>
              <li>Fat: {recipe.nutritionPerServing.fat}g</li>
            </ul>
          </div>
        </motion.div>

        {/* Right Column: Steps */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="md:col-span-2 space-y-6"
        >
          <div className="rounded-2xl p-6 shadow-lg bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md">
            <h2 className="text-xl font-bold mb-4">👩‍🍳 Steps</h2>
            <ol className="list-decimal list-inside space-y-3 text-sm text-gray-700 dark:text-gray-300">
              {recipe.steps.map((s, i) => (
                <li key={i} className="leading-relaxed">{s}</li>
              ))}
            </ol>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
