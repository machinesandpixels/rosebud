import React from 'react';
import type { NextPage } from 'next';
import TrendingColumn from '../components/TrendingColumn';
import FavoritesColumn from '../components/FavoritesColumn';
import ImageGalleryColumn from '../components/ImageGalleryColumn';
import styles from '../../styles/ImageGallery.module.css';

const Images: NextPage = () => (
  <main className={styles.grid}>
    <TrendingColumn />
    <ImageGalleryColumn />
    <FavoritesColumn />
  </main>
);

export default Images;
