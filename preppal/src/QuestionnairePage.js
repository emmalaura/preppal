import React from 'react';
import { useNavigate } from 'react-router-dom';

function QuestionnairePage({ fetchData, setName, setDietaryRestrictions, setTimeRestrictions }) {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchData();
    navigate('/recipes'); // Redirect to the Recipe page after form submission
  };

  return (
    <div>
      <h2>Tell Us About Yourself</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">What’s your name?</label>
          <input type="text" id="name" onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="dietaryRestrictions">Any dietary restrictions?</label>
          <select id="dietaryRestrictions" onChange={(e) => setDietaryRestrictions(e.target.value)}>
            <option value="">No restrictions</option>
            <option value="Vegetarian">Vegetarian</option>
            <option value="Vegan">Vegan</option>
            <option value="Keto">Keto</option>
            <option value="Gluten-Free">Gluten-Free</option>
          </select>
        </div>
        <div>
          <label htmlFor="timeRestrictions">How much time do you have to cook? (0-60 minutes)</label>
          <input
            type="number"
            id="timeRestrictions"
            min="0"
            max="60"
            onChange={(e) => setTimeRestrictions(e.target.value)}
            placeholder="Optional"
          />
        </div>
        <button type="submit">Generate My Meal Plan</button>
      </form>
    </div>
  );
}

export default QuestionnairePage;
