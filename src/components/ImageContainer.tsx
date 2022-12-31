import React, { useState } from 'react';
import { FiHeart } from 'react-icons/fi';
import { HiDownload } from 'react-icons/hi';
import Image from 'next/image';
import { saveAs } from 'file-saver';
import {
  Button,
  Center,
  Portal,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
} from '@chakra-ui/react';
import SidebarItem from './SidebarItem';
import Slider from './Slider';
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
const DEFAULT_OPTIONS = [
  {
    name: 'Grayscale',
    property: 'grayscale',
    value: 0,
    range: {
      min: 0,
      max: 100,
    },
    unit: '%',
  },
  {
    name: 'Blur',
    property: 'blur',
    value: 0,
    range: {
      min: 0,
      max: 100,
      // max: 20,
    },
    unit: 'px',
  },
  {
    name: 'Opacity',
    property: 'opacity',
    value: 100,
    range: {
      min: 100,
      max: 0,
    },
    unit: '%',
  },
  // {
  //   name: 'Brightness',
  //   property: 'brightness',
  //   value: 0,
  //   range: {
  //     min: 0,
  //     max: 200,
  //   },
  //   unit: '%',
  // },
  {
    name: 'Contrast',
    property: 'contrast',
    value: 100,
    range: {
      min: 100,
      max: 200,
    },
    unit: '%',
  },
];

const ImageContainer = ({ id, url }: Props) => {
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);
  const [options, setOptions] = useState(DEFAULT_OPTIONS);
  const selectedOption = options[selectedOptionIndex];

  function handleSlider({ target }) {
    setOptions((prevOptions) => prevOptions.map((option, index) => {
      if (index !== selectedOptionIndex) { return option; }
      return { ...option, value: target.value };
    }));
  }

  function getImageStyle() {
    const filters = options.map((option) => `${option.property}(${option.value}${option.unit})`);
    return { filter: filters.join(' ') };
  }

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
    saveAs(img, `${img}.jpg`);
  };

  // This function will be triggered when you start dragging
  const dragStartHandler = (
    event: React.DragEvent<HTMLDivElement>,
    data: string,
  ) => {
    event.dataTransfer.setData('image', data);
  };

  const j = JSON.stringify({ id, url });

  return (
    <div className={styles.imageContainer}>
      <div className={styles.favoriteIcon}>
        <FiHeart
          onClick={() => { handleFavorite(); }}
          fill={isFavorite ? 'grey' : 'white'}
          size="11"
        />
      </div>
      <div className={styles.sidebar}>
        {options.map((option, index) => (
          <SidebarItem
            key={index}
            name={option.name}
            active={index === selectedOptionIndex}
            handleClick={() => {
              setSelectedOptionIndex(index);
            }}
          />
        ))}
      </div>
      <Image
        onDragStart={(event) => dragStartHandler(event, j)}
        draggable
        style={getImageStyle()}
        className={styles.image}
        src={url}
        alt="card-image"
        width={200}
        height={200}
      />
      <Popover>
        <PopoverTrigger>
          <div className={styles.downloadIcon}>
            <HiDownload
              size="12"
            />
          </div>
        </PopoverTrigger>
        <Portal>
          <PopoverContent>
            <PopoverArrow />
            <PopoverHeader fontWeight="semibold">
              <Center>
                <p>Download this image ?</p>
              </Center>
            </PopoverHeader>
            <PopoverCloseButton />
            <PopoverBody>
              <Center onClick={() => { downloadImage(url); }} h="20px" color="white">
                <Button w="140px" h="25px" bg="black">
                  <p>Download</p>
                </Button>
              </Center>
            </PopoverBody>
          </PopoverContent>
        </Portal>
      </Popover>
      <Slider
        min={selectedOption.range.min}
        max={selectedOption.range.max}
        value={selectedOption.value}
        handleSlider={handleSlider}
      />
    </div>
  );
};

export default ImageContainer;
