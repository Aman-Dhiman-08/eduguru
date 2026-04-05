import './Classes.css';

const classes = [
  {
    icon: '📚',
    title: 'Classes 1st – 10th',
    desc: 'Comprehensive tuition for all grades from 1st to 10th standard with dedicated subject teachers.',
    highlight: 'All Grades',
  },
  {
    icon: '🏫',
    title: 'CBSE Board',
    desc: 'Complete curriculum support for Central Board of Secondary Education students.',
    highlight: 'CBSE',
  },
  {
    icon: '🎓',
    title: 'ICSE Board',
    desc: 'Specialized coaching for Indian Certificate of Secondary Education examinations.',
    highlight: 'ICSE',
  },
  {
    icon: '🌍',
    title: 'IB Board',
    desc: 'Expert guidance for International Baccalaureate students with global standards.',
    highlight: 'IB',
  },
  {
    icon: '🇩🇪',
    title: 'German Classes',
    desc: 'Learn German language from basics to advanced levels with native-level proficiency.',
    highlight: 'Language',
  },
  {
    icon: '🇫🇷',
    title: 'French Classes',
    desc: 'Master the French language with expert instructors in a structured learning environment.',
    highlight: 'Language',
  },
];

export default function Classes() {
  return (
    <section id="classes" className="classes">
      <div className="container">
        <h2 className="section-title">Our Programs</h2>
        <div className="section-divider" />
        <p className="section-subtitle">Comprehensive education across boards and languages</p>

        <div className="classes-grid">
          {classes.map((c, i) => (
            <div key={c.title} className="class-card reveal" style={{ transitionDelay: `${i * 0.08}s` }}>
              <div className="class-icon">{c.icon}</div>
              <span className="class-tag">{c.highlight}</span>
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
