import { FavoritesSlice } from './slices/favorites.slice';
import { DestinationsSlice } from './slices/destinations.slice';
import { ReviewsSlice } from './slices/reviews.slice';

export type StoreState = FavoritesSlice & DestinationsSlice & ReviewsSlice;
