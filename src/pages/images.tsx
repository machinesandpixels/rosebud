import React, { useEffect } from 'react';
import type { NextPage } from 'next';
import {
  useAppDispatch,
  useAppSelector,
} from '../store/hooks';
import {
  getPhotos,
  selectPhotos,
} from '../slices/photoSlice';
import {
  addToFavorites,
  selectFavorites,
} from '../slices/favoriteSlice';

const Images: NextPage = () => {
  const dispatch = useAppDispatch();
  const {
    data,
    // pending,
    // error,
  } = useAppSelector(selectPhotos);
  const { favorites } = useAppSelector(selectFavorites);

  useEffect(() => {
    dispatch(getPhotos('venice'));
  }, [dispatch]);
  console.log(data);
  console.log(favorites);
  return (
    <div>
      <h2>Images</h2>
      <button type="button" onClick={() => dispatch(addToFavorites('image'))}>
        CLICK ME!
      </button>
      <p>here</p>
      {/* {pending && <p>Loading...</p>}
      {data && <p>{data}</p>}
      {error && <p>Oops, something went wrong</p>} */}
    </div>
  );
};

export default Images;
