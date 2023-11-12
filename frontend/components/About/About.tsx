'use client'
import React, { useRef, useState, useEffect } from 'react';
import styles from './About.module.css'; // Adjust the import path based on your project structure

const About: React.FC = () => {
  const [textData, setTextData] = useState<any>([]);
  const [flashButtons, setFlashButtons] = useState(true);
  const sectionRefs: React.RefObject<HTMLDivElement>[] = Array(5).fill(0).map(() => useRef<HTMLDivElement>(null));

  const backup_text = {
    "about1": {
        "Title": "Introduction",
        "Content": {
            "text": [
            "Hello. I'm Francesca, a passionate software developer hailing from Tunbridge Wells in Kent, England, and currently calling the beautiful landscapes of Oxfordshire my home.",
            "My journey in the tech world began with a First Degree Master's in Electronic and Electrical Engineering. While navigating the complexities of circuits and systems, I discovered my true passion lay in the world of coding.",
            "Fast forward to today, and I find myself immersed in the dynamic realm of software development. My expertise spans a spectrum of roles, from crafting innovative web applications with a focus on frontend development to venturing into high-profile project management.",
            "My current role is varied, which has exposed me to a wide range of sectors, technologies and customers. However, my major focus throughout has been Frontend development and I would be excited to move into a role that allows me to further develop these skills and specialise."
            ]
        }
    },
    "about2": {
        "Title": "Education",
        "Content": {
            "text": [
            "Education content",
            "",
            "Next paragraph"
            ]
        }
    },
    "about3": {
        "Title": "Work",
        "Content": {
            "text": [
            "In the coding realm, I find joy in working with technologies like React, JavaScript, Node.js, Python, and C/C++. If there's a frontend tech I haven't touched yet, I'm likely eager to dive in!",
            "My work is fueled by challenges, shared goals, and collaborative efforts. I've embraced elements of agile development, valuing stakeholder involvement and responsiveness to feedback.",
            "Among my proud achievements are web applications for product configuration and visualization. These product were origionally targeted for the self-driving car market but are now being adopted for use in new products and markets. Overcoming challenges like data encoding, network FTP, and complex mathematical modeling, I've crafted solutions that are now hosted both locally and on the cloud."
            ]
        }
    },
    "about4": {
        "Title": "Leadership and growth",
        "Content": {
            "text": [
            ""
            ]
        }
    },
    "about5": {
        "Title": "Interests",
        "Content": {
            "text": [
            "Beyond coding behind my screen, you'll find me indulging in a variety of interests.", 
            "I'm a Formula 1 enthusiast. I luckily have a group of friends who also love to watch and don't seem to mind me nattering about it!",
            "I love spending time exploring new topics through podcasts and books. Learning new things interests me greatly and i love science, technology and business topics.",
            "Aside from this, I really enjoy heading out into the countryside for walks (especially when I can borrow a dog or two from friends and family!). I love getting some light exercise into my daily routine and find a dog walk a day is the perfect way to get this."
        ]}
    }
  }

  useEffect(() => {
    // Flash the buttons twice on the initial render
    let flashCount = 0;
    const flashInterval = setInterval(() => {
      setFlashButtons((prev) => !prev);
      flashCount++;

      if (flashCount === 4) {
        // Stop flashing after two rounds
        clearInterval(flashInterval);
        setFlashButtons(false);
      }
    }, 500); // Adjust the interval based on your preference

    // Clean up the interval on component unmount
    return () => clearInterval(flashInterval);
  }, []);

  useEffect(() => {    
    const fetchData = async () => {
      try {
        console.log("Getting text")
        const response = await fetch('http://localhost:3001/api/aboutText');
        console.log(response)
        const data = await response.json();
        console.log(data)
        setTextData(data.data);
      } catch (error) {
        console.error('Error fetching text data:', error);
        setTextData(backup_text);
      }
    };

    fetchData();
  }, []);

  const scrollToSection = (index: number) => {
    if (sectionRefs[index].current) {
      sectionRefs[index].current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleClick = (index: number) => {
    index !==0 ? scrollToSection(index) : scrollToTop();
  };

  return (
    <div className={styles.aboutContainer}>
      {textData?.map((aboutSection: any, index: number) => (
        <section key={`section ${index}`} className={styles.aboutSection} ref={sectionRefs[index]} >
          <div  key={`section_container ${index}`} className={index === 0 ? styles.fullHeightSection: styles.navHeightSection}>
            {index !== 0 && (
              <button key={`up button ${index}`}                 className={`${styles.topButton} ${flashButtons ? styles.flashButtons : ''}`} onClick={() => handleClick(index-1)}>
              <span  key={`up button icon ${index}`} className={styles.arrow}>&#8743;</span>
              <span  key={`up button text ${index}`} className={styles.buttonText}>Up to {textData[index-1].Title}</span>
              </button>
            )}
            <h2 key={`section title ${index}`} className={styles.aboutTitle}>{aboutSection.Title}</h2>
            <div key={`section content ${index}`} className={styles.aboutContent}>
              {aboutSection?.Content?.text.map((paragraph: string, contentIndex: number) => (
                <p key={`${index} ${contentIndex}`} className={styles.aboutContentParagraph}>{paragraph}</p>
              ))}
            </div>
            {index < Object.keys(textData).length - 1 && (
              <button key={`down button ${index}`}                 className={`${styles.topButton} ${flashButtons ? styles.flashButtons : ''}`} onClick={() => scrollToSection(index+1)}>
                <span  key={`down button text ${index}`}  className={styles.buttonText}>Down to {textData[index+1].Title}</span>
                <span key={`down button icon ${index}`}  className={styles.arrow}>&#8744;</span>
              </button>
            )}
          </div>
        </section>
      ))}
    </div>
  );
};

export default About;
