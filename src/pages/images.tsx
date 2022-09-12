import React, { useEffect } from 'react';
import {
  useAppDispatch,
  useAppSelector,
} from '../store/hooks';
import {
  getPhotos,
  selectPhotos,
} from '../slices/photoSlice';

const Images:React.FC = () => {
  const dispatch = useAppDispatch();
  const {
    data,
    // pending,
    // error,
  } = useAppSelector(selectPhotos);

  useEffect(() => {
    dispatch(getPhotos());
  }, [dispatch]);

  console.log(data);
  return (
    <div>
      <h2>Images</h2>
      {/* {pending && <p>Loading...</p>}
      {data && <p>{data}</p>}
      {error && <p>Oops, something went wrong</p>} */}
    </div>
  );
};

export default Images;
