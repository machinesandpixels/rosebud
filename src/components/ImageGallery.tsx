import React, { useEffect, useState } from 'react';
import { Skeleton, Stack } from '@chakra-ui/react';
import ImageContainer from './ImageContainer';
import {
  useAppDispatch,
  useAppSelector,
} from '../store/hooks';
import {
  getPhotos,
  selectPhotos,
} from '../slices/photoSlice';
import styles from '../../styles/ImageGallery.module.css';

const ImageGallery = () => {
  const dispatch = useAppDispatch();
  const {
    data,
    pending,
    error,
  } = useAppSelector(selectPhotos);

  useEffect(() => {
    dispatch(getPhotos('venice'));
  }, [dispatch]);

  return (
    <section className={styles.gallery}>
      { data.photos.length === 0
        ? <div className={styles.gallery}>
          {[...Array(15)].map((_, i) => (
            <Stack key={i}>
              <Skeleton className={`${styles.card}`} height="180px" width="180px" />
              <Skeleton className={`${styles.card}`} height="7px" width="180px" />
            </Stack>
          ))}
        </div>
        : data.photos.map(({ id, src: { medium } }) => (
          <div className={`${styles.card}`} key={id}>
            <div>
              <ImageContainer
                url={medium}
              />
            </div>
          </div>
        )) }
      {error && <p>Oops, something went wrong</p>}
      {/* {pending && <p>Loading...</p>}
      {data && <p>{data}</p>}
      {error && <p>Oops, something went wrong</p>} */}
    </section>
  );
};

export default ImageGallery;
