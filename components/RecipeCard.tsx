"use client";

import React from "react";
import Link from "next/link";
import { Heart, Clock, ChefHat } from "lucide-react";
import Rating from "@/components/Rating";
import { toggleFavorite, getFavorites, getRatings, setRating } from "@/lib/storage";
import type { Recipe } from "@/lib/types";

type RecipeCardProps = {
  r: Recipe;
};

export default function RecipeCard({ r }: RecipeCardProps) {
  const [favorites, setFavorites] = React.useState<string[]>([]);
  const [rating, setRatingState] = React.useState<number>(0);
  const [hydrated, setHydrated] = React.useState(false);

  // ✅ Safely hydrate after client mounts
  React.useEffect(() => {
    setFavorites(getFavorites());
    setRatingState(getRatings()[r.id] || 0);
    setHydrated(true);
  }, [r.id]);

  const isFav = favorites.includes(r.id);

  const handleFav = () => {
    const newFavs = toggleFavorite(r.id);
    setFavorites(newFavs); // update UI immediately
  };

  const handleRating = (newValue: number) => {
    setRatingState(newValue);
    setRating(r.id, newValue);
  };

  return (
    <div
      className="group relative rounded-3xl overflow-hidden shadow-xl border border-gray-100 
                 dark:border-neutral-800 transition-all duration-500 hover:scale-[1.03] 
                 hover:shadow-2xl bg-gradient-to-br from-white/80 to-purple-50/80 
                 dark:from-neutral-900/70 dark:to-neutral-800/70 backdrop-blur-lg"
    >
      {/* 🔹 Image Section */}
      <Link href={`/recipes/${r.slug}`} className="block relative">
        <img
          src={r.image}
          alt={r.name}
          className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent 
                        opacity-70 group-hover:opacity-90 transition-all"></div>

        {/* Favorite Button */}
        {hydrated && (
          <button
            onClick={(e) => {
              e.preventDefault();
              handleFav();
            }}
            className={`absolute top-4 right-4 p-3 rounded-full shadow-lg backdrop-blur-md 
                        transition-all duration-300 hover:scale-110
                        ${isFav ? "bg-red-500 text-white scale-110" : "bg-white/80 text-gray-700 hover:bg-red-100"}`}
          >
            <Heart size={20} fill={isFav ? "white" : "none"} />
          </button>
        )}
      </Link>

      {/* 🔹 Content Section */}
      <div className="relative p-5 space-y-3">
        <Link href={`/recipes/${r.slug}`}>
          <h3
            className="font-extrabold text-lg text-gray-900 dark:text-gray-100 
                       group-hover:text-transparent bg-clip-text 
                       bg-gradient-to-r from-purple-600 to-pink-600 transition-all"
          >
            {r.name}
          </h3>
        </Link>

        <p className="text-sm text-gray-500 dark:text-gray-400">{r.cuisine}</p>

        {/* Meta Info */}
        <div className="flex items-center gap-3 text-sm">
          <span className="flex items-center gap-1 px-3 py-1 rounded-full 
                           bg-purple-100 text-purple-700 font-medium 
                           dark:bg-purple-900/40 dark:text-purple-300">
            <Clock size={16} /> {r.timeMinutes}m
          </span>
          <span className="flex items-center gap-1 px-3 py-1 rounded-full 
                           bg-blue-100 text-blue-700 font-medium 
                           dark:bg-blue-900/40 dark:text-blue-300">
            <ChefHat size={16} /> {r.difficulty}
          </span>
        </div>

        {/* Rating */}
        {hydrated && (
          <div className="pt-2">
            <Rating value={rating} onChange={handleRating} />
          </div>
        )}

        {/* CTA Button */}
        <div className="pt-3">
          <Link
            href={`/recipes/${r.slug}`}
            className="inline-flex items-center gap-2 px-5 py-2 text-sm font-semibold 
                       text-white rounded-full shadow-md 
                       bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 
                       hover:opacity-90 hover:scale-105 transition-all"
          >
            🍴 View Recipe
          </Link>
        </div>
      </div>
    </div>
  );
}
