"use client";

import * as React from "react";
import { recognizeIngredients } from "@/lib/ingredientRecognition";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Upload, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function IngredientInput({ onChange }: { onChange: (items: string[]) => void }) {
  const [text, setText] = React.useState("");
  const [items, setItems] = React.useState<string[]>([]);
  const [loading, setLoading] = React.useState(false);
  const fileRef = React.useRef<HTMLInputElement>(null);

const addFromText = () => {
  const parts = text.split(/[,\n]/g).map(s => s.trim()).filter(Boolean);

    if (parts.length) {
      const merged = Array.from(new Set([...items, ...parts]));
      setItems(merged);
      onChange(merged);
      setText("");
    }
  };

  const handleImage = async (f: File) => {
    try {
      setLoading(true);
      const found = await recognizeIngredients(f);
      const merged = Array.from(new Set([...items, ...found]));
      setItems(merged);
      onChange(merged);
    } catch (e: any) {
      alert(e?.message || "Failed to analyze image");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-3">
      <div className="flex gap-2">
        <Input
          placeholder="Type or paste ingredients (comma or newline separated)..."
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <Button onClick={addFromText}><Sparkles className="mr-2 h-4 w-4" /> Add</Button>
      </div>
      <div className="flex items-center gap-3">
        <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={(e) => {
          const f = e.target.files?.[0]; if (f) handleImage(f);
        }} />
        <Button variant="outline" onClick={() => fileRef.current?.click()} disabled={loading}>
          <Upload className="mr-2 h-4 w-4" /> {loading ? "Analyzing..." : "Upload image"}
        </Button>
        {items.length > 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-wrap gap-2">
            {items.map(it => (
              <span key={it} className="badge">
                {it}
                <button className="ml-2 text-xs text-gray-400 hover:text-gray-700" onClick={() => {
                  const left = items.filter(x => x !== it);
                  setItems(left); onChange(left);
                }}>✕</button>
              </span>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}
