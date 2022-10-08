import React, { useState } from 'react';
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
import ImageSlider from './ImageSlider';

const Card = ({image}) => {
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
      <div className={styles.imageContainer}>
        <div className={styles.favoriteIcon}>
          <FiHeart
            onClick={handleFavorite}
            fill={isFavorite ? 'grey' : 'white'}
            size="11"
          />
        </div>
        <div className={styles.imageSlider}>
          <ImageSlider image={image} />
        </div>
      </div>
    </div>
  );
};

export default Card;
