import {
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import type { RootState } from '../store/store';

export type FavoriteState = {
    favorites: [];
};

const initialState: FavoriteState = {
  favorites: [],
};

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addToFavorites: (state, action: PayloadAction) => {
      state.favorites.push(action.payload);
    },
  },
});

export const {
  addToFavorites,
} = favoriteSlice.actions;

export const selectFavorites = (state: RootState) => state.favorites;

export default favoriteSlice.reducer;
