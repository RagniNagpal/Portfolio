import React, { useState }  from 'react'
import { CiLinkedin } from "react-icons/ci";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import me from '../Me.jpg';
import About from '../About/About';

const Home = () => {
  const [showAbout, setshowAbout]=useState(false);

  const handleShowAbout = () => {
    setshowAbout(true);
  };

  const handleCloseAbout = () => {
    setshowAbout(false);
  };
  return (
        <div className='flex bg-black h-screen text-white px-10 items-center justify-between'>

      <div className='first flex-1 text-white  text-lg  font-bold text-center gap-6  flex flex-col justify-start'>
    
        <h1 className='text-7xl text-left'>Ragni Nagpal</h1>
        <h3 className='text-left'>Full Stack Developer</h3>
        <button         onClick={handleShowAbout}
 className='bg-blue-500 w-[100px]'>About Me</button>
 {showAbout && <About onClose={handleCloseAbout}/>}
        </div>

      <div>
  <img
    className="h-[300px] w-[300px] border border-gray-300 rounded-full object-cover mr-[100px]"
    src={me}
    alt="My Image"
  />
</div>


    <div className='Second gap-8 flex flex-col justify-end'>
      <a href="https://www.linkedin.com/in/ragni-nagpal-111615300/" target="_blank" > <CiLinkedin className="text-5xl text-white hover:text-blue-500 cursor-pointer" /></a>

      <a href="mailto:ragninagpal@gmail.com" target="_blank" > <MdEmail className='text-5xl text-white hover:text-blue-500 cursor-pointer'/></a>

      <a href="https://github.com/RagniNagpal" target="_blank"> <FaGithub className="text-5xl hover:text-blue-500  text-white cursor-pointer"/></a>
     
    </div>

    </div>
  )
}

export default Home
