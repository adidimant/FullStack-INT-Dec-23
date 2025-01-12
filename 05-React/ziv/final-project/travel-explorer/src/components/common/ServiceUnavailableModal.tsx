import React from 'react';
import { AlertCircle } from 'lucide-react';

interface ServiceUnavailableModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ServiceUnavailableModal: React.FC<ServiceUnavailableModalProps> = ({
  isOpen,
  onClose
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
        <div className="flex items-center space-x-3 mb-4">
          <AlertCircle className="w-6 h-6 text-yellow-500" />
          <h2 className="text-xl font-semibold text-gray-900">Service Unavailable</h2>
        </div>
        <p className="text-gray-600 mb-6">
          The registration service is currently unavailable. Please try again later or contact support if the issue persists.
        </p>
        <button
          onClick={onClose}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  );
};