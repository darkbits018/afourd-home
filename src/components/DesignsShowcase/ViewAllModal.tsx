import React from 'react';
import { X } from 'lucide-react';
import { DesignGrid } from './DesignGrid';
import type { Design } from './types';

interface Props {
  designs: Design[];
  isOpen: boolean;
  onClose: () => void;
}

export function ViewAllModal({ designs, isOpen, onClose }: Props) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/50 backdrop-blur-sm">
      <div className="min-h-screen px-4 flex items-center justify-center">
        <div className="bg-white dark:bg-[#2C2C2C] w-full max-w-7xl rounded-2xl p-6 shadow-xl relative">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <X className="w-6 h-6 text-[#2C2C2C] dark:text-white" />
          </button>
          
          <h2 className="text-3xl font-noto text-[#2C2C2C] dark:text-white mb-8">
            All Designs
          </h2>
          
          <div className="overflow-y-auto max-h-[70vh] pr-2 custom-scrollbar">
            <DesignGrid designs={designs} />
          </div>
        </div>
      </div>
    </div>
  );
}