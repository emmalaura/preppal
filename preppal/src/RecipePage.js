import React from 'react';

function RecipePage({ recipes }) {
  return (
    <section className="recipe-section">
      <h2>Your Meal Prep Plan</h2>
      {recipes.length > 0 ? (
        <div className="recipes">
          {recipes.map((recipe, index) => (
            <div key={index} className="recipe-card">
              <img 
                src={recipe[8]} 
                alt={recipe[0]} 
                className="recipe-image" 
                onError={(e) => e.target.src = 'fallback-image-url.jpg'} // Fallback image
              />
              <h3>{recipe[0]}</h3> {/* Recipe name */}
              <p>Total time: {recipe[1]}</p>
              <p>Servings: {recipe[2]}</p>
              <p>Category: {recipe[3]}</p>
              <p>Nutritional values: {recipe[4]}</p>
              <p>Ingredients: {recipe[5]}</p>
              <p>Steps: {recipe[6]}</p>
              <a href={recipe[7]} target="_blank" rel="noopener noreferrer">Full Recipe</a>
            </div>
          ))}
        </div>
      ) : (
        <p>No recipes available. Please fill out the form and submit.</p>
      )}
    </section>
  );
}

export default RecipePage;
