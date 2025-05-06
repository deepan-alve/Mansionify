
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import PropertyHero from '@/components/PropertyHero';
import NearbyProperty from '@/components/NearbyProperty';
import { useIsMobile } from '@/hooks/use-mobile';

function Index() {
  const isMobile = useIsMobile();

  const [activePropertyIndex, setActivePropertyIndex] = useState(0);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Navbar />
      <main className="flex-1 px-4 md:px-6 lg:px-10 py-4">
        <PropertyHero />

        {isMobile && (
          <div className="mt-6 px-2">
            <NearbyProperty activePropertyIndex={activePropertyIndex} />
          </div>
        )}
      </main>
      <div></div>
    </div>
  );
}

export default Index;
