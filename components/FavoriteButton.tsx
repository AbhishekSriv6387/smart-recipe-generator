// components/FavoriteButton.tsx
"use client";
import { Heart } from "lucide-react";
import { useState, useEffect } from "react";

export function FavoriteButton({ recipeId }: { recipeId: string }) {
  const [fav, setFav] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(`fav-${recipeId}`);
    if (saved === "true") setFav(true);
  }, [recipeId]);

  const toggleFav = () => {
    const newVal = !fav;
    setFav(newVal);
    localStorage.setItem(`fav-${recipeId}`, newVal.toString());
  };

  return (
    <button onClick={toggleFav} className="focus:outline-none">
      <Heart
        size={22}
        className={fav ? "text-red-500 fill-red-500" : "text-gray-400"}
      />
    </button>
  );
}
