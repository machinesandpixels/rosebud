import React, { useEffect } from 'react';
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
      {pending && <p>Loading...</p>}
      { data && data.photos.map(({ id, src: { medium } }) => (
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
