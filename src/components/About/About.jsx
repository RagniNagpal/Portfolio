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
    <div className="fixed top-0 left-0 w-full h-full bg-black text-white z-50 overflow-y-auto p-6">
      Close Button
      <div className="flex justify-end">
        <button onClick={onClose} className="text-white text-3xl hover:text-red-500">
          <IoClose />
        </button>
      </div>
      <h1 className="text-3xl font-bold text-center mb-4">ABOUT ME</h1>
      <p className="text-center max-w-2xl mx-auto mb-6">
        I help business owners and busy web developers to design & develop creative websites that fit their vision and attract visitors to stay forever.
      </p>

      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {techs.map((tech, index) => (
          <span
            key={index}
            className="px-4 py-1 rounded-full bg-gray-800 text-white border border-gray-500 text-sm"
          >
            #{tech}
          </span>
        ))}
      </div>
      
      <div className='flex flex-col items-center'>
          <h1 className="text-2xl font-bold mb-4">MERN STACK</h1>
        <div className='flex justify-center gap-4 text-3xl'>
        <h1><DiMongodb className='text-green-300' />M</h1>
        <h1><SiExpress />E</h1>
        <h1><FaReact className='text-blue-400'/>R</h1>
        <h1><FaNodeJs className='text-green-500'/>N</h1>
        </div>
      </div>

      <div className="mt-12 flex justify-center">
        <img src={photo} alt="Developer" className="w-[300px] md:w-[500px]" />
      </div>
    </div>
  );
};

export default About;
