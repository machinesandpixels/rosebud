import React from 'react';
import {
  useAppDispatch,
  useAppSelector,
} from '../store/hooks';
import {
  addToFavorites,
  removeFavorite,
  selectFavorites,
} from '../slices/favoriteSlice';
import styles from '../../styles/ImageGallery.module.css';
import column from '../../styles/Column.module.css';

const FavoritesColumn = () => (
  <aside className={`${styles.column} ${styles.scroll}`}>
    <h3> Favorites </h3>
    <div className={column.gallery}>
      <div className={column.card}>
        image
      </div>
      <div className={column.card}>
        image
      </div>
      <div className={column.card}>
        image
      </div>
      <div className={column.card}>
        image
      </div>
      <div className={column.card}>
        image
      </div>
    </div>
  </aside>
);

export default FavoritesColumn;
