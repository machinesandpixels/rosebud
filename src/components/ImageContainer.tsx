import React, { useState } from 'react';
import { FiHeart } from 'react-icons/fi';
import { HiDownload } from 'react-icons/hi';

import Image from 'next/image';
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Tooltip,
} from '@chakra-ui/react';
import styles from '../../styles/ImageGallery.module.css';

type Props = {
  url: string;
}

const ImageContainer = ({ url }: Props) => {
  const [isFavorite, setFavorite] = useState(false);

  const handleFavorite = () => {
    setFavorite(!isFavorite);
  };
  const [sliderValue, setSliderValue] = useState(5);
  const [sliderRange, setSliderRange] = useState('0%');
  const [showTooltip, setShowTooltip] = useState(false);
  console.log(url);
  return (
    <div className={styles.imageContainer}>
      <div className={styles.favoriteIcon}>
        <FiHeart
          onClick={handleFavorite}
          fill={isFavorite ? 'grey' : 'white'}
          size="11"
        />
      </div>
      <Image
        style={{ filter: `grayscale(${sliderRange})` }}
        className={styles.image}
        src={url}
        // src="https://picsum.photos/id/177/200/"
        alt="card-image"
        width={200}
        height={200}
      />
      <div className={styles.downloadIcon}>
        <HiDownload
          size="12"
        />
      </div>
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
    </div>
  );
};

export default ImageContainer;
