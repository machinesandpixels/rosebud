import React from 'react';
import { AiOutlineCamera } from 'react-icons/ai';
import {
  Button,
  useColorMode,
} from '@chakra-ui/react';
import styles from '../../styles/ImageGallery.module.css';

const Header = () => {
  const { toggleColorMode } = useColorMode();
  return (
    <div className={styles.headerContainer}>
      <h1 className={styles.header}>
        Images by Rosebud
      </h1>
      <p className={styles.subheader}>Find Your Inner Photographer</p>
      {/* <Button onClick={toggleColorMode} variant="link" colorScheme="black">
        try changing the theme.
      </Button> */}
      <div className={styles.colorModeContainer}>
        <AiOutlineCamera
          onClick={toggleColorMode}
          size="25"
        />
      </div>
    </div>
  );
};

export default Header;
