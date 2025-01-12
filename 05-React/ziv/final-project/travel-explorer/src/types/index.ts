export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface Country {
  id: string;
  name: string;
  capital: string;
  description: string;
  imageUrl: string;
  flagUrl: string;
  established: string;
  history: string;
  currency: string;
  language: string;
  timezone: string;
  coordinates: [number, number];
  budget: Budget;
  attractions: Attraction[];
  seasons: Season[];
  customs: Custom[];
}

export interface Budget {
  low: number;
  high: number;
  currency: string;
  details: {
    accommodation: string;
    food: string;
    transportation: string;
    activities: string;
  };
}

export interface Attraction {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  rating: number;
  reviews: Review[];
  location: [number, number];
  price?: {
    amount: number;
    currency: string;
  };
}

export interface Season {
  name: string;
  months: string[];
  description: string;
  activities: string[];
  weather: string;
  highlights: string[];
}

export interface Custom {
  title: string;
  description: string;
  category: 'etiquette' | 'culture' | 'safety' | 'transportation';
}

export interface Review {
  id: string;
  userId: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Weather {
  current: {
    temp: number;
    condition: string;
    icon: string;
    humidity: number;
    windSpeed: number;
  };
  forecast: {
    date: string;
    temp: {
      min: number;
      max: number;
    };
    condition: string;
    icon: string;
    precipitation: number;
  }[];
}

export interface UserNote {
  id: string;
  countryId: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  visitedCountries: string[];
  wishlist: string[];
  notes: UserNote[];
  reviews: Review[];
}

export interface PriceAlert {
  id: string;
  countryId: string;
  targetPrice: number;
  currency: string;
  active: boolean;
  createdAt: string;
}