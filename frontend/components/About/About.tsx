'use client'
import React, { useRef, useState, useEffect } from 'react';
import styles from './About.module.css'; // Adjust the import path based on your project structure

const About: React.FC = () => {
  const [textData, setTextData] = useState<any>([]);
  const about1Ref = useRef<HTMLDivElement>(null);
  const about2Ref = useRef<HTMLDivElement>(null);
  const about3Ref = useRef<HTMLDivElement>(null);
  const about4Ref = useRef<HTMLDivElement>(null);
  const backup_text = {
    about1Title: "Introduction",
    about1Content: {
      text: [
        "Introduction content",
        "",
        "Next paragraph"
    ]},
    about2Title: "Education",
    about2Content: {
      text: [
        "Education content",
        "",
        "Next paragraph"
    ]},
    about3Title: "Work",
    about3Content: {text: [
        "Work content",
        "",
        "Next paragraph"
    ]},
    about4Title: "Interests",
    about4Content: {text: [
        "Interests content",
        "",
        "Next paragraph"
    ]}
  }

  useEffect(() => {    
    const fetchData = async () => {
      try {
        console.log("Getting text")
        const response = await fetch('http://localhost:3001/api/aboutText');
        console.log(response)
        const data = await response.json();
        console.log(data)
        setTextData(data);
      } catch (error) {
        console.error('Error fetching text data:', error);
        setTextData(backup_text);
      }
    };

    fetchData();
  }, []);

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
      <section ref={about1Ref} >
        <div className={styles.fullHeightSection}>
          <h2 className={styles.aboutTitle}>{textData.about1Title}</h2>
          <div className={styles.aboutContent}>
            {textData?.about1Content?.text.map((paragraph: string, index: number) => (
              <p key={index} className={styles.aboutContentParagraph}>{paragraph}</p>
            ))}
          </div>
          <button className={styles.bottomButton} onClick={() => scrollToSection(about2Ref)}>
            <span className={styles.buttonText}>Down to {textData.about2Title}</span>
            <span className={styles.arrow}>&#8744;</span>
          </button>
        </div>
      </section>

      {/* Education Section */}
      <section className={styles.navHeightSection} ref={about2Ref}>
        <button className={styles.topButton} onClick={() => scrollToTop()}>
          <span className={styles.arrow}>&#8743;</span>
          <span className={styles.buttonText}>Up to {textData.about1Title}</span>
        </button>
        <h2 className={styles.aboutTitle}>{textData.about2Title}</h2>
        <div className={styles.aboutContent}>
          {textData?.about2Content?.text.map((paragraph: string, index: number) => (
              <p key={index} className={styles.aboutContentParagraph}>{paragraph}</p>
            ))}
        </div>
        <button className={styles.bottomButton} onClick={() => scrollToSection(about3Ref)}>
          <span className={styles.buttonText}>Down to {textData.about3Title}</span>
          <span className={styles.arrow}>&#8744;</span>
        </button>
      </section>

      {/* Work Section */}
      <section className={styles.navHeightSection} ref={about3Ref}>
        <button className={styles.topButton} onClick={() => scrollToSection(about2Ref)}>
          <span className={styles.arrow}>&#8743;</span>
          <span className={styles.buttonText}>Up to {textData.about2Title}</span>
        </button>
        <h2 className={styles.aboutTitle}>{textData.about3Title}</h2>
        <div className={styles.aboutContent}>
          {textData?.about3Content?.text.map((paragraph: string, index: number) => (
              <p key={index} className={styles.aboutContentParagraph}>{paragraph}</p>
            ))}
        </div>
        <button className={styles.bottomButton} onClick={() => scrollToSection(about4Ref)}>
          <span className={styles.buttonText}>Down to {textData.about4Title}</span>
          <span className={styles.arrow}>&#8744;</span>
        </button>
      </section> 

      {/* Interests Section */}
      <section className={styles.navHeightSection} ref={about4Ref}>
        <button className={styles.topButton} onClick={() => scrollToSection(about3Ref)}>
          <span className={styles.arrow}>&#8743;</span>
          <span className={styles.buttonText}>Up to {textData.about3Title}</span>
        </button>
        <h2 className={styles.aboutTitle}>{textData.about4Title}</h2>
        <div className={styles.aboutContent}>
          {textData?.about4Content?.text.map((paragraph: string, index: number) => (
              <p key={index} className={styles.aboutContentParagraph}>{paragraph}</p> 
            ))}
        </div>
      </section>
  </div>
  );
};

export default About;
