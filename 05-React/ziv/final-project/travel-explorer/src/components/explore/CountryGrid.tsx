import React from 'react';
import { CountryCard } from '../shared/CountryCard';
import { Country } from '../../types';

interface CountryGridProps {
  countries: Country[];
}

export const CountryGrid: React.FC<CountryGridProps> = ({ countries }) => {
  if (countries.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">No destinations found matching your criteria.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {countries.map((country) => (
        <CountryCard key={country.id} country={country} />
      ))}
    </div>
  );
};