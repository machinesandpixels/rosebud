import React, { useState } from 'react';
import Image from 'next/image';
import { FiHeart } from 'react-icons/fi';
// import EffectSlider from './EffectSlider';
// import {
//   useAppDispatch,
//   useAppSelector,
// } from '../store/hooks';
// import {
//   addToFavorites,
//   removeFavorite,
//   selectFavorites,
// } from '../slices/favoriteSlice';
import styles from '../../styles/ImageGallery.module.css';

const Card = () => {
  // const dispatch = useAppDispatch();
  const [isFavorite, setFavorite] = useState(false);
  // const { favorites } = useAppSelector(selectFavorites);

  const handleFavorite = () => {
    setFavorite(!isFavorite);
    // dispatch(addToFavorites('image'));
    // dispatch(removeFavorite('image'));
  };

  // console.log(favorites);

  return (
    <div className={styles.card}>
      {/* <span className={styles.logo}> */}
      {/* <div className={`${styles.cardContainer}`}> */}
      <div className={styles.imageContainer}>
        <div className={styles.favoriteIcon}>
          <FiHeart
            onClick={handleFavorite}
            fill={isFavorite ? 'grey' : 'white'}
            size="11"
          />
        </div>
        <Image
          className={styles.image}
          src="https://picsum.photos/id/177/200/"
          alt="card-image"
          width={200}
          height={200}
        />
      </div>
      {/* </span> */}
      {/* </div> */}
    </div>
  );
};

export default Card;
