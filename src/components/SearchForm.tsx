import React, { useState } from 'react';
import { MdImageSearch } from 'react-icons/md';
import {
  Button, Input, InputGroup, InputRightAddon, InputRightElement,
} from '@chakra-ui/react';
import {
  useAppDispatch,
} from '../store/hooks';
import {
  getPhotos,
} from '../slices/photoSlice';
import searchForm from '../../styles/SearchForm.module.css';

const SearchForm = () => {
  const dispatch = useAppDispatch();
  const [query, setQuery] = useState('');
  // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   alert(query);
  // };
  const handleClick = () => {
    dispatch(getPhotos(query));
  };

  return (
    <form className={searchForm.container}>
      {/* <form onSubmit={handleSubmit}> */}
      <label>
        <input
          className={searchForm.input}
          placeholder="Need Some More Inspiration: Athens, Rome, Venice"
          onChange={(event) => setQuery(event.target.value)}
        />
      </label>
      <Button
        size="sm"
        className={searchForm.btn}
      >
        <MdImageSearch onClick={handleClick} />
      </Button>
    </form>
  );
};

export default SearchForm;
