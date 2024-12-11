import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Country } from '../../types';

// Fix for default marker icons in Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

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
      style={{ height: '100%', width: '100%', minHeight: '600px' }}
      scrollWheelZoom={true}
      className="z-0"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
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
            <div className="text-center p-2">
              <img
                src={country.imageUrl}
                alt={country.name}
                className="w-32 h-24 object-cover rounded-lg mb-2"
              />
              <h3 className="font-bold text-lg">{country.name}</h3>
              <p className="text-sm text-gray-600 mb-2">{country.capital}</p>
              <button
                onClick={() => onCountrySelect(country.id)}
                className="px-4 py-1 bg-blue-500 text-white rounded-full text-sm hover:bg-blue-600 transition-colors"
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