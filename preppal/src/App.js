import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import axios from 'axios';
import HomePage from './HomePage';
import QuestionnairePage from './QuestionnairePage';
import RecipePage from './RecipePage';
import ResourcesPage from './ResourcesPage';

function App() {
  const [name, setName] = useState('');
  const [dietaryRestrictions, setDietaryRestrictions] = useState('');
  const [timeRestrictions, setTimeRestrictions] = useState('');
  const [recipes, setRecipes] = useState([]);

  // Google Sheets API key and sheet details
  const SHEET_ID = '1Z0oCtcbhaZR_BwIgbZIuCfP_oC57StjMHOEnzX9le4k'; // Replace with your Google Sheets ID
  const API_KEY = REACT_APP_API_KEY; 

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/Sheet1?key=${API_KEY}`
      );
      const rows = response.data.values;
      console.log('Fetched data:', rows); // Log fetched data

      // Filter recipes based on dietary restrictions
      const filteredRecipes = rows.filter(row => {
        const category = row[3]; // Assuming category is in the 4th column
        if (dietaryRestrictions && category !== dietaryRestrictions) {
          return false;
        }
        return true;
      });

      // Select the first 7 recipes after filtering
      const selectedRecipes = filteredRecipes.slice(0, 7);
      setRecipes(selectedRecipes);
    } catch (error) {
      console.error('Error fetching data from Google Sheets', error);
    }
  };

  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/questionnaire">Questionnaire</Link>
        <Link to="/recipes">Recipes</Link>
        <Link to="/resources">Resources</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/questionnaire"
          element={<QuestionnairePage
            fetchData={fetchData}
            setName={setName}
            setDietaryRestrictions={setDietaryRestrictions}
            setTimeRestrictions={setTimeRestrictions}
          />}
        />
        <Route path="/recipes" element={<RecipePage recipes={recipes} />} />
        <Route path="/resources" element={<ResourcesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
