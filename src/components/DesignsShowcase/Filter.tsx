import React from 'react';
import { designCategories } from './data/designs';

interface Props {
  activeFilter: string;
  onFilterChange: (category: string) => void;
}

export function Filter({ activeFilter, onFilterChange }: Props) {
  return (
    <div className="flex flex-wrap gap-2 justify-center mb-8">
      <button
        onClick={() => onFilterChange('all')}
        className={`px-4 py-2 rounded-full text-sm transition-all
          ${activeFilter === 'all'
            ? 'bg-[#FF4B8C] text-white'
            : 'bg-gray-100 dark:bg-gray-800 text-[#2C2C2C] dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700'
          }`}
      >
        All
      </button>
      {designCategories.map(category => (
        <button
          key={category}
          onClick={() => onFilterChange(category)}
          className={`px-4 py-2 rounded-full text-sm transition-all
            ${activeFilter === category
              ? 'bg-[#FF4B8C] text-white'
              : 'bg-gray-100 dark:bg-gray-800 text-[#2C2C2C] dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}