import React from 'react';
import { Checkbox } from '../ui/Checkbox';
import type { ClothingTypes } from '../../types/form';

const CLOTHING_OPTIONS = [
  'T-shirts',
  'Hoodies',
  'Jackets',
  'Accessories (caps, tote bags)'
];

interface Props {
  data: ClothingTypes;
  onChange: (field: keyof ClothingTypes, value: string[]) => void;
  errors: Record<string, string>;
}

export function ClothingTypesSection({ data, onChange, errors }: Props) {
  const handleCheckboxChange = (option: string, checked: boolean) => {
    const newTypes = checked
      ? [...data.types, option]
      : data.types.filter(type => type !== option);
    onChange('types', newTypes);
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-[#2C2C2C] dark:text-white">
        Preferred Clothing Types
      </h3>
      
      <div className="space-y-3">
        {CLOTHING_OPTIONS.map(option => (
          <Checkbox
            key={option}
            label={option}
            checked={data.types.includes(option)}
            onChange={(e) => handleCheckboxChange(option, e.target.checked)}
          />
        ))}
      </div>

      {errors.types && (
        <p className="mt-1.5 text-sm text-red-500">
          {errors.types}
        </p>
      )}
    </div>
  );
}