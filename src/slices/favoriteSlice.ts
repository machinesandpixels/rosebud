import {
  createSlice,
} from '@reduxjs/toolkit';
import type { RootState } from '../store/store';

export type FavoriteState = {
    favorites: string[];
};

const initialState: FavoriteState = {
  favorites: [''],
};

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addToFavorites: (state, { payload }) => {
      state.favorites.push(payload);
    },
    removeFavorite: (state, { payload: index }) => {
      state.favorites.splice(index, 1);
    },
    // addToFavorites: (state, action: PayloadAction<string>) => {
    //   state.favorites.push(action.payload);
    // },
  },
});

export const {
  addToFavorites,
  removeFavorite,
} = favoriteSlice.actions;

export const selectFavorites = (state: RootState) => state.favorites;

export default favoriteSlice.reducer;
