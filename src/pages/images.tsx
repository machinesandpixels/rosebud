import React from 'react';
import type { NextPage } from 'next';
import Header from '../components/Header';
import TrendingColumn from '../components/TrendingColumn';
import FavoritesColumn from '../components/FavoritesColumn';
import ImageGalleryColumn from '../components/ImageGalleryColumn';
import Footer from '../components/Footer';
import styles from '../../styles/ImageGallery.module.css';

const Images: NextPage = () => (
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

export default Images;
