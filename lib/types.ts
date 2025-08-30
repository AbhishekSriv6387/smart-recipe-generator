export type Ingredient = {
  name: string;
  quantity: number; // per default serving
  unit?: string;
};

export type Nutrition = {
  calories: number;
  protein: number; // g
  carbs: number; // g
  fat: number; // g
};

export type Recipe = {
  id: string;
  slug: string;
  name: string;
  cuisine: string;
  difficulty: "easy" | "medium" | "hard";
  timeMinutes: number;
  servings: number;
  dietary: ("vegetarian" | "vegan" | "gluten-free" | "dairy-free" | "nut-free" | "non-vegetarian")[];
  ingredients: Ingredient[];
  steps: string[];
  nutritionPerServing: Nutrition;
  image?: string;
  tags?: string[];
};
