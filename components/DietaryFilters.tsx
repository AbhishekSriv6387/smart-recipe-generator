"use client";
import { cn } from "@/lib/utils"; // shadcn helper, remove if unused

const OPTIONS = [
  "vegetarian",
  "vegan",
  "gluten-free",
  "dairy-free",
  "nut-free",
  "non-vegetarian",
];

export function DietaryFilters({
  selected,
  onChange,
}: {
  selected: string[];
  onChange: (s: string[]) => void;
}) {
  const toggle = (opt: string) => {
    if (selected.includes(opt)) {
      onChange(selected.filter((s) => s !== opt));
    } else {
      onChange([...selected, opt]);
    }
  };

  return (
    <div className="flex flex-wrap gap-2">
      {OPTIONS.map((opt) => (
        <button
          key={opt}
          type="button"
          onClick={() => toggle(opt)}
          className={cn(
            "px-3 py-1 rounded-full border text-sm transition",
            selected.includes(opt)
              ? "bg-black text-white border-black"
              : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
          )}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}
