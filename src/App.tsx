/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useRef } from 'react';
import { BrowserRouter as Router, Link, BrowserRouter } from 'react-router-dom';  // Add Router
import Hero from './components/Hero';
import { About } from './components/About';
import InterestForm from './components/InterestForm';
import { CookieConsent } from './components/CookieConsent';
import { ThemeProvider } from './contexts/ThemeContext';
import { ThemeToggle } from './components/ThemeToggle';
import Footer from './components/Footer';
import { ScrollNav } from './components/Navigation/ScrollNav';
import { DesignsShowcase } from './components/DesignsShowcase/DesignsShowcase';

export default function App() {
  // Create references for each section
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const interestFormRef = useRef(null);
  return (
    <BrowserRouter>
      <ThemeProvider>

        <div className="min-h-screen bg-white dark:bg-[#1a1a1a] transition-colors duration-200">
          <ThemeToggle />
          <ScrollNav />
          <section id="hero" className="min-h-screen">
            <Hero interestFormRef={interestFormRef} />
          </section>
          <section id="about" className="min-h-screen">
            <About />
          </section>
          <section id="designs" className="min-h-screen">
            <DesignsShowcase />
          </section>
          <section id="interest" className="min-h-screen">
            <InterestForm />
          </section>
          <CookieConsent />
          <section id="footer" >
            <Footer />
          </section>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}
