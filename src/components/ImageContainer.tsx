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
  selectFavorites,
} from '../slices/favoriteSlice';
import {
  useAppDispatch,
  useAppSelector,
} from '../store/hooks';
import styles from '../../styles/ImageGallery.module.css';

type Props = {
  id: number;
  url: string;
}

const ImageContainer = ({ id, url }: Props) => {
  // const { favorites } = useAppSelector(selectFavorites);
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

  // console.log(favorites);

  const downloadImage = (img: string) => {
    console.log(img);
    // saveAs(img, 'image.jpg');
  };

  const [sliderValue, setSliderValue] = useState(5);
  const [sliderRange, setSliderRange] = useState('0%');
  const [showTooltip, setShowTooltip] = useState(false);

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
