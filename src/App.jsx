// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Home from './components/Home/Home'
// import Navbar from './components/Navbar/Navbar'
// import About from './components/About/About'
// import Latest from './components/Latest/Latest'


// function App() {
//   return (
//     <div className="w-full h-screen"> 
//       <Home />
//       {/* <About /> */}
//       {/* <Latest /> */}
      
//     </div>
//   )
// }


// export default App
import { useState, useEffect, useRef } from 'react'
import Home from './components/Home/Home'
import Latest from './components/Latest/Latest'

function App() {
  const [scrollEnabled, setScrollEnabled] = useState(false);
  const latestRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = scrollEnabled ? 'auto' : 'hidden';
  }, [scrollEnabled]);

  const handleClick = () => {
    setScrollEnabled(true);
    setTimeout(() => {
      latestRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="w-full">
      {/* First Fullscreen Section */}
      <div className="h-screen bg-black flex flex-col justify-center items-center relative text-white">
        <Home />

        <button
          onClick={handleClick}
          className="mt-8 px-6 py-2 text-white font-semibold rounded-md bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-indigo-600 hover:to-blue-500 transition"
        >
          Latest Works
        </button>

        <div className="mt-4 text-3xl animate-bounce">↓</div>
      </div>

      {/* Target Section */}
      <div ref={latestRef}>
        <Latest />
      </div>
    </div>
  );
}

export default App;
