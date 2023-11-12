import React from 'react';
import Image from 'next/image';
import styles from './Home.module.css';

const Home: React.FC = () => {
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
        <p>
            Hello, my name is Francesca and I'm a passionate software developer with experience in
            crafting innovative web applications. 
            <br /><br />
            My journey in the field of software development began in a small yet dynamic tech company, where I emerged as a key player in our web 
            software projects. Here, I developed a love for frontend development, and gained knowledge of the whole 
            development system. 
            <br /><br />
            While working for this company, I have been able to take a leadership role in defining projects, creating wireframes, software architecture planning, unit testing, CI/CD and 
            completing work on the the whole application. I even work on related devices on the network that are sending data to my web applications!
            The applications that I've developed are currently internal web apps for the company to use to develop, test and demo, serving the 
            specific needs of the organization and have been pivotal in honing my skills and expertise. 
            <br /><br />
            Although these internal gems can't be showcased to potential employers, this platform serves 
            as a canvas to share my knowledge, expertise, and the essence of my coding journey. 
            Explore my portfolio, skills, and experience to learn more about what I do. 
        </p>
      </div>
    </div>
  );
};

export default Home;
