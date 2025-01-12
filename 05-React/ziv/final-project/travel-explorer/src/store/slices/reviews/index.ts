import { StateCreator } from 'zustand';
import { StoreState } from '../../types';
import { ReviewsSlice } from './types';
import { initialState } from './initialState';
import { createReviewsActions } from './actions';

export const createReviewsSlice: StateCreator<
  StoreState,
  [],
  [],
  ReviewsSlice
> = (set, get) => ({
  ...initialState,
  ...createReviewsActions(set, get),
});

export type { ReviewsSlice, ReviewsState, ReviewsActions } from './types';