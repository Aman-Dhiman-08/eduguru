import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Classes from './components/Classes';
import SpecialClasses from './components/SpecialClasses';
import WhyChooseUs from './components/WhyChooseUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  const [showFloat, setShowFloat] = useState(false);

  // Scroll-reveal observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add('visible');
      }),
      { threshold: 0.12 }
    );
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Floating button
  useEffect(() => {
    const onScroll = () => setShowFloat(window.scrollY > 300);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Classes />
      <SpecialClasses />
      <WhyChooseUs />
      <Contact />
      <Footer />

      <a
        href="tel:7055378003"
        className={`float-call ${showFloat ? 'visible' : ''}`}
        aria-label="Call EduGurus"
      >
        📞
      </a>
    </>
  );
}
