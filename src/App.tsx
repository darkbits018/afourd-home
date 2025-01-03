/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useRef } from 'react';
import { BrowserRouter as Router, Link, BrowserRouter } from 'react-router-dom';  // Add Router
import Hero  from './components/Hero';
import { About } from './components/About';
import InterestForm from './components/InterestForm';
import { CookieConsent } from './components/CookieConsent';
import { ThemeProvider } from './contexts/ThemeContext';
import { ThemeToggle } from './components/ThemeToggle';
import Footer from './components/Footer';

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

            {/* Sections with refs */}
            <div ref={heroRef} id="hero">
              <Hero interestFormRef={interestFormRef} />
            </div>
            <div ref={aboutRef} id="about">
              <About />
            </div>
            <div ref={interestFormRef} id="interest-form">
              <InterestForm />
            </div>
            <CookieConsent />
            <Footer />
          </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}
