import React from 'react';
import styles from '../../styles/ImageGallery.module.css';

const Slider = ({ min, max, value, handleChange}) => {
  return (
    <div className={styles.sidebarContainer}>
    <input
      type="range"
      className={styles.slider}
      min={min}
      max={max}
      value={value}
      onChange={handleChange}
    />
  </div>
  );
}

export default Slider;