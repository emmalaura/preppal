import React from 'react';


function ResourcesPage() {
  return (
    <div className="app-container">
      <section className="purpose">
        <h2>Resources for Affordable Eating</h2>
        <p>Explore these resources to help you save on groceries.</p>
        <div className="features">
          <div className="feature-item">
            <h3>Food Banks</h3>
            <p>Find local food banks and community resources: </p>
            <ul>
              <li><a href="https://www.feedingamerica.org/find-your-local-foodbank" target="_blank" rel="noopener noreferrer">Feeding America's local food bank locator</a> </li>
              <li><a href="https://foodfinder.us/" target="_blank" rel="noopener noreferrer"> Food Finder </a> </li>
              <li><a href="https://www.hud.gov/findshelter/foodpantries" target="_blank" rel="noopener noreferrer"> U.S. Department of Housing and Urban Development </a></li>
            </ul>
          </div>
          <div className="feature-item">
            <h3>Coupon Websites</h3>
            <p>Discover websites offering discounts on groceries, including student-specific deals:</p>
            <ul>
              <li><a href="https://www.studentbeans.com/us" target="_blank" rel="noopener noreferrer">Student Beans</a> - Student discounts on various products.</li>
              <li><a href="https://www.coupons.com" target="_blank" rel="noopener noreferrer">Coupons.com</a> - General coupon website with grocery discounts.</li>
              <li><a href="https://www.slickdeals.net" target="_blank" rel="noopener noreferrer">Slickdeals</a> - A great source for finding grocery coupons and deals.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ResourcesPage;
