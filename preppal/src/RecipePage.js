import React, { useState } from 'react';

function RecipePage({ recipes, userName }) {
  return (
    <section className="recipe-section">
      <h2 className="section-title">{userName ? `${userName}'s Meal Prep Plan` : 'Your Meal Prep Plan'}</h2>
      {recipes.length > 0 ? (
        <div className="recipes">
          {recipes.map((recipe, index) => (
            <RecipeCard key={index} recipe={recipe} />
          ))}
        </div>
      ) : (
        <p>No recipes available. Please fill out the form and submit.</p>
      )}
    </section>
  );
}

function RecipeCard({ recipe }) {
  const [isIngredientsOpen, setIngredientsOpen] = useState(false);
  const [isStepsOpen, setStepsOpen] = useState(false);

  return (
    <div className="recipe-card">
      <img 
        src={recipe[8]} 
        alt={recipe[0]} 
        className="recipe-image" 
        onError={(e) => e.target.src = 'fallback-image-url.jpg'} // Fallback image
      />
      <h3>{recipe[0]}</h3> {/* Recipe name */}
      <p>Total time: {recipe[1]}</p>
      <p>Servings: {recipe[2]}</p>
      <p className="recipe-category">{recipe[3]}</p> {/* Category */}
      <p>Nutritional values: {recipe[4]}</p>
      
      <div className="dropdown">
        <button onClick={() => setIngredientsOpen(!isIngredientsOpen)}>
          {isIngredientsOpen ? 'Hide Ingredients' : 'Show Ingredients'}
        </button>
        {isIngredientsOpen && <p>{recipe[5]}</p>}
      </div>
      
      <div className="dropdown">
        <button onClick={() => setStepsOpen(!isStepsOpen)}>
          {isStepsOpen ? 'Hide Steps' : 'Show Steps'}
        </button>
        {isStepsOpen && <p>{recipe[6]}</p>}
      </div>

      <a href={recipe[7]} target="_blank" rel="noopener noreferrer">Full Recipe</a>
    </div>
  );
}

export default RecipePage;
