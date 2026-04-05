import { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', grade: '', board: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

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

          {/* Form */}
          <div className="contact-form-wrap reveal" style={{ transitionDelay: '0.15s' }}>
            {submitted ? (
              <div className="form-success">
                <div className="success-icon">✓</div>
                <h3>Thank You!</h3>
                <p>We&apos;ve received your enquiry. Our team will contact you shortly to confirm your enrollment.</p>
                <button onClick={() => setSubmitted(false)} className="btn-reset">Submit Another</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <h3>Enquiry Form</h3>
                <div className="form-row">
                  <div className="form-group">
                    <label>Student Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Enter full name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="Enter phone number"
                      required
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Class / Grade *</label>
                    <select name="grade" value={form.grade} onChange={handleChange} required>
                      <option value="">Select class</option>
                      {Array.from({ length: 10 }, (_, i) => (
                        <option key={i + 1} value={i + 1}>Class {i + 1}</option>
                      ))}
                      <option value="dance">Dance Classes</option>
                      <option value="zumba">Zumba Classes</option>
                      <option value="german">German Language</option>
                      <option value="french">French Language</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Board Preference</label>
                    <select name="board" value={form.board} onChange={handleChange}>
                      <option value="">Select board</option>
                      <option value="cbse">CBSE</option>
                      <option value="icse">ICSE</option>
                      <option value="ib">IB Board</option>
                      <option value="na">Not Applicable</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label>Message (Optional)</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Any specific requirements or questions?"
                    rows={3}
                  />
                </div>
                <button type="submit" className="form-submit">Submit Enquiry</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
