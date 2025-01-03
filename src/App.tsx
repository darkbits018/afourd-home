import React from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import InterestForm from './components/InterestForm';
import { CookieConsent } from './components/CookieConsent';
import { ThemeProvider } from './contexts/ThemeContext';
import { ThemeToggle } from './components/ThemeToggle';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


export default function App() {
  return (
    <Router>
      <ThemeProvider>
        <div className="min-h-screen bg-white dark:bg-[#1a1a1a] transition-colors duration-200">
          <ThemeToggle />
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/interest-form" element={<InterestForm />} />
          </Routes>
          <CookieConsent />
          <Footer />
        </div>
      </ThemeProvider >
    </Router>
  );
}