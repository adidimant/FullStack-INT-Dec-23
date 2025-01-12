import { Country } from '../../types';

export const middleEastCountries: Country[] = [
  {
    id: 'israel',
    name: 'Israel',
    capital: 'Jerusalem',
    description: 'A land of historic significance, diverse culture, and modern innovation',
    imageUrl: 'https://carleton.ca/studyisrael/wp-content/uploads/jerusalem-1712855_new.jpg',
    flagUrl: 'https://flagcdn.com/il.svg',
    established: '1948',
    history: `Israel, officially established in 1948, is a country with a rich history dating back thousands of years. Jerusalem, its capital, is considered holy to three major religions: Judaism, Christianity, and Islam. The modern State of Israel was established following the UN Partition Plan of 1947, marking the realization of the Zionist movement's goal of creating a Jewish homeland.

The country has transformed from a primarily agricultural economy into a technological powerhouse, earning the nickname "Start-Up Nation." Israel is home to numerous significant religious and historical sites, including the Western Wall, the Church of the Holy Sepulchre, and the Dome of the Rock.

Key historical sites include Masada, an ancient fortress overlooking the Dead Sea, the Old City of Jerusalem with its four quarters, and the ancient port city of Caesarea. The country is also known for its diverse landscapes, from the Negev Desert in the south to the fertile Galilee region in the north.

Modern Israel has developed into a multicultural society, blending ancient traditions with contemporary innovation. The country is a leader in fields such as water conservation, agricultural technology, and cybersecurity. Despite regional challenges, Israel has established itself as a major economic and technological hub in the Middle East.`,
    currency: 'Israeli New Shekel (ILS)',
    language: 'Hebrew, Arabic',
    timezone: 'UTC+2',
    coordinates: [31.7683, 35.2137],
    budget: {
      low: 200,
      high: 500,
      currency: 'ILS',
      details: {
        accommodation: 'Hotels from ₪400/night, hostels from ₪100/night',
        food: 'Meals from ₪50-150 per person',
        transportation: 'Public transport: ₪6-10 per ride',
        activities: 'Tours from ₪100-300'
      }
    },
    attractions: [
      {
        id: 'western-wall',
        name: 'Western Wall',
        description: "Ancient limestone wall in Jerusalem's Old City",
        imageUrl: 'https://i0.wp.com/www.touristisrael.com/wp-content/uploads/2021/02/shutterstock_690424699.jpg?resize=1024%2C683&ssl=1',
        rating: 4.9,
        reviews: [],
        location: [31.7767, 35.2345]
      },
      {
        id: 'dead-sea',
        name: 'Dead Sea',
        description: 'Salt lake bordered by Israel and Jordan',
        imageUrl: 'https://i0.wp.com/www.touristisrael.com/wp-content/uploads/2020/05/Dead-Sea-Beaches-scaled-e1589809735923.jpg?fit=1500%2C1000&ssl=1',
        rating: 4.8,
        reviews: [],
        location: [31.5497, 35.4663]
      }
    ],
    seasons: [
      {
        name: 'Spring',
        months: ['March', 'April', 'May'],
        description: 'Perfect weather for sightseeing and outdoor activities',
        activities: ['Historical tours', 'Beach visits', 'Desert excursions'],
        weather: 'Mild temperatures 15-25°C',
        highlights: ['Passover celebrations', 'Spring flowers', 'Pleasant hiking']
      },
      {
        name: 'Christmas Season',
        months: ['December'],
        description: 'Experience Christmas in the Holy Land',
        activities: ['Bethlehem tours', 'Christmas mass', 'Religious sites'],
        weather: 'Cool temperatures 10-20°C',
        highlights: ['Bethlehem Christmas Eve', 'Church ceremonies', 'Christmas markets']
      }
    ],
    customs: [
      {
        title: 'Shabbat',
        description: 'Many businesses close from Friday sunset to Saturday sunset',
        category: 'culture'
      },
      {
        title: 'Modest Dress',
        description: 'Dress modestly when visiting religious sites',
        category: 'etiquette'
      }
    ]
  },
  {
    id: 'uae-dubai',
    name: 'United Arab Emirates',
    capital: 'Dubai',
    description: 'Ultra-modern city rising from the desert with iconic architecture',
    imageUrl: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c',
    flagUrl: 'https://flagcdn.com/ae.svg',
    established: '1971',
    history: `Dubai transformed from a small fishing village into a global metropolis. The discovery of oil in 1966 catalyzed rapid development and architectural innovation.`,
    currency: 'UAE Dirham (AED)',
    language: 'Arabic, English',
    timezone: 'UTC+4',
    coordinates: [25.2048, 55.2708],
    budget: {
      low: 300,
      high: 1000,
      currency: 'AED',
      details: {
        accommodation: 'Hotels from 500 AED/night, apartments from 300 AED/night',
        food: 'Meals from 50-200 AED',
        transportation: 'Metro: 4-8 AED per ride',
        activities: 'Burj Khalifa entry: 149 AED'
      }
    },
    attractions: [
      {
        id: 'burj-khalifa',
        name: 'Burj Khalifa',
        description: "World's tallest building",
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEmz0W8u7Uj1ODblO_FapQfm3npAKOsoQf-Q&s',
        rating: 4.8,
        reviews: [],
        location: [25.1972, 55.2744]
      }
    ],
    seasons: [
      {
        name: 'Winter',
        months: ['November', 'December', 'January', 'February'],
        description: 'Perfect weather for outdoor activities',
        activities: ['Desert safaris', 'Shopping festivals', 'Beach visits'],
        weather: 'Pleasant temperatures 20-30°C',
        highlights: ['Shopping Festival', 'Perfect weather', 'Outdoor events']
      }
    ],
    customs: [
      {
        title: 'Ramadan',
        description: 'Respect fasting during daylight hours',
        category: 'culture'
      }
    ]
  }
];