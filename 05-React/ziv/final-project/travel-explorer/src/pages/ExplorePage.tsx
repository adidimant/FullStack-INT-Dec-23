import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, MapPin } from 'lucide-react';
import { InteractiveMap } from '../components/shared/InteractiveMap';
import { SearchFilters } from '../components/explore/SearchFilters';
import { CountryGrid } from '../components/explore/CountryGrid';
import { ExploreHero } from '../components/explore/ExploreHero';
import { countries } from '../data/countries';
import { Country } from '../types';

export const ExplorePage = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilters, setSelectedFilters] = useState({
    season: '',
    budget: '',
    activity: ''
  });
  const [viewMode, setViewMode] = useState<'grid' | 'map'>('grid');

  const filteredCountries = useMemo(() => {
    return countries.filter(country => {
      const matchesSearch = country.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        country.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesSeason = !selectedFilters.season || 
        country.seasons.some(season => season.name.toLowerCase() === selectedFilters.season.toLowerCase());
      
      const matchesBudget = !selectedFilters.budget || 
        (selectedFilters.budget === 'low' ? country.budget.low <= 100 : country.budget.low > 100);

      return matchesSearch && matchesSeason && matchesBudget;
    });
  }, [searchQuery, selectedFilters]);

  return (
    <div className="min-h-screen bg-gray-50">
      <ExploreHero />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8 space-y-4">
          <div className="flex items-center gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search destinations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <button
              onClick={() => setViewMode(viewMode === 'grid' ? 'map' : 'grid')}
              className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center gap-2"
            >
              <MapPin className="w-5 h-5" />
              <span>{viewMode === 'grid' ? 'Show Map' : 'Show Grid'}</span>
            </button>
          </div>
          
          <SearchFilters
            filters={selectedFilters}
            onFilterChange={setSelectedFilters}
          />
        </div>

        {viewMode === 'grid' ? (
          <CountryGrid countries={filteredCountries} />
        ) : (
          <div className="h-[calc(100vh-300px)] min-h-[600px] rounded-lg overflow-hidden border border-gray-200 shadow-lg">
            <InteractiveMap
              countries={filteredCountries}
              onCountrySelect={(id) => {
                navigate(`/country/${id}`);
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};