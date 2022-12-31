import React from 'react';
import styles from '../../styles/ImageGallery.module.css';
import column from '../../styles/Column.module.css';

const TrendingColumn = () => (
  <aside className={styles.column}>
    <p className={column.title}> Trending </p>
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
