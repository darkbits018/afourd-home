import React from 'react';

interface Props {
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  required?: boolean;
}

export function TextArea({ label, value, onChange, error, required }: Props) {
  return (
    <div>
      <label className="block text-sm font-medium text-[#2C2C2C] dark:text-white mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={4}
        className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 
                 dark:bg-[#2C2C2C] dark:text-white focus:ring-2 focus:ring-[#FFB7C5] 
                 focus:border-transparent"
        required={required}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
}