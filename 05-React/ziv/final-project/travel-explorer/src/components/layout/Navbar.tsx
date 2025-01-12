import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, Globe, Plane, Menu, X, MessageSquare } from 'lucide-react';
import { SearchBar } from '../search/SearchBar';
import { FavoritesDropdown } from '../favorites/FavoritesDropdown';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
              Travel Services
            </Link>
            <Link to="/reviews" className="hover:text-blue-400 transition-colors flex items-center">
              <MessageSquare className="w-4 h-4 mr-1" />
              Reviews
            </Link>
            <SearchBar />
            <FavoritesDropdown />
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
                Travel Services
              </Link>
              <Link
                to="/reviews"
                className="hover:text-blue-400 transition-colors px-2 py-1 flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                <MessageSquare className="w-4 h-4 mr-1" />
                Reviews
              </Link>
              <div className="px-2 py-1">
                <FavoritesDropdown />
              </div>
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