import { Plane, Building2, Car, Utensils, MapPin, Star } from 'lucide-react';

export const TravelServicesPage = () => {
  const services = [
    {
      title: 'Flight Booking',
      icon: Plane,
      description: 'Find the best flight deals worldwide',
      url: 'https://www.skyscanner.com',
      features: [
        'Compare prices across airlines',
        'Flexible date search',
        'Direct and multi-city flights',
        'Real-time price alerts'
      ]
    },
    {
      title: 'Hotel Booking',
      icon: Building2,
      description: 'Book your perfect accommodation',
      url: 'https://www.booking.com',
      features: [
        'Wide range of properties',
        'Guest reviews and ratings',
        'Free cancellation options',
        'Best price guarantee'
      ]
    },
    {
      title: 'Car Rental',
      icon: Car,
      description: 'Rent a car for your journey',
      url: 'https://www.booking.com/cars',
      features: [
        'Global car rental options',
        'All-inclusive pricing',
        'Free cancellation',
        'Wide vehicle selection'
      ]
    },
    {
      title: 'Restaurants & Dining',
      icon: Utensils,
      description: 'Discover local restaurants and cuisine',
      url: 'https://www.tripadvisor.com/Restaurants',
      features: [
        'Restaurant reviews and ratings',
        'Local cuisine recommendations',
        'Price range filters',
        'Dietary restriction options'
      ]
    },
    {
      title: 'Attractions & Activities',
      icon: MapPin,
      description: 'Find things to do at your destination',
      url: 'https://www.tripadvisor.com/Attractions',
      features: [
        'Top-rated attractions',
        'Tour bookings',
        'Skip-the-line tickets',
        'Local experiences'
      ]
    },
    {
      title: 'Travel Reviews',
      icon: Star,
      description: 'Read authentic traveler reviews',
      url: 'https://www.tripadvisor.com',
      features: [
        'Verified user reviews',
        'Photos from travelers',
        'Travel forums',
        'Trip planning tools'
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Travel Services</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div key={service.title} className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:-translate-y-1 hover:shadow-xl">
            <div className="p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-blue-600" />
              </div>
              
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                {service.title}
              </h2>
              
              <p className="text-gray-600 mb-4">
                {service.description}
              </p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <a
                href={service.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Explore Now
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-gray-50 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Why Book Through Our Partners?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Best Prices</h3>
            <p className="text-gray-600">
              Our partners offer competitive rates and price matching to ensure you get the best deals.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Secure Booking</h3>
            <p className="text-gray-600">
              All transactions are protected with industry-standard security measures.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">24/7 Support</h3>
            <p className="text-gray-600">
              Access customer support anytime, anywhere during your journey.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Verified Reviews</h3>
            <p className="text-gray-600">
              Read authentic reviews from real travelers to make informed decisions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};