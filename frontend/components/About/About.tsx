'use client'
import React, { useRef } from 'react';
import styles from './About.module.css'; // Adjust the import path based on your project structure

const About: React.FC = () => {
  const introductionRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const workRef = useRef<HTMLDivElement>(null);
  const interestsRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={styles.aboutContainer}>
      {/* Introduction Section */}
      <section ref={introductionRef} >
        <div className={styles.fullHeightSection}>
          <h2 className={styles.aboutTitle}>Introduction</h2>
          <p className={styles.aboutContent}>Your introduction content goes here.</p>
          <button className={styles.bottomButton} onClick={() => scrollToSection(educationRef)}>
            <span className={styles.buttonText}>Scroll to Education</span>
            <span className={styles.arrow}>&#8744;</span>
          </button>
        </div>
      </section>

      {/* Education Section */}
      <section className={styles.navHeightSection} ref={educationRef}>
        <button className={styles.topButton} onClick={() => scrollToTop()}>
          <span className={styles.arrow}>&#8743;</span>
          <span className={styles.buttonText}>Scroll to Introduction </span>
        </button>
        <h2 className={styles.aboutTitle}>Education</h2>
        <p className={styles.aboutContent}>Your education content goes here.</p>
        <button className={styles.bottomButton} onClick={() => scrollToSection(workRef)}>
          <span className={styles.buttonText}>Scroll to Work</span>
          <span className={styles.arrow}>&#8744;</span>
        </button>
      </section>

      {/* Work Section */}
      <section className={styles.navHeightSection} ref={workRef}>
        <button className={styles.topButton} onClick={() => scrollToSection(educationRef)}>
          <span className={styles.arrow}>&#8743;</span>
          <span className={styles.buttonText}>Scroll to Education</span>
        </button>
        <h2 className={styles.aboutTitle}>Work Experience</h2>
        <p className={styles.aboutContent}>Your work experience content goes here.</p>
        <button className={styles.bottomButton} onClick={() => scrollToSection(interestsRef)}>
          <span className={styles.buttonText}>Scroll to Interests</span>
          <span className={styles.arrow}>&#8744;</span>
        </button>
      </section> 

      {/* Interests Section */}
      <section className={styles.navHeightSection} ref={interestsRef}>
        <button className={styles.topButton} onClick={() => scrollToSection(workRef)}>
          <span className={styles.arrow}>&#8743;</span>
          <span className={styles.buttonText}>Scroll to Work</span>
        </button>
        <h2 className={styles.aboutTitle}>Interests</h2>
        <p className={styles.aboutContent}>Your interests content goes here.</p>
      </section>
  </div>
    
  );
};

export default About;
