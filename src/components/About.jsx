import { useEffect, useRef, useState } from 'react';
import './About.css';

const stats = [
  { value: 10, suffix: '+', label: 'Years Experience' },
  { value: 500, suffix: '+', label: 'Students Enrolled' },
  { value: 3, suffix: '', label: 'Boards Covered' },
  { value: 100, suffix: '%', label: 'Personal Attention' },
];

function Counter({ target, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const step = Math.ceil(target / 60);
          const timer = setInterval(() => {
            start += step;
            if (start >= target) { setCount(target); clearInterval(timer); }
            else setCount(start);
          }, 20);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-text reveal">
            <h2 className="section-title" style={{ textAlign: 'left' }}>About EduGurus</h2>
            <div className="section-divider" style={{ margin: '0.75rem 0 1.5rem' }} />
            <p>
              EduGurus is a premier tuition center in Dehradun, dedicated to nurturing young minds
              with quality education and personal attention. We believe every student deserves
              individual focus to reach their true potential.
            </p>
            <p style={{ marginTop: '1rem' }}>
              Our experienced faculty covers Classes 1st through 10th across all major boards —
              CBSE, ICSE, and IB — while also offering language enrichment in German and French.
              Beyond academics, we provide Dance and Zumba classes for holistic development.
            </p>
            <div className="about-tags">
              <span>CBSE</span>
              <span>ICSE</span>
              <span>IB Board</span>
              <span>German</span>
              <span>French</span>
              <span>Dance & Zumba</span>
            </div>
          </div>

          <div className="about-stats reveal">
            {stats.map((s) => (
              <div key={s.label} className="stat-card">
                <div className="stat-value">
                  <Counter target={s.value} suffix={s.suffix} />
                </div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
