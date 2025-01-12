import { StateCreator } from 'zustand';
import { StoreState } from '../types';

export interface FavoritesSlice {
  favorites: string[];
  addFavorite: (countryId: string) => void;
  removeFavorite: (countryId: string) => void;
}

export const createFavoritesSlice: StateCreator<
  StoreState,
  [],
  [],
  FavoritesSlice
> = (set) => ({
  favorites: [],
  addFavorite: (countryId) =>
    set((state) => ({
      favorites: [...state.favorites, countryId],
    })),
  removeFavorite: (countryId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== countryId),
    })),
});