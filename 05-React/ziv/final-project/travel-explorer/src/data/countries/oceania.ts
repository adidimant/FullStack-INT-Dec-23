import { Country } from '../../types';

export const oceaniaCountries: Country[] = [
    {
      id: 'australia-sydney',
      name: 'Australia',
      capital: 'Sydney',
      description: 'Vibrant coastal city with iconic architecture and beaches',
      imageUrl: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9',
      flagUrl: 'https://flagcdn.com/au.svg',
      established: '1788',
      history: `Sydney, established in 1788 as the first European settlement in Australia, began as a British penal colony at Sydney Cove. The city was named after Lord Sydney, the British Home Secretary at the time. The original settlement site is now known as The Rocks, preserving much of its colonial heritage.
  
  The discovery of gold in the 1850s transformed Sydney from a convict settlement into a prosperous city. The construction of the Sydney Harbour Bridge in 1932 and the Opera House in 1973 created the city's iconic skyline and established it as a global destination.
  
  The city played a crucial role in World War II as a base for Allied forces in the Pacific. Post-war immigration, particularly from Europe and later Asia, transformed Sydney into one of the world's most multicultural cities.
  
  Modern Sydney has evolved into a major global city, known for its quality of life, cultural diversity, and natural beauty. The city successfully hosted the 2000 Olympics, further enhancing its international profile. Today, it stands as Australia's largest city and a major financial, cultural, and tourist center.`,
      currency: 'Australian Dollar (AUD)',
      language: 'English',
      timezone: 'UTC+10',
      coordinates: [-33.8688, 151.2093],
    budget: {
      low: 150,
      high: 400,
      currency: 'AUD',
      details: {
        accommodation: 'Hotels from $200/night, hostels from $40/night',
        food: 'Meals from $15-50 per person',
        transportation: 'Public transport: $4-8 per ride',
        activities: 'Attractions: $20-100'
      }
    },
    attractions: [
      {
        id: 'opera-house',
        name: 'Sydney Opera House',
        description: 'Iconic performing arts venue',
        imageUrl: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9',
        rating: 4.9,
        reviews: [],
        location: [-33.8568, 151.2153]
      },
      {
        id: 'bondi-beach',
        name: 'Bondi Beach',
        description: 'Famous beach with coastal walks',
        imageUrl: 'https://ychef.files.bbci.co.uk/1280x720/p0g2lyq7.jpg',
        rating: 4.8,
        reviews: [],
        location: [-33.8915, 151.2767]
      }
    ],
    seasons: [
      {
        name: 'Summer',
        months: ['December', 'January', 'February'],
        description: 'Peak beach season with outdoor events',
        activities: ['Beach visits', 'Coastal walks', 'Harbour cruises'],
        weather: 'Hot temperatures 25-35°C',
        highlights: ['New Year fireworks', 'Beach festivals', 'Outdoor cinema']
      },
      {
        name: 'Christmas Season',
        months: ['December'],
        description: 'Summer Christmas celebrations',
        activities: ['Beach BBQs', 'Outdoor events', 'Christmas markets'],
        weather: 'Warm temperatures 20-30°C',
        highlights: ['Carols in the Domain', 'Beach Christmas', 'Boxing Day']
      }
    ],
    customs: [
      {
        title: 'Beach Safety',
        description: 'Swim between the flags at beaches',
        category: 'safety'
      },
      {
        title: 'BBQ Culture',
        description: 'Public BBQs available in parks',
        category: 'culture'
      }
    ]
  },
  {
    id: 'new-zealand-queenstown',
    name: 'New Zealand',
    capital: 'Queenstown',
    description: 'Adventure capital with stunning alpine and lake scenery',
    imageUrl: 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad',
    flagUrl: 'https://flagcdn.com/nz.svg',
    established: '1876',
    history: `Queenstown, first settled by Māori, was founded during the Otago gold rush of the 1860s. The city has transformed from a mining town into a world-renowned adventure tourism destination.`,
    currency: 'New Zealand Dollar (NZD)',
    language: 'English, Māori',
    timezone: 'UTC+12',
    coordinates: [-45.0312, 168.6626],
    budget: {
      low: 100,
      high: 300,
      currency: 'NZD',
      details: {
        accommodation: 'Hotels from $150/night, hostels from $30/night',
        food: 'Meals from $15-40',
        transportation: 'Bus: $5-10 per ride',
        activities: 'Bungee jumping: $200'
      }
    },
    attractions: [
      {
        id: 'remarkables',
        name: 'The Remarkables',
        description: 'Iconic mountain range and ski field',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/86/The_Remarkables_%281126885451%29.jpg',
        rating: 4.9,
        reviews: [],
        location: [-45.0578, 168.8075]
      }
    ],
    seasons: [
      {
        name: 'Winter',
        months: ['June', 'July', 'August'],
        description: 'Perfect for winter sports',
        activities: ['Skiing', 'Snowboarding', 'Hot springs'],
        weather: 'Cold temperatures 0-10°C',
        highlights: ['Snow sports', 'Winter Festival', 'Alpine views']
      }
    ],
    customs: [
      {
        title: 'Māori Culture',
        description: 'Respect for indigenous traditions',
        category: 'culture'
      }
    ]
  },

  {
    id: 'fiji-nadi',
    name: 'Fiji',
    capital: 'Nadi',
    description: 'Tropical paradise with pristine beaches and vibrant culture',
    imageUrl: 'https://media.cntraveller.com/photos/642aa1ad770beda2d4f5cc22/16:9/w_2992,h_1683,c_limit/Fiji-march2023issue-JackJohns15.jpg',
    flagUrl: 'https://flagcdn.com/fj.svg',
    established: '1970',
    history: `Nadi, Fiji's main tourism gateway, has been inhabited for over 3,000 years. The city combines traditional Fijian culture with Indian influences from colonial-era sugar plantations.`,
    currency: 'Fijian Dollar (FJD)',
    language: 'English, Fijian, Hindi',
    timezone: 'UTC+12',
    coordinates: [-17.7765, 177.4356],
    budget: {
      low: 150,
      high: 500,
      currency: 'FJD',
      details: {
        accommodation: 'Resorts from 300 FJD/night, hostels from 50 FJD/night',
        food: 'Meals from 15-50 FJD',
        transportation: 'Local bus: 2-5 FJD',
        activities: 'Snorkeling tours: 100 FJD'
      }
    },
    attractions: [
      {
        id: 'garden-sleeping-giant',
        name: 'Garden of the Sleeping Giant',
        description: 'Orchid garden with mountain backdrop',
        imageUrl: 'https://www.seabedsfiji.com/wp-content/uploads/2017/02/PSGarden-Path.jpg',
        rating: 4.7,
        reviews: [],
        location: [-17.7516, 177.4669]
      }
    ],
    seasons: [
      {
        name: 'Dry Season',
        months: ['May', 'June', 'July', 'August', 'September', 'October'],
        description: 'Perfect beach weather',
        activities: ['Snorkeling', 'Island hopping', 'Beach relaxation'],
        weather: 'Warm temperatures 20-30°C',
        highlights: ['Clear waters', 'Cultural festivals', 'Perfect weather']
      }
    ],
    customs: [
      {
        title: 'Kava Ceremony',
        description: 'Traditional welcome drink ceremony',
        category: 'culture'
      }
    ]
  }
];