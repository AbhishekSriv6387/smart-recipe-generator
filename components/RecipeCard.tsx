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
  const [favorites, setFavorites] = React.useState<string[]>(() => getFavorites());
  const [rating, setRatingState] = React.useState<number>(() => getRatings()[r.id] || 0);

  const isFav = favorites.includes(r.id);

  const handleFav = () => {
    const newFavs = toggleFavorite(r.id);
    setFavorites(newFavs);
  };

  const handleRating = (newValue: number) => {
    setRatingState(newValue);
    setRating(r.id, newValue);
  };

  return (
    <div
      className="group relative rounded-2xl bg-gradient-to-br from-white via-gray-50 to-purple-50 
                 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900 
                 shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 
                 hover:scale-[1.03] border border-gray-100 dark:border-neutral-700"
    >
      {/* Image with overlay */}
      <Link href={`/recipes/${r.slug}`} className="block relative">
        <img
          src={r.image}
          alt={r.name}
          className="h-52 w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition"></div>
        
        {/* Fav button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            handleFav();
          }}
          className={`absolute top-3 right-3 p-2 rounded-full shadow-md transition-transform 
          ${isFav ? "bg-red-500 text-white scale-110" : "bg-white/90 text-gray-600 hover:bg-red-100"} 
          hover:scale-110`}
        >
          <Heart size={18} fill={isFav ? "white" : "none"} />
        </button>
      </Link>

      {/* Content */}
      <div className="relative p-5 space-y-3">
        {/* Title */}
        <Link href={`/recipes/${r.slug}`}>
          <h3 className="font-bold text-lg text-gray-900 dark:text-gray-100 group-hover:text-purple-600 transition">
            {r.name}
          </h3>
        </Link>
        <p className="text-sm text-gray-500 dark:text-gray-400">{r.cuisine}</p>

        {/* Meta info badges */}
        <div className="flex items-center gap-3 text-sm">
          <span className="flex items-center gap-1 px-2 py-1 rounded-full bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">
            <Clock size={16} /> {r.timeMinutes}m
          </span>
          <span className="flex items-center gap-1 px-2 py-1 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
            <ChefHat size={16} /> {r.difficulty}
          </span>
        </div>

        {/* Rating */}
        <div className="pt-2">
          <Rating value={rating} onChange={handleRating} />
        </div>

        {/* Button */}
        <div className="pt-2">
          <Link
            href={`/recipes/${r.slug}`}
            className="inline-flex items-center gap-1 px-4 py-2 text-sm font-medium 
                       text-white bg-gradient-to-r from-purple-600 to-pink-600 
                       rounded-full shadow hover:from-purple-700 hover:to-pink-700 
                       transition-all"
          >
            View Recipe →
          </Link>
        </div>
      </div>
    </div>
  );
}
