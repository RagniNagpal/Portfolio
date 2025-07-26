import React from 'react';
import img from '../../assets/contact-me.svg';

const Connect = () => {
  return (
    <div className="flex flex-col items-center px-4 py-10 gap-8 bg-gray-50 min-h-screen">
      <img src={img} alt="Contact Illustration" className="w-72 max-w-full" />
      
      <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-6 text-gray-800">Contact Me</h2>
        
        <input 
          type="text" 
          placeholder="Your Name" 
          name="name" 
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" 
        />
        
        <input 
          type="email" 
          placeholder="Your Email" 
          name="email" 
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" 
        />
        
        <textarea 
          placeholder="Your Message" 
          name="message" 
          rows="4"
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
        ></textarea>
        
        <button 
          className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition"
        >
          Send Message
        </button>
      </div>
    </div>
  );
};

export default Connect;
