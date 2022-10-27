import React, { useEffect } from 'react';
import Image from 'next/image';
import {
  addToFavorites,
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
  const dispatch = useAppDispatch();

  // This function will be triggered when dropping
  const dropHandler = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    dispatch(addToFavorites(JSON.parse(event.dataTransfer.getData('image'))));
  };

  useEffect(() => undefined, [favorites]);

  console.log(favorites);

  // This allows element to become droppable
  const allowDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  return (
    <aside onDragOver={allowDrop} onDrop={dropHandler} className={`${styles.column} ${styles.scroll}`}>
      <h3> Favorites </h3>
      <div className={column.gallery}>
        {
      favorites.map((fav) => (
        <div className={column.card} key={fav.id}>
          <Image
            className={styles.image}
            src={fav.url}
            alt="card-image"
            width={120}
            height={100}
          />
        </div>
      ))
    }
      </div>
    </aside>
  );
};

export default FavoritesColumn;
