import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const sections = ['hero', 'about', 'designs', 'interest'];

export function ScrollNav() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const observers = sections.map(section => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(section);
          }
        },
        { threshold: 0.5 }
      );

      const element = document.getElementById(section);
      if (element) observer.observe(element);

      return { observer, element };
    });

    return () => {
      observers.forEach(({ observer, element }) => {
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  const scrollToNext = () => {
    const currentIndex = sections.indexOf(activeSection);
    const nextSection = sections[currentIndex + 1];
    if (nextSection) {
      document.getElementById(nextSection)?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const isLastSection = activeSection === sections[sections.length - 1];

  return (
    <>
      {!isLastSection && (
        <button
          onClick={scrollToNext}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50
                   w-10 h-10 rounded-full bg-white dark:bg-[#2C2C2C] shadow-lg
                   flex items-center justify-center
                   hover:scale-110 transition-transform duration-300"
          aria-label="Scroll to next section"
        >
          <ChevronDown className="w-6 h-6 text-[#FF4B8C] animate-bounce" />
        </button>
      )}
    </>
  );
}