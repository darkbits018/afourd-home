import { useState, useMemo } from 'react';
import type { Design } from '../types';

export function useDesignFilter(designs: Design[]) {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredDesigns = useMemo(() => {
    if (activeFilter === 'all') return designs;
    return designs.filter(design => design.category === activeFilter);
  }, [designs, activeFilter]);

  return { filteredDesigns, activeFilter, setActiveFilter };
}