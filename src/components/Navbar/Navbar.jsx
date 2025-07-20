import React from 'react';
import logo from '../logo_transparent.png';

const Navbar = () => {
  return (
    <div className="bg-gray-600 h-[72px] flex items-center px-4 shadow-md">
      <img className="h-20 w-20" src={logo} alt="Logo" />
      
    </div>
  );
};

export default Navbar;
