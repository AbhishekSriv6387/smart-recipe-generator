"use client";
import * as React from "react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export default function RatingStars({ value, onChange }: { value: number; onChange: (v: number) => void }) {
  const [hover, setHover] = React.useState(0);
  return (
    <div className="flex items-center gap-1">
      {[1,2,3,4,5].map(i => (
        <button
          key={i}
          className="p-1"
          onMouseEnter={() => setHover(i)}
          onMouseLeave={() => setHover(0)}
          onClick={() => onChange(i)}
          aria-label={`rate ${i} star`}
        >
          <Star className={cn("h-5 w-5", (hover >= i || value >= i) ? "fill-yellow-400 stroke-yellow-400" : "stroke-gray-400")} />
        </button>
      ))}
    </div>
  );
}
