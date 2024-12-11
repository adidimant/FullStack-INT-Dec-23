import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, User, Globe, Plane, Menu, X } from 'lucide-react';
import { useStore } from '../../store/useStore';
import { SearchBar } from '../search/SearchBar';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const favorites = useStore((state) => state.favorites);

  return (
    <nav className="bg-black text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Globe className="w-6 h-6 text-blue-400" />
              <span className="text-xl font-bold">WorldTraveler</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/explore" className="hover:text-blue-400 transition-colors">
              Explore
            </Link>
            <Link to="/destinations" className="hover:text-blue-400 transition-colors">
              Destinations
            </Link>
            <Link to="/services" className="hover:text-blue-400 transition-colors flex items-center">
              <Plane className="w-4 h-4 mr-1" />
              Travel Services            </Link>
            <SearchBar />
            <Link to="/favorites" className="flex items-center space-x-1 hover:text-blue-400">
              <Heart className="w-5 h-5" />
              <span>{favorites.length}</span>
            </Link>
            <Link to="/profile" className="flex items-center space-x-1 hover:text-blue-400">
              <User className="w-5 h-5" />
              <span>Profile</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md hover:bg-gray-800"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <SearchBar />
            <div className="flex flex-col space-y-4">
              <Link
                to="/explore"
                className="hover:text-blue-400 transition-colors px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Explore
              </Link>
              <Link
                to="/destinations"
                className="hover:text-blue-400 transition-colors px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Destinations
              </Link>
              <Link
                to="/services"
                className="hover:text-blue-400 transition-colors px-2 py-1 flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                <Plane className="w-4 h-4 mr-1" />
                Travel Services              </Link>
              <Link
                to="/favorites"
                className="flex items-center space-x-1 hover:text-blue-400 px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                <Heart className="w-5 h-5" />
                <span>Favorites ({favorites.length})</span>
              </Link>
              <Link
                to="/profile"
                className="flex items-center space-x-1 hover:text-blue-400 px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                <User className="w-5 h-5" />
                <span>Profile</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};