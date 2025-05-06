
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Search, ChevronDown, Bed, Bath, Building } from 'lucide-react';
import { Slider } from '@/components/ui/slider';

function PropertySearch() {
  // this is for the budget slider
  const [budgetRange, setBudgetRange] = useState([50]);

  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg w-full">
      <h2 className="text-2xl md:text-3xl font-semibold mb-1">Find Nearby<br />Luxurious Estates</h2>
      <p className="text-xs md:text-sm text-gray-500 mb-6">Experience exclusive access to premium beachfront properties</p>

      <div className="flex flex-wrap gap-2 md:gap-4 mb-6">
        <div className="flex items-center gap-2">
          <div className="bg-gray-100 p-2 rounded-md">
            <Bed size={16} className="md:size-18" />
          </div>
          <span className="text-xs md:text-sm">5-Bedroom</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="bg-gray-100 p-2 rounded-md">
            <Bath size={16} className="md:size-18" />
          </div>
          <span className="text-xs md:text-sm">6-Bathroom</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="bg-gray-100 p-2 rounded-md">
            <Building size={16} className="md:size-18" />
          </div>
          <span className="text-xs md:text-sm">Beachfront</span>
        </div>
      </div>

      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs text-gray-500">Budget Range</span>
          <span className="text-xs font-medium">${Math.round(budgetRange[0] * 250000).toLocaleString()}</span>
        </div>
        <Slider
          defaultValue={[50]}
          max={100}
          step={1}
          value={budgetRange}
          onValueChange={setBudgetRange}
          className="w-full"
        />
      </div>

      <div className="relative">
        <div className="flex">
          <Button
            variant="default"
            className="rounded-full bg-mansion-beige text-black hover:bg-mansion-beige/90 w-full py-4 md:py-6 font-medium text-sm md:text-base"
          >
            Search Available
          </Button>
        </div>
      </div>

      <div className="absolute -top-[60px] md:-top-[72px] left-6 flex items-center bg-black/40 backdrop-blur-sm rounded-full text-white">
        <Button
          variant="ghost"
          className="rounded-full text-white text-xs md:text-sm hover:bg-white/20 flex items-center space-x-2 px-2 md:px-4"
        >
          <div className="w-5 h-5 rounded-full bg-mansion-beige flex items-center justify-center">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 9L12 3L4 9V19H9V13H15V19H20V9Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span>Buy Villa</span>
          <ChevronDown size={14} className="md:size-16" />
        </Button>

        <div className="h-5 border-r border-white/20"></div>

        <Button
          variant="ghost"
          className="rounded-full text-white text-xs md:text-sm hover:bg-white/20 flex items-center space-x-2 px-2 md:px-4"
        >
          <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 10H16M8 14H12M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.8214 2.48697 15.5291 3.33782 17L2.5 21.5L7 20.6622C8.47087 21.513 10.1786 22 12 22Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span>Rent Villa</span>
        </Button>

        <Button
          size="icon"
          className="rounded-full bg-white/20 hover:bg-white/30 ml-1"
        >
          <Search size={16} className="md:size-18" />
        </Button>
      </div>
    </div>
  );
};

export default PropertySearch;
