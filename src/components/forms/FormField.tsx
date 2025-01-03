import React from 'react';
import { Input } from '../ui/Input';

interface Props {
  label: string;
  type: 'text' | 'email';
  value: string;
  onChange: (value: string) => void;
  error?: string;
  required?: boolean;
  placeholder?: string;
}

export function FormField({ label, type, value, onChange, error, required, placeholder }: Props) {
  return (
    <Input
      type={type}
      label={label}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      error={error}
      required={required}
    />
  );
}