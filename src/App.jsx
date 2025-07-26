
// export default App
import { useState, useEffect, useRef } from 'react'
import Home from './components/Home/Home'
import Latest from './components/Latest/Latest'
import laptop from "./components/laptop.png";
import Connect from "./components/Connect/Connect";
import './App.css';


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
      <Connect />
    </div>
  );
}

export default App;
