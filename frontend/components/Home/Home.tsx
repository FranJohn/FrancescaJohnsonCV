'use client'
import React, {useState, useEffect} from 'react';
import Image from 'next/image';
import styles from './Home.module.css';

interface HomeData {
  text: string[];
}

const Home: React.FC = () => {
  const [textData, setTextData] = useState<string[]>([]);

  const backup_text = {
    text: ["Hello, my name is Francesca and I'm a passionate software developer with experience in crafting innovative web applications." ,
    "",
    "My journey in the field of software development began in a small yet dynamic tech company, where I emerged as a key player in our web software projects. Here, I developed a love for frontend development, and gained knowledge of the whole development system. ",
    "", 
    "While working for this company, I have been able to take a leadership role in defining projects, creating wireframes, software architecture planning, unit testing, CI/CD and completing work on the the whole application. I even work on related devices on the network that are sending data to my web applications! The applications that I've developed are currently internal web apps for the company to use to develop, test and demo, serving the specific needs of the organization and have been pivotal in honing my skills and expertise. ",
    "",
    "Although these internal gems can't be showcased to potential employers, this platform serves as a canvas to share my knowledge, expertise, and the essence of my coding journey. Explore my portfolio, skills, and experience to learn more about what I do. "
  ]}

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Getting text")
        const response = await fetch('http://localhost:3001/api/homeText');
        console.log(response)
        const data: HomeData = await response.json();
        console.log(data)
        setTextData(data.text || []);
      } catch (error) {
        console.error('Error fetching text data:', error);
        setTextData(backup_text.text);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src="/profile.jpg"
          alt="Francesca Johnson"
          width={200}
          height={200}
          className={styles.profileImage}
        />
      </div>
      <div className={styles.textContainer}>
        {textData.map((paragraph: string, index: number) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
};

export default Home;
