import './Footer.css';

export default function Footer() {
  const scroll = (href) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h2>EDU<span>GURUS</span></h2>
            <p>Your Path to Academic Excellence</p>
            <p className="footer-tagline">
              Quality education with personal attention for every student.
            </p>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              {[
                ['Home', '#home'],
                ['About', '#about'],
                ['Classes', '#classes'],
                ['Special Classes', '#special'],
                ['Why Us', '#why'],
                ['Contact', '#contact'],
              ].map(([label, href]) => (
                <li key={href}>
                  <a href={href} onClick={(e) => { e.preventDefault(); scroll(href); }}>{label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-programs">
            <h4>Programs</h4>
            <ul>
              <li>Classes 1st – 10th</li>
              <li>CBSE Board</li>
              <li>ICSE Board</li>
              <li>IB Board</li>
              <li>German Language</li>
              <li>French Language</li>
              <li>Dance Classes</li>
              <li>Zumba Classes</li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Contact Us</h4>
            <p>📍 Shaheed Jaideep Singh Bhandari Marg, Nehrugram (Lower), Dehradun</p>
            <a href="tel:7055378003" className="footer-phone">📞 7055378003</a>
            <a href="tel:9557077953" className="footer-phone">📞 9557077953</a>
            <div className="footer-highlights">
              <span>⭐ Limited Seats</span>
              <span>⭐ Enroll Today</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} EduGurus. All rights reserved.</p>
          <p>Shaheed Jaideep Singh Bhandari Marg, Nehrugram (Lower), Dehradun</p>
        </div>
      </div>
    </footer>
  );
}
