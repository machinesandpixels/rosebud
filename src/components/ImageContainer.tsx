import React, { useState } from 'react';
import { FiHeart } from 'react-icons/fi';
import { HiDownload } from 'react-icons/hi';
import Image from 'next/image';
import { saveAs } from 'file-saver';
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Tooltip,
} from '@chakra-ui/react';
import {
  addToFavorites,
  removeFavorite,
} from '../slices/favoriteSlice';
import {
  useAppDispatch,
} from '../store/hooks';
import styles from '../../styles/ImageGallery.module.css';

type Props = {
  id: number;
  url: string;
}

const ImageContainer = ({ id, url }: Props) => {
  const [isFavorite, setFavorite] = useState(false);
  const dispatch = useAppDispatch();

  const handleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite({ id, url }));
      setFavorite(false);
    } else if (!isFavorite) {
      dispatch(addToFavorites({ id, url }));
      setFavorite(true);
    }
  };

  const downloadImage = (img: string) => {
    console.log(img);
    // saveAs(img, 'image.jpg');
  };

  // This function will be triggered when you start dragging
  const dragStartHandler = (
    event: React.DragEvent<HTMLDivElement>,
    data: string,
  ) => {
    event.dataTransfer.setData('image', data);
  };

  const j = JSON.stringify({ id, url });
  const [sliderValue, setSliderValue] = useState(0);
  const [sliderRange, setSliderRange] = useState('0%');
  const [showTooltip, setShowTooltip] = useState(false);

  const handleSlider = (e) => {
    setSliderValue(e);
    setSliderRange(`${e.toString()}%`);
  };

  return (
    <div className={styles.imageContainer}>
      <div className={styles.favoriteIcon}>
        <FiHeart
          onClick={() => { handleFavorite(); }}
          fill={isFavorite ? 'grey' : 'white'}
          size="11"
        />
      </div>
      <Image
        onDragStart={(event) => dragStartHandler(event, j)}
        draggable
        style={{ filter: `grayscale(${sliderRange})` }}
        className={styles.image}
        src={url}
        alt="card-image"
        width={200}
        height={200}
      />
      <div className={styles.downloadIcon}>
        <HiDownload
          onClick={() => { downloadImage(url); }}
          size="12"
        />
      </div>
      <Slider
        id="slider"
        defaultValue={0}
        min={0}
        max={100}
        colorScheme="grey"
        onChange={(input) => handleSlider(input)}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <div className={styles.tooltip} />
        <Tooltip
          hasArrow
          bg="#000000"
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
