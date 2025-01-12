import { Link } from 'react-router-dom';
import { Book, Phone } from 'lucide-react';

export const BottomNav = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-3 px-4 z-50">
      <div className="max-w-7xl mx-auto flex justify-center space-x-12">
        <Link 
          to="/regulations" 
          className="flex flex-col items-center text-gray-600 hover:text-blue-600"
        >
          <Book className="w-6 h-6" />
          <span className="text-sm mt-1">Regulations</span>
        </Link>
        <Link 
          to="/contact" 
          className="flex flex-col items-center text-gray-600 hover:text-blue-600"
        >
          <Phone className="w-6 h-6" />
          <span className="text-sm mt-1">Contact</span>
        </Link>
      </div>
    </nav>
  );
};