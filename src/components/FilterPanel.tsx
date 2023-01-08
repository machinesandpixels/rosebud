import React, { useState } from 'react';
import filterpanel from '../../styles/FilterPanel.module.css';

const FilterPanel = ({ name, active, handleClick }) => {
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
          className={filterpanel.filterItem}
        // onMouseEnter={() => setIsShown(true)}
        // onMouseLeave={() => setIsShown(false)}
          // className={`styles.sidebarItem ${active ? 'active' : ''}`}
          onClick={handleClick}
        >
        </span>
        </div>
      )
    };

export default FilterPanel;
