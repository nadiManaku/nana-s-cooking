export interface Recipe {
  id: string;
  publisher: string;
  title: string;
  source_url: string;
  image_url: string;
  servings: number;
  cooking_time: number;
  ingredients: Ingredients[];
}

export interface Ingredients {
  quantity: number;
  unit: string;
  description: string;
}

export type Recipes = {
  recipes: Recipe[];
};

export interface RecipeSearchResponse {
  results: number;
  data: Recipes;
}