import { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Loading from './components/Loading';
import SocialMediaLinks from './components/SocialMediaLinks';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LiveProjects from './components/LiveProjects';
import SkillsShowcase from './components/SkillsShowcase';
import CompletedProject from './components/CompletedProjects';
import Testmonials from './components/Testimonials';
import Contact from './components/ContactForm';
import Footer from './components/Footer';
import CustomScroll from './context/CustomScroll';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <CustomScroll>
      <ThemeProvider>
        {loading ? (
          <Loading />
        ) : (
          <>
            <SocialMediaLinks />
            <Navbar />
            <Hero />
            <LiveProjects />
            <SkillsShowcase />
            <CompletedProject />
            <Testmonials />
            <Contact />
            <Footer />
          </>
        )}
      </ThemeProvider>
    </CustomScroll>
    
  );
}

export default App;