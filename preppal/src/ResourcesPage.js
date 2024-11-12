// ResourcesPage.js
import React from 'react';
import './App.css';

function ResourcesPage() {
  return (
    <div className="app-container">
      <section className="purpose">
        <h2>Resources for Affordable Eating</h2>
        <p>Explore these resources to help you save on groceries.</p>
        <div className="features">
          <div className="feature-item">
            <h3>Food Banks</h3>
            <p>Find local food banks and community resources.</p>
          </div>
          <div className="feature-item">
            <h3>Coupon Websites</h3>
            <p>Discover websites offering discounts on groceries.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ResourcesPage;
