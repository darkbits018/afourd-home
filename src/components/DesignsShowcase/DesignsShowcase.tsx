import React from 'react';
import { Filter } from './Filter';
import { DesignGrid } from './DesignGrid';
import { ViewAllModal } from './ViewAllModal';
import { useDesignFilter } from './hooks/useDesignFilter';
import { designs } from './data/designs';
import { ChevronRight } from 'lucide-react';

export function DesignsShowcase() {
  const { filteredDesigns, activeFilter, setActiveFilter } = useDesignFilter(designs);
  const [isViewAllOpen, setIsViewAllOpen] = React.useState(false);

  return (
    <section className="py-20 px-4 bg-white dark:bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-noto text-[#2C2C2C] dark:text-white mb-4">
            Sample Designs
          </h2>
          <p className="text-[#2C2C2C]/80 dark:text-white/80 max-w-2xl mx-auto">
            Explore our collection of anime-inspired designs. Each piece is crafted to blend Japanese aesthetics with contemporary fashion.
          </p>
        </div>
        
        <Filter activeFilter={activeFilter} onFilterChange={setActiveFilter} />
        <DesignGrid designs={filteredDesigns.slice(0, 6)} />
        
        <div className="mt-12 text-center">
          <button
            onClick={() => setIsViewAllOpen(true)}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#FF4B8C] text-white rounded-full
                     hover:bg-[#FF4B8C]/90 transform hover:scale-105 transition-all duration-300"
          >
            View All Designs
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        
        <ViewAllModal
          designs={designs}
          isOpen={isViewAllOpen}
          onClose={() => setIsViewAllOpen(false)}
        />
      </div>
    </section>
  );
}