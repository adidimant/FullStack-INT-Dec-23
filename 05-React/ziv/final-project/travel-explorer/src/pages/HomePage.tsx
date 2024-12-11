import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Hero } from '../components/home/Hero';
import { PopularDestinations } from '../components/home/PopularDestinations';
import { InteractiveMap } from '../components/shared/InteractiveMap';
import { countries } from '../data/countries';

export const HomePage = () => {
  const navigate = useNavigate();

  const handleCountrySelect = (countryId: string) => {
    navigate(`/country/${countryId}`);
  };

  return (
    <div className="space-y-16">
      <Hero />
      <PopularDestinations />
      <section className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Explore the World
        </h2>
        <div className="h-[600px] rounded-xl overflow-hidden shadow-lg">
          <InteractiveMap
            countries={countries}
            onCountrySelect={handleCountrySelect}
          />
        </div>
      </section>
    </div>
  );
};