import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { StoreState } from './types';
import { createFavoritesSlice } from './slices/favorites.slice';
import { createDestinationsSlice } from './slices/destinations.slice';
import { createReviewsSlice } from './slices/reviews.slice';

export const useStore = create<StoreState>()(
  persist(
    (...a) => ({
      ...createFavoritesSlice(...a),
      ...createDestinationsSlice(...a),
      ...createReviewsSlice(...a),
    }),
    {
      name: 'travel-store',
      partialize: (state) => ({
        favorites: state.favorites,
        destinations: state.destinations,
        reviews: state.reviews,
      }),
    }
  )
);
