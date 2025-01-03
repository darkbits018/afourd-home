import React from 'react';
import { AlertCircle } from 'lucide-react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  required?: boolean;
}

export function Input({ label, error, required, className = '', ...props }: InputProps) {
  const id = React.useId();
  
  return (
    <div className="relative">
      {label && (
        <label 
          htmlFor={id}
          className="block text-sm font-medium mb-2 text-[#2C2C2C] dark:text-white"
        >
          {label} {required && <span className="text-[#FF4B8C]">*</span>}
        </label>
      )}
      <div className="relative">
        <input
          id={id}
          {...props}
          className={`
            w-full px-4 py-3 rounded-lg
            bg-white dark:bg-[#2C2C2C]
            border-2 border-gray-200 dark:border-gray-700
            text-[#2C2C2C] dark:text-white
            placeholder:text-gray-400 dark:placeholder:text-gray-500
            focus:border-[#FF4B8C] dark:focus:border-[#FF4B8C]
            focus:ring-2 focus:ring-[#FF4B8C]/20
            outline-none
            transition-all duration-200
            ${error ? 'border-red-500 dark:border-red-500' : ''}
            ${className}
          `}
        />
        {error && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500">
            <AlertCircle className="w-5 h-5" />
          </div>
        )}
      </div>
      {error && (
        <p className="mt-1.5 text-sm text-red-500 flex items-center gap-1">
          {error}
        </p>
      )}
    </div>
  );
}