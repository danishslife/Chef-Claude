import React from "react";
import "./IngredientList.css";

interface IngredientListProps {
  onClick: () => void | Promise<void>;
  ingredients: string[];
}

const Ingredientlist = React.forwardRef<HTMLDivElement, IngredientListProps>(
  ({ onClick, ingredients }, ref) => {
    const ingredientsListItems = ingredients.map((ingredient, index) => {
      return <li key={index}>{ingredient}</li>;
    });

    return (
      <section>
        <h2 className="section-text">Ingredients on hand:</h2>
        <ul className="ingredients-list" aria-live="polite">
          {ingredientsListItems}
        </ul>
        {ingredients.length > 3 && (
          <div className="get-recipe-container">
            <div ref={ref}>
              <h3>Ready for a recipe?</h3>
              <p>Generate a recipe from your list of ingredients.</p>
            </div>
            <button onClick={onClick}>Get a recipe</button>
          </div>
        )}
      </section>
    );
  }
);

Ingredientlist.displayName = "Ingredientlist";

export default Ingredientlist;
