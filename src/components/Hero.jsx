import { useEffect, useRef } from 'react';
import './Hero.css';

export default function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const stars = Array.from({ length: 200 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.3,
      alpha: Math.random(),
      speed: Math.random() * 0.005 + 0.002,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach((s) => {
        s.alpha += s.speed;
        if (s.alpha > 1 || s.alpha < 0) s.speed *= -1;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,215,0,${s.alpha * 0.8})`;
        ctx.fill();
      });
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <section id="home" className="hero">
      <canvas ref={canvasRef} className="hero-canvas" />
      <div className="hero-overlay" />

      <div className="hero-content">
        <span className="hero-badge">✦ Admissions Open 2026–27 ✦</span>
        <h1 className="hero-title">
          EDU<span>GURUS</span>
        </h1>
        <p className="hero-tagline">Your Path to Academic Excellence</p>
        <p className="hero-desc">
          Quality education with personal attention for Classes 1st–10th.
          CBSE • ICSE • IB Board
        </p>
        <div className="hero-buttons">
          <a href="tel:7055378003" className="btn btn-primary">Enroll Now</a>
          <a href="#classes" className="btn btn-outline"
            onClick={(e) => { e.preventDefault(); document.querySelector('#classes')?.scrollIntoView({ behavior: 'smooth' }); }}
          >Explore Classes</a>
        </div>
        <div className="hero-highlights">
          <span>⭐ Limited Seats</span>
          <span>⭐ Personal Attention</span>
          <span>⭐ Expert Teachers</span>
        </div>
      </div>

      <a
        href="#about"
        className="hero-scroll"
        onClick={(e) => { e.preventDefault(); document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' }); }}
      >
        <span />
      </a>
    </section>
  );
}
