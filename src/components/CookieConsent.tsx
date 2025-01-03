import React from 'react';
import { Cookie } from 'lucide-react';

export function CookieConsent() {
  const [accepted, setAccepted] = React.useState(false);

  if (accepted) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-[#2C2C2C] shadow-lg p-4 z-50 transition-colors duration-200">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center space-x-2">
          <Cookie className="w-5 h-5 text-[#FFB7C5]" />
          <p className="text-sm text-[#2C2C2C] dark:text-white">
            We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.
          </p>
        </div>
        <button
          onClick={() => setAccepted(true)}
          className="whitespace-nowrap px-4 py-2 bg-[#2C2C2C] dark:bg-white text-white dark:text-[#2C2C2C] 
                   rounded-lg hover:bg-[#2C2C2C]/90 dark:hover:bg-white/90 transition-colors"
        >
          Accept
        </button>
      </div>
    </div>
  );
}