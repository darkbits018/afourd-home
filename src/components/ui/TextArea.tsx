import React from 'react';
import { AlertCircle } from 'lucide-react';

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  required?: boolean;
}

export function TextArea({ label, error, required, className = '', ...props }: TextAreaProps) {
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
        <textarea
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
            resize-none
            ${error ? 'border-red-500 dark:border-red-500' : ''}
            ${className}
          `}
        />
        {error && (
          <div className="absolute right-3 top-3 text-red-500">
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