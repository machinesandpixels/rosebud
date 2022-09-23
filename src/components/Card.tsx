import React from 'react';
import Image from 'next/image';
import { FiHeart } from 'react-icons/fi';

import styles from '../../styles/ImageGallery.module.css';

const Card = () => (
  <div className={styles.card}>
    {/* <span className={styles.logo}> */}
    <div className={`${styles.imageContainer}`}>
      <div className={styles.favoriteIcon}>
        <FiHeart
          fill="grey"
          size="15"
        />
      </div>
      <Image
        src="https://picsum.photos/200/?grayscale"
        alt="card-image"
        width={200}
        height={200}
      />
      {/* </span> */}
    </div>
  </div>
);

export default Card;
