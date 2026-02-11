function About() {
  return (
    <>
      <main>
        {/* PAGE HERO */}
        <section className="page-hero reveal">
          <h1>About ExploreWorld</h1>
          <p>Your trusted partner in unforgettable travel experiences.</p>
        </section>

        {/* ABOUT STORY */}
        <section className="about-story reveal">
          <h2>Our Story</h2> 
          <p>
            ExploreWorld was founded with one mission: to help people discover
            the beauty of the world in a simple, safe and affordable way. From
            tropical beaches to modern cities and breathtaking mountains, we
            design experiences that create lifelong memories.
          </p>
        </section>

        {/* ABOUT VALUES */}
        <section className="about-values reveal">
          <h2>Why Travel With Us</h2>

          <div className="value-card">
            <h3>Experienced Team</h3>
            <p>
              Our travel experts carefully plan every trip to ensure comfort and
              safety.
            </p>
          </div>

          <div className="value-card">
            <h3>Best Prices</h3>
            <p>
              We work with trusted partners to offer the best value for your
              money.
            </p>
          </div>

          <div className="value-card">
            <h3>Customer Satisfaction</h3>
            <p>
              Your happiness is our priority. We support you every step of your
              journey.
            </p>
          </div>
        </section>

        {/* ABOUT CTA */}
        <section className="about-cta reveal">
          <h2>Ready To Start Your Journey?</h2>
            <a href="/contact" className="btn">Contact Us</a>         
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2026 ExploreWorld Travel Agency. All Rights Reserved.</p>
      </footer>
    </>
  );
}
export default About;