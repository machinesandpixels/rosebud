import React from 'react';
import styles from '../../styles/ImageGallery.module.css';

const Slider = ({ min, max, value, handleSlider}) => {
  return (
    <div className={styles.sidebarContainer}>
    <input
      type="range"
      className={styles.slider}
      min={min}
      max={max}
      value={value}
      onChange={handleSlider}
    />
  </div>
  );
}

export default Slider;