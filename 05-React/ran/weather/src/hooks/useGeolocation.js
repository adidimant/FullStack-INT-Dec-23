import { useState, useEffect, useCallback } from 'react';

const useGeolocation = () => {
  const [location, setLocation] = useState({
    loaded: false,
    coordinates: { lat: null, lng: null },
    error: null
  });

  // Function to get the current position
  const getPosition = useCallback(() => {
    if (!navigator.geolocation) {
      setLocation({
        loaded: true,
        coordinates: { lat: null, lng: null },
        error: 'Geolocation is not supported by your browser'
      });
      return;
    }

    setLocation(prev => ({ ...prev, loaded: false, error: null }));

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          loaded: true,
          coordinates: {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          },
          error: null
        });
      },
      (error) => {
        setLocation({
          loaded: true,
          coordinates: { lat: null, lng: null },
          error: error.message
        });
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
    );
  }, []);

  // Get location on initial render
  useEffect(() => {
    // We don't automatically get location on initial render
    // User must explicitly request it for privacy reasons
  }, []);

  return { ...location, getPosition };
};

export default useGeolocation;
