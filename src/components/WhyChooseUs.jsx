import './WhyChooseUs.css';

const reasons = [
  { icon: '👤', title: 'Personal Attention', desc: 'Small batch sizes ensuring every student gets individual focus and care.' },
  { icon: '🏆', title: 'Expert Faculty', desc: 'Experienced and qualified teachers passionate about student success.' },
  { icon: '📋', title: 'Multi-Board Coverage', desc: 'Specialized coaching for CBSE, ICSE, and IB boards under one roof.' },
  { icon: '🌐', title: 'Language Programs', desc: 'German and French classes to give students a competitive global edge.' },
  { icon: '💃', title: 'Holistic Development', desc: 'Dance and Zumba classes for physical fitness and personality growth.' },
  { icon: '⏰', title: 'Flexible Timings', desc: 'Batch timings designed to suit school schedules and student needs.' },
  { icon: '📈', title: 'Proven Results', desc: 'Track record of significant academic improvement in student performance.' },
  { icon: '🤝', title: 'Supportive Environment', desc: 'A safe, encouraging space where students feel confident to learn.' },
];

export default function WhyChooseUs() {
  return (
    <section id="why" className="why">
      <div className="container">
        <h2 className="section-title">Why Choose EduGurus?</h2>
        <div className="section-divider" />
        <p className="section-subtitle">What sets us apart from the rest</p>

        <div className="why-grid">
          {reasons.map((r, i) => (
            <div key={r.title} className="why-card reveal" style={{ transitionDelay: `${i * 0.07}s` }}>
              <div className="why-icon">{r.icon}</div>
              <h4>{r.title}</h4>
              <p>{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
