import React from 'react';
import { Check } from 'lucide-react';

interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: string;
}

export function Checkbox({ label, className = '', ...props }: CheckboxProps) {
  const id = React.useId();

  return (
    <label 
      htmlFor={id}
      className="flex items-center gap-3 cursor-pointer group"
    >
      <div className="relative">
        <input
          id={id}
          type="checkbox"
          className="peer sr-only"
          {...props}
        />
        <div className={`
          w-5 h-5 rounded
          border-2 border-gray-200 dark:border-gray-700
          bg-white dark:bg-[#2C2C2C]
          peer-checked:border-[#FF4B8C] peer-checked:bg-[#FF4B8C]
          peer-focus:ring-2 peer-focus:ring-[#FF4B8C]/20
          transition-all duration-200
          ${className}
        `}>
          <Check className={`
            w-3 h-3 text-white
            absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
            opacity-0 peer-checked:opacity-100
            transition-opacity duration-200
          `} />
        </div>
      </div>
      <span className="text-sm text-[#2C2C2C] dark:text-white">
        {label}
      </span>
    </label>
  );
}