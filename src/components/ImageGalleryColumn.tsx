import React from 'react';
import ImageGallery from './ImageGallery';
import styles from '../../styles/ImageGallery.module.css';

const ImageGalleryColumn = () => (
  <section className={styles.column}>
    <ImageGallery />
  </section>
);

export default ImageGalleryColumn;
