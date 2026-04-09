import { useEffect } from 'react';
import Lenis from 'lenis';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import ParallaxSection from './components/ParallaxSection';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <ThemeProvider>
      <div className="relative min-h-screen selection:bg-sky-blue/30 selection:text-sky-blue">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Services />
          <ParallaxSection />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
