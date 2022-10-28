import React from 'react';
import {
  Button,
  useColorMode,
} from '@chakra-ui/react';
import styles from '../../styles/ImageGallery.module.css';

const Header = () => {
  const { toggleColorMode } = useColorMode();
  return (
    <div className={styles.headerContainer}>
      <h1 className={styles.header}>Rosebud&apos;s Gallery</h1>
      <p>Find Your Inner Cinematographer</p>
      {/* <Button onClick={toggleColorMode} variant="link" colorScheme="black">
        try changing the theme.
      </Button> */}
    </div>
  );
};

export default Header;
