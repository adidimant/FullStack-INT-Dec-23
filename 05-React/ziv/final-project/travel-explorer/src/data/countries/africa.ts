import { Country } from '../../types';


export const africanCountries: Country[] = [
    {
      id: 'egypt-cairo',
      name: 'Egypt',
      capital: 'Cairo',
      description: 'Ancient city with pyramids and rich Islamic heritage',
      imageUrl: 'https://images.unsplash.com/photo-1572252009286-268acec5ca0a',
      flagUrl: 'https://flagcdn.com/eg.svg',
      established: '969 CE',
      history: `Cairo, founded in 969 CE by the Fatimid dynasty, has served as Egypt's capital for over a millennium. The city's name, Al-Qahira, means "The Victorious," reflecting its importance as a center of power and culture in the Islamic world.
  
  The city grew around the ancient Egyptian capital of Memphis and the Roman fortress of Babylon. Islamic Cairo, built during the Fatimid era, features some of the world's oldest and finest mosques and madrasas. The Citadel, constructed by Saladin in the 12th century, dominated the medieval city.
  
  The nearby Giza pyramid complex, built around 2560 BCE, stands as a testament to ancient Egyptian civilization. The Egyptian Museum houses countless artifacts from this period, including the treasures of Tutankhamun.
  
  Modern Cairo is the largest city in the Arab world and a major cultural center. Despite rapid urbanization, the city maintains its historic character through its Islamic architecture, bustling bazaars, and traditional coffee houses.`,
      currency: 'Egyptian Pound (EGP)',
      language: 'Arabic',
      timezone: 'UTC+2',
      coordinates: [30.0444, 31.2357],
    budget: {
      low: 300,
      high: 1000,
      currency: 'EGP',
      details: {
        accommodation: 'Hotels from 500 EGP/night, hostels from 150 EGP/night',
        food: 'Meals from 50-200 EGP per person',
        transportation: 'Metro: 5 EGP per ride',
        activities: 'Pyramid entry: 200 EGP'
      }
    },
    attractions: [
      {
        id: 'pyramids-giza',
        name: 'Pyramids of Giza',
        description: 'Ancient Egyptian pyramids and the Great Sphinx',
        imageUrl: 'https://images.unsplash.com/photo-1553913861-c0fddf2619ee',
        rating: 4.9,
        reviews: [],
        location: [29.9792, 31.1342]
      },
      {
        id: 'khan-el-khalili',
        name: 'Khan el-Khalili',
        description: 'Historic bazaar and marketplace',
        imageUrl: 'https://www.introducingegypt.com/f/egipto/egipto/guia/khan-el-khalili-m.jpg',
        rating: 4.7,
        reviews: [],
        location: [30.0471, 31.2620]
      }
    ],
    seasons: [
      {
        name: 'Winter',
        months: ['December', 'January', 'February'],
        description: 'Perfect weather for sightseeing',
        activities: ['Pyramid tours', 'Nile cruises', 'Museum visits'],
        weather: 'Mild temperatures 15-25°C',
        highlights: ['Clear skies', 'Comfortable temperatures', 'Less crowds']
      },
      {
        name: 'Christmas Season',
        months: ['December'],
        description: 'Coptic Christmas celebrations',
        activities: ['Church visits', 'Holiday markets', 'Cultural events'],
        weather: 'Mild temperatures 15-20°C',
        highlights: ['Coptic Christmas', 'New Year celebrations', 'Winter festivals']
      }
    ],
    customs: [
      {
        title: 'Ramadan',
        description: 'Respect fasting during daylight hours in Ramadan',
        category: 'culture'
      },
      {
        title: 'Dress Code',
        description: 'Modest dress recommended, especially at religious sites',
        category: 'etiquette'
      }
    ]
  },
  {
    id: 'tanzania-zanzibar',
    name: 'Tanzania',
    capital: 'Zanzibar',
    description: 'Tropical paradise with historic Stone Town and pristine beaches',
    imageUrl: 'https://www.mspirit.co.il/wp-content/uploads/2019/03/%D7%92%D7%9C%D7%A8%D7%99%D7%94-%D7%96%D7%A0%D7%96%D7%99%D7%91%D7%A8-12-1.jpg',
    flagUrl: 'https://flagcdn.com/tz.svg',
    established: '1698',
    history: `Zanzibar's history spans over two millennia of diverse cultural influences, from Persian traders to Portuguese conquistadors and Omani sultans. The archipelago became a crucial hub in the Indian Ocean trade network, particularly for spices, slaves, and ivory.

Stone Town, the historic heart of Zanzibar City, developed under Omani rule in the 19th century. Its unique architecture blends African, Arab, Indian, and European elements, earning it UNESCO World Heritage status. The town's narrow alleys, carved doors, and historic buildings tell stories of its multicultural past.

The spice trade, particularly cloves, transformed Zanzibar's economy and earned it the nickname "Spice Islands." The archipelago's strategic importance led to its becoming a British protectorate in 1890, before joining with Tanganyika to form Tanzania in 1964.

Today, Zanzibar balances its role as a tourist destination with preserving its cultural heritage. The island's pristine beaches, historic sites, and spice plantations continue to attract visitors while maintaining its unique Swahili culture and traditions.`,
    currency: 'Tanzanian Shilling (TZS)',
    language: 'Swahili, English',
    timezone: 'UTC+3',
    coordinates: [-6.1659, 39.2026],
    budget: {
      low: 50,
      high: 200,
      currency: 'TZS',
      details: {
        accommodation: 'Hotels from $80/night, guesthouses from $30/night',
        food: 'Meals from $5-20 per person',
        transportation: 'Local transport: $1-5',
        activities: 'Spice tours: $25-40'
      }
    },
    attractions: [
      {
        id: 'stone-town',
        name: 'Stone Town',
        description: 'UNESCO World Heritage site with rich history',
        imageUrl: 'https://www.zanzibar.co.il/wp-content/uploads/2021/06/shutterstock_1017082729-1-768x432.webp',
        rating: 4.7,
        reviews: [],
        location: [-6.1659, 39.2026]
      },
      {
        id: 'nungwi-beach',
        name: 'Nungwi Beach',
        description: 'Pristine white sand beach',
        imageUrl: 'https://www.easytravel.co.tz/wp-content/uploads/2023/07/Panoramic-view-of-Nungwi-Beach-in-Zanzibar-Easy-Travel-Tanzania-scaled.jpg',
        rating: 4.9,
        reviews: [],
        location: [-5.7276, 39.2976]
      }
    ],
    seasons: [
      {
        name: 'Dry Season',
        months: ['June', 'July', 'August', 'September'],
        description: 'Perfect beach weather and cultural exploration',
        activities: ['Beach activities', 'Spice tours', 'Snorkeling'],
        weather: 'Warm temperatures 25-30°C',
        highlights: ['Clear skies', 'Perfect beach days', 'Cultural festivals']
      },
      {
        name: 'Christmas Season',
        months: ['December'],
        description: 'Festive atmosphere with perfect weather',
        activities: ['Beach celebrations', 'Cultural events', 'Water sports'],
        weather: 'Warm temperatures 25-32°C',
        highlights: ['Beach parties', 'New Year celebrations', 'Cultural shows']
      }
    ],
    customs: [
      {
        title: 'Dress Code',
        description: 'Modest dress recommended, especially in Stone Town',
        category: 'etiquette'
      },
      {
        title: 'Greetings',
        description: 'Learning basic Swahili greetings is appreciated',
        category: 'culture'
      }
    ]
  },
  {
    id: 'morocco-marrakech',
    name: 'Morocco',
    capital: 'Marrakech',
    description: 'Ancient imperial city with vibrant souks and rich cultural heritage',
    imageUrl: 'https://www.familytour.co.il/wp-content/uploads/2017/05/%D7%9E%D7%A8%D7%95%D7%A7%D7%95-960x500.jpg',
    flagUrl: 'https://flagcdn.com/ma.svg',
    established: '1062',
    history: `Marrakech, founded in 1062 by the Almoravids, has served as a crucial imperial city throughout Morocco's history. The city's name comes from the Berber words "mur" (n) and "akush," meaning "Land of God."`,
    currency: 'Moroccan Dirham (MAD)',
    language: 'Arabic, Berber',
    timezone: 'UTC+1',
    coordinates: [31.6295, -7.9811],
    budget: {
      low: 300,
      high: 800,
      currency: 'MAD',
      details: {
        accommodation: 'Riads from 500 MAD/night, hostels from 100 MAD/night',
        food: 'Meals from 30-150 MAD',
        transportation: 'Taxi: 20-50 MAD',
        activities: 'Museum entries: 50-70 MAD'
      }
    },
    attractions: [
      {
        id: 'medina',
        name: 'Medina of Marrakech',
        description: 'UNESCO World Heritage site with traditional souks',
        imageUrl: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/63/94/51/kveldsstemningeksotisktusen.jpg?w=900&h=500&s=1',
        rating: 4.8,
        reviews: [],
        location: [31.6295, -7.9811]
      }
    ],
    seasons: [
      {
        name: 'Spring',
        months: ['March', 'April', 'May'],
        description: 'Perfect weather for exploring',
        activities: ['Souk shopping', 'Desert tours', 'Garden visits'],
        weather: 'Mild temperatures 20-25°C',
        highlights: ['Rose Festival', 'Perfect weather', 'Cultural events']
      }
    ],
    customs: [
      {
        title: 'Bargaining',
        description: 'Haggling is expected in souks',
        category: 'culture'
      }
    ]
  },

  {
    id: 'south-africa-cape-town',
    name: 'South Africa',
    capital: 'Cape Town',
    description: 'Stunning coastal city with dramatic landscapes and rich history',
    imageUrl: 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99',
    flagUrl: 'https://flagcdn.com/za.svg',
    established: '1652',
    history: `Cape Town, established in 1652 by the Dutch East India Company, is South Africa's oldest city. The city has played a crucial role in the country's history, from colonial times through apartheid to democracy.`,
    currency: 'South African Rand (ZAR)',
    language: 'English, Afrikaans, Xhosa',
    timezone: 'UTC+2',
    coordinates: [-33.9249, 18.4241],
    budget: {
      low: 500,
      high: 1500,
      currency: 'ZAR',
      details: {
        accommodation: 'Hotels from 800 ZAR/night, hostels from 200 ZAR/night',
        food: 'Meals from 100-300 ZAR',
        transportation: 'MyCiti bus: 25 ZAR',
        activities: 'Table Mountain cable car: 380 ZAR'
      }
    },
    attractions: [
      {
        id: 'table-mountain',
        name: 'Table Mountain',
        description: 'Iconic flat-topped mountain with cable car',
        imageUrl: 'https://cdn.britannica.com/41/75841-050-FAAE44F0/Table-Mountain-Cape-Town-Western-Bay-South.jpg',
        rating: 4.9,
        reviews: [],
        location: [-33.9628, 18.4037]
      }
    ],
    seasons: [
      {
        name: 'Summer',
        months: ['December', 'January', 'February'],
        description: 'Perfect beach weather',
        activities: ['Beach visits', 'Hiking', 'Wine tasting'],
        weather: 'Warm temperatures 25-30°C',
        highlights: ['Beach days', 'Outdoor festivals', 'Wine harvests']
      }
    ],
    customs: [
      {
        title: 'Ubuntu',
        description: 'Spirit of community and humanity',
        category: 'culture'
      }
    ]
  }
];