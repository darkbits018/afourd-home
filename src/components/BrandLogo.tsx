import React from 'react';
import { Sword } from 'lucide-react';

export function BrandLogo() {
  return (
    <div className="flex flex-col items-center justify-center mb-4 space-y-2">
      <Sword className="w-12 h-12 text-[#2C2C2C] dark:text-white" />
      <h1 className="font-bold text-4xl md:text-6xl text-[#2C2C2C] dark:text-white font-noto">
        Grimm United
      </h1>
    </div>
  );
}