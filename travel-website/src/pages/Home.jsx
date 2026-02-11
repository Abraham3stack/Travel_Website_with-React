import React from "react";
import heroImage from "../assets/hero.jpg";
import beachImage from "../assets/beach.jpg";
import cityImage from "../assets/city.jpg";
import mountainImage from "../assets/mountain.jpg";


function Home() {
  return (
    <div>
      <main>
      {/* <!-- HERO SECTION --> */}
        <section className="hero reveal">
          <div className="hero-content">      
            <img className="hero-image" src={heroImage} alt="Travel the world" />
          </div>
          
          <div className="hero-text">
            <h1>Discover The World With Us</h1>
            <p>Your journey begins here. Explore beautiful destinations and unforgettable experiences.</p>
          </div>
        </section>

      {/* <!-- FEATURES SECTION --> */}
      <section className="features reveal">
        <h2>Why Choose Us</h2>

        <div className="feature-card">
          <h3>Expert Guides</h3>
          <p>Professional tour guides to give you the best experience.</p>
        </div>

        <div className="feature-card">
          <h3>Affordable Packages</h3>
          <p>Travel the world at prices that suit your budget.</p>
        </div>

        <div className="feature-card">
          <h3>24/7 Support</h3>
          <p>We are always here to help you before, during and after your trip.</p>
        </div>
      </section>

     {/* <!-- PREVIEW DESTINATION SECTION --> */}
      <section className="preview-destination reveal">
        <h2>Popular Destinations</h2>

        <div className="destination-card">
          <img src={beachImage} alt="Beach" />
          <h3>Tropical Beach</h3>
        </div>

        <div className="destination-card">
          <img src={cityImage} alt="City" />
          <h3>Modern City</h3>
        </div>

        <div className="destination-card">
          <img src={mountainImage} alt="" />
          <h3>Mountain Adventure</h3>
        </div>
      </section>
     </main>

     <footer className="footer">
      <p>&copy 2026 ExploreWorld Travel Agency. All Rights Reserved.</p>
     </footer>

    </div>
  );
}

export default Home;