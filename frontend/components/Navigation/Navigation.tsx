'use client'
/**
 * React functional component representing a navigation bar with dropdown functionality.
 *
 * @component
 * @example
 * // Example usage of Navigation component
 * <Navigation title="My Navigation" pages={['Home', 'About', 'Services']} />
 *
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.title - The title of the navigation bar.
 * @param {Array} props.pages - An array of strings representing the pages in the navigation bar.
 * @returns {JSX.Element} Rendered Navigation component.
 */
import React, { useState, useEffect } from 'react';
import styles from './Navigation.module.scss';

/**
 * @typedef {Object} NavigationProps - The props for the Navigation component.
 * @property {string} title - The title of the navigation bar.
 * @property {string[]} pages - An array of strings representing the pages in the navigation bar.
 */
interface NavigationProps {
    title: string;
    pages: string[];
}


/**
 * Navigation component functional definition.
 *
 * @param {NavigationProps} props - The properties passed to the component.
 * @returns {JSX.Element} Rendered Navigation component.
 */
const Navigation: React.FC<NavigationProps> = ({ title, pages}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentRoute, setCurrentRoute] = useState('/home');

    const set_route = (page: string, event: React.MouseEvent) => {
        console.log("setting current page: " + page);
        // Set the current route when the route changes
        setCurrentRoute(`/${page.toLowerCase().replace(' ', '-')}`);
        toggleDropdown();
    };

    /**
    * Toggles the dropdown visibility when the hamburger icon is clicked.
    */
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
        console.log("Toggle dropdown");
    };

    /**
     * Maps the pages to dropdown items.
     *
     * @type {Array<JSX.Element>} Array of JSX elements representing dropdown items.
     */ 
    const dropdownItems = pages.map((item, index) => {
        console.log(`/${item.toLowerCase().replace(' ', '-')}`)

        return (
        <a
            key={index}
            href={`/${item.toLowerCase().replace(' ', '-')}`}
            className={`${styles.dropdown__item} ${currentRoute === `/${item.toLowerCase().replace(' ', '-')}` ? styles.current : ''}`}
            onClick={(event) => set_route(item, event)}
        >
            {item}
        </a>
    )});

    /**
     * Maps the pages to dropdown items.
     *
     * @type {Array<JSX.Element>} Array of JSX elements representing dropdown items.
     */ 
    const navigationItems = pages.map((page, index) => (
        <a
            key={index}
            href={`/${page.toLowerCase().replace(' ', '-')}`}
            data-testid={`nav-link-${page.toLowerCase()}`}
        >
          <div key={index} className={`${styles.page} ${currentRoute === `/${page.toLowerCase().replace(' ', '-')}` ? styles.current : ''}`} onClick={(event) => set_route(page, event)}>
              {page}
          </div>
        </a>
        

      ));

      return (
        <div className={styles.head__container}>
          <div className={`${styles.nav__container} ${isOpen ? styles.open : ''}`}>
            <nav className={`${styles.navigation} ${isOpen ? styles.open : ''}`}>
              <div className={styles.logo}>{title}</div>
              <div className={styles.links}>{navigationItems}</div>
            </nav>
            <div className={styles.dropdown__container}>
              <div className={`${styles.dropdown} ${isOpen ? styles.active : ''}`}>
                <div className={`${styles.dropdown__hamburger}`} onClick={toggleDropdown} data-testid="hamburger">
                  <div className={`${styles['hamburger-line']}`}></div>
                  <div className={`${styles['hamburger-line']}`}></div>
                  <div className={`${styles['hamburger-line']}`}></div>
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.dropdown} ${isOpen ? styles.active : ''}`} data-testid="dropdown">
            <div className={`${styles.dropdown__items}`}>{dropdownItems}</div>
          </div>
        </div>
      );
    };

export default Navigation;
