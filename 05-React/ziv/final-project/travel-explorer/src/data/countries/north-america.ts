export const northAmericanCountries = [
    {
      id: 'usa-new-york',
      name: 'New York',
      capital: 'New York City',
      description: 'The city that never sleeps, a global center of culture, finance, and entertainment',
      imageUrl: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9',
      flagUrl: 'https://flagcdn.com/us.svg',
      established: '1624',
      history: `New York City, originally founded as New Amsterdam by Dutch settlers in 1624, was renamed New York in 1664 after coming under English control. The city served as the first capital of the United States and played a crucial role in the country's development.
  
  The opening of the Erie Canal in 1825 transformed New York into America's leading port. The city experienced massive growth during the 19th century, with waves of European immigration creating its distinctive multicultural character. The construction of the Brooklyn Bridge in 1883 and the first subway line in 1904 shaped the city's development.
  
  Landmarks like the Empire State Building (1931) and the original World Trade Center (1973) defined the world's most famous skyline. The city has weathered numerous challenges, from the Great Depression to 9/11, demonstrating remarkable resilience.
  
  Modern New York City stands as a global capital of finance, culture, and media. Its five boroughs contain diverse neighborhoods, world-class museums, Broadway theaters, and Central Park. The city continues to evolve while maintaining its position as one of the world's most influential urban centers.`,
      currency: 'US Dollar (USD)',
      language: 'English',
      timezone: 'UTC-5',
      coordinates: [40.7128, -74.0060],
    budget: {
      low: 300,
      high: 1000,
      currency: 'USD',
      details: {
        accommodation: 'Lodges from $200/night',
        food: 'Meals from $30-80 per person',
        transportation: 'Sleigh rides: $100',
        activities: 'Arctic tours: $200-500'
      }
    },
    attractions: [
      {
        id: 'santas-workshop',
        name: 'Santa\'s Workshop',
        description: 'Legendary workshop where Christmas magic happens',
        imageUrl: 'https://images.unsplash.com/photo-1576919228236-a097c32a5cd4',
        rating: 5.0,
        reviews: [],
        location: [90, 0]
      },
      {
        id: 'aurora-viewing',
        name: 'Aurora Viewing Point',
        description: 'Prime location for viewing the Northern Lights',
        imageUrl: 'https://images.unsplash.com/photo-1579033461380-adb47c3eb938',
        rating: 4.9,
        reviews: [],
        location: [90, 0]
      }
    ],
    seasons: [
      {
        name: 'Winter',
        months: ['October', 'November', 'December', 'January', 'February', 'March'],
        description: 'Peak season for magical winter experiences',
        activities: ['Aurora viewing', 'Sleigh rides', 'Ice sculpture viewing'],
        weather: 'Very cold temperatures -40 to -20°C',
        highlights: ['Polar nights', 'Northern lights', 'Arctic wildlife']
      },
      {
        name: 'Christmas Season',
        months: ['December'],
        description: 'The most magical time at the North Pole',
        activities: ['Workshop tours', 'Reindeer meetings', 'Gift making'],
        weather: 'Very cold temperatures -35 to -25°C',
        highlights: ['Christmas preparations', 'Elf workshops', 'Polar express']
      }
    ],
    customs: [
      {
        title: 'Gift Giving',
        description: 'The art of giving is central to North Pole culture',
        category: 'culture'
      },
      {
        title: 'Environmental Respect',
        description: 'Strict guidelines for preserving Arctic environment',
        category: 'etiquette'
      }
    ]
  },

  {
    id: 'canada',
    name: 'Canada',
    capital: 'Ottawa',
    description: 'Vast country known for natural beauty, multiculturalism, and friendly people',
    imageUrl: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce',
    flagUrl: 'https://flagcdn.com/ca.svg',
    established: '1867',
    history: `Canada, established as a confederation in 1867, has a rich history spanning thousands of years of Indigenous peoples' presence before European colonization. The country evolved from French and British colonies into a self-governing dominion within the British Empire.

The construction of the Canadian Pacific Railway in the 1880s physically united the country and facilitated westward expansion. Canada's participation in both World Wars strengthened its national identity and international standing. The country played a key role in establishing the United Nations and NATO.

Significant moments in modern Canadian history include the adoption of the maple leaf flag (1965), the patriation of the Constitution (1982), and the establishment of official bilingualism and multiculturalism policies. The country has become known for its commitment to social justice, universal healthcare, and environmental protection.

Today, Canada stands as one of the world's most developed nations, known for its cultural diversity, natural resources, and high quality of life. The country continues to be a leader in promoting international cooperation, peacekeeping, and environmental sustainability.`,
    currency: 'Canadian Dollar (CAD)',
    language: 'English, French',
    timezone: 'UTC-8 to UTC-3.5',
    coordinates: [56.1304, -106.3468],
    budget: {
      low: 100,
      high: 300,
      currency: 'CAD',
      details: {
        accommodation: 'Hotels from $150/night, hostels from $40/night',
        food: 'Meals from $15-40 per person',
        transportation: 'Public transport: $3-4 per ride',
        activities: 'National Park passes: $10-20'
      }
    },
    attractions: [
      {
        id: 'banff',
        name: 'Banff National Park',
        description: 'Stunning mountain scenery and outdoor activities',
        imageUrl: 'https://images.unsplash.com/photo-1513273216459-54c4833d6b4c',
        rating: 4.9,
        reviews: [],
        location: [51.1784, -115.5708]
      },
      {
        id: 'niagara-falls',
        name: 'Niagara Falls',
        description: 'Iconic waterfalls on the US-Canada border',
        imageUrl: 'https://images.unsplash.com/photo-1489447068241-b3490214e879',
        rating: 4.8,
        reviews: [],
        location: [43.0896, -79.0849]
      }
    ],
    seasons: [
      {
        name: 'Summer',
        months: ['June', 'July', 'August'],
        description: 'Perfect for outdoor activities and sightseeing',
        activities: ['Hiking', 'Camping', 'Wildlife viewing'],
        weather: 'Warm temperatures 20-30°C',
        highlights: ['National Parks', 'Festivals', 'Lake activities']
      },
      {
        name: 'Christmas Season',
        months: ['December'],
        description: 'Winter wonderland with festive celebrations',
        activities: ['Skiing', 'Ice skating', 'Christmas markets'],
        weather: 'Cold temperatures -10 to 0°C',
        highlights: ['Northern Lights', 'Winter festivals', 'Holiday lights']
      }
    ],
    customs: [
      {
        title: 'Politeness',
        description: 'Canadians are known for being exceptionally polite',
        category: 'culture'
      },
      {
        title: 'Bilingualism',
        description: 'Both English and French are official languages',
        category: 'culture'
      }
    ]
  }
];