import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import About from './components/About/About'
import Latest from './components/Latest/Latest'


function App() {
  return (
    <div className="w-full h-screen"> 
      <Home />
      {/* <About /> */}
      {/* <Latest /> */}
    </div>
  )
}


export default App
