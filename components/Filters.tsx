"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Timer, ChefHat, Globe } from "lucide-react";

type Props = {
  onChange: (f: { difficulty?: string; time?: number; cuisine?: string; diet?: string[] }) => void;
};

const CUISINES = [
  "Indian",
  "Italian",
  "Asian",
  "Chinese",
  "Mexican",
  "Global",
  "Mediterranean",
  "Middle Eastern",
  "American",
];

export default function Filters({ onChange }: Props) {
  const [difficulty, setDifficulty] = React.useState<string>("");
  const [time, setTime] = React.useState<number>(0);
  const [cuisine, setCuisine] = React.useState<string>("");
  const [diet, setDiet] = React.useState<string[]>([]);

  React.useEffect(() => onChange({ difficulty, time, cuisine, diet }), [
    difficulty,
    time,
    cuisine,
    diet,
    onChange,
  ]);

  const toggle = (s: string) =>
    setDiet(prev => (prev.includes(s) ? prev.filter(x => x !== s) : [...prev, s]));

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="rounded-2xl bg-white/70 dark:bg-neutral-900/70 backdrop-blur-md 
                 shadow-lg border border-gray-100 dark:border-neutral-800 p-6"
    >
      <h2 className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-100">
        🔍 Refine Your Search
      </h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
        {/* Difficulty */}
        <div>
          <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">
            <ChefHat className="inline-block w-4 h-4 mr-1" /> Difficulty
          </label>
          <select
            className="w-full rounded-lg border border-gray-200 dark:border-neutral-700 
                       bg-white dark:bg-neutral-800 px-3 py-2 text-sm 
                       focus:ring-2 focus:ring-purple-500 outline-none"
            value={difficulty}
            onChange={e => setDifficulty(e.target.value)}
          >
            <option value="">Any</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>

        {/* Max Time */}
        <div>
          <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">
            <Timer className="inline-block w-4 h-4 mr-1" /> Max Time (min)
          </label>
          <input
            type="number"
            className="w-full rounded-lg border border-gray-200 dark:border-neutral-700 
                       bg-white dark:bg-neutral-800 px-3 py-2 text-sm 
                       focus:ring-2 focus:ring-pink-500 outline-none"
            min={0}
            value={time || ""}
            placeholder="e.g. 30"
            onChange={e => setTime(Number(e.target.value) || 0)}
          />
        </div>

        {/* Cuisine */}
        <div>
          <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">
            <Globe className="inline-block w-4 h-4 mr-1" /> Cuisine
          </label>
          <select
            className="w-full rounded-lg border border-gray-200 dark:border-neutral-700 
                       bg-white dark:bg-neutral-800 px-3 py-2 text-sm 
                       focus:ring-2 focus:ring-orange-500 outline-none"
            value={cuisine}
            onChange={e => setCuisine(e.target.value)}
          >
            <option value="">Any</option>
            {CUISINES.map(c => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        {/* Dietary */}
        <div>
          <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">
            🥗 Dietary
          </label>
          <div className="flex flex-wrap gap-2">
            {["vegetarian", "vegan", "gluten-free", "dairy-free", "nut-free"].map(d => (
              <button
                key={d}
                type="button"
                onClick={() => toggle(d)}
                className={cn(
                  "px-3 py-1 rounded-full text-xs font-medium transition-all shadow-sm",
                  diet.includes(d)
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md scale-105"
                    : "bg-gray-100 dark:bg-neutral-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-neutral-600"
                )}
              >
                {d}
              </button>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
