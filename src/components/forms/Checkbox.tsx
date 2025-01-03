import React from 'react';

interface Props {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export function Checkbox({ label, checked, onChange }: Props) {
  return (
    <label className="flex items-center space-x-2 cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="rounded text-[#FF4B8C] focus:ring-[#FFB7C5]"
      />
      <span className="text-sm text-[#2C2C2C] dark:text-white">{label}</span>
    </label>
  );
}