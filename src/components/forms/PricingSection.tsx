import React from 'react';
import { Select } from './Select';
import type { PricingPreferences } from '../../types/form';

const PRICE_RANGES = [
  '₹500–₹1000',
  '₹1000–₹1500',
  '₹1500+'
];

interface Props {
  data: PricingPreferences;
  onChange: (field: keyof PricingPreferences, value: string) => void;
  errors: Record<string, string>;
}

export function PricingSection({ data, onChange, errors }: Props) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-[#2C2C2C] dark:text-white">Pricing Preferences</h3>
      
      <Select
        label="What price range would you consider reasonable for these items?"
        value={data.priceRange}
        options={PRICE_RANGES}
        onChange={(value) => onChange('priceRange', value[0])}
        error={errors.priceRange}
        required
      />
    </div>
  );
}