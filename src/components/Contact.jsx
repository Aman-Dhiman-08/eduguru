import './Contact.css';

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Contact & Enroll</h2>
        <div className="section-divider" />
        <p className="section-subtitle">Limited seats — reach out today to secure your spot</p>

        <div className="contact-grid">
          {/* Info */}
          <div className="contact-info reveal">
            <div className="info-card">
              <span className="info-icon">📍</span>
              <div>
                <h4>Our Location</h4>
                <p>Shaheed Jaideep Singh Bhandari Marg,<br />Nehrugram (Lower), Dehradun</p>
              </div>
            </div>

            <div className="info-card">
              <span className="info-icon">📞</span>
              <div>
                <h4>Call Us</h4>
                <a href="tel:7055378003" className="phone-link">7055378003</a>
                <br />
                <a href="tel:9557077953" className="phone-link">9557077953</a>
              </div>
            </div>

            <div className="info-card">
              <span className="info-icon">🕐</span>
              <div>
                <h4>Timings</h4>
                <p>Monday – Saturday<br />7:00 AM – 8:00 PM</p>
              </div>
            </div>

            <div className="cta-box">
              <p>⭐ <strong>Limited Seats Available</strong> – Enroll Today!</p>
              <p>⭐ Quality Education with Personal Attention</p>
              <a href="tel:7055378003" className="cta-call-btn">
                📞 Call Now to Book Your Slot
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
