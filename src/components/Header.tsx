import React from 'react';
import { AiOutlineCamera } from 'react-icons/ai';
import {
  Button,
  useColorMode,
} from '@chakra-ui/react';
import header from '../../styles/Header.module.css';

const Header = () => {
  const { toggleColorMode } = useColorMode();
  return (
    <div className={header.headerContainer}>
      <h1 className={header.title}>
        Images by Rosebud
      </h1>
      <p className={header.subtitle}>Find Your Inner Photographer</p>
      {/* <Button onClick={toggleColorMode} variant="link" colorScheme="black">
        try changing the theme.
      </Button> */}
      <div className={header.colorModeContainer}>
        <AiOutlineCamera
          onClick={toggleColorMode}
          size="25"
        />
      </div>
    </div>
  );
};

export default Header;
