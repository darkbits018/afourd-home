import React from 'react';
import { DesignCard } from './DesignCard';
import type { Design } from './types';

interface Props {
  designs: Design[];
}

export function DesignGrid({ designs }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {designs.map((design) => (
        <DesignCard key={design.id} design={design} />
      ))}
    </div>
  );
}