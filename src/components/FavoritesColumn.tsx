import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import {
  addToFavorites,
  removeFavorite,
  selectFavorites,
} from '../slices/favoriteSlice';
import {
  useAppDispatch,
  useAppSelector,
} from '../store/hooks';
import styles from '../../styles/ImageGallery.module.css';
import column from '../../styles/Column.module.css';

const FavoritesColumn = () => {
  const { favorites } = useAppSelector(selectFavorites);
  const [isFavorite, setFavorite] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
  }, [favorites]);

  console.log(favorites);
  // const handleFavorite = () => {
  //   if (isFavorite) {
  //     dispatch(removeFavorite({ id, url }));
  //     setFavorite(false);
  //   } else if (!isFavorite) {
  //     dispatch(addToFavorites({ id, url }));
  //     setFavorite(true);
  //   }
  // };

  return (
    <aside className={`${styles.column} ${styles.scroll}`}>
      <h3> Favorites </h3>
      <div className={column.gallery}>
        {
      favorites.map((fav) => {
      return(
      <div className={column.card} key={fav.id}>
        <Image
          className={styles.image}
          src={fav.url}
          alt="card-image"
          width={120}
          height={100}
        />
      </div>
      )
      })
    }
      </div>
    </aside>
  );
};

export default FavoritesColumn;
