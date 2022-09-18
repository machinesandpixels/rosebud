import React, { useEffect } from 'react';
import type { NextPage } from 'next';
import styles from '../../styles/Home.module.css';

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

const ImageGallery: NextPage = () => {
  const dispatch = useAppDispatch();
  const {
    data,
    // pending,
    // error,
  } = useAppSelector(selectPhotos);
  const { favorites } = useAppSelector(selectFavorites);

  // useEffect(() => {
  //   dispatch(getPhotos('venice'));
  // }, [dispatch]);
  // console.log(data);
  // console.log(favorites);
  return (
    <div>
      <h2>Images</h2>
      <div className={styles.gallery}>
        <div className="">Left</div>
        <div className={styles.middle}>
          {/* Middle */}
          <div className={styles.box}>1</div>
          <div className={styles.box}>2</div>
          <div className={styles.box}>3</div>
          <div className={styles.box}>4</div>
          <div className={styles.box}>5</div>
          <div className={styles.box}>6</div>
        </div>
        <div className="">Right</div>
      </div>
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

export default ImageGallery;
