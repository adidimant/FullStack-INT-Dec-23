import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface StoreState {
  favorites: string[];
  addFavorite: (countryId: string) => void;
  removeFavorite: (countryId: string) => void;
}

export const useStore = create<StoreState>()(
  persist(
    (set) => ({
      favorites: [],
      addFavorite: (countryId) =>
        set((state) => ({
          favorites: [...state.favorites, countryId],
        })),
      removeFavorite: (countryId) =>
        set((state) => ({
          favorites: state.favorites.filter((id) => id !== countryId),
        })),
    }),
    {
      name: 'travel-store',
    }
  )
);