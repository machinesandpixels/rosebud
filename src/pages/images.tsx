import React, { useEffect } from 'react';
import type { NextPage } from 'next';
import TrendingColumn from '../components/TrendingColumn';
import FavoritesColumn from '../components/FavoritesColumn';
import ImageGalleryColumn from '../components/ImageGalleryColumn';
import styles from '../../styles/ImageGallery.module.css';

import {
  useAppDispatch,
  useAppSelector,
} from '../store/hooks';
import {
  getPhotos,
  selectPhotos,
} from '../slices/photoSlice';
import {
  addToFavorites,
  removeFavorite,
  selectFavorites,
} from '../slices/favoriteSlice';

const Images: NextPage = () => {
  const dispatch = useAppDispatch();
  const {
    data,
    // pending,
    // error,
  } = useAppSelector(selectPhotos);
  const { favorites } = useAppSelector(selectFavorites);

  useEffect(() => {
    dispatch(getPhotos('venice'));
  }, [dispatch]);
  console.log(data);
  console.log(favorites);
  return (
    <div>
      <h2>Images</h2>
      <main className={styles.grid}>
        <TrendingColumn />
        <ImageGalleryColumn />
        <FavoritesColumn />
      </main>
      <button type="button" onClick={() => dispatch(addToFavorites('image'))}>
        Add
      </button>
      <button type="button" onClick={() => dispatch(removeFavorite('image'))}>
        Remove
      </button>
      {/* {pending && <p>Loading...</p>}
      {data && <p>{data}</p>}
      {error && <p>Oops, something went wrong</p>} */}
    </div>
  );
};

export default Images;
