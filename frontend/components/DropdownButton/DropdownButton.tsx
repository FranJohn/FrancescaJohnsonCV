'use client'
import React, {useState} from 'react';
import styles from './DropdownButton.module.scss'

interface DropdownButtonProps {
    pages: string[],
    DropdownTitle: string
}

const DropdownButton:React.FC<DropdownButtonProps> = ({pages, DropdownTitle}) => {
    const [showDropdown, setShowDropdown] = useState<boolean>(false);

    const toggleDropdown = () => {
        console.log("Toggling dropdown");
        setShowDropdown(!showDropdown);
    }

    const handleDropdownClick = (page: string) => {
        console.log(page);
    }

    return (
        <div> 
            <div className={styles.dropdown__btn} onClick={toggleDropdown}>
                {DropdownTitle}    
            </div>
            <div className={`${styles.dropdown__container} ${showDropdown ? `show`: ''}`}> 
                {pages.map((page, index) => (
                    <li key={index} onClick={() => handleDropdownClick(page)}>
                        {page}
                    </li>
                ))}
            </div> 
        </div>
    )

}

export default DropdownButton;
