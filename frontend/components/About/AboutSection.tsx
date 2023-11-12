import React from 'react';

interface AboutSectionProps {
  title: string;
  icon: React.ReactNode; 
  children: React.ReactNode;
}

const AboutSection: React.FC<AboutSectionProps> = ({ title, icon, children }) => {
  return (
    <div>
      <div>{icon}</div>
      <h2>{title}</h2>
      <p>{children}</p>
    </div>
  );
};

export default AboutSection;
