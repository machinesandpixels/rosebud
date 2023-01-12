import React from 'react';
import { AiOutlineCamera } from 'react-icons/ai';
import {
  Button,
  useColorMode,
} from '@chakra-ui/react';
import ModernWonders from './ModernWonders';
import SearchForm from './SearchForm';
import header from '../../styles/Header.module.css';

const Header = () => {
  const { toggleColorMode } = useColorMode();
  return (
    <div className={header.headerContainer}>
      <h1 className={header.title}>
        Rosebud Images
      </h1>
      <p>Find Your Inner Photographer</p>
      {/* <Button onClick={toggleColorMode} variant="link" colorScheme="black">
        try changing the theme.
      </Button> */}
      <div className={header.modernWonders}>
        <ModernWonders />
      </div>
      <div>
        <SearchForm />
      </div>

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
