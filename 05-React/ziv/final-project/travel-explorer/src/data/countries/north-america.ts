import { Country } from '../../types';

export const northamericaCountries: Country[] = [
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
        imageUrl: 'https://townsquare.media/site/554/files/2023/08/attachment-np8.jpg?w=780&q=75',
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
        imageUrl: 'https://images.squarespace-cdn.com/content/v1/614a40e6b66dd834720ac476/1632659808842-VGWQ7TH4V6TG7104GGF7/Snowy+Moraine+Lake+at+Banff+National+Park%2C+Alberta%2C+Canada',
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
  },
  {
    id: 'mexico-cancun',
    name: 'Mexico',
    capital: 'Cancun',
    description: 'Caribbean paradise with ancient Mayan ruins and pristine beaches',
    imageUrl: 'https://images.unsplash.com/photo-1552074284-5e88ef1aef18',
    flagUrl: 'https://flagcdn.com/mx.svg',
    established: '1970',
    history: `Cancun, transformed from a small fishing village into a major tourism destination in the 1970s, sits at the heart of the ancient Mayan civilization. The region was home to the Maya for over 2,000 years.`,
    currency: 'Mexican Peso (MXN)',
    language: 'Spanish',
    timezone: 'UTC-5',
    coordinates: [21.1619, -86.8515],
    budget: {
      low: 1000,
      high: 3000,
      currency: 'MXN',
      details: {
        accommodation: 'Hotels from 1500 MXN/night, hostels from 300 MXN/night',
        food: 'Meals from 100-400 MXN',
        transportation: 'Bus: 12 MXN per ride',
        activities: 'Chichen Itza tour: 1000 MXN'
      }
    },
    attractions: [
      {
        id: 'chichen-itza',
        name: 'Chichen Itza',
        description: 'Ancient Mayan pyramid complex',
        imageUrl: 'https://images.unsplash.com/photo-1518638150340-f706e86654de',
        rating: 4.9,
        reviews: [],
        location: [20.6843, -88.5678]
      }
    ],
    seasons: [
      {
        name: 'Winter',
        months: ['December', 'January', 'February'],
        description: 'Peak season with perfect weather',
        activities: ['Beach activities', 'Archaeological tours', 'Snorkeling'],
        weather: 'Warm temperatures 23-28°C',
        highlights: ['Perfect weather', 'Cultural events', 'Water sports']
      }
    ],
    customs: [
      {
        title: 'Siesta',
        description: 'Afternoon rest period is common',
        category: 'culture'
      }
    ]
  },

  {
    id: 'costa-rica',
    name: 'Costa Rica',
    capital: 'San Jose',
    description: 'Tropical paradise with rainforests, volcanoes, and beaches',
    imageUrl: 'https://images.ctfassets.net/wv75stsetqy3/7jJ4xHBXMvgvPOtBM4EmzI/c9fa2014e6a0d055f0c9eed3456ebb17/Costa_Rica_Featured_Image.jpg?q=60&fit=fill&fm=webp',
    flagUrl: 'https://flagcdn.com/cr.svg',
    established: '1821',
    history: `Costa Rica, independent since 1821, has been a pioneer in environmental conservation and sustainable tourism. The country abolished its military in 1948 to focus on social development.`,
    currency: 'Costa Rican Colon (CRC)',
    language: 'Spanish',
    timezone: 'UTC-6',
    coordinates: [9.9281, -84.0907],
    budget: {
      low: 30000,
      high: 100000,
      currency: 'CRC',
      details: {
        accommodation: 'Hotels from 50000 CRC/night, hostels from 15000 CRC/night',
        food: 'Meals from 5000-15000 CRC',
        transportation: 'Bus: 1000 CRC',
        activities: 'National Park entry: 10000 CRC'
      }
    },
    attractions: [
      {
        id: 'arenal-volcano',
        name: 'Arenal Volcano',
        description: 'Active volcano with hot springs',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/3a/Arenal_volcano_%2870785p%29_%28cropped%29.jpg',
        rating: 4.8,
        reviews: [],
        location: [10.4626, -84.7037]
      }
    ],
    seasons: [
      {
        name: 'Dry Season',
        months: ['December', 'January', 'February', 'March', 'April'],
        description: 'Perfect weather for outdoor activities',
        activities: ['Hiking', 'Wildlife watching', 'Beach visits'],
        weather: 'Warm temperatures 25-30°C',
        highlights: ['Wildlife activity', 'Perfect weather', 'Festivals']
      }
    ],
    customs: [
      {
        title: 'Pura Vida',
        description: 'Relaxed, pure life philosophy',
        category: 'culture'
      }
    ]
  }
];