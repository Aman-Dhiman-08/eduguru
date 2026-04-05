import './SpecialClasses.css';

export default function SpecialClasses() {
  return (
    <section id="special" className="special">
      <div className="container">
        <h2 className="section-title">Special Classes</h2>
        <div className="section-divider" />
        <p className="section-subtitle">Beyond academics — holistic development for every student</p>

        <div className="special-grid">
          <div className="special-card dance reveal">
            <div className="special-card-bg" />
            <div className="special-badge">Limited Seats</div>
            <div className="special-icon">💃</div>
            <h3>Dance Classes</h3>
            <p>
              Express yourself through the art of dance. Our professional instructors
              teach classical, contemporary, and Bollywood styles for all skill levels.
            </p>
            <ul>
              <li>✦ All age groups welcome</li>
              <li>✦ Professional choreographers</li>
              <li>✦ Flexible timings</li>
            </ul>
            <a href="tel:7055378003" className="special-btn">Book a Slot</a>
          </div>

          <div className="special-card zumba reveal" style={{ transitionDelay: '0.15s' }}>
            <div className="special-card-bg" />
            <div className="special-badge">Limited Seats</div>
            <div className="special-icon">🎵</div>
            <h3>Zumba Classes</h3>
            <p>
              Get fit while having fun! Our Zumba sessions combine energetic music
              with easy-to-follow dance moves for health and fitness.
            </p>
            <ul>
              <li>✦ Fun fitness workout</li>
              <li>✦ Certified Zumba instructor</li>
              <li>✦ All fitness levels</li>
            </ul>
            <a href="tel:7055378003" className="special-btn">Book a Slot</a>
          </div>
        </div>

        <div className="special-note reveal">
          ⭐ Dance / Zumba classes are also provided alongside regular academic coaching
        </div>
      </div>
    </section>
  );
}
