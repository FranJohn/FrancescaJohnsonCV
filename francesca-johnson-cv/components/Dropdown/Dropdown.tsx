import React, { useState } from 'react';
import styles from './Dropdown.module.css';

interface DropdownProps {
    pages: string[];
}

const Dropdown: React.FC<DropdownProps> = ({ pages }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [haveText, setHaveText] = useState<string>("");

  const handleItemClick = (item: string) => {
    setHaveText(item);
    toggleDropdown();
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const dropdownItems = pages.map((item, index) => (
    <div
      key={index}
      className={styles.dropdown__item}
      onClick={() => handleItemClick(item)}
    >
      {item}
    </div>
  ));

  return (
    <div className={styles.dropdown__container}>
        <div className={`${styles.dropdown} ${isOpen ? styles.active : ''}`}>
        <div className={`${styles.dropdown__hamburger}`} onClick={toggleDropdown}>
            <div className={`${styles['hamburger-line']}`}></div>
            <div className={`${styles['hamburger-line']}`}></div>
            <div className={`${styles['hamburger-line']}`}></div>
        </div>

        </div>      
        <div className={`${styles.dropdown} ${isOpen ? styles.active : ''}`}>
            <div className={`${styles.dropdown__items}`}>
                {dropdownItems}
            </div>
        </div>      

    </div>
  );
};

export default Dropdown;
