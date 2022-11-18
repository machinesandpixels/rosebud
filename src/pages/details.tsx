import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import type { NextPage } from 'next';
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
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Tooltip,
} from '@chakra-ui/react';
import Header from '../components/Header';
import styles from '../../styles/Details.module.css';

const Details: NextPage = () => {
    const [sliderValue, setSliderValue] = useState(0);
  const [sliderRange, setSliderRange] = useState('0%');
  const [showTooltip, setShowTooltip] = useState(false);
  return (
    <div>
      <Head>
        <title> Rosebud Images | Find Your Inner Photographer </title>
        <meta
          name="description"
          content="Generated by create next app"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Readex+Pro:wght@500&display=swap" rel="stylesheet" />
      </Head>
      <Header />
      <div className={styles.gallery}>
      <div className={styles.imageContainer}>
      <div className={styles.favoriteIcon}>
        <FiHeart
          size="11"
        />
      </div>
      <Image
        // style={{ filter: `grayscale(${sliderRange})` }}
        className={styles.image}
        src={'https://picsum.photos/200'}
        alt="card-image"
        width={500}
        height={500}
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
    </div>
    </div>
  );
};

export default Details;
