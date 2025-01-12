/* export const asiaCountries = [
  {
    id: 'japan',
    name: 'Japan',
    capital: 'Tokyo',
    description: 'A fascinating blend of ancient traditions and cutting-edge technology',
    imageUrl: 'https://images.unsplash.com/photo-1492571350019-22de08371fd3',
    flagUrl: 'https://flagcdn.com/jp.svg',
    established: '660 BCE',
    history: `Japan, one of the world's oldest civilizations, has a rich history spanning thousands of years. The country maintained its independence and unique culture through periods of isolation and selective adaptation of foreign influences. The modern era of Japan began with the Meiji Restoration in 1868, transforming the country from a feudal society into a modern industrial state.

The capital city, Tokyo, originally named Edo, became the seat of political power in 1603 under the Tokugawa shogunate. Today, it stands as a testament to Japan's remarkable ability to blend ultramodern technology and innovation with ancient traditions and customs.

Notable historical sites include the ancient capitals of Kyoto and Nara, with their numerous temples and shrines, the iconic Mount Fuji, and the peace memorials of Hiroshima. The country's cultural heritage includes distinctive art forms like ukiyo-e prints, kabuki theater, and the tea ceremony.

Modern Japan is known for its contributions to technology, popular culture (including anime and manga), and innovative urban design. The country's commitment to preserving its cultural heritage while embracing modernization has created a unique society where ancient temples stand alongside futuristic skyscrapers.`,
    currency: 'Japanese Yen (JPY)',
    language: 'Japanese',
    timezone: 'UTC+9',
    coordinates: [35.6762, 139.6503],
    budget: {
      low: 5000,
      high: 15000,
      currency: 'JPY',
      details: {
        accommodation: 'Hotels from ¥8,000/night, hostels from ¥3,000/night',
        food: 'Meals from ¥800-3,000 per person',
        transportation: 'Rail Pass: ¥29,650 for 7 days',
        activities: 'Temple visits: ¥500-1,000'
      }
    },
    attractions: [
      {
        id: 'mount-fuji',
        name: 'Mount Fuji',
        description: "Japan's highest mountain and iconic symbol",
        imageUrl: 'https://japanupclose.web-japan.org/files/100462026.jpeg',
        rating: 4.9,
        reviews: [],
        location: [35.3606, 138.7274]
      },
      {
        id: 'fushimi-inari',
        name: 'Fushimi Inari Shrine',
        description: 'Famous for its thousands of vermillion torii gates',
        imageUrl: 'https://images.unsplash.com/photo-1478436127897-769e1b3f0f36',
        rating: 4.7,
        reviews: [],
        location: [34.9671, 135.7726]
      }
    ],
    seasons: [
      {
        name: 'Spring',
        months: ['March', 'April', 'May'],
        description: 'Cherry blossom season and mild temperatures',
        activities: ['Hanami', 'Temple visits', 'Garden tours'],
        weather: 'Mild temperatures 10-20°C',
        highlights: ['Cherry Blossoms', 'Spring Festivals']
      },
      {
        name: 'Christmas Season',
        months: ['December'],
        description: 'Unique Japanese Christmas celebrations',
        activities: ['Illuminations', 'Christmas markets', 'KFC dinner'],
        weather: 'Cold temperatures 5-12°C',
        highlights: ['Winter illuminations', 'Christmas cake traditions']
      }
    ],
    customs: [
      {
        title: 'Bowing',
        description: 'Bow when greeting people or showing respect',
        category: 'etiquette'
      },
      {
        title: 'Shoes Off',
        description: 'Remove shoes before entering homes and some restaurants',
        category: 'culture'
      }
    ]
  },
  {
    id: 'thailand-bangkok',
    name: 'Thailand',
    capital: 'Bangkok',
    description: 'Vibrant metropolis with temples, street food, and modern life',
    imageUrl: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365',
    flagUrl: 'https://flagcdn.com/th.svg',
    established: '1782',
    history: `Bangkok, established as Thailand's capital in 1782, has grown from a small trading post to one of Southeast Asia's most dynamic cities. The city was founded by King Rama I after the destruction of the former capital, Ayutthaya. The name Bangkok derives from Bang Makok, referring to the wild olive-like trees that once grew along the Chao Phraya River.

The capital city has been the center of Thailand's modernization, political life, and economic growth. The Chakri Dynasty, which continues to reign today, has overseen Bangkok's transformation from a city of canals to a modern metropolis while maintaining its rich cultural heritage.

The city is home to numerous significant temples (wats), including Wat Phra Kaew, housing the revered Emerald Buddha, and Wat Arun, the Temple of Dawn. The Grand Palace complex serves as a perfect example of Thai architecture and has been the official residence of Thai kings since the 18th century.

Modern Bangkok has emerged as a regional hub for business, healthcare, and tourism, while preserving its unique character through its street food culture, traditional markets, and architectural heritage. The city's rapid development has created an interesting contrast between ancient temples and modern skyscrapers.`,
    currency: 'Thai Baht (THB)',
    language: 'Thai',
    timezone: 'UTC+7',
    coordinates: [13.7563, 100.5018],
    budget: {
      low: 1000,
      high: 3000,
      currency: 'THB',
      details: {
        accommodation: 'Hotels from 1500 THB/night, hostels from 300 THB/night',
        food: 'Street food: 50-100 THB, Restaurants: 200-500 THB',
        transportation: 'BTS/MRT: 20-50 THB per ride',
        activities: 'Temple entries: 100-500 THB'
      }
    },
    attractions: [
      {
        id: 'grand-palace',
        name: 'Grand Palace',
        description: 'Historic royal palace complex',
        imageUrl: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365',
        rating: 4.8,
        reviews: [],
        location: [13.7500, 100.4910]
      },
      {
        id: 'wat-arun',
        name: 'Wat Arun',
        description: 'Temple of Dawn on the Chao Phraya River',
        imageUrl: 'https://images.unsplash.com/photo-1528181304800-259b08848526',
        rating: 4.7,
        reviews: [],
        location: [13.7437, 100.4888]
      }
    ],
    seasons: [
      {
        name: 'Cool Season',
        months: ['November', 'December', 'January', 'February'],
        description: 'Best weather for sightseeing',
        activities: ['Temple visits', 'River cruises', 'Shopping'],
        weather: 'Pleasant temperatures 20-30°C',
        highlights: ['Festival of Lights', 'Perfect weather', 'Cultural events']
      },
      {
        name: 'Christmas Season',
        months: ['December'],
        description: 'Unique blend of Thai and Western celebrations',
        activities: ['Shopping', 'Light displays', 'Special events'],
        weather: 'Pleasant temperatures 22-32°C',
        highlights: ['Shopping mall decorations', 'New Year countdown', 'Winter fair']
      }
    ],
    customs: [
      {
        title: 'Wai Greeting',
        description: 'Traditional Thai greeting with palms together',
        category: 'culture'
      },
      {
        title: 'Temple Etiquette',
        description: 'Cover shoulders and knees when visiting temples',
        category: 'etiquette'
      }
    ]
  },
  {
    id: 'vietnam-hanoi',
    name: 'Vietnam',
    capital: 'Hanoi',
    description: 'Ancient capital with rich culture and delicious cuisine',
    imageUrl: 'https://images.unsplash.com/photo-1557750255-c76072a7aad1',
    flagUrl: 'https://flagcdn.com/vn.svg',
    established: '1010',
    history: `Hanoi, founded in 1010 by Emperor Lý Thái Tổ, has served as Vietnam's capital for over a millennium. Originally named Thăng Long (Ascending Dragon), the city has been the political center of various Vietnamese dynasties. Its current name, Hanoi, meaning "City within Rivers," was adopted in 1831 under the Nguyen Dynasty.

The capital city has witnessed numerous historical events, from the resistance against Chinese domination to the struggle for independence from French colonial rule. The city's Old Quarter, with its 36 ancient streets, preserves the layout and architecture of old Hanoi, where each street was historically dedicated to a specific trade.

Significant historical sites include the Temple of Literature (Vietnam's first university, established in 1070), Hoan Kiem Lake with its legendary turtle tower, and the One Pillar Pagoda. The city also houses the Ho Chi Minh Mausoleum, dedicated to the revolutionary leader who led Vietnam to independence.

Modern Hanoi balances rapid economic development with preservation of its cultural heritage. The city's French colonial architecture, ancient temples, and traditional water puppet theaters coexist with modern buildings and infrastructure, creating a unique urban landscape that bridges past and present.`,
    currency: 'Vietnamese Dong (VND)',
    language: 'Vietnamese',
    timezone: 'UTC+7',
    coordinates: [21.0285, 105.8542],
    budget: {
      low: 500000,
      high: 2000000,
      currency: 'VND',
      details: {
        accommodation: 'Hotels from 800,000 VND/night, hostels from 200,000 VND/night',
        food: 'Street food: 30,000-50,000 VND, Restaurants: 100,000-300,000 VND',
        transportation: 'Bus: 7,000 VND per ride',
        activities: 'Museum entries: 30,000-100,000 VND'
      }
    },
    attractions: [
      {
        id: 'hoan-kiem-lake',
        name: 'Hoan Kiem Lake',
        description: 'Historic lake in city center',
        imageUrl: 'https://images.unsplash.com/photo-1557750255-c76072a7aad1',
        rating: 4.7,
        reviews: [],
        location: [21.0285, 105.8542]
      },
      {
        id: 'old-quarter',
        name: 'Old Quarter',
        description: 'Historic district with narrow streets',
        imageUrl: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482',
        rating: 4.8,
        reviews: [],
        location: [21.0359, 105.8541]
      }
    ],
    seasons: [
      {
        name: 'Autumn',
        months: ['September', 'October', 'November'],
        description: 'Best weather with mild temperatures',
        activities: ['Street food tours', 'Lake walks', 'Temple visits'],
        weather: 'Pleasant temperatures 20-25°C',
        highlights: ['Mid-Autumn Festival', 'Clear skies', 'Cultural events']
      },
      {
        name: 'Christmas Season',
        months: ['December'],
        description: 'Unique Vietnamese Christmas experience',
        activities: ['Night markets', 'Light displays', 'Church visits'],
        weather: 'Cool temperatures 15-20°C',
        highlights: ['St. Joseph Cathedral events', 'Holiday markets', 'New Year countdown']
      }
    ],
    customs: [
      {
        title: 'Respect for Elders',
        description: 'Show special respect to older people',
        category: 'culture'
      },
      {
        title: 'Shoes Off',
        description: 'Remove shoes when entering homes',
        category: 'etiquette'
      }
    ]
  },
  {
    id: 'south-korea-seoul',
    name: 'South Korea',
    capital: 'Seoul',
    description: 'Dynamic metropolis blending ancient traditions with modern innovation',
    imageUrl: 'https://www.masa.co.il/MASA/_fck_uploads/seoul-tower.jpg',
    flagUrl: 'https://flagcdn.com/kr.svg',
    established: '18 BCE',
    history: `Seoul, with over 2000 years of history, has been Korea's capital since the Joseon Dynasty. The city has transformed from an ancient royal capital to a global technology hub.`,
    currency: 'Korean Won (KRW)',
    language: 'Korean',
    timezone: 'UTC+9',
    coordinates: [37.5665, 126.9780],
    budget: {
      low: 50000,
      high: 150000,
      currency: 'KRW',
      details: {
        accommodation: 'Hotels from 80,000 KRW/night, hostels from 25,000 KRW/night',
        food: 'Meals from 8,000-20,000 KRW',
        transportation: 'Subway: 1,350 KRW',
        activities: 'Palace entry: 3,000 KRW'
      }
    },
    attractions: [
      {
        id: 'gyeongbokgung',
        name: 'Gyeongbokgung Palace',
        description: 'Main royal palace of Joseon Dynasty',
        imageUrl: 'https://ucarecdn.com/2667d034-3197-4c39-b162-579a4e2e583a/-/crop/1920x1007/0,72/-/resize/1200x630/-/resize/x300/',
        rating: 4.8,
        reviews: [],
        location: [37.5796, 126.9770]
      }
    ],
    seasons: [
      {
        name: 'Spring',
        months: ['March', 'April', 'May'],
        description: 'Cherry blossom season',
        activities: ['Cherry blossom viewing', 'Palace visits', 'Street food tours'],
        weather: 'Mild temperatures 10-20°C',
        highlights: ['Cherry blossoms', 'Spring festivals', 'Traditional markets']
      }
    ],
    customs: [
      {
        title: 'Respect for Elders',
        description: 'Show deference to older people',
        category: 'culture'
      }
    ]
  },

  {
    id: 'singapore',
    name: 'Singapore',
    capital: 'Singapore',
    description: 'Modern city-state known for architecture, cuisine, and cleanliness',
    imageUrl: 'https://edge.media.datahc.com/HI833719304.jpg',
    flagUrl: 'https://flagcdn.com/sg.svg',
    established: '1965',
    history: `Singapore, founded as a British trading colony in 1819, gained independence in 1965. The city-state has transformed from a small fishing village to one of the world's most prosperous nations.`,
    currency: 'Singapore Dollar (SGD)',
    language: 'English, Mandarin, Malay, Tamil',
    timezone: 'UTC+8',
    coordinates: [1.3521, 103.8198],
    budget: {
      low: 100,
      high: 300,
      currency: 'SGD',
      details: {
        accommodation: 'Hotels from 200 SGD/night, hostels from 30 SGD/night',
        food: 'Hawker centers: 5-10 SGD, Restaurants: 20-50 SGD',
        transportation: 'MRT: 1-2 SGD per trip',
        activities: 'Gardens by the Bay: 28 SGD'
      }
    },
    attractions: [
      {
        id: 'marina-bay-sands',
        name: 'Marina Bay Sands',
        description: 'Iconic hotel with infinity pool',
        imageUrl: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd',
        rating: 4.9,
        reviews: [],
        location: [1.2834, 103.8607]
      }
    ],
    seasons: [
      {
        name: 'Dry Season',
        months: ['February', 'March', 'April'],
        description: 'Less rainfall and comfortable temperatures',
        activities: ['Sightseeing', 'Shopping', 'Food tours'],
        weather: 'Warm temperatures 25-32°C',
        highlights: ['Cultural festivals', 'Outdoor events', 'Night markets']
      }
    ],
    customs: [
      {
        title: 'No Chewing Gum',
        description: 'Importing/selling gum is prohibited',
        category: 'culture'
      }
    ]
  }
];

*/