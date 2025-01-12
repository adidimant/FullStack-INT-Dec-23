import { Country } from '../../types';

export const europeCountries: Country[] = [
    {
      id: 'prague',
      name: 'Czech Republic',
      capital: 'Prague',
      description: 'A fairy-tale city with stunning architecture and rich history',
      imageUrl: 'https://images.unsplash.com/photo-1541849546-216549ae216d',
      flagUrl: 'https://flagcdn.com/cz.svg',
      established: '9th century',
      history: `Prague, one of Europe's oldest cities, was founded in the late 9th century at the crossroads of ancient trade routes. The city became the capital of the Kingdom of Bohemia and the seat of Holy Roman Emperors, particularly under Charles IV in the 14th century, who transformed Prague into an imperial capital.
  
  The city's rich architectural heritage spans centuries, from Romanesque rotundas to Gothic, Renaissance, and Baroque palaces. Prague Castle, founded around 880, is the largest ancient castle complex in the world and continues to dominate the city's skyline.
  
  The Charles Bridge, completed in 1402, has been a vital connection between Prague's Old Town and Lesser Town. The city's Jewish Quarter, dating back to the 13th century, preserves some of Europe's most important Jewish historical monuments.
  
  Modern Prague emerged from the Velvet Revolution of 1989, which peacefully overthrew communist rule. Today, the city is a vibrant cultural center, seamlessly blending its historical heritage with contemporary life, attracting millions of visitors who come to experience its unique charm and rich cultural offerings.`,
      currency: 'Czech Koruna (CZK)',
      language: 'Czech',
      timezone: 'UTC+1',
      coordinates: [50.0755, 14.4378],
    budget: {
      low: 1000,
      high: 3000,
      currency: 'CZK',
      details: {
        accommodation: 'Hotels from 2000 CZK/night, hostels from 500 CZK/night',
        food: 'Meals from 150-500 CZK per person',
        transportation: 'Public transport: 24 CZK per ride',
        activities: 'Castle tours: 250 CZK'
      }
    },
    attractions: [
      {
        id: 'charles-bridge',
        name: 'Charles Bridge',
        description: 'Historic bridge crossing the Vltava river',
        imageUrl: 'https://images.unsplash.com/photo-1541849546-216549ae216d',
        rating: 4.8,
        reviews: [],
        location: [50.0865, 14.4114]
      },
      {
        id: 'prague-castle',
        name: 'Prague Castle',
        description: 'Largest ancient castle complex in the world',
        imageUrl: 'https://www.travelgeekery.com/wp-content/uploads/2021/12/View-of-Prague-Castle-Czech-Republic.jpg',
        rating: 4.9,
        reviews: [],
        location: [50.0911, 14.4016]
      }
    ],
    seasons: [
      {
        name: 'Summer',
        months: ['June', 'July', 'August'],
        description: 'Perfect weather for sightseeing and outdoor activities',
        activities: ['Castle tours', 'River cruises', 'Beer gardens'],
        weather: 'Warm temperatures 20-30°C',
        highlights: ['Summer festivals', 'Beer gardens', 'River activities']
      },
      {
        name: 'Christmas Season',
        months: ['December'],
        description: 'Magical Christmas markets and winter atmosphere',
        activities: ['Christmas markets', 'Ice skating', 'Concert halls'],
        weather: 'Cold temperatures -2-5°C',
        highlights: ['Old Town Square Market', 'Mulled wine', 'Christmas concerts']
      }
    ],
    customs: [
      {
        title: 'Beer Culture',
        description: 'Beer is an important part of Czech culture',
        category: 'culture'
      },
      {
        title: 'Tipping',
        description: 'Round up or tip 10% for good service',
        category: 'etiquette'
      }
    ]
  },
  {
    id: 'france-alsace',
    name: 'France',
    capital: 'Strasbourg',
    description: 'Charming region with French-German cultural blend',
    imageUrl: 'https://images1.ynet.co.il/PicServer5/2018/08/15/8717289/shutterstock_1131888074_6.jpg',
    flagUrl: 'https://flagcdn.com/fr.svg',
    established: '12th century',
    history: `Alsace, a historic region in northeastern France, has been a cultural crossroads between French and German influences for centuries. The region's unique identity was shaped by its strategic location along the Rhine River, making it a contested territory throughout European history.

Strasbourg, the capital, was founded by the Romans and developed into a major medieval commercial center. The city's cathedral, completed in 1439, stands as a masterpiece of Gothic architecture and was the world's tallest building for over two centuries.

The region's distinctive half-timbered architecture, particularly preserved in towns like Colmar and Riquewihr, reflects its medieval prosperity and unique architectural style. The Wine Route, established in 1953, showcases Alsace's centuries-old winemaking tradition.

Modern Alsace has emerged as a symbol of European cooperation, with Strasbourg serving as the seat of several European institutions. The region maintains its unique blend of French and German influences in its cuisine, architecture, and local dialect.`,
    currency: 'Euro (EUR)',
    language: 'French',
    timezone: 'UTC+1',
    coordinates: [48.5734, 7.7521],
    budget: {
      low: 80,
      high: 200,
      currency: 'EUR',
      details: {
        accommodation: 'Hotels from €100/night, guesthouses from €60/night',
        food: 'Meals from €15-40 per person',
        transportation: 'Regional trains: €20-30',
        activities: 'Wine tastings: €15-30'
      }
    },
    attractions: [
      {
        id: 'strasbourg-cathedral',
        name: 'Strasbourg Cathedral',
        description: 'Gothic cathedral with astronomical clock',
        imageUrl: 'https://static1.thetravelimages.com/wordpress/wp-content/uploads/2023/03/the-strasbourg-cathedral-in-france.jpg',
        rating: 4.8,
        reviews: [],
        location: [48.5816, 7.7500]
      },
      {
        id: 'colmar',
        name: 'Colmar',
        description: 'Picturesque town with half-timbered houses',
        imageUrl: 'https://goblackforest.co.il/wp-content/uploads/2018/12/colmar-2854606_640.jpg',
        rating: 4.9,
        reviews: [],
        location: [48.0793, 7.3557]
      }
    ],
    seasons: [
      {
        name: 'Summer',
        months: ['June', 'July', 'August'],
        description: 'Perfect for wine tours and outdoor activities',
        activities: ['Wine tasting', 'Village tours', 'Hiking'],
        weather: 'Warm temperatures 20-28°C',
        highlights: ['Wine festivals', 'Outdoor cafes', 'Village exploration']
      },
      {
        name: 'Christmas Season',
        months: ['December'],
        description: 'Famous Christmas markets and festive atmosphere',
        activities: ['Christmas markets', 'Wine tasting', 'Cathedral visits'],
        weather: 'Cold temperatures 0-8°C',
        highlights: ['Strasbourg Christmas Market', 'Mulled wine', 'Light shows']
      }
    ],
    customs: [
      {
        title: 'Wine Etiquette',
        description: 'Always toast before drinking and maintain eye contact',
        category: 'etiquette'
      },
      {
        title: 'Dining',
        description: 'Lunch is the main meal of the day',
        category: 'culture'
      }
    ]
  },
  {
    id: 'germany',
    name: 'Germany',
    capital: 'Berlin',
    description: 'Rich history, stunning architecture, and vibrant culture',
    imageUrl: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b',
    flagUrl: 'https://flagcdn.com/de.svg',
    established: '1871',
    history: `Germany, formally unified in 1871 under Otto von Bismarck, has a complex history stretching back to the Holy Roman Empire. The country has been at the center of major European historical events, from the Protestant Reformation to the World Wars and subsequent division and reunification.

Berlin, the capital since 1991, symbolizes Germany's journey through history. The city's transformation following the fall of the Berlin Wall in 1989 represents the country's remarkable ability to reconcile with its past while building a progressive future.

Germany's cultural heritage includes contributions to philosophy, music, art, and science. The country gave rise to influential movements like the Bauhaus and figures such as Bach, Beethoven, Goethe, and Einstein. The nation's medieval castles, Gothic cathedrals, and baroque palaces reflect its rich architectural history.

Modern Germany has emerged as Europe's largest economy and a leader in technological innovation, environmental protection, and social progress. The country's commitment to remembering its past while building a peaceful, democratic future has made it a model of post-war reconciliation and development.`,
    currency: 'Euro (EUR)',
    language: 'German',
    timezone: 'UTC+1',
    coordinates: [52.5200, 13.4050],
    budget: {
      low: 60,
      high: 200,
      currency: 'EUR',
      details: {
        accommodation: 'Hotels from €80/night, hostels from €25/night',
        food: 'Meals from €10-30 per person',
        transportation: 'Public transport: €7-10 per day',
        activities: 'Museum entries: €8-15'
      }
    },
    attractions: [
      {
        id: 'brandenburg-gate',
        name: 'Brandenburg Gate',
        description: 'Iconic 18th-century neoclassical monument',
        imageUrl: 'https://goeasyberlin.de/wp-content/uploads/2016/11/Brandenburger-Tor-facebook-e1480504772406.jpg',
        rating: 4.8,
        reviews: [],
        location: [52.5163, 13.3777]
      },
      {
        id: 'neuschwanstein',
        name: 'Neuschwanstein Castle',
        description: 'Fairy-tale castle in the Bavarian Alps',
        imageUrl: 'https://www.neuschwanstein.de/bilder/schloss/neuschwanstein_ostansicht_www.kreativ-instinkt.de_DI016842-790.jpg',
        rating: 4.9,
        reviews: [],
        location: [47.5576, 10.7498]
      }
    ],
    seasons: [
      {
        name: 'Summer',
        months: ['June', 'July', 'August'],
        description: 'Festival season with warm weather',
        activities: ['Beer gardens', 'Hiking', 'City tours'],
        weather: 'Warm temperatures 20-25°C',
        highlights: ['Summer festivals', 'Beer gardens', 'Outdoor concerts']
      },
      {
        name: 'Christmas Season',
        months: ['December'],
        description: 'Traditional Christmas markets nationwide',
        activities: ['Christmas markets', 'Ice skating', 'Museum visits'],
        weather: 'Cold temperatures 0-5°C',
        highlights: ['Nuremberg Christmas Market', 'Glühwein', 'Christmas treats']
      }
    ],
    customs: [
      {
        title: 'Punctuality',
        description: 'Being on time is very important in German culture',
        category: 'culture'
      },
      {
        title: 'Recycling',
        description: 'Strict recycling rules are followed',
        category: 'culture'
      }
    ]
  },
  {
    id: 'portugal-lisbon',
    name: 'Portugal',
    capital: 'Lisbon',
    description: 'Coastal capital with historic charm and vibrant culture',
    imageUrl: 'https://images.unsplash.com/photo-1548707309-dcebeab9ea9b',
    flagUrl: 'https://flagcdn.com/pt.svg',
    established: '1147',
    history: `Lisbon, one of Europe's oldest capitals, was founded by the Phoenicians and later ruled by Romans, Visigoths, and Moors before being conquered by Portuguese crusaders in 1147. The city's golden age came in the 15th and 16th centuries during the Age of Discovery, when it served as the departure point for Portuguese explorers.

The devastating earthquake of 1755 led to a major reconstruction under the Marquis of Pombal, creating the elegant Baixa district with its grid-pattern streets. This rebuilding introduced some of the world's first earthquake-resistant architecture.

The city's historic districts, including Alfama and Bairro Alto, preserve medieval street layouts and traditions like Fado music. The Belém district houses monuments to the Age of Discovery, including the iconic Tower of Belém and Jerónimos Monastery.

Modern Lisbon has emerged as a vibrant cultural and economic center, blending historic charm with contemporary innovation. The city's hills, vintage trams, and riverside setting create a unique urban landscape that continues to attract visitors and new residents from around the world.`,
    currency: 'Euro (EUR)',
    language: 'Portuguese',
    timezone: 'UTC+0',
    coordinates: [38.7223, -9.1393],
    budget: {
      low: 60,
      high: 200,
      currency: 'EUR',
      details: {
        accommodation: 'Hotels from €80/night, hostels from €20/night',
        food: 'Meals from €10-30 per person',
        transportation: 'Metro: €1.50 per ride',
        activities: 'Museum entries: €5-12'
      }
    },
    attractions: [
      {
        id: 'belem-tower',
        name: 'Belém Tower',
        description: 'UNESCO World Heritage fortified tower',
        imageUrl: 'https://images.unsplash.com/photo-1548707309-dcebeab9ea9b',
        rating: 4.7,
        reviews: [],
        location: [38.6916, -9.2164]
      },
      {
        id: 'alfama',
        name: 'Alfama District',
        description: 'Historic neighborhood with Fado music',
        imageUrl: 'https://images.unsplash.com/photo-1513735492246-483525079686',
        rating: 4.8,
        reviews: [],
        location: [38.7123, -9.1307]
      }
    ],
    seasons: [
      {
        name: 'Spring',
        months: ['March', 'April', 'May'],
        description: 'Perfect weather for sightseeing',
        activities: ['City walks', 'River cruises', 'Food tours'],
        weather: 'Mild temperatures 15-25°C',
        highlights: ['Spring festivals', 'Outdoor cafes', 'Cultural events']
      },
      {
        name: 'Christmas Season',
        months: ['December'],
        description: 'Festive atmosphere with mild weather',
        activities: ['Christmas markets', 'Light displays', 'Church visits'],
        weather: 'Mild temperatures 10-15°C',
        highlights: ['Christmas lights', 'Traditional markets', 'New Year fireworks']
      }
    ],
    customs: [
      {
        title: 'Fado Culture',
        description: 'Traditional Portuguese music in local venues',
        category: 'culture'
      },
      {
        title: 'Meal Times',
        description: 'Late lunch and dinner are common',
        category: 'culture'
      }
    ]
  },
  {
    id: 'italy-venice',
    name: 'Italy',
    capital: 'Venice',
    description: 'Romantic city of canals, art, and historic architecture',
    imageUrl: 'https://images.unsplash.com/photo-1514890547357-a9ee288728e0',
    flagUrl: 'https://flagcdn.com/it.svg',
    established: '421 CE',
    history: `Venice, founded in 421 CE, was the capital of the powerful Republic of Venice for over a millennium. The city's unique architecture and art were shaped by its maritime empire and trade dominance.`,
    currency: 'Euro (EUR)',
    language: 'Italian',
    timezone: 'UTC+1',
    coordinates: [45.4408, 12.3155],
    budget: {
      low: 80,
      high: 250,
      currency: 'EUR',
      details: {
        accommodation: 'Hotels from €120/night, hostels from €30/night',
        food: 'Meals from €15-40',
        transportation: 'Vaporetto: €7.50 per ride',
        activities: 'Doge Palace: €25'
      }
    },
    attractions: [
      {
        id: 'san-marco',
        name: "St. Mark's Basilica",
        description: 'Byzantine church with golden mosaics',
        imageUrl: 'https://cdn4.tuscanynowandmore.com/storage/app/media/discover-italy/st-mark-church-venice.jpg',
        rating: 4.8,
        reviews: [],
        location: [45.4347, 12.3397]
      }
    ],
    seasons: [
      {
        name: 'Spring',
        months: ['March', 'April', 'May'],
        description: 'Pleasant weather before summer crowds',
        activities: ['Gondola rides', 'Museum visits', 'Island tours'],
        weather: 'Mild temperatures 15-20°C',
        highlights: ['Carnival', 'Art exhibitions', 'Local festivals']
      }
    ],
    customs: [
      {
        title: 'Aperitivo',
        description: 'Pre-dinner drinks and snacks',
        category: 'culture'
      }
    ]
  }
];