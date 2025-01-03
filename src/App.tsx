import React from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import InterestForm  from './components/InterestForm';
import { CookieConsent } from './components/CookieConsent';
import { ThemeProvider } from './contexts/ThemeContext';
import { ThemeToggle } from './components/ThemeToggle';
import Footer  from './components/Footer';


export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-[#1a1a1a] transition-colors duration-200">
        <ThemeToggle />
        <Hero />
        <About />
        <InterestForm />
        <CookieConsent />
        <Footer />
      </div>
    </ThemeProvider>
  );
}