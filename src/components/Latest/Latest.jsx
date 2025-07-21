// src/components/Home.jsx
import React from 'react';
import bgVideo from '../video.mp4'; // adjust if needed

const Latest = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        src={bgVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 -z-0"></div>

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white h-full">
        <h1 className="text-6xl font-bold mb-4">Ragni Nagpal</h1>
        <p className="text-2xl mb-6">Full Stack Developer</p>
        <button className="bg-blue-500 px-6 py-2 rounded hover:bg-blue-700 transition duration-300">
          About Me
        </button>
      </div>
    </div>
  );
};

export default Latest;
