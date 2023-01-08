import React from 'react';
import slider from '../../styles/Slider.module.css';

const Slider = ({
  min, max, value, handleSlider,
}) => (
  <div>
    <input
      type="range"
      className={slider.slider}
      min={min}
      max={max}
      value={value}
      onChange={handleSlider}
    />
  </div>
);

export default Slider;
