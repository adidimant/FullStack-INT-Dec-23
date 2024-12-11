import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { CountryCard } from '../shared/CountryCard';
import { countries } from '../../data/countries';

export const PopularDestinations = () => {
  const popularCountries = countries.slice(0, 3);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            Popular Destinations
          </h2>
          <Link
            to="/destinations"
            className="flex items-center text-blue-600 hover:text-blue-700 font-medium"
          >
            See All
            <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {popularCountries.map((country) => (
            <CountryCard key={country.id} country={country} />
          ))}
        </div>
      </div>
    </section>
  );
};