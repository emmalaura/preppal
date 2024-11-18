import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage'; // Import your HomePage component
import QuestionnairePage from './QuestionnairePage';
import RecipePage from './RecipePage';
import ResourcesPage from './ResourcesPage';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [userName, setUserName] = useState(''); // State for user's name

  return (
    <Router>
      <Routes>
        {/* Default route for HomePage */}
        <Route path="/" element={<HomePage />} />

        {/* Route for QuestionnairePage */}
        <Route 
          path="/questionnaire" 
          element={
            <QuestionnairePage 
              setRecipes={setRecipes} 
              setUserName={setUserName} 
            />
          } 
        />

        {/* Route for RecipePage */}
        <Route 
          path="/recipes" 
          element={<RecipePage recipes={recipes} userName={userName} />} 
        />

        {/* Route for ResourcesPage */} 
        <Route path="/resources" element={<ResourcesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
