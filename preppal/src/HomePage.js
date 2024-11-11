import React from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Welcome to PrepPal</h1>
      <p>Helping college students lead healthier lives through meal prep.</p>
      <button onClick={() => navigate('/questionnaire')}>Get Started</button>
      <button onClick={() => navigate('/resources')}>More Resources</button>
    </div>
  );
}

export default HomePage;
