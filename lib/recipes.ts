import type { Recipe } from './types';
export const RECIPES: Recipe[] = [
  {
    "id": "r01",
    "slug": "classic-margherita-pizza",
    "name": "Classic Margherita Pizza",
    "cuisine": "Italian",
    "difficulty": "medium",
    "timeMinutes": 35,
    "servings": 2,
    "dietary": [
      "vegetarian"
    ],
    "ingredients": [
      {
        "name": "pizza dough",
        "quantity": 250,
        "unit": "g"
      },
      {
        "name": "tomato",
        "quantity": 200,
        "unit": "g"
      },
      {
        "name": "mozzarella",
        "quantity": 150,
        "unit": "g"
      },
      {
        "name": "olive oil",
        "quantity": 1,
        "unit": "tbsp"
      },
      {
        "name": "basil",
        "quantity": 8,
        "unit": "leaves"
      },
      {
        "name": "salt",
        "quantity": 0.5,
        "unit": "tsp"
      }
    ],
    "steps": [
      "Heat oven to 240\u00b0C (465\u00b0F).",
      "Spread crushed tomato on stretched dough, add mozzarella and basil.",
      "Drizzle with olive oil and bake 10\u201312 minutes until bubbly."
    ],
    "nutritionPerServing": {
      "calories": 420,
      "protein": 17,
      "carbs": 55,
      "fat": 14
    },
    "image": "/images/recipes/cmp.jpg",
    "tags": [
      "quick",
      "bake"
    ]
  },
  {
    "id": "r02",
    "slug": "veggie-stir-fry-noodles",
    "name": "Veggie Stir Fry Noodles",
    "cuisine": "Asian",
    "difficulty": "easy",
    "timeMinutes": 20,
    "servings": 2,
    "dietary": [
      "vegan"
    ],
    "ingredients": [
      {
        "name": "noodles",
        "quantity": 200,
        "unit": "g"
      },
      {
        "name": "soy sauce",
        "quantity": 2,
        "unit": "tbsp"
      },
      {
        "name": "garlic",
        "quantity": 2,
        "unit": "cloves"
      },
      {
        "name": "carrot",
        "quantity": 1,
        "unit": ""
      },
      {
        "name": "bell pepper",
        "quantity": 1,
        "unit": ""
      },
      {
        "name": "spring onion",
        "quantity": 2,
        "unit": ""
      },
      {
        "name": "sesame oil",
        "quantity": 1,
        "unit": "tbsp"
      }
    ],
    "steps": [
      "Cook noodles per package.",
      "Stir-fry vegetables with garlic in sesame oil.",
      "Toss with soy sauce and noodles."
    ],
    "nutritionPerServing": {
      "calories": 380,
      "protein": 10,
      "carbs": 65,
      "fat": 9
    },
    "image": "/images/recipes/noodles.jpg",
    "tags": [
      "quick",
      "one-pan"
    ]
  },
  {
    "id": "r03",
    "slug": "chickpea-curry",
    "name": "Chickpea Curry",
    "cuisine": "Indian",
    "difficulty": "easy",
    "timeMinutes": 30,
    "servings": 3,
    "dietary": [
      "vegan",
      "gluten-free"
    ],
    "ingredients": [
      {
        "name": "chickpeas",
        "quantity": 400,
        "unit": "g"
      },
      {
        "name": "onion",
        "quantity": 1,
        "unit": ""
      },
      {
        "name": "garlic",
        "quantity": 2,
        "unit": "cloves"
      },
      {
        "name": "ginger",
        "quantity": 10,
        "unit": "g"
      },
      {
        "name": "tomato",
        "quantity": 200,
        "unit": "g"
      },
      {
        "name": "curry powder",
        "quantity": 1,
        "unit": "tbsp"
      },
      {
        "name": "coconut milk",
        "quantity": 200,
        "unit": "ml"
      },
      {
        "name": "oil",
        "quantity": 1,
        "unit": "tbsp"
      }
    ],
    "steps": [
      "Saut\u00e9 onion, garlic, ginger in oil.",
      "Add spices and tomato; cook down.",
      "Stir in chickpeas and coconut milk; simmer 10 minutes."
    ],
    "nutritionPerServing": {
      "calories": 430,
      "protein": 14,
      "carbs": 55,
      "fat": 16
    },
    "image": "/images/recipes/cc.jpg",
    "tags": [
      "meal-prep",
      "budget"
    ]
  },
  {
    "id": "r04",
    "slug": "grilled-chicken-salad",
    "name": "Grilled Chicken Salad",
    "cuisine": "American",
    "difficulty": "easy",
    "timeMinutes": 25,
    "servings": 2,
    "dietary": [
      "gluten-free"
    ],
    "ingredients": [
      {
        "name": "chicken breast",
        "quantity": 300,
        "unit": "g"
      },
      {
        "name": "lettuce",
        "quantity": 150,
        "unit": "g"
      },
      {
        "name": "tomato",
        "quantity": 1,
        "unit": ""
      },
      {
        "name": "cucumber",
        "quantity": 0.5,
        "unit": ""
      },
      {
        "name": "olive oil",
        "quantity": 1,
        "unit": "tbsp"
      },
      {
        "name": "lemon juice",
        "quantity": 1,
        "unit": "tbsp"
      },
      {
        "name": "salt",
        "quantity": 0.5,
        "unit": "tsp"
      }
    ],
    "steps": [
      "Grill seasoned chicken until cooked.",
      "Toss vegetables with oil, lemon, and salt.",
      "Slice chicken and serve over salad."
    ],
    "nutritionPerServing": {
      "calories": 350,
      "protein": 34,
      "carbs": 10,
      "fat": 18
    },
    "image": "/images/recipes/cs.jpg",
    "tags": [
      "high-protein",
      "fresh"
    ]
  },
  {
    "id": "r05",
    "slug": "paneer-tikka-wrap",
    "name": "Paneer Tikka Wrap",
    "cuisine": "Indian",
    "difficulty": "medium",
    "timeMinutes": 30,
    "servings": 2,
    "dietary": [
      "vegetarian"
    ],
    "ingredients": [
      {
        "name": "paneer",
        "quantity": 200,
        "unit": "g"
      },
      {
        "name": "yogurt",
        "quantity": 100,
        "unit": "g"
      },
      {
        "name": "tikka masala",
        "quantity": 1,
        "unit": "tbsp"
      },
      {
        "name": "tortilla",
        "quantity": 2,
        "unit": ""
      },
      {
        "name": "onion",
        "quantity": 0.5,
        "unit": ""
      },
      {
        "name": "bell pepper",
        "quantity": 0.5,
        "unit": ""
      }
    ],
    "steps": [
      "Marinate paneer in yogurt and spices.",
      "Sear on pan with onions & peppers.",
      "Wrap in tortillas and serve."
    ],
    "nutritionPerServing": {
      "calories": 520,
      "protein": 25,
      "carbs": 48,
      "fat": 24
    },
    "image": "/images/recipes/ptw.jpg",
    "tags": [
      "street-food"
    ]
  },
  {
    "id": "r06",
    "slug": "mushroom-risotto",
    "name": "Mushroom Risotto",
    "cuisine": "Italian",
    "difficulty": "medium",
    "timeMinutes": 40,
    "servings": 3,
    "dietary": [
      "vegetarian"
    ],
    "ingredients": [
      {
        "name": "arborio rice",
        "quantity": 250,
        "unit": "g"
      },
      {
        "name": "mushroom",
        "quantity": 250,
        "unit": "g"
      },
      {
        "name": "onion",
        "quantity": 1,
        "unit": ""
      },
      {
        "name": "garlic",
        "quantity": 2,
        "unit": "cloves"
      },
      {
        "name": "vegetable stock",
        "quantity": 800,
        "unit": "ml"
      },
      {
        "name": "butter",
        "quantity": 30,
        "unit": "g"
      },
      {
        "name": "parmesan",
        "quantity": 30,
        "unit": "g"
      }
    ],
    "steps": [
      "Saut\u00e9 onion, garlic, and mushrooms in butter.",
      "Add rice; stir. Add stock gradually until creamy.",
      "Finish with parmesan."
    ],
    "nutritionPerServing": {
      "calories": 480,
      "protein": 12,
      "carbs": 72,
      "fat": 14
    },
    "image": "/images/recipes/mr.jpg",
    "tags": [
      "comfort"
    ]
  },
  {
    "id": "r07",
    "slug": "shakshuka",
    "name": "Shakshuka",
    "cuisine": "Middle Eastern",
    "difficulty": "easy",
    "timeMinutes": 25,
    "servings": 2,
    "dietary": [],
    "ingredients": [
      {
        "name": "egg",
        "quantity": 4,
        "unit": ""
      },
      {
        "name": "tomato",
        "quantity": 300,
        "unit": "g"
      },
      {
        "name": "onion",
        "quantity": 1,
        "unit": ""
      },
      {
        "name": "garlic",
        "quantity": 2,
        "unit": "cloves"
      },
      {
        "name": "paprika",
        "quantity": 1,
        "unit": "tsp"
      },
      {
        "name": "olive oil",
        "quantity": 1,
        "unit": "tbsp"
      }
    ],
    "steps": [
      "Saut\u00e9 onion and garlic, add tomato and spices.",
      "Crack eggs into sauce and cover until set."
    ],
    "nutritionPerServing": {
      "calories": 320,
      "protein": 18,
      "carbs": 18,
      "fat": 18
    },
    "image": "/images/recipes/ss.jpg",
    "tags": [
      "brunch",
      "one-pan"
    ]
  },
  {
    "id": "r08",
    "slug": "quinoa-salad",
    "name": "Quinoa Salad",
    "cuisine": "Global",
    "difficulty": "easy",
    "timeMinutes": 20,
    "servings": 2,
    "dietary": [
      "vegan",
      "gluten-free"
    ],
    "ingredients": [
      {
        "name": "quinoa",
        "quantity": 150,
        "unit": "g"
      },
      {
        "name": "cucumber",
        "quantity": 0.5,
        "unit": ""
      },
      {
        "name": "tomato",
        "quantity": 1,
        "unit": ""
      },
      {
        "name": "lemon juice",
        "quantity": 1,
        "unit": "tbsp"
      },
      {
        "name": "olive oil",
        "quantity": 1,
        "unit": "tbsp"
      },
      {
        "name": "mint",
        "quantity": 6,
        "unit": "leaves"
      }
    ],
    "steps": [
      "Cook quinoa, cool slightly.",
      "Toss with chopped veg, lemon, oil, and mint."
    ],
    "nutritionPerServing": {
      "calories": 300,
      "protein": 9,
      "carbs": 45,
      "fat": 9
    },
    "image": "/images/recipes/salad.jpg",
    "tags": [
      "fresh",
      "light"
    ]
  },
  {
    "id": "r09",
    "slug": "garlic-butter-pasta",
    "name": "Garlic Butter Pasta",
    "cuisine": "Italian",
    "difficulty": "easy",
    "timeMinutes": 15,
    "servings": 2,
    "dietary": [
      "vegetarian"
    ],
    "ingredients": [
      {
        "name": "spaghetti",
        "quantity": 200,
        "unit": "g"
      },
      {
        "name": "butter",
        "quantity": 30,
        "unit": "g"
      },
      {
        "name": "garlic",
        "quantity": 3,
        "unit": "cloves"
      },
      {
        "name": "parmesan",
        "quantity": 20,
        "unit": "g"
      },
      {
        "name": "parsley",
        "quantity": 5,
        "unit": "g"
      }
    ],
    "steps": [
      "Boil pasta until al dente.",
      "Melt butter with garlic; toss pasta, add parmesan and parsley."
    ],
    "nutritionPerServing": {
      "calories": 520,
      "protein": 16,
      "carbs": 76,
      "fat": 16
    },
    "image": "/images/recipes/pasta.jpg",
    "tags": [
      "quick"
    ]
  },
  {
    "id": "r10",
    "slug": "lentil-soup",
    "name": "Lentil Soup",
    "cuisine": "Mediterranean",
    "difficulty": "easy",
    "timeMinutes": 35,
    "servings": 3,
    "dietary": [
      "vegan",
      "gluten-free"
    ],
    "ingredients": [
      {
        "name": "red lentils",
        "quantity": 200,
        "unit": "g"
      },
      {
        "name": "carrot",
        "quantity": 1,
        "unit": ""
      },
      {
        "name": "celery",
        "quantity": 1,
        "unit": ""
      },
      {
        "name": "onion",
        "quantity": 1,
        "unit": ""
      },
      {
        "name": "garlic",
        "quantity": 2,
        "unit": "cloves"
      },
      {
        "name": "vegetable stock",
        "quantity": 800,
        "unit": "ml"
      }
    ],
    "steps": [
      "Saut\u00e9 aromatics, add lentils and stock, simmer 20 minutes.",
      "Blend partially for creaminess."
    ],
    "nutritionPerServing": {
      "calories": 280,
      "protein": 16,
      "carbs": 40,
      "fat": 4
    },
    "image": "/images/recipes/ls.jpg",
    "tags": [
      "budget",
      "comfort"
    ]
  },
  {
    "id": "r11",
    "slug": "beef-tacos",
    "name": "Beef Tacos",
    "cuisine": "Mexican",
    "difficulty": "medium",
    "timeMinutes": 25,
    "servings": 2,
    "dietary": [],
    "ingredients": [
      {
        "name": "tortilla",
        "quantity": 4,
        "unit": ""
      },
      {
        "name": "beef mince",
        "quantity": 250,
        "unit": "g"
      },
      {
        "name": "onion",
        "quantity": 0.5,
        "unit": ""
      },
      {
        "name": "tomato",
        "quantity": 1,
        "unit": ""
      },
      {
        "name": "lettuce",
        "quantity": 100,
        "unit": "g"
      }
    ],
    "steps": [
      "Cook beef with onions and spices.",
      "Warm tortillas and assemble with toppings."
    ],
    "nutritionPerServing": {
      "calories": 520,
      "protein": 28,
      "carbs": 52,
      "fat": 22
    },
    "image": "/images/recipes/tacos.jpg",
    "tags": []
  },
  {
    "id": "r12",
    "slug": "tofu-buddha-bowl",
    "name": "Tofu Buddha Bowl",
    "cuisine": "Asian",
    "difficulty": "easy",
    "timeMinutes": 25,
    "servings": 2,
    "dietary": [
      "vegan",
      "gluten-free"
    ],
    "ingredients": [
      {
        "name": "tofu",
        "quantity": 200,
        "unit": "g"
      },
      {
        "name": "brown rice",
        "quantity": 150,
        "unit": "g"
      },
      {
        "name": "broccoli",
        "quantity": 150,
        "unit": "g"
      },
      {
        "name": "soy sauce",
        "quantity": 1,
        "unit": "tbsp"
      },
      {
        "name": "sesame oil",
        "quantity": 1,
        "unit": "tsp"
      }
    ],
    "steps": [
      "Bake or pan-fry tofu.",
      "Steam broccoli, cook rice, assemble bowl with sauce."
    ],
    "nutritionPerServing": {
      "calories": 450,
      "protein": 22,
      "carbs": 55,
      "fat": 14
    },
    "image": "/images/recipes/tofu.jpg",
    "tags": []
  },
  {
    "id": "r13",
    "slug": "avocado-toast-egg",
    "name": "Avocado Toast with Egg",
    "cuisine": "Global",
    "difficulty": "easy",
    "timeMinutes": 10,
    "servings": 1,
    "dietary": [],
    "ingredients": [
      {
        "name": "bread",
        "quantity": 2,
        "unit": "slices"
      },
      {
        "name": "avocado",
        "quantity": 1,
        "unit": ""
      },
      {
        "name": "egg",
        "quantity": 1,
        "unit": ""
      },
      {
        "name": "lemon juice",
        "quantity": 0.5,
        "unit": "tbsp"
      }
    ],
    "steps": [
      "Toast bread. Smash avocado with lemon. Top with fried egg."
    ],
    "nutritionPerServing": {
      "calories": 420,
      "protein": 14,
      "carbs": 38,
      "fat": 24
    },
    "image": "/images/recipes/ate.jpg",
    "tags": []
  },
  {
    "id": "r14",
    "slug": "vegan-pancakes",
    "name": "Vegan Pancakes",
    "cuisine": "Global",
    "difficulty": "easy",
    "timeMinutes": 20,
    "servings": 2,
    "dietary": [
      "vegan"
    ],
    "ingredients": [
      {
        "name": "wheat flour",
        "quantity": 150,
        "unit": "g"
      },
      {
        "name": "oat milk",
        "quantity": 200,
        "unit": "ml"
      },
      {
        "name": "sugar",
        "quantity": 1,
        "unit": "tbsp"
      },
      {
        "name": "baking powder",
        "quantity": 1,
        "unit": "tsp"
      },
      {
        "name": "oil",
        "quantity": 1,
        "unit": "tbsp"
      }
    ],
    "steps": [
      "Mix ingredients to batter.",
      "Cook pancakes on greased pan."
    ],
    "nutritionPerServing": {
      "calories": 360,
      "protein": 7,
      "carbs": 60,
      "fat": 9
    },
    "image": "/images/recipes/pc.jpg",
    "tags": []
  },
  {
    "id": "r15",
    "slug": "butter-chicken",
    "name": "Butter Chicken",
    "cuisine": "Indian",
    "difficulty": "medium",
    "timeMinutes": 40,
    "servings": 3,
    "dietary": [],
    "ingredients": [
      {
        "name": "chicken breast",
        "quantity": 400,
        "unit": "g"
      },
      {
        "name": "butter",
        "quantity": 40,
        "unit": "g"
      },
      {
        "name": "tomato",
        "quantity": 250,
        "unit": "g"
      },
      {
        "name": "cream",
        "quantity": 100,
        "unit": "ml"
      },
      {
        "name": "garam masala",
        "quantity": 1,
        "unit": "tbsp"
      }
    ],
    "steps": [
      "Cook chicken. Make tomato-butter sauce with spices.",
      "Combine and simmer with cream."
    ],
    "nutritionPerServing": {
      "calories": 620,
      "protein": 36,
      "carbs": 20,
      "fat": 40
    },
    "image": "/images/recipes/bc.jpg",
    "tags": []
  },
  {
    "id": "r16",
    "slug": "falafel-wrap",
    "name": "Falafel Wrap",
    "cuisine": "Middle Eastern",
    "difficulty": "medium",
    "timeMinutes": 30,
    "servings": 2,
    "dietary": [
      "vegan"
    ],
    "ingredients": [
      {
        "name": "falafel",
        "quantity": 8,
        "unit": "pieces"
      },
      {
        "name": "tortilla",
        "quantity": 2,
        "unit": ""
      },
      {
        "name": "lettuce",
        "quantity": 100,
        "unit": "g"
      },
      {
        "name": "tomato",
        "quantity": 1,
        "unit": ""
      },
      {
        "name": "hummus",
        "quantity": 3,
        "unit": "tbsp"
      }
    ],
    "steps": [
      "Warm wraps, fill with falafel, hummus, and veggies."
    ],
    "nutritionPerServing": {
      "calories": 540,
      "protein": 16,
      "carbs": 66,
      "fat": 22
    },
    "image": "/images/recipes/falafel.jpg",
    "tags": []
  },
  {
    "id": "r17",
    "slug": "baked-salmon",
    "name": "Baked Salmon",
    "cuisine": "Global",
    "difficulty": "easy",
    "timeMinutes": 18,
    "servings": 2,
    "dietary": [
      "gluten-free"
    ],
    "ingredients": [
      {
        "name": "salmon",
        "quantity": 300,
        "unit": "g"
      },
      {
        "name": "lemon",
        "quantity": 0.5,
        "unit": ""
      },
      {
        "name": "olive oil",
        "quantity": 1,
        "unit": "tbsp"
      },
      {
        "name": "garlic",
        "quantity": 2,
        "unit": "cloves"
      }
    ],
    "steps": [
      "Season salmon and bake at 200\u00b0C for 12\u201315 minutes."
    ],
    "nutritionPerServing": {
      "calories": 430,
      "protein": 34,
      "carbs": 2,
      "fat": 30
    },
    "image": "/images/recipes/bs.jpg",
    "tags": []
  },
  {
    "id": "r18",
    "slug": "caprese-salad",
    "name": "Caprese Salad",
    "cuisine": "Italian",
    "difficulty": "easy",
    "timeMinutes": 10,
    "servings": 2,
    "dietary": [
      "vegetarian",
      "gluten-free"
    ],
    "ingredients": [
      {
        "name": "tomato",
        "quantity": 2,
        "unit": ""
      },
      {
        "name": "mozzarella",
        "quantity": 150,
        "unit": "g"
      },
      {
        "name": "basil",
        "quantity": 10,
        "unit": "leaves"
      },
      {
        "name": "olive oil",
        "quantity": 1,
        "unit": "tbsp"
      }
    ],
    "steps": [
      "Slice and layer tomato and mozzarella, add basil and oil."
    ],
    "nutritionPerServing": {
      "calories": 320,
      "protein": 18,
      "carbs": 8,
      "fat": 22
    },
    "image": "/images/recipes/caprese-salad.jpg",
    "tags": []
  },
  {
    "id": "r19",
    "slug": "veg-biryani",
    "name": "Vegetable Biryani",
    "cuisine": "Indian",
    "difficulty": "hard",
    "timeMinutes": 60,
    "servings": 4,
    "dietary": [
      "vegetarian",
      "gluten-free"
    ],
    "ingredients": [
      {
        "name": "basmati rice",
        "quantity": 300,
        "unit": "g"
      },
      {
        "name": "mixed vegetables",
        "quantity": 250,
        "unit": "g"
      },
      {
        "name": "yogurt",
        "quantity": 100,
        "unit": "g"
      },
      {
        "name": "garam masala",
        "quantity": 1,
        "unit": "tbsp"
      },
      {
        "name": "onion",
        "quantity": 1,
        "unit": ""
      }
    ],
    "steps": [
      "Parboil rice, cook spiced vegetables, layer and steam."
    ],
    "nutritionPerServing": {
      "calories": 540,
      "protein": 12,
      "carbs": 90,
      "fat": 14
    },
    "image": "/images/recipes/biryani.jpg",
    "tags": []
  },
  {
    "id": "r20",
    "slug": "peanut-noodle-salad",
    "name": "Peanut Noodle Salad",
    "cuisine": "Asian",
    "difficulty": "easy",
    "timeMinutes": 20,
    "servings": 2,
    "dietary": [
      "vegetarian"
    ],
    "ingredients": [
      {
        "name": "noodles",
        "quantity": 200,
        "unit": "g"
      },
      {
        "name": "peanut butter",
        "quantity": 2,
        "unit": "tbsp"
      },
      {
        "name": "soy sauce",
        "quantity": 1,
        "unit": "tbsp"
      },
      {
        "name": "vinegar",
        "quantity": 1,
        "unit": "tbsp"
      },
      {
        "name": "cucumber",
        "quantity": 0.5,
        "unit": ""
      }
    ],
    "steps": [
      "Whisk sauce, toss with noodles and cucumber."
    ],
    "nutritionPerServing": {
      "calories": 520,
      "protein": 16,
      "carbs": 70,
      "fat": 18
    },
    "image": "/images/recipes/pnoodle.jpg",
    "tags": []
  },
  {
    "id": "r21",
    "slug": "egg-fried-rice",
    "name": "Egg Fried Rice",
    "cuisine": "Chinese",
    "difficulty": "easy",
    "timeMinutes": 15,
    "servings": 2,
    "dietary": [],
    "ingredients": [
      {
        "name": "rice",
        "quantity": 300,
        "unit": "g"
      },
      {
        "name": "egg",
        "quantity": 2,
        "unit": ""
      },
      {
        "name": "spring onion",
        "quantity": 2,
        "unit": ""
      },
      {
        "name": "soy sauce",
        "quantity": 1,
        "unit": "tbsp"
      },
      {
        "name": "oil",
        "quantity": 1,
        "unit": "tbsp"
      }
    ],
    "steps": [
      "Stir-fry egg, add rice, soy, and spring onion."
    ],
    "nutritionPerServing": {
      "calories": 520,
      "protein": 16,
      "carbs": 80,
      "fat": 12
    },
    "image": "/images/recipes/efr.jpg",
    "tags": []
  },
  {
    "id": "r22",
    "slug": "tomato-soup",
    "name": "Tomato Soup",
    "cuisine": "Global",
    "difficulty": "easy",
    "timeMinutes": 25,
    "servings": 2,
    "dietary": [
      "vegetarian",
      "gluten-free"
    ],
    "ingredients": [
      {
        "name": "tomato",
        "quantity": 400,
        "unit": "g"
      },
      {
        "name": "onion",
        "quantity": 0.5,
        "unit": ""
      },
      {
        "name": "garlic",
        "quantity": 2,
        "unit": "cloves"
      },
      {
        "name": "cream",
        "quantity": 30,
        "unit": "ml"
      },
      {
        "name": "olive oil",
        "quantity": 1,
        "unit": "tbsp"
      }
    ],
    "steps": [
      "Cook tomato with aromatics, blend, finish with cream."
    ],
    "nutritionPerServing": {
      "calories": 260,
      "protein": 6,
      "carbs": 24,
      "fat": 14
    },
    "image": "/images/recipes/tomato-soup.jpg",
    "tags": []
  },
  {
"id": "r23",
"slug": "spaghetti-carbonara",
"name": "Spaghetti Carbonara",
"cuisine": "Italian",
"difficulty": "medium",
"timeMinutes": 25,
"servings": 2,
"dietary": [],
"ingredients": [
{ "name": "spaghetti", "quantity": 200, "unit": "g" },
{ "name": "egg yolk", "quantity": 2, "unit": "" },
{ "name": "parmesan", "quantity": 40, "unit": "g" },
{ "name": "pancetta", "quantity": 80, "unit": "g" },
{ "name": "black pepper", "quantity": 0.5, "unit": "tsp" }
],
"steps": [
"Cook pasta al dente.",
"Fry pancetta until crisp.",
"Mix pasta with yolks, cheese, pancetta, and pepper."
],
"nutritionPerServing": { "calories": 560, "protein": 22, "carbs": 70, "fat": 20 },
"image": "/images/recipes/sc.jpg",
"tags": ["classic"]
},
{
"id": "r24",
"slug": "greek-salad",
"name": "Greek Salad",
"cuisine": "Mediterranean",
"difficulty": "easy",
"timeMinutes": 15,
"servings": 2,
"dietary": ["vegetarian", "gluten-free"],
"ingredients": [
{ "name": "cucumber", "quantity": 1, "unit": "" },
{ "name": "tomato", "quantity": 2, "unit": "" },
{ "name": "feta cheese", "quantity": 100, "unit": "g" },
{ "name": "olive", "quantity": 8, "unit": "pieces" },
{ "name": "olive oil", "quantity": 1, "unit": "tbsp" }
],
"steps": [
"Chop vegetables.",
"Mix with feta, olives, and olive oil."
],
"nutritionPerServing": { "calories": 280, "protein": 10, "carbs": 14, "fat": 22 },
"image": "/images/recipes/gs.jpg",
"tags": ["fresh"]
},
{
"id": "r25",
"slug": "ramen-bowl",
"name": "Ramen Bowl",
"cuisine": "Japanese",
"difficulty": "medium",
"timeMinutes": 40,
"servings": 2,
"dietary": [],
"ingredients": [
{ "name": "ramen noodles", "quantity": 200, "unit": "g" },
{ "name": "egg", "quantity": 2, "unit": "" },
{ "name": "miso paste", "quantity": 2, "unit": "tbsp" },
{ "name": "chicken stock", "quantity": 600, "unit": "ml" },
{ "name": "spring onion", "quantity": 2, "unit": "" }
],
"steps": [
"Prepare stock with miso.",
"Cook noodles separately.",
"Assemble bowl with noodles, stock, egg, and garnish."
],
"nutritionPerServing": { "calories": 520, "protein": 24, "carbs": 70, "fat": 16 },
"image": "/images/recipes/ramen.jpg",
"tags": ["comfort"]
},
{
  id: "r26",
  slug: "chicken-fajitas",
  name: "Chicken Fajitas",
  cuisine: "Mexican",
  difficulty: "easy",
  timeMinutes: 30,
  servings: 2,
  dietary: ["non-vegetarian"],
  ingredients: [
    { name: "chicken breast", quantity: 250, unit: "g" },
    { name: "bell pepper", quantity: 1, unit: "" },
    { name: "onion", quantity: 1, unit: "" },
    { name: "tortilla", quantity: 4, unit: "" },
    { name: "fajita seasoning", quantity: 1, unit: "tbsp" }
  ],
  steps: [
    "Slice chicken and vegetables.",
    "Sauté with seasoning until cooked.",
    "Serve in warm tortillas."
  ],
  nutritionPerServing: { calories: 480, protein: 32, carbs: 50, fat: 14 },
  image: "/images/recipes/chicken-fajitas.jpg",
  tags: ["spicy", "quick"]
},
{
  id: "r27",
  slug: "miso-soup",
  name: "Miso Soup",
  cuisine: "Japanese",
  difficulty: "easy",
  timeMinutes: 15,
  servings: 2,
  dietary: ["vegetarian"],
  ingredients: [
    { name: "miso paste", quantity: 2, unit: "tbsp" },
    { name: "tofu", quantity: 100, unit: "g" },
    { name: "seaweed", quantity: 5, unit: "g" },
    { name: "spring onion", quantity: 1, unit: "" },
    { name: "water", quantity: 500, unit: "ml" }
  ],
  steps: [
    "Heat water and dissolve miso paste.",
    "Add tofu cubes and seaweed.",
    "Garnish with spring onion."
  ],
  nutritionPerServing: { calories: 120, protein: 9, carbs: 8, fat: 4 },
  image: "/images/recipes/ms.jpg",
  tags: ["light", "soup"]
},
{
  id: "r28",
  slug: "chana-masala",
  name: "Chana Masala",
  cuisine: "Indian",
  difficulty: "medium",
  timeMinutes: 35,
  servings: 3,
  dietary: ["vegan", "gluten-free"],
  ingredients: [
    { name: "chickpeas", quantity: 400, unit: "g" },
    { name: "onion", quantity: 1, unit: "" },
    { name: "tomato", quantity: 2, unit: "" },
    { name: "garam masala", quantity: 1, unit: "tbsp" },
    { name: "ginger", quantity: 10, unit: "g" }
  ],
  steps: [
    "Sauté onion and ginger.",
    "Add tomato and spices, cook into sauce.",
    "Add chickpeas and simmer 15 minutes."
  ],
  nutritionPerServing: { calories: 400, protein: 15, carbs: 55, fat: 10 },
  image: "/images/recipes/chana-masala.jpg",
  tags: ["spicy", "vegan"]
},
{
  id: "r29",
  slug: "vegetable-lasagna",
  name: "Vegetable Lasagna",
  cuisine: "Italian",
  difficulty: "hard",
  timeMinutes: 60,
  servings: 4,
  dietary: ["vegetarian"],
  ingredients: [
    { name: "lasagna sheets", quantity: 200, unit: "g" },
    { name: "ricotta", quantity: 150, unit: "g" },
    { name: "spinach", quantity: 150, unit: "g" },
    { name: "tomato sauce", quantity: 300, unit: "ml" },
    { name: "mozzarella", quantity: 100, unit: "g" }
  ],
  steps: [
    "Blanch spinach and mix with ricotta.",
    "Layer pasta, tomato sauce, and cheese.",
    "Bake at 180°C for 35–40 minutes."
  ],
  nutritionPerServing: { calories: 520, protein: 22, carbs: 60, fat: 22 },
  image: "/images/recipes/vegetable-lasagna.jpg",
  tags: ["comfort", "bake"]
},
{
  id: "r30",
  slug: "pad-thai",
  name: "Pad Thai",
  cuisine: "Thai",
  difficulty: "medium",
  timeMinutes: 30,
  servings: 2,
  dietary: ["non-vegetarian"],
  ingredients: [
    { name: "rice noodles", quantity: 200, unit: "g" },
    { name: "egg", quantity: 2, unit: "" },
    { name: "shrimp", quantity: 150, unit: "g" },
    { name: "bean sprouts", quantity: 100, unit: "g" },
    { name: "peanuts", quantity: 30, unit: "g" }
  ],
  steps: [
    "Soak noodles, stir-fry with egg and shrimp.",
    "Add sauce and bean sprouts.",
    "Top with crushed peanuts."
  ],
  nutritionPerServing: { calories: 560, protein: 28, carbs: 70, fat: 18 },
  image: "/images/recipes/pad-thai.jpg",
  tags: ["street-food", "noodles"]
},
{
  id: "r31",
  slug: "veg-spring-soup",
  name: "Vegetable Spring Soup",
  cuisine: "Chinese",
  difficulty: "easy",
  timeMinutes: 20,
  servings: 2,
  dietary: ["vegan", "gluten-free"],
  ingredients: [
    { name: "carrot", quantity: 1, unit: "" },
    { name: "cabbage", quantity: 100, unit: "g" },
    { name: "spring onion", quantity: 2, unit: "" },
    { name: "soy sauce", quantity: 1, unit: "tbsp" },
    { name: "vegetable stock", quantity: 500, unit: "ml" }
  ],
  steps: [
    "Chop vegetables finely.",
    "Boil stock, add vegetables and simmer 10 minutes.",
    "Season with soy sauce and serve hot."
  ],
  nutritionPerServing: { calories: 160, protein: 5, carbs: 28, fat: 3 },
  image: "/images/recipes/veg-spring-soup.jpg",
  tags: ["light", "soup"]
},
{
  id: "r32",
  slug: "chicken-biryani",
  name: "Chicken Biryani",
  cuisine: "Indian",
  difficulty: "hard",
  timeMinutes: 70,
  servings: 4,
  dietary: [],
  ingredients: [
    { name: "basmati rice", quantity: 300, unit: "g" },
    { name: "chicken", quantity: 400, unit: "g" },
    { name: "onion", quantity: 2, unit: "" },
    { name: "yogurt", quantity: 100, unit: "g" },
    { name: "biryani masala", quantity: 1, unit: "tbsp" }
  ],
  steps: [
    "Parboil rice with spices.",
    "Cook marinated chicken with onions and yogurt.",
    "Layer rice and chicken, steam on low until done."
  ],
  nutritionPerServing: { calories: 650, protein: 32, carbs: 78, fat: 22 },
  image: "/images/recipes/biryani.jpg",
  tags: ["festive", "spicy"]
},
{
  id: "r33",
  slug: "caesar-salad",
  name: "Caesar Salad",
  cuisine: "American",
  difficulty: "easy",
  timeMinutes: 15,
  servings: 2,
  dietary: [],
  ingredients: [
    { name: "romaine lettuce", quantity: 150, unit: "g" },
    { name: "croutons", quantity: 50, unit: "g" },
    { name: "parmesan", quantity: 30, unit: "g" },
    { name: "caesar dressing", quantity: 3, unit: "tbsp" },
    { name: "chicken breast", quantity: 150, unit: "g" }
  ],
  steps: [
    "Grill chicken until cooked through.",
    "Toss lettuce with dressing, add croutons and cheese.",
    "Top with sliced chicken."
  ],
  nutritionPerServing: { calories: 420, protein: 28, carbs: 20, fat: 24 },
  image: "/images/recipes/caesar-salad.jpg",
  tags: ["fresh", "quick"]
},
{
  id: "r34",
  slug: "dal-tadka",
  name: "Dal Tadka",
  cuisine: "Indian",
  difficulty: "easy",
  timeMinutes: 30,
  servings: 3,
  dietary: ["vegetarian", "gluten-free"],
  ingredients: [
    { name: "yellow lentils", quantity: 200, unit: "g" },
    { name: "onion", quantity: 1, unit: "" },
    { name: "tomato", quantity: 1, unit: "" },
    { name: "garlic", quantity: 3, unit: "cloves" },
    { name: "ghee", quantity: 1, unit: "tbsp" }
  ],
  steps: [
    "Cook lentils until soft.",
    "Sauté onion, tomato, garlic, and spices in ghee.",
    "Mix tempering into lentils and simmer 5 minutes."
  ],
  nutritionPerServing: { calories: 300, protein: 16, carbs: 42, fat: 8 },
  image: "/images/recipes/dal-tadka.jpg",
  tags: ["comfort", "budget"]
},
{
  id: "r35",
  slug: "fish-and-chips",
  name: "Fish and Chips",
  cuisine: "British",
  difficulty: "medium",
  timeMinutes: 40,
  servings: 2,
  dietary: [],
  ingredients: [
    { name: "white fish fillets", quantity: 300, unit: "g" },
    { name: "potatoes", quantity: 300, unit: "g" },
    { name: "flour", quantity: 100, unit: "g" },
    { name: "beer", quantity: 150, unit: "ml" },
    { name: "oil", quantity: 500, unit: "ml" }
  ],
  steps: [
    "Cut potatoes into fries and parboil.",
    "Make batter with flour and beer, dip fish.",
    "Deep fry fish and potatoes until golden."
  ],
  nutritionPerServing: { calories: 700, protein: 32, carbs: 65, fat: 34 },
  image: "/images/recipes/fnc.jpg",
  tags: ["crispy", "street-food"]
},
{
  id: "r36",
  slug: "pav-bhaji",
  name: "Pav Bhaji",
  cuisine: "Indian",
  difficulty: "medium",
  timeMinutes: 40,
  servings: 3,
  dietary: ["vegetarian"],
  ingredients: [
    { name: "pav buns", quantity: 6, unit: "" },
    { name: "potatoes", quantity: 200, unit: "g" },
    { name: "peas", quantity: 100, unit: "g" },
    { name: "tomato", quantity: 2, unit: "" },
    { name: "butter", quantity: 40, unit: "g" }
  ],
  steps: [
    "Boil and mash vegetables.",
    "Cook with spices and butter until thick curry forms.",
    "Serve with toasted pav buns."
  ],
  nutritionPerServing: { calories: 520, protein: 14, carbs: 72, fat: 18 },
  image: "/images/recipes/pav-bhaji.jpg",
  tags: ["street-food", "spicy"]
},
{
  id: "r37",
  slug: "shrimp-scampi",
  name: "Shrimp Scampi",
  cuisine: "Italian",
  difficulty: "medium",
  timeMinutes: 25,
  servings: 2,
  dietary: ["non-vegetarian"],
  ingredients: [
    { name: "shrimp", quantity: 200, unit: "g" },
    { name: "spaghetti", quantity: 200, unit: "g" },
    { name: "garlic", quantity: 3, unit: "cloves" },
    { name: "butter", quantity: 30, unit: "g" },
    { name: "lemon juice", quantity: 1, unit: "tbsp" }
  ],
  steps: [
    "Cook pasta al dente.",
    "Sauté shrimp in butter and garlic.",
    "Toss pasta with shrimp and lemon juice."
  ],
  nutritionPerServing: { calories: 480, protein: 28, carbs: 55, fat: 16 },
  image: "/images/recipes/shrimp-scampi.jpg",
  tags: ["seafood", "quick"]
},
{
  id: "r38",
  slug: "stuffed-bell-peppers",
  name: "Stuffed Bell Peppers",
  cuisine: "Mediterranean",
  difficulty: "medium",
  timeMinutes: 45,
  servings: 3,
  dietary: ["vegetarian", "gluten-free"],
  ingredients: [
    { name: "bell peppers", quantity: 3, unit: "" },
    { name: "rice", quantity: 150, unit: "g" },
    { name: "onion", quantity: 1, unit: "" },
    { name: "tomato", quantity: 1, unit: "" },
    { name: "olive oil", quantity: 2, unit: "tbsp" }
  ],
  steps: [
    "Cook rice with onions and tomato.",
    "Stuff mixture into peppers.",
    "Bake at 180°C for 25 minutes."
  ],
  nutritionPerServing: { calories: 320, protein: 8, carbs: 55, fat: 8 },
  image: "/images/recipes/sbp.jpg",
  tags: ["bake", "healthy"]
},
{
  id: "r39",
  slug: "chocolate-brownies",
  name: "Chocolate Brownies",
  cuisine: "Global",
  difficulty: "easy",
  timeMinutes: 35,
  servings: 4,
  dietary: ["vegetarian"],
  ingredients: [
    { name: "flour", quantity: 150, unit: "g" },
    { name: "cocoa powder", quantity: 50, unit: "g" },
    { name: "butter", quantity: 100, unit: "g" },
    { name: "sugar", quantity: 150, unit: "g" },
    { name: "egg", quantity: 2, unit: "" }
  ],
  steps: [
    "Mix dry and wet ingredients into a batter.",
    "Pour into tray and bake at 180°C for 25 minutes."
  ],
  nutritionPerServing: { calories: 420, protein: 6, carbs: 58, fat: 20 },
  image: "/images/recipes/cb.jpg",
  tags: ["dessert", "sweet"]
},
{
  id: "r40",
  slug: "beef-stroganoff",
  name: "Beef Stroganoff",
  cuisine: "Russian",
  difficulty: "medium",
  timeMinutes: 40,
  servings: 3,
  dietary: ["non-vegetarian"],
  ingredients: [
    { name: "beef strips", quantity: 300, unit: "g" },
    { name: "mushrooms", quantity: 150, unit: "g" },
    { name: "onion", quantity: 1, unit: "" },
    { name: "sour cream", quantity: 100, unit: "g" },
    { name: "egg noodles", quantity: 200, unit: "g" }
  ],
  steps: [
    "Sear beef, set aside.",
    "Cook onions and mushrooms, add sour cream sauce.",
    "Toss beef back in and serve with noodles."
  ],
  nutritionPerServing: { calories: 620, protein: 32, carbs: 50, fat: 30 },
  image: "/images/recipes/beefs.jpg",
  tags: ["comfort", "hearty"]
},
{
  id: "r41",
  slug: "vegan-burrito",
  name: "Vegan Burrito",
  cuisine: "Mexican",
  difficulty: "medium",
  timeMinutes: 30,
  servings: 2,
  dietary: ["vegan"],
  ingredients: [
    { name: "tortilla", quantity: 2, unit: "" },
    { name: "black beans", quantity: 200, unit: "g" },
    { name: "rice", quantity: 150, unit: "g" },
    { name: "avocado", quantity: 1, unit: "" },
    { name: "salsa", quantity: 3, unit: "tbsp" }
  ],
  steps: [
    "Cook rice and season beans.",
    "Warm tortillas and fill with rice, beans, avocado, and salsa.",
    "Wrap tightly and serve."
  ],
  nutritionPerServing: { calories: 520, protein: 16, carbs: 78, fat: 14 },
  image: "/images/recipes/vb.jpg",
  tags: ["street-food", "hearty"]
},
{
  id: "r42",
  slug: "butternut-squash-soup",
  name: "Butternut Squash Soup",
  cuisine: "Global",
  difficulty: "easy",
  timeMinutes: 35,
  servings: 3,
  dietary: ["vegetarian", "gluten-free"],
  ingredients: [
    { name: "butternut squash", quantity: 400, unit: "g" },
    { name: "onion", quantity: 1, unit: "" },
    { name: "garlic", quantity: 2, unit: "cloves" },
    { name: "vegetable stock", quantity: 700, unit: "ml" },
    { name: "cream", quantity: 30, unit: "ml" }
  ],
  steps: [
    "Roast squash until tender.",
    "Blend with stock, onion, and garlic.",
    "Finish with cream and seasoning."
  ],
  nutritionPerServing: { calories: 280, protein: 6, carbs: 38, fat: 10 },
  image: "/images/recipes/butternut-squash-soup.jpg",
  tags: ["soup", "comfort"]
},
{
  id: "r43",
  slug: "grilled-lamb-chops",
  name: "Grilled Lamb Chops",
  cuisine: "Mediterranean",
  difficulty: "medium",
  timeMinutes: 30,
  servings: 2,
  dietary: ["non-vegetarian", "gluten-free"],
  ingredients: [
    { name: "lamb chops", quantity: 300, unit: "g" },
    { name: "olive oil", quantity: 1, unit: "tbsp" },
    { name: "garlic", quantity: 2, unit: "cloves" },
    { name: "rosemary", quantity: 5, unit: "g" },
    { name: "lemon juice", quantity: 1, unit: "tbsp" }
  ],
  steps: [
    "Marinate lamb with oil, garlic, rosemary, and lemon.",
    "Grill until cooked to preference.",
    "Serve with salad or roasted potatoes."
  ],
  nutritionPerServing: { calories: 540, protein: 38, carbs: 4, fat: 40 },
  image: "/images/recipes/glc.jpg",
  tags: ["grill", "protein-rich"]
},
{
  id: "r44",
  slug: "paneer-butter-masala",
  name: "Paneer Butter Masala",
  cuisine: "Indian",
  difficulty: "medium",
  timeMinutes: 35,
  servings: 3,
  dietary: ["vegetarian", "gluten-free"],
  ingredients: [
    { name: "paneer", quantity: 250, unit: "g" },
    { name: "tomato", quantity: 3, unit: "" },
    { name: "onion", quantity: 1, unit: "" },
    { name: "butter", quantity: 30, unit: "g" },
    { name: "cream", quantity: 50, unit: "ml" }
  ],
  steps: [
    "Blend tomato and onion into puree.",
    "Cook with butter and spices to form sauce.",
    "Add paneer cubes and simmer with cream."
  ],
  nutritionPerServing: { calories: 520, protein: 18, carbs: 26, fat: 36 },
  image: "/images/recipes/pbm.jpg",
  tags: ["curry", "creamy"]
},
{
  id: "r45",
  slug: "salmon-teriyaki",
  name: "Salmon Teriyaki",
  cuisine: "Japanese",
  difficulty: "easy",
  timeMinutes: 20,
  servings: 2,
  dietary: ["non-vegetarian", "gluten-free"],
  ingredients: [
    { name: "salmon fillet", quantity: 250, unit: "g" },
    { name: "soy sauce", quantity: 2, unit: "tbsp" },
    { name: "mirin", quantity: 1, unit: "tbsp" },
    { name: "sugar", quantity: 1, unit: "tsp" },
    { name: "spring onion", quantity: 1, unit: "" }
  ],
  steps: [
    "Pan-fry salmon fillet until golden.",
    "Mix soy, mirin, and sugar to form glaze.",
    "Pour glaze over salmon and garnish with onion."
  ],
  nutritionPerServing: { calories: 430, protein: 32, carbs: 8, fat: 28 },
  image: "/images/recipes/st.jpg",
  tags: ["seafood", "quick"]
},
{
  id: "r46",
  slug: "stuffed-bell-peppers",
  name: "Stuffed Bell Peppers",
  cuisine: "Mediterranean",
  difficulty: "medium",
  timeMinutes: 40,
  servings: 3,
  dietary: ["vegetarian", "gluten-free"],
  ingredients: [
    { name: "bell pepper", quantity: 3, unit: "" },
    { name: "rice", quantity: 150, unit: "g" },
    { name: "tomato", quantity: 2, unit: "" },
    { name: "onion", quantity: 1, unit: "" },
    { name: "olive oil", quantity: 1, unit: "tbsp" }
  ],
  steps: [
    "Cook rice with onion and tomato.",
    "Stuff mixture into halved bell peppers.",
    "Bake at 180°C for 20 minutes."
  ],
  nutritionPerServing: { calories: 320, protein: 8, carbs: 58, fat: 6 },
  image: "/images/recipes/stuffed-bell-peppers.jpg",
  tags: ["bake", "comfort"]
},
{
  id: "r47",
  slug: "chicken-fajitas",
  name: "Chicken Fajitas",
  cuisine: "Mexican",
  difficulty: "easy",
  timeMinutes: 25,
  servings: 2,
  dietary: ["non-vegetarian"],
  ingredients: [
    { name: "chicken breast", quantity: 250, unit: "g" },
    { name: "bell pepper", quantity: 1, unit: "" },
    { name: "onion", quantity: 1, unit: "" },
    { name: "tortilla", quantity: 4, unit: "" },
    { name: "fajita seasoning", quantity: 1, unit: "tbsp" }
  ],
  steps: [
    "Slice chicken and vegetables.",
    "Sauté with seasoning until cooked.",
    "Serve in warm tortillas."
  ],
  nutritionPerServing: { calories: 480, protein: 32, carbs: 52, fat: 14 },
  image: "/images/recipes/chicken-fajitas.jpg",
  tags: ["street-food", "quick"]
},
{
  id: "r48",
  slug: "mango-smoothie-bowl",
  name: "Mango Smoothie Bowl",
  cuisine: "Global",
  difficulty: "easy",
  timeMinutes: 10,
  servings: 1,
  dietary: ["vegan", "gluten-free"],
  ingredients: [
    { name: "mango", quantity: 200, unit: "g" },
    { name: "banana", quantity: 1, unit: "" },
    { name: "oat milk", quantity: 100, unit: "ml" },
    { name: "granola", quantity: 30, unit: "g" },
    { name: "chia seeds", quantity: 1, unit: "tbsp" }
  ],
  steps: [
    "Blend mango, banana, and oat milk.",
    "Pour into bowl and top with granola and seeds."
  ],
  nutritionPerServing: { calories: 320, protein: 6, carbs: 60, fat: 8 },
  image: "/images/recipes/msb.jpg",
  tags: ["breakfast", "fresh"]
},
{
  id: "r49",
  slug: "beef-bulgogi",
  name: "Beef Bulgogi",
  cuisine: "Korean",
  difficulty: "medium",
  timeMinutes: 35,
  servings: 2,
  dietary: ["non-vegetarian", "gluten-free"],
  ingredients: [
    { name: "beef sirloin", quantity: 250, unit: "g" },
    { name: "soy sauce", quantity: 2, unit: "tbsp" },
    { name: "sugar", quantity: 1, unit: "tbsp" },
    { name: "garlic", quantity: 2, unit: "cloves" },
    { name: "sesame oil", quantity: 1, unit: "tsp" }
  ],
  steps: [
    "Marinate beef in soy, sugar, garlic, and oil.",
    "Stir-fry quickly on high heat.",
    "Serve with rice and vegetables."
  ],
  nutritionPerServing: { calories: 480, protein: 34, carbs: 14, fat: 28 },
  image: "/images/recipes/beef-bulgogi.jpg",
  tags: ["stir-fry", "protein-rich"]
},
{
  id: "r50",
  slug: "spinach-lasagna",
  name: "Spinach Lasagna",
  cuisine: "Italian",
  difficulty: "hard",
  timeMinutes: 55,
  servings: 4,
  dietary: ["vegetarian"],
  ingredients: [
    { name: "lasagna sheets", quantity: 200, unit: "g" },
    { name: "spinach", quantity: 200, unit: "g" },
    { name: "ricotta", quantity: 150, unit: "g" },
    { name: "tomato sauce", quantity: 200, unit: "g" },
    { name: "mozzarella", quantity: 100, unit: "g" }
  ],
  steps: [
    "Blanch spinach and mix with ricotta.",
    "Layer sheets with spinach mix and tomato sauce.",
    "Top with mozzarella and bake at 180°C for 30 minutes."
  ],
  nutritionPerServing: { calories: 560, protein: 22, carbs: 68, fat: 22 },
  image: "/images/recipes/spinach-lasagna.jpg",
  tags: ["bake", "comfort"]
}

];
