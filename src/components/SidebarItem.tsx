import React, { useState } from 'react';
import styles from '../../styles/ImageGallery.module.css';

const SidebarItem = ({ name, active, handleClick }) => {
    // const [isShown, setIsShown] = useState(false);

    return (
      <div className="">
         {/* <p> 
          { name  }
        </p> */}
         {/* <p> 
          { isShown ? name : '' }
        </p> */}
        <span 
          className={styles.sidebarItem}
        // onMouseEnter={() => setIsShown(true)}
        // onMouseLeave={() => setIsShown(false)}
          // className={`styles.sidebarItem ${active ? 'active' : ''}`}
          onClick={handleClick}
        >
        </span>
        </div>
      )
    };

export default SidebarItem;
