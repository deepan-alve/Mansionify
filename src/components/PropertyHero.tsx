import React, { useState, useEffect } from 'react';
import { MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PropertySearch from './PropertySearch';
import NearbyProperty from './NearbyProperty';
import { Slider } from '@/components/ui/slider';

const PROPERTY_IMAGES = [
  "villa.jpg",
  "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
  "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
  "beach.jpg"
];

const PROPERTY_INFO = [
  {
    name: "Beachfront Villa",
    location: "Oceanfront Living",
    price: "$12.5M",
    type: "Modern Architecture",
    beds: 5,
    baths: 6,
    size: "Infinity Pool",
    viewing: "28 - 31 August 2024"
  },
  {
    name: "Golden Springfield",
    location: "Lake Sevilla, Beverly Hills, LA",
    price: "$8.2M",
    type: "Contemporary Design",
    beds: 4,
    baths: 3,
    size: "Private Garden",
    viewing: "1 - 5 September 2024"
  },
  {
    name: "Azure Heights",
    location: "Malibu Coast, California",
    price: "$15.7M",
    type: "Mediterranean Style",
    beds: 6,
    baths: 5,
    size: "Tennis Court",
    viewing: "10 - 15 September 2024"
  },
  {
    name: "Skyline Residence",
    location: "Downtown Manhattan, NY",
    price: "$22.9M",
    type: "Penthouse Suite",
    beds: 4,
    baths: 4,
    size: "Rooftop Terrace",
    viewing: "20 - 25 September 2024"
  }
];

const PropertyHero: React.FC = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  // i will use this later
  const [sliderValue, setSliderValue] = useState([25]);

  function handleIconClick(index: number) {
    setActiveImageIndex(index);
  }

  const currentProperty = PROPERTY_INFO[activeImageIndex];

  return (
    <div className="relative w-full h-[calc(100vh-80px)] min-h-[600px] bg-mansion-dark rounded-2xl overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        {PROPERTY_IMAGES.map((image, index) => (
          <div
            key={index}
            className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-in-out"
            style={{
              backgroundImage: `url('${image}')`,
              opacity: activeImageIndex === index ? 1 : 0,
              zIndex: activeImageIndex === index ? 1 : 0
            }}
          ></div>
        ))}
        <div className="absolute inset-0 bg-black bg-opacity-20 z-[2]"></div>
      </div>

      <div className="absolute top-6 md:top-10 left-0 right-0 flex justify-center z-10">
        <div className="flex justify-center gap-2">
          <Button
            variant="outline"
            className={`rounded-full ${activeImageIndex === 0 ? 'bg-white/30' : 'bg-white/20'} backdrop-blur-sm border-white/40 text-white hover:bg-white/30 transition-all`}
            onClick={() => handleIconClick(0)}
          >
            <svg className="h-5 w-5 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 21H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M4 21V11L12 7L20 11V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M12 7V4H16V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M9 21V15H15V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M9 15H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M7 12H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M15 12H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            {activeImageIndex === 0 && <span className="ml-1">Villa</span>}
          </Button>
          <Button
            variant="outline"
            className={`rounded-full ${activeImageIndex === 1 ? 'bg-white/30' : 'bg-white/20'} backdrop-blur-sm border-white/40 text-white hover:bg-white/30 transition-all`}
            onClick={() => handleIconClick(1)}
          >
            <svg className="h-5 w-5 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 21H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M5 21V8L12 3L19 8V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M9 21V15H15V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M9 11H9.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M15 11H15.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            {activeImageIndex === 1 && <span className="ml-1">House</span>}
          </Button>
          <Button
            variant="outline"
            className={`rounded-full ${activeImageIndex === 2 ? 'bg-white/30' : 'bg-white/20'} backdrop-blur-sm border-white/40 text-white hover:bg-white/30 transition-all`}
            onClick={() => handleIconClick(2)}
          >
            <svg className="h-5 w-5 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 21H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M4 21V12L12 5L20 12V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M10 21V14H14V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M12 2V5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M16 9.5H16.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M8 9.5H8.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            {activeImageIndex === 2 && <span className="ml-1">Deluxe</span>}
          </Button>
          <Button
            variant="outline"
            className={`rounded-full ${activeImageIndex === 3 ? 'bg-white/30' : 'bg-white/20'} backdrop-blur-sm border-white/40 text-white hover:bg-white/30 transition-all`}
            onClick={() => handleIconClick(3)}
          >
            <svg className="h-5 w-5 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 21H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M5 21V10H19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M9 21V17H15V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M3 10L12 3L21 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M17 3V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M6 14H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M7 17H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M16 17H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            {activeImageIndex === 3 && <span className="ml-1">Resort</span>}
          </Button>
        </div>
      </div>

      <div className="absolute top-1/4 left-4 md:left-10 text-white z-10">
        <div className="flex items-center space-x-2 mb-1">
          <div className="h-10 w-10 rounded-md bg-white/10 backdrop-blur-sm flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 21H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M4 21V11L12 7L20 11V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M12 7V4H16V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M9 21V15H15V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M9 15H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M7 12H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M15 12H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          <div>
            <p className="text-xs font-light opacity-80">{currentProperty.type}</p>
            <p className="text-md font-medium">{currentProperty.name}</p>
          </div>
        </div>
      </div>
      <div className="absolute top-1/4 right-4 md:right-10 text-white z-10 text-right">
        <div className="flex items-center justify-end space-x-2 mb-1">
          <div>
            <p className="text-2xl font-semibold">{currentProperty.price}</p>
            <p className="text-xs font-light opacity-80">{currentProperty.location}</p>
          </div>
          <div className="h-10 w-10 rounded-md bg-white/10 backdrop-blur-sm flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
              <path d="M12 6V18" stroke="currentColor" strokeWidth="2" />
              <path d="M15.5 9.5C15.5 8.11929 13.933 7 12 7C10.067 7 8.5 8.11929 8.5 9.5C8.5 10.8807 10.067 12 12 12C13.933 12 15.5 13.1193 15.5 14.5C15.5 15.8807 13.933 17 12 17C10.067 17 8.5 15.8807 8.5 14.5" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute bottom-[calc(40px+280px)] md:bottom-[calc(40px+240px)] left-4 md:left-10 z-10 flex flex-wrap gap-3 text-white">
        <div className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-sm flex items-center">
          <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="7" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
            <path d="M6 7V4C6 2.89543 6.89543 2 8 2H16C17.1046 2 18 2.89543 18 4V7" stroke="currentColor" strokeWidth="2" />
            <path d="M12 12V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
          {currentProperty.beds} Bedrooms
        </div>
        <div className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-sm flex items-center">
          <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M4 6H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
          {currentProperty.baths} Bathrooms
        </div>
        <div className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-sm flex items-center">
          <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
            <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
          </svg>
          {currentProperty.size}
        </div>
      </div>


      <div className="absolute bottom-[calc(40px+240px)] md:bottom-40 left-4 md:left-10 z-10 flex items-center space-x-3 text-white">
        <div className="p-1 rounded-md bg-white/10 backdrop-blur-sm inline-flex">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
          </svg>
        </div>
        <div>
          <p className="text-xs opacity-80">Schedule Your Private Viewing</p>
          <p className="text-sm font-medium">{currentProperty.viewing}</p>
        </div>
      </div>
      <div className="absolute bottom-10 left-4 right-4 md:left-10 md:right-auto z-10 w-[calc(100%-32px)] md:w-[450px] max-w-full">
        <PropertySearch />
      </div>

      <div className="absolute bottom-10 right-10 z-10 hidden md:block">
        <NearbyProperty activePropertyIndex={activeImageIndex} />
      </div>
      <div className="absolute bottom-5 left-0 right-0 flex justify-center gap-1 z-10">
        <div
          className={`h-1 rounded-full transition-all duration-300 ${activeImageIndex === 0 ? 'w-6 bg-white' : 'w-1 bg-white/50'}`}
          onClick={() => handleIconClick(0)}
        ></div>
        <div
          className={`h-1 rounded-full transition-all duration-300 ${activeImageIndex === 1 ? 'w-6 bg-white' : 'w-1 bg-white/50'}`}
          onClick={() => handleIconClick(1)}
        ></div>
        <div
          className={`h-1 rounded-full transition-all duration-300 ${activeImageIndex === 2 ? 'w-6 bg-white' : 'w-1 bg-white/50'}`}
          onClick={() => handleIconClick(2)}
        ></div>
        <div
          className={`h-1 rounded-full transition-all duration-300 ${activeImageIndex === 3 ? 'w-6 bg-white' : 'w-1 bg-white/50'}`}
          onClick={() => handleIconClick(3)}
        ></div>
      </div>
    </div>
  );
};

export default PropertyHero;
