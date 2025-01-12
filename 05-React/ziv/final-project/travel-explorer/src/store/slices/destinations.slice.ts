import { StateCreator } from 'zustand';
import { StoreState } from '../types';
import { Country } from '../../types';

export interface DestinationsSlice {
  destinations: Country[];
  addDestination: (destination: Country) => void;
  removeDestination: (destinationId: string) => void;
}

export const createDestinationsSlice: StateCreator<
  StoreState,
  [],
  [],
  DestinationsSlice
> = (set) => ({
  destinations: [],
  addDestination: (destination) =>
    set((state) => ({
      destinations: [destination, ...state.destinations],
    })),
  removeDestination: (destinationId) =>
    set((state) => ({
      destinations: state.destinations.filter((d) => d.id !== destinationId),
    })),
});