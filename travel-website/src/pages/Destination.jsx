import React from "react";
import beachImage from "../assets/beach.jpg";
import cityImage from "../assets/city.jpg";
import mountainImage from "../assets/mountain.jpg";

function Destination() {
  return (
    <main className="destination-page">
      <section className="destination-header">
        <h1>Our Destinations</h1>
        <p>Explore our most popular travel destinations</p>
      </section>

      <section className="destination-list">
        <div className="destination-card">
          <img src={beachImage} alt="Beach" />
          <h3>Tropical Beach</h3>
          <p>Relax on crystal clear waters and white sandy beaches.</p>
        </div>

        <div className="destination-card">
          <img src={cityImage} alt="City" />
          <h3>Modern City</h3>
          <p>Experience vibrant city life and iconic landmarks.</p>
        </div>

        <div className="destination-card">
          <img src={mountainImage} alt="Mountain" />
          <h3>Mountain Adventure</h3>
          <p>Discover breathtaking views and thrilling adventures.</p>
        </div>
      </section>
    </main>
  );
}

export default Destination;