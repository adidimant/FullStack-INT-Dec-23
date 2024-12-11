import React from 'react';
import { HeroSearch } from '../search/HeroSearch';

export const Hero = () => {
  return (
    <div className="relative w-screen h-[800px] -mt-16 -mx-[calc((100vw-100%)/2)]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2560)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      </div>
      <div className="relative h-full flex flex-col items-center justify-center pt-16">
        <div className="text-center text-white space-y-12 px-4 w-full max-w-6xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-bold leading-tight">
            Discover Your Next Adventure
          </h1>
          <p className="text-2xl md:text-3xl max-w-3xl mx-auto text-white/90">
            Explore beautiful destinations around the world and create unforgettable memories
          </p>
          <HeroSearch />
        </div>
      </div>
    </div>
  );
};