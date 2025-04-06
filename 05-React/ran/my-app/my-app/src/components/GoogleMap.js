import React from 'react';

function GoogleMap({ location }) {
  const mapUrl = `https://www.google.com/maps?q=${location.lat},${location.lng}&z=15&output=embed`;

  return (
    <div>
      <iframe
        title="Company Location"
        src={mapUrl}
        width="600"
        height="450"
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default GoogleMap;
