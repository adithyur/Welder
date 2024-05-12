import React, { useState, useEffect } from 'react';
import { FaFacebook } from "react-icons/fa";

import '../styles.css';

function Navbar() {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const images = ['slider1.jpg', 'slider2.jpg', 'slider3.jpeg'];
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 5000);
  
      return () => clearInterval(interval);
    }, [images.length])

  return (
    <div>
    <nav className="bg-black">
      <div className='container mx-auto'>
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8" style={{backgroundColor:'yellow'}}>
        <div className="flex items-center justify-between h-20">
          <div className="flex">
            <div className="flex-shrink-0 justify-start navbar">
              <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" />
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex flex-grow justify-between navbar" style={{backgroundColor:'red'}}>
                <a href="#" className="bg-gray-900 text-white px-3 py-2 rounded-md text-base font-medium">Dashboard</a>
                <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium">Team</a>
                <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium">Projects</a>
                <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium">Contact</a>
              </div>
            </div>
          </div>
          <div className="flex sm:hidden bg-red" style={{backgroundColor:'green'}}>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={mobileMenuOpen}
            >
              <span className="sr-only" style={{color:'red'}}>Open main menu</span>
              {mobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <div className={mobileMenuOpen ? 'block' : 'hidden'} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a href="#" className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium">Dashboard</a>
          <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Team</a>
          <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Projects</a>
          <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Calendar</a>
        </div>
      </div>
      </div>
    </nav>
     {/* <div id="home" className="relative h-screen overflow-hidden">
     {images.map((image, index) => (
         <img
         key={index}
         src={process.env.PUBLIC_URL + '/' + image}
         alt={`Image ${index + 1}`}
         className={`absolute inset-0 w-full h-full  opacity-${index === currentIndex ? '100' : '0'} transition-all duration-1000`}
         style={{
             animation: index === currentIndex ? 'zoom-in 6s ease-in-out' : 'none',
             filter: index === currentIndex ? 'brightness(40%)' : 'brightness(100%)',
         }}
         />
     ))}
 </div> */}

 Home
 <div id="home" className="relative h-screen overflow-hidden">
            {images.map((image, index) => (
                <img
                key={index}
                src={process.env.PUBLIC_URL + '/' + image}
                alt={`Image ${index + 1}`}
                className={`absolute inset-0 w-full h-full  opacity-${index === currentIndex ? '100' : '0'} transition-opacity duration-0`}
                style={{
                    animation: index === currentIndex ? 'zoom-in 6s ease-in-out' : 'none',
                    filter: index === currentIndex ? 'brightness(40%)' : 'brightness(20%)',
                }}
                />
            ))}
            <h1 className={`absolute mt-52 ml-32 text-white text-8xl font-bold home-txt`}>
                CRAFTED <br/> 
                SPARKS <br/>
                <div className="absolute w-72 h-12 mt-8 ml-96 bg-gradient-to-r from-red-500 to-transparent"></div>
                IGNITE <br/>
                EXCELLENCE
            </h1>
        </div>
        {/* End of Home */}

        {/* Contact */}
        <div id='contact' style={{backgroundColor:'#222222'}}>
            <div className='flex container justify-between mx-auto px-4 sm:px-6 md:px-8 lg:px-10' >
                <div>
                    <h3 className='font-bold text-gray-300'>
                        LOCATION
                    </h3>
                    <h3 className='text-white'>
                        Nooranadu, Alapuzha
                    </h3>
                </div>
                <div>
                    <h3 className='font-bold text-gray-300'>
                        EMAIL
                    </h3>
                    <h3 className='text-white'>
                        kiran@gmail.com
                    </h3>
                </div>
                <div>
                    <h3 className='font-bold text-gray-300'>
                        CALL NOW
                    </h3>
                    <h3 className='text-white'>
                        +91 987543210
                    </h3>
                </div>
            </div>
        </div>
        {/* End of contact */}

        {/* Footer */}
        <footer className=" py-4" style={{backgroundColor:'#121212'}}>
            <div className="container mx-auto flex justify-between items-center">
                <div>
                    <a href="#" className="text-white hover:text-gray-400 mr-4">
                        <FaFacebook />
                    </a>
                </div>
                <div>
                    <a href="#" className="text-white hover:text-gray-400 mr-4">Home</a>
                    <a href="#" className="text-white hover:text-gray-400 mr-4">About</a>
                    <a href="#" className="text-white hover:text-gray-400 mr-4">Services</a>
                    <a href="#" className="text-white hover:text-gray-400">Contact</a>
                </div>
            </div>
        </footer>
        {/* End of Footer */}

    </div>

)
}

export default Navbar