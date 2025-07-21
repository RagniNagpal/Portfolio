import React, { useState } from 'react';
import { CiLinkedin } from "react-icons/ci";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import me from '../Me.jpg';
import About from '../About/About';
import Navbar from '../Navbar/Navbar';
import videoBg from '../video.mp4'; // make sure the video exists in this path

const Home = () => {
  const [showAbout, setshowAbout] = useState(false);

  const handleShowAbout = () => {
    setshowAbout(true);
  };

  const handleCloseAbout = () => {
    setshowAbout(false);
  };

  return (
    <>
      <Navbar />

      {/* Video Background */}
      <div className="relative h-screen w-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src={videoBg} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Main Content */}
        <div className="relative z-10 flex h-full w-full items-center justify-between px-10 text-white bg-black bg-opacity-50">
          
          {/* Left Section */}
          <div className="first flex-1 text-white text-lg font-bold text-center gap-6 flex flex-col justify-start">
            <h1 className="text-7xl text-left">Ragni Nagpal</h1>
            <h3 className="text-left text-2xl">Full Stack Developer</h3>
            <button
              onClick={handleShowAbout}
              className="bg-blue-500 w-[120px] h-[45px] rounded-lg cursor-pointer shadow-lg"
            >
              About Me
            </button>
            {showAbout && <About onClose={handleCloseAbout} />}
          </div>

          {/* Center Image */}
          <div>
            <img
              className="h-[300px] w-[300px] border border-gray-300 rounded-full object-cover mr-[100px] 
                         shadow-lg transition duration-500 ease-in-out 
                         transform hover:scale-105 hover:shadow-red-800 hover:shadow-2xl"
              src={me}
              alt="My Image"
            />
          </div>

          {/* Right Social Icons */}
          <div className="Second gap-8 flex flex-col justify-end">
            <a
              href="https://www.linkedin.com/in/ragni-nagpal-111615300/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CiLinkedin className="text-5xl text-white hover:text-blue-500 cursor-pointer" />
            </a>

            <a href="mailto:ragninagpal@gmail.com" target="_blank" rel="noopener noreferrer">
              <MdEmail className="text-5xl text-white hover:text-blue-500 cursor-pointer" />
            </a>

            <a href="https://github.com/RagniNagpal" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-5xl hover:text-blue-500 text-white cursor-pointer" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
