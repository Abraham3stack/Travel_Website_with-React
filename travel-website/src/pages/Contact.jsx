function Contact() {
  return (
    <>
      <main>
        {/* PAGE HERO */}
        <section className="page-hero reveal">
          <h1>Contact Us</h1>
          <p>Let's help you plan your next adventure.</p>
        </section>

        {/* CONTACT SECTION */}
        <section className="contact-section reveal">
          <form className="contact-form" id="contact-form">

            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your full name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your email address"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="destination">Destination of Interest</label>
              <input
                type="text"
                id="destination"
                name="destination"
                placeholder="Where do you want to go?"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Tell us about your travel plans..."
                required
              ></textarea>
            </div>

            <p id="form-status" className="form-status"></p>

            <button type="submit" className="btn" id="sendBtn">
              Send Message
            </button>
          </form>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2026 ExploreWorld Travel Agency. All Rights Reserved.</p>
      </footer>
    </>
  );
}

export default Contact;
