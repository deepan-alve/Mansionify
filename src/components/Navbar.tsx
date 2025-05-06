import { useState } from 'react';
import { ChevronDown, Menu, MapPin, Search, User, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <header className="w-full py-4 px-4 md:px-6 lg:px-10">
      <nav className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="h-8 w-8 md:h-10 md:w-10 mr-2">
            <img
              src="/logo.svg"
              alt="Mansionify Logo"
              className="object-contain w-full h-full"
            />
          </div>
          <span className="text-lg md:text-xl font-bold">Mansionify</span>
        </div>

        <button
          className="md:hidden"
          onClick={toggleMenu}
        >
          <Menu size={24} />
        </button>

        <div className={cn(
          "fixed inset-0 z-50 bg-white transform transition-transform duration-300 md:bg-transparent md:static md:inset-auto md:transform-none md:flex md:items-center",
          isMenuOpen ? "translate-x-0" : "translate-x-full md:translate-x-0"
        )}>
          <div className="flex flex-col items-center justify-center space-y-4 h-full md:flex-row md:space-x-2 md:space-y-0">
            <button
              className="absolute top-4 right-4 md:hidden"
              onClick={toggleMenu}
            >
              <X size={24} />
            </button>

            <Button
              variant="default"
              className="rounded-full bg-black text-white hover:bg-black/90 px-4 md:px-6 text-xs md:text-sm"
            >
              Home
            </Button>
            <Button
              variant="outline"
              className="rounded-full bg-gray-100/20 text-gray-700 hover:bg-gray-100 px-3 md:px-4 text-xs md:text-sm flex items-center"
            >
              Explore <ChevronDown size={14} className="ml-1" />
            </Button>

            <div className="rounded-full border border-black bg-transparent px-3 py-0.5 flex items-center space-x-4 text-sm font-medium shadow-sm md:flex-row flex-col h-fit">
              <Button
                variant="ghost"
                className="rounded-full text-gray-700 hover:bg-gray-100 px-0 text-xs md:text-sm h-7"
              >
                Features
              </Button>
              <Button
                variant="ghost"
                className="rounded-full text-gray-700 hover:bg-gray-100 px-0 text-xs md:text-sm h-7"
              >
                Our Mission
              </Button>
              <Button
                variant="ghost"
                className="rounded-full text-gray-700 hover:bg-gray-100 px-0 text-xs md:text-sm h-7"
              >
                Contact
              </Button>
            </div>
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-2">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full"
          >
            <User size={20} />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full"
          >
            <Search size={20} />
          </Button>
          <Button
            variant="default"
            className="rounded-full bg-mansion-beige text-black hover:bg-mansion-beige/90 px-4 md:px-6 text-xs md:text-sm flex items-center"
          >
            <MapPin size={14} className="mr-1 md:size-16" /> Locations
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
