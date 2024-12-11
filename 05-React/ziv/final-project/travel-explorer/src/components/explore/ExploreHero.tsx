import React from 'react';
import { Globe } from 'lucide-react';

export const ExploreHero = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-4">Explore the World</h1>
            <p className="text-xl text-blue-100">
              Discover amazing destinations and plan your next adventure
            </p>
          </div>
          <Globe className="w-24 h-24 text-blue-200" />
        </div>
      </div>
    </div>
  );
};