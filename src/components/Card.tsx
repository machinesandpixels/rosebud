import React, { useState } from 'react';
import Image from 'next/image';
import { FiHeart } from 'react-icons/fi';
import styles from '../../styles/ImageGallery.module.css';

const Card = () => {
  const [isFavorite, setFavorite] = useState(false);

  const handleFavorite = () => {
    setFavorite(!isFavorite);
  };

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
          src="https://picsum.photos/200/"
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
