import React, { useEffect, useState } from 'react';
import { X, Shield } from 'lucide-react';

export const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowBanner(false);
    // Initialize ad services here
    window.dispatchEvent(new Event('cookieConsentAccepted'));
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setShowBanner(false);
  };

  const handleReset = () => {
    localStorage.removeItem('cookieConsent');
    setShowBanner(true);
  };

  if (!showBanner) {
    return (
      <button
        onClick={handleReset}
        className="fixed bottom-4 right-4 bg-gray-800 text-white px-4 py-2 rounded-md text-sm hover:bg-gray-700 transition-colors"
      >
        Reset Cookie Preferences
      </button>
    );
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t z-50">
      <div className="max-w-7xl mx-auto p-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Shield className="w-6 h-6 text-blue-600 flex-shrink-0" />
            <p className="text-sm text-gray-600">
              We use cookies to enhance your experience and show personalized ads. 
              By clicking "Accept", you consent to our use of cookies. 
              <button 
                onClick={() => window.open('/privacy', '_blank')}
                className="text-blue-600 hover:underline ml-1"
              >
                Learn more
              </button>
            </p>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={handleDecline}
              className="text-gray-600 hover:text-gray-800 text-sm font-medium"
            >
              Decline
            </button>
            <button
              onClick={handleAccept}
              className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};