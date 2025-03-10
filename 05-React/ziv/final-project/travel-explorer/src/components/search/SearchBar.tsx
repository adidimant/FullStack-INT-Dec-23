import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import { countries } from '../../data/countries';

export const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [results, setResults] = useState<typeof countries>([]);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (query.trim() === '') {
      setResults([]);
      return;
    }

    const searchResults = countries.filter(country =>
      country.name.toLowerCase().includes(query.toLowerCase()) ||
      country.capital.toLowerCase().includes(query.toLowerCase())
    );

    setResults(searchResults);
    setIsOpen(true);
  }, [query]);

  const handleSelect = (countryId: string) => {
    setQuery('');
    setIsOpen(false);
    navigate(`/country/${countryId}`);
  };

  return (
    <div ref={wrapperRef} className="relative">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search destinations..."
          className="pl-10 pr-4 py-2 w-64 bg-gray-800/50 backdrop-blur-md rounded-full text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 border border-gray-700/50"
        />
      </div>

      {isOpen && (query.trim() !== '') && (
        <div className="absolute mt-2 w-64 bg-gray-900/90 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden border border-gray-700/50 z-50">
          {results.length > 0 ? (
            <ul className="max-h-96 overflow-auto divide-y divide-gray-800">
              {results.map(country => (
                <li
                  key={country.id}
                  onClick={() => handleSelect(country.id)}
                  className="hover:bg-gray-800/50 cursor-pointer transition-colors group"
                >
                  <div className="px-4 py-3 flex items-center space-x-3">
                    <div className="w-10 h-10 flex-shrink-0">
                      <img
                        src={country.imageUrl}
                        alt={country.name}
                        className="w-full h-full rounded-lg object-cover"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-medium text-white group-hover:text-blue-400 truncate">
                        {country.name}
                      </p>
                      <p className="text-sm text-gray-400 truncate">
                        {country.capital}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <div className="px-4 py-6 text-center">
              <p className="text-gray-300">No destinations found</p>
              <p className="text-sm text-gray-500 mt-1">
                Try searching for another destination
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};