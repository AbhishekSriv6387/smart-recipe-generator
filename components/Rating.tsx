"use client";
import React from "react";

type RatingProps = {
  value: number; // current rating
  onChange: (value: number) => void;
};

export default function Rating({ value, onChange }: RatingProps) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map(star => (
        <button
          key={star}
          onClick={() => {
            // if clicking the same star again → reset to 0
            if (value === star) onChange(0);
            else onChange(star);
          }}
          className={star <= value ? "text-yellow-500" : "text-gray-400"}
        >
          ★
        </button>
      ))}
      {value > 0 && (
        <button
          onClick={() => onChange(0)}
          className="ml-2 text-xs text-red-500"
        >
          Clear
        </button>
      )}
    </div>
  );
}
