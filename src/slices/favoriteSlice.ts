import {
  createSlice,
} from '@reduxjs/toolkit';
import type { RootState } from '../store/store';

export type FavoriteType = {
      id: number;
      url: string;
};

export type FavoriteState = {
    favorites: FavoriteType[];
};

const initialState: FavoriteState = {
  favorites: [],
};

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addToFavorites: (state, { payload }) => {
      if (state.favorites.length === 0) {
        state.favorites.push(payload);
      } else if (state.favorites.length > 0) {
        const found = state.favorites.some((favorite) => favorite.id === payload.id);
        if (!found) state.favorites.push(payload);
      }
    },
    removeFavorite: (state, { payload }) => {
      const index = state.favorites.findIndex((favorite) => favorite.id === payload.id);
      if (index !== -1) {
        state.favorites.splice(index, 1);
      }
    },
  },
});

export const {
  addToFavorites,
  removeFavorite,
} = favoriteSlice.actions;

export const selectFavorites = (state: RootState) => state.favorites;

export default favoriteSlice.reducer;
