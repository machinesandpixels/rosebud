import React from 'react';
import Image from 'next/image';
import styles from '../../styles/ImageGallery.module.css';

const Card = () => (
  <div className={styles.card}>
    {/* <span className={styles.logo}> */}
    <div className={`${styles.imageContainer}`}>
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
