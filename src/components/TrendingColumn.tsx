import React from 'react';
import styles from '../../styles/ImageGallery.module.css';
import column from '../../styles/Column.module.css';

const TrendingColumn = () => (
  <aside className={styles.column}>
    <h3>Trending</h3>
    <div className={column.gallery}>
      <div className={column.card} />
      <div className={column.card} />
      <div className={column.card} />
      <div className={column.card} />
      <div className={column.card} />
    </div>
  </aside>
);

export default TrendingColumn;
