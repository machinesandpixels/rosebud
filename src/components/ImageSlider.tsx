import React, { useState } from 'react';
import Image from 'next/image';
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Tooltip,
} from '@chakra-ui/react';
import styles from '../../styles/ImageGallery.module.css';

const ImageSlider = () => {
  const [sliderValue, setSliderValue] = useState(5);
  const [sliderRange, setSliderRange] = useState('0%');
  const [showTooltip, setShowTooltip] = useState(false);
  return (
    <>
      <Image
        style={{ filter: `grayscale(${sliderRange})` }}
        className={styles.image}
        src="https://picsum.photos/id/177/200/"
        alt="card-image"
        width={200}
        height={200}
      />
      <Slider
        id="slider"
        defaultValue={0}
        min={0}
        max={100}
        colorScheme="grey"
        onChange={(v) => setSliderValue(v)}
        onChange={(v) => setSliderRange(`${v.toString()}%`)}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <Tooltip
          hasArrow
          bg="black"
          color="white"
          placement="top"
          isOpen={showTooltip}
          label={`${sliderValue}%`}
        >
          <SliderThumb />
        </Tooltip>
      </Slider>
    </>
  );
};

export default ImageSlider;
