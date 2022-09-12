import {
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit';
import axios from 'axios';
import type { RootState } from '../store/store';

// here we are typing the types for the state
export type PhotoState = {
    data: [];
    pending: boolean;
    error: boolean;
  };

const initialState: PhotoState = {
  data: [],
  pending: false,
  error: false,
};

// This action is what we will call using the dispatch in order to trigger the API call.
export const getPhotos = createAsyncThunk('api/photos', async () => {
  const { data } = await axios.get('https://picsum.photos/v2/list');
  return data;
});

export const photoSlice = createSlice({
  name: 'photo',
  initialState,
  reducers: {
  // leave this empty here
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPhotos.pending, (state) => {
        state.pending = true;
      })
      .addCase(getPhotos.fulfilled, (state, { payload }) => {
        state.pending = false;
        state.data = payload;
      })
      .addCase(getPhotos.rejected, (state) => {
        state.pending = false;
        state.error = true;
      });
  },
});

export const selectPhotos = (state: RootState) => state.photos;

export default photoSlice.reducer;
