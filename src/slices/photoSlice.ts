import {
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit';
import axios from 'axios';
import type { RootState } from '../store/store';

export type PhotoState = {
    data: { photos: [] };
    pending: boolean;
    error: boolean;
  };

const initialState: PhotoState = {
  data: { photos: [] },
  pending: false,
  error: false,
};

const BASE_URL = 'https://api.pexels.com/v1/search?query=';

export const getPhotos = createAsyncThunk('api/photos', async (search: string) => {
  const headers = {
    'Content-type': 'application/json',
    Authorization: `${process.env.NEXT_PUBLIC_API_KEY}`,
  };

  const { data } = await axios.get(`${BASE_URL}${search}`, { headers });
  return data;
});

export const photoSlice = createSlice({
  name: 'photo',
  initialState,
  reducers: {
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
