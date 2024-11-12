import React, { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import QuestionnairePage from './QuestionnairePage';
import RecipePage from './RecipePage';
import HomePage from './HomePage';
import ResourcesPage from './ResourcesPage';

function App() {
  // State to hold recipes from the questionnaire form
  const [recipes, setRecipes] = useState([]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/questionnaire" element={<QuestionnairePage setRecipes={setRecipes} />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/recipes" element={<RecipePage recipes={recipes} />} />
      </Routes>
    </Router>
  );
}

export default App;
