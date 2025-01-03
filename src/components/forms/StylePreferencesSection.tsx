import React from 'react';
import { Checkbox } from '../ui/Checkbox';
import { Input } from '../ui/Input';
import type { StylePreferences } from '../../types/form';

const STYLE_OPTIONS = [
  'Anime-inspired designs',
  'Japanese traditional art',
  'Mythological themes',
  'Minimalist and subtle art',
  'Other'
];

interface Props {
  data: StylePreferences;
  onChange: (field: keyof StylePreferences, value: any) => void;
  errors: Record<string, string>;
}

export function StylePreferencesSection({ data, onChange, errors }: Props) {
  const handleCheckboxChange = (option: string, checked: boolean) => {
    const newStyles = checked
      ? [...data.styles, option]
      : data.styles.filter(style => style !== option);
    onChange('styles', newStyles);

    // Clear otherStyles when unchecking "Other"
    if (option === 'Other' && !checked) {
      onChange('otherStyles', '');
    }
  };

  const showOtherInput = data.styles.includes('Other');

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-[#2C2C2C] dark:text-white">
        Style Preferences
      </h3>
      
      <div className="space-y-3">
        {STYLE_OPTIONS.map(option => (
          <Checkbox
            key={option}
            label={option}
            checked={data.styles.includes(option)}
            onChange={(e) => handleCheckboxChange(option, e.target.checked)}
          />
        ))}
      </div>

      {showOtherInput && (
        <div className="pl-8 animate-fade-up">
          <Input
            type="text"
            placeholder="Please specify other styles you're interested in"
            value={data.otherStyles}
            onChange={(e) => onChange('otherStyles', e.target.value)}
          />
        </div>
      )}

      {errors.styles && (
        <p className="mt-1.5 text-sm text-red-500">
          {errors.styles}
        </p>
      )}
    </div>
  );
}