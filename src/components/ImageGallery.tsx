import React, { useEffect } from 'react';
import Card from './Card';
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
      { data.photos.map(obj => {
        return <Card key={obj.id} image={obj} />
      }) }
      {/* {pending && <p>Loading...</p>}
      {data && <p>{data}</p>}
      {error && <p>Oops, something went wrong</p>} */}
    </section>
  );
};

export default ImageGallery;
