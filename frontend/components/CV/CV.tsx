import React from 'react';
import DropdownButton from '@/components/DropdownButton/DropdownButton';

const CV: React.FC = () => {
  return (
    <div>
      <DropdownButton pages={["Home", "Contact", "About"]} DropdownTitle='Dropdown'/>
      CV
    </div>
  );
};

export default CV;
