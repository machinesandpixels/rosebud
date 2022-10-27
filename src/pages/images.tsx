import React, { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import {
  useAppDispatch,
  useAppSelector,
} from '../store/hooks';
import {
  getPhotos,
  selectPhotos,
} from '../slices/photoSlice';
import Header from '../components/Header';
import TrendingColumn from '../components/TrendingColumn';
import FavoritesColumn from '../components/FavoritesColumn';
import ImageGalleryColumn from '../components/ImageGalleryColumn';
import Footer from '../components/Footer';
import styles from '../../styles/ImageGallery.module.css';

const Images: NextPage = () => {
  const {
    data,
  } = useAppSelector(selectPhotos);
  const [state, setState] = useState(data);

  useEffect(() => {
    console.log('state');
    setState(data);
    console.log(state.photos);
  }, [data]);

  return (
  <div>
    <Header />
    <main className={styles.grid}>
      <TrendingColumn />
      <ImageGalleryColumn />
      <FavoritesColumn />
    </main>
    <Footer />
  </div>
  );
};

export default Images;
