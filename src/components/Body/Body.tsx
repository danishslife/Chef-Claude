import React from "react";
import "./Body.css";
import ClaudeRecipe from "../ClaudeRecipe/ClaudeRecipe";
import Ingredientlist from "../IngredientList/IngredientList";
import { getRecipeFromChefClaude } from "../../services/claudeApi";

function Body() {
  const [ingredients, setIngredients] = React.useState<string[]>([]);
  const [recipe, setRecipe] = React.useState("");
  const recipeSection = React.useRef<HTMLDivElement>(null);

  async function getRecipe() {
    const recipeMarkdown = await getRecipeFromChefClaude(ingredients);
    setRecipe(recipeMarkdown);
  }

  React.useEffect(() => {
    if (recipe && recipeSection.current) {
        recipeSection.current?.scrollIntoView({
          behavior: "smooth",
        });
      }
  }, [recipe]);
  
  function addIngredient(formData: FormData) {
    const newIngredient = formData.get("ingredient") as string;

    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  }

  

  return (
    <main>
      <form action={addIngredient} className="add-ingredient">
        <input
          type="text"
          placeholder="e.g. Oregano"
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button>Add ingredient</button>
      </form>

      {ingredients.length > 0 && (
        <Ingredientlist onClick={getRecipe} ingredients={ingredients} ref = {recipeSection} />
      )}

      {recipe && <ClaudeRecipe recipe={recipe} />}
    </main>
  );
}

export default Body;
