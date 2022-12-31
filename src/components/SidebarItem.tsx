import React from 'react';
import styles from '../../styles/ImageGallery.module.css';

const SidebarItem = ({ name, active, handleClick }) => {
    return (
        <button 
          className={styles.sidebarItem}
          // className={`styles.sidebarItem ${active ? 'active' : ''}`}
          onClick={handleClick}
        >
          {name}
        </button>
      )
    };

export default SidebarItem;
