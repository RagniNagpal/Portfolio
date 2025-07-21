import React from 'react';
import photo from '../../assets/coder.svg';
import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { IoClose } from 'react-icons/io5';

const techs = [
  'javascript', 'react.js', 'redux', 'node.js', 'express.js', 'mongoDB',
  'mongoose', 'ejs', 'html', 'css', 'bootstrap',
  'tailwind', 'git', 'github', 'terminal', 'figma'
];

const About = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-40 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center">
      {/* Floating About Box */}
      <div className="relative w-[90%] max-w-[850px] h-[90%] bg-[#0f172a] text-white rounded-2xl p-8 shadow-xl ">
        
        {/* Close Button */}
        <button onClick={onClose} className="absolute top-4 right-4 text-white text-3xl hover:text-red-500">
          <IoClose />
        </button>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full overflow-hidden">
          
          {/* Left Section */}
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-3xl font-bold text-center mb-4">ABOUT ME</h1>
              <p className="text-center mb-6">
                I help business owners and busy web developers to design & develop creative websites that fit their vision and attract visitors to stay forever.
              </p>
              <div className="flex flex-wrap justify-center gap-3 mb-10">
                {techs.map((tech, index) => (
                  <span key={index} className="px-4 py-1 rounded-full bg-gray-800 text-white border border-gray-500 text-sm">
                    #{tech}
                  </span>
                ))}
              </div>
            </div>

            {/* MERN Stack Section */}
            <div className='flex flex-col items-center'>
              <h1 className="text-2xl font-bold mb-4">MERN STACK</h1>
              <div className='flex justify-center gap-4 text-3xl'>
                <h1><DiMongodb className='text-green-300' />M</h1>
                <h1><SiExpress />E</h1>
                <h1><FaReact className='text-blue-400' />R</h1>
                <h1><FaNodeJs className='text-green-500' />N</h1>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center justify-center">
            <img src={photo} alt="Developer" className="w-[300px] md:w-[90%] transition-transform duration-300 hover:scale-105 drop-shadow-[0_0_20px_rgba(59,130,246,0.5)]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
