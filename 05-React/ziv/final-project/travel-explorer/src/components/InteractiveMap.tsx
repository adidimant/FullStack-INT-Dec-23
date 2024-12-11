import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Country } from '../types';

interface InteractiveMapProps {
  countries: Country[];
  onCountrySelect: (countryId: string) => void;
}

export const InteractiveMap: React.FC<InteractiveMapProps> = ({
  countries,
  onCountrySelect,
}) => {
  return (
    <MapContainer
      center={[20, 0]}
      zoom={2}
      className="h-[400px] w-full rounded-lg"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {countries.map((country) => (
        <Marker
          key={country.id}
          position={country.coordinates}
          eventHandlers={{
            click: () => onCountrySelect(country.id),
          }}
        >
          <Popup>
            <div className="text-center">
              <h3 className="font-bold">{country.name}</h3>
              <p className="text-sm text-gray-600">{country.capital}</p>
              <button
                onClick={() => onCountrySelect(country.id)}
                className="mt-2 text-blue-500 hover:text-blue-600"
              >
                View Details
              </button>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};