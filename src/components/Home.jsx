import React, { useRef, useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web'
import CountUp from 'react-countup';
import { FaFacebook } from "react-icons/fa";
import { MdHomeWork } from "react-icons/md";
import { GiFlamethrower } from "react-icons/gi";
import { MdOutlineRoofing } from "react-icons/md";
import { RiTruckLine } from "react-icons/ri";
import { GiSteampunkGoggles } from "react-icons/gi";
import { GiGloves } from "react-icons/gi";

import '../styles.css';

function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const images = ['slider1.jpg', 'slider2.jpg', 'slider3.jpeg'];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isServiceVisible, setIsServiceVisible] = useState(false);
  const [isChooseVisible, setIsChooseVisible] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
        video.play().catch(error => {
            console.error('Autoplay failed:', error);
        });
    }
}, []);

useEffect(() => {
    const handleScroll = () => {
      const aboutTxt = document.querySelector('.about-txt');
      if (aboutTxt) {
        const rect = aboutTxt.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        if (rect.top <= windowHeight && rect.bottom >= 0) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const serviceTxt = document.querySelector('.services-txt');
      if (serviceTxt) {
        const rect = serviceTxt.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        if (rect.top <= windowHeight && rect.bottom >= 0) {
          setIsServiceVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const chooseTxt = document.querySelector('.choose-txt');
      if (chooseTxt) {
        const rect = chooseTxt.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        if (rect.top <= windowHeight && rect.bottom >= 0) {
          setIsChooseVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

const homeanimationProps = useSpring({
    from: { transform: 'translateX(-150%)' },
    to: { transform: 'translateX(0%)' },
    config: { tension: 90, friction: 50 },
    delay: 500,
  });

const aboutleftanimationProps = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateX(0%)' : 'translateX(-150%)',
    config: { tension: 90, friction: 50 },
    delay: 300,
  });

  const aboutrightanimationProps = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateX(0%)' : 'translateX(150%)',
    config: { tension: 90, friction: 50 },
    delay: 300,
  });

  const serviceanimationProps1 = useSpring({
    opacity: isServiceVisible ? 1 : 0,
    transform: isServiceVisible ? 'scale(1)' : 'scale(0.8)',
    config: { tension: 80, friction: 20 },
    delay: 166,
    });

    const serviceanimationProps2 = useSpring({
        opacity: isServiceVisible ? 1 : 0,
        transform: isServiceVisible ? 'scale(1)' : 'scale(0.8)',
        config: { tension: 80, friction: 20 },
        delay: 830,
    });

    const serviceanimationProps3 = useSpring({
        opacity: isServiceVisible ? 1 : 0,
        transform: isServiceVisible ? 'scale(1)' : 'scale(0.8)',
        config: { tension: 80, friction: 20 },
        delay: 498,
    });

    const serviceanimationProps4 = useSpring({
        opacity: isServiceVisible ? 1 : 0,
        transform: isServiceVisible ? 'scale(1)' : 'scale(0.8)',
        config: { tension: 80, friction: 20 },
        delay: 664,
    });

    const serviceanimationProps5 = useSpring({
        opacity: isServiceVisible ? 1 : 0,
        transform: isServiceVisible ? 'scale(1)' : 'scale(0.8)',
        config: { tension: 80, friction: 20 },
        delay: 332,
    });

    const serviceanimationProps6 = useSpring({
        opacity: isServiceVisible ? 1 : 0,
        transform: isServiceVisible ? 'scale(1)' : 'scale(0.8)',
        config: { tension: 80, friction: 20 },
        delay: 996,
    });

  const ChooseanimationProps = useSpring({
    opacity: isChooseVisible ? 1 : 0,
    transform: isChooseVisible ? 'translateY(0%)' : 'translateY(-50%)',
    config: { tension: 90, friction: 50 },
    delay: 300,
  });

  const ChooseleftanimationProps = useSpring({
    opacity: isChooseVisible ? 1 : 0,
    transform: isChooseVisible ? 'translateX(0%)' : 'translateX(-150%)',
    config: { tension: 90, friction: 50 },
    delay: 300,
  });

  const ChooserightanimationProps = useSpring({
    opacity: isChooseVisible ? 1 : 0,
    transform: isChooseVisible ? 'translateX(0%)' : 'translateX(150%)',
    config: { tension: 90, friction: 50 },
    delay: 300,
  });

  const ChoosedownanimationProps = useSpring({
    opacity: isChooseVisible ? 1 : 0,
    transform: isChooseVisible ? 'translateY(0%)' : 'translateY(50%)',
    config: { tension: 90, friction: 50 },
    delay: 300,
  });

  return (
    <div className='overflow-x-hidden' style={{backgroundColor:'#222222'}}>

        {/* Navbar */}

        {/* src={`${process.env.PUBLIC_URL}/logo.jpeg`} */}

        <div className= "z-50 fixed top-0 left-0 right-0" style={{ transition: 'background-color 0.3s', backgroundColor: isScrolled ? '#222222' : 'transparent' }}>
            <div className='container mx-auto'>
                <div className="mx-auto max-w-8xl px-4 sm:px-6 md:px-8 lg:px-10">
                    <div className='flex items-center justify-between h-24'>
                        <div className="flex-shrink-0 navbar-logo">
                            <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" />
                        </div>
                        <div className="hidden sm:block sm:ml-6 md:flex md:ml-6">
                            <div className="flex flex-grow justify-between navbar-opt">
                                <a href="#home" className="text-white md:text-red-500 px-3 md:text-base lg:text-xl font-bold ">HOME</a>
                                <a href="#about" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 md:text-base lg:text-xl font-bold">ABOUT US</a>
                                <a href="#services" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 md:text-base lg:text-xl font-bold">SERVICES</a>
                                <a href="#projects" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 md:text-base lg:text-xl font-bold">PROJECTS</a>
                                <a href="#contact" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 md:text-base lg:text-xl font-bold">CONTACT US</a>
                            </div>
                        </div>
                        <div className="flex sm:hidden">
                            <button
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                type="button"
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                aria-controls="mobile-menu"
                                aria-expanded={mobileMenuOpen}
                            >
                            <span className="sr-only">Open main menu</span>
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
                    <a href="#" className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-bold">Dashboard</a>
                    <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-bold">Team</a>
                    <a href="#projects" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-bold">Projects</a>
                    <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-bold">Calendar</a>
                    </div>
                </div>
            </div>
        </div>
        {/* End of Navbar */}


        {/* Home */}
        <div id="home" className="relative h-screen overflow-hidden">
            {images.map((image, index) => (
                <img
                key={index}
                src={process.env.PUBLIC_URL + '/' + image}
                alt={`Image ${index + 1}`}
                className={`absolute inset-0 w-full h-full  opacity-${index === currentIndex ? '100' : '0'} transition-opacity duration-0 home-img`}
                style={{
                    animation: index === currentIndex ? 'zoom-in 6s ease-in-out' : 'none',
                    filter: index === currentIndex ? 'opacity-100' : 'opacity-0',
                }}
                />
            ))}
            <animated.div className="absolute mt-36 md:mt-52 md:ml-8 lg:mt-52 lg:ml-32 transition-slide transform translate-x-[-100%] md:translate-x-0 transition-slide" style={homeanimationProps}>
                <h1 className="sm:text-6xl md:text-8xl font-bold home-txt">
                    CRAFTED <br/> 
                    SPARKS <br/>
                    <div className="absolute w-28 h-8 mt-3 ml-44 md:w-48 md:h-12 md:mt-8 md:ml-96 bg-gradient-to-r from-red-500 to-transparent"></div>
                    IGNITE <br/>
                    EXCELLENCE
                </h1>
            </animated.div>
        </div>
        {/* End of Home */}

        {/* About us */}
        <div className='container mx-auto '>
            <div className=' flex flex-col px-4 sm:px-6 md:px-8 lg:px-10 md:flex-row lg:flex-row mx-auto mt-28' id='about'>
                <animated.div className='relative sm:w-screen md:w-1/3 lg:w-1/3 xl:w-1/3 text-red-500 transition-slide' style={aboutleftanimationProps}>
                    <h1 className=' sm:block md:hidden lg:hidden xl:hidden font-bold text-red-500 content-heading'>
                        ABOUT US
                    </h1>
                    <img src={`${process.env.PUBLIC_URL}/about.jpeg`} className='sm:relative md:absolute lg:absolute xl:absolute sm:ml-1 md:ml-4 md:mt-4 mt-8 lg:mt-8 lg:ml-8 top-0 left-0 about-img' alt="About" />
                    <div className="hidden sm:hidden md:block lg:block xl:block w-40 h-32 bg-red-500"></div>
                </animated.div>

                <animated.div className='about-txt sm:w-screen md:w-1/2 lg:w-1/2 xl:w-1/2 md:ml-24 lg:mx-24 xl:mx-28 transition-slide' style={aboutrightanimationProps}>
                    <div>
                        <h1 className='hidden sm:hidden md:block lg:block xl:block font-bold text-red-500 content-heading'>
                            ABOUT US
                        </h1>
                        <p className='font-bold text-white text-3xl tracking-wide leading-tight	tracking-wider md:text-4xl lg:text-6xl leading-none mt-5 '>
                            WELDING <br/> CRAFTSMANSHIP <br/> FORGING EXCELLENCE
                        </p>
                        <p className="mt-8 mb-4 text-gray-400">
                            Welcome to our welding shop! We specialize in high-quality welding services for residential and commercial projects.
                        </p>
                        <p className="mb-4 text-gray-400">
                            From metal fabrication to repairs, our skilled team ensures exceptional results. We focus on craftsmanship, attention to detail, and customer satisfaction.
                        </p>
                        <p className="mb-4 text-gray-400">
                            Contact us today to discuss your project needs. Let us help you achieve your welding goals!
                        </p>
                    </div>
                    <div className='flex flex-col md:flex-row lg:flex-row mx-auto'>
                        <div className="count-value-container">
                            <p className='sm:text-4xl mt-5 md:text-3xl'>
                                <CountUp start={0} end={20} duration={6} separator="," className="count-value" /> + <br/>
                            </p>
                            <p className='text-white font-medium'>Years experience</p>
                        </div>
                        <div className="count-value-container md:ml-28">
                            <p className='sm:text-4xl mt-5 md:text-3xl'>
                                <CountUp start={0} end={12000} duration={6} separator="," className="count-value" /> + <br/>
                            </p>
                            <p className='text-white font-medium'>Project completed</p>
                        </div>
                    </div>
                </animated.div>
            </div>
            <div className='mb-28'>
                <div className='flex lg:mt-2 xl:mt-56 lg:ml-8 justify-center'>
                    <p className='text-center text-white font-bold md:text-4xl'>
                        TRUSTED BY &nbsp;
                    </p>
                    <p className='text-red-500 font-bold md:text-4xl'>
                        <CountUp start={0} end={1250} duration={6} separator="," className="count-value " /> + 
                    </p>
                    <p className='text-white font-bold md:text-4xl'>
                        &nbsp; CLIENTS
                    </p>
                </div>
                <div style={{backgroundColor:'yellow'}}>
                    client logo
                </div>
            </div>
        </div>
        {/* End of About us */}

        {/* SERVICES */}
        <div class="bg-fixed bg-cover service-img" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/service2.jpeg)`}}>
            <div className='container mx-auto' id='services'>
                <h1 className='text-left pl-5 md:text-center lg:text-center font-bold text-red-500 content-heading pt-28'>
                    OUR SERVICES
                </h1>
                <div className='text-left px-5 md:text-center lg:text-center mt-5'>
                    <h1 className='text-2xl font-bold text-white tracking-wide leading-tight tracking-wider md:px-10 md:text-4xl lg:text-6xl leading-none content-heading'>
                        ELEVATE YOUR PROJECT WITH <br/> TOP NOTCH WELDING
                    </h1>
                    <div className='services-txt grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5 md:mx-8 lg:mx-24 xl:mx-28'>
                        <animated.div className="flex flex-col justify-center items-center p-4 border-2 service-card transition-slide" style={serviceanimationProps1}>
                            <div className="mb-4">
                                <MdHomeWork className="h-40 w-40 mr-2 text-red-500 srvc-icon" />
                                 
                            </div>
                            <div className="text-center">
                                <h1 className='text-white font-bold text-2xl tracking-wide'>ON-SITE STRUCTURAL FABRICATION</h1>
                                <p className='text-gray-400 mt-5'>Specialized welding solutions for aluminum structures, ensuring precision and quality.</p>
                            </div>
                        </animated.div>
                        <animated.div className="flex flex-col justify-center items-center p-4 border-2 service-card transition-slide" style={serviceanimationProps2}>
                            <div className="mb-4">
                                <GiGloves className="h-40 w-40 mr-2 text-red-500 srvc-icon"/>
                            </div>
                            <div className="text-center">
                                <h1 className='text-white font-bold text-2xl tracking-wide'>STAINLESS STEEL FABRICATION</h1>
                                <p className='text-gray-400 mt-5'>Expert welding services for stainless steel projects, ensuring strength and durability.</p>
                            </div>
                        </animated.div>
                        <animated.div className="flex flex-col justify-center items-center p-4 border-2 service-card transition-slide" style={serviceanimationProps3}>
                            <div className="mb-4">
                                <RiTruckLine className="h-40 w-40 mr-2 text-red-500 srvc-icon" />
                            </div>
                            <div className="text-center">
                                <h1 className='text-white font-bold text-2xl tracking-wide'>Body</h1>
                                <p className='text-gray-400 mt-5'>Precision metal cutting services tailored to your project needs, ensuring accuracy and efficiency.</p>
                            </div>
                        </animated.div>
                        <animated.div className="flex flex-col justify-center items-center p-4 border-2 service-card transition-slide" style={serviceanimationProps4}>
                            <div className="mb-4">
                            {/* < GiFlamethrower /> */}

                                <MdOutlineRoofing className="h-40 w-40 mr-2 text-red-500 srvc-icon" />
                            </div>
                            <div className="text-center">
                                <h1 className='text-white font-bold text-2xl tracking-wide'>Polycarbon roofing</h1>
                                <p className='text-gray-400 mt-5'>Precision metal cutting services tailored to your needs.</p>
                            </div>
                        </animated.div>
                        <animated.div className="flex flex-col justify-center items-center p-4 border-2 service-card transition-slide" style={serviceanimationProps5}>
                            <div className="mb-4">
                            <MdOutlineRoofing className="h-40 w-40 mr-2 text-red-500 srvc-icon" />

                            </div>
                            <div className="text-center">
                                <h1 className='text-white font-bold text-2xl tracking-wide'>Ceramic roofing</h1>
                                <p className='text-gray-400 mt-5'>Expert structural fabrication solutions delivered directly to your location.</p>
                            </div>
                        </animated.div>
                        <animated.div className="flex flex-col justify-center items-center p-4 border-2 service-card transition-slide" style={serviceanimationProps6}>
                            <div className="mb-4">
                                <GiSteampunkGoggles className="h-40 w-40 mr-2 text-red-500 srvc-icon" />
                            </div>
                            <div className="text-center">
                                <h1 className='text-white font-bold text-2xl tracking-wide'>AUTOMATIC GATE</h1>
                                <p className='text-gray-400 mt-5'>Precision arc welding services for your toughest projects.</p>
                            </div>
                        </animated.div>
                    </div>
                </div>
                <div className='pb-20 choose-txt'>
                    <h1 className='text-left pl-5 font-bold text-red-500 content-heading pt-12 md:mx-8 lg:mx-20 xl:mx-20'>
                        WHY CHOOSE US
                    </h1>
                    <h1 className='text-2xl pt-5 pl-5 font-bold text-white tracking-wide leading-tight tracking-wider md:px-12 lg:mx-16 xl:mx-12 md:text-4xl lg:text-5xl leading-none content-heading'>
                        A bit about what we do and why <br/> to choose us
                    </h1>
                    <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-5 mx-5 xl:mt-10 md:mx-12 lg:mx-20 xl:mx-24'>
                        <animated.div className='transition-slide' style={ChooseleftanimationProps}>
                            <img src={`${process.env.PUBLIC_URL}/roof.jpeg`} className='serv-img'/>
                        </animated.div>
                        <div className=' grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4'>
                            <animated.div className='choose-card transition-slide' style={ChooseanimationProps}>
                                <h1 className='text-white font-bold xl:text-xl pt-5 xl:pt-8 px-5'>
                                    01/. Think precision
                                </h1>
                                <p className='text-gray-400 xl:pt-8 xl:px-12'>
                                    Precision at its finest, ensuring excellence in every detail.
                                </p>
                            </animated.div>
                            <animated.div className='choose-card transition-slide' style={ChooserightanimationProps}>
                                <h1 className='text-white font-bold xl:text-xl pt-5 xl:pt-8 px-5'>
                                    02/. Competitive pricing
                                </h1>
                                <p className='text-gray-400 xl:pt-8 xl:px-12'>
                                    Offering competitive pricing without compromising on quality.
                                </p>
                            </animated.div>
                            <animated.div className='choose-card transition-slide' style={ChoosedownanimationProps}>
                                <h1 className='text-white font-bold xl:text-xl pt-5 xl:pt-8 px-5'>
                                    03/. Honest & dependable
                                </h1>
                                <p className='text-gray-400 xl:pt-8 xl:px-12'>
                                    Providing honest and dependable service you can trust.
                                </p>
                            </animated.div>
                            <animated.div className='choose-card transition-slide' style={ChooserightanimationProps}>
                                <h1 className='text-white font-bold xl:text-xl pt-5 xl:pt-8 px-5'>
                                    04/. Customer Satisfaction
                                </h1>
                                <p className='text-gray-400 xl:pt-8 xl:px-12'>
                                    Ensuring customer satisfaction every step of the way.
                                </p>
                            </animated.div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* ENd of SERVICES */}

        {/* PROJECT */}
        <div id='projects'>
            <div className='container'>
                <h1 className='text-left pl-5 md:text-center lg:text-center font-bold text-red-500 content-heading pt-28'>
                    PROJECTS
                </h1>
                <p className='text-2xl px-16 font-bold text-white md:text-center lg:text-center tracking-wide leading-tight tracking-wider md:px-10 md:text-4xl lg:text-4xl leading-none content-heading'>
                    TRANSFORMATIVE WELDING PROJECTS COMPLETED
                </p>
                <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-5 md:mx-8 lg:mx-24 xl:mx-24'>
                    <div className="flex flex-col justify-center items-center p-4 border-2 project-card">
                        <p>
                            project1
                        </p>
                    </div>
                    <div className="flex flex-col justify-center items-center p-4 border-2 project-card">
                        <p>
                            project2
                        </p>
                    </div>
                    <div className="flex flex-col justify-center items-center p-4 border-2 project-card">
                        <p>
                            project3
                        </p>
                    </div>
                </div>
            </div>
        </div>
        {/* End of Project */}

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
  );
}

export default Home;
