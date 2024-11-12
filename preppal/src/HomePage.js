// HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function HomePage() {
  return (
    <div className="app-container">
      <section className="hero">
        <h1>Welcome to PrepPal</h1>
        <p>Your guide to affordable, healthy meal prep!</p>
        <Link to="/questionnaire">
          <button className="cta-button">Get Started</button>
        </Link>
        <Link to="/resources">
          <button className="cta-button">More Resources</button>
        </Link>
      </section>
      
      <section className="purpose">
        <h2>Our Mission</h2>
        <p>Helping college students eat better on a budget.</p>
        <div className="features">
          <div className="feature-item">
            <h3>Affordable Recipes</h3>
            <p>Cost-effective meal prep plans that fit your budget.</p>
          </div>
          <div className="feature-item">
            <h3>Quick & Easy</h3>
            <p>Meals designed to fit into your busy schedule.</p>
          </div>
          <div className="feature-item">
            <h3>Healthy Choices</h3>
            <p>Nutritious recipes to support your well-being.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
