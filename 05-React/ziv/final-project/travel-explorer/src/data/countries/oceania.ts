export const oceaniaCountries = [
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
        imageUrl: 'https://images.unsplash.com/photo-1571579235847-43b5fc394ef3',
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
  }
];