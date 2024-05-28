import React, { useRef, useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web'
import CountUp from 'react-countup';
import { MdHomeWork } from "react-icons/md";
import { GiFlamethrower, GiGate } from "react-icons/gi";
import { MdOutlineRoofing } from "react-icons/md";
import { RiTruckLine } from "react-icons/ri";
import { GiSteampunkGoggles } from "react-icons/gi";
import { GiGloves } from "react-icons/gi";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa';
import { IoIosStar } from 'react-icons/io';
import { RxAvatar } from "react-icons/rx";
import '../styles.css';

function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');
  const images = ['slider1.jpg', 'slider2.jpg', 'slider3.jpeg'];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isServiceVisible, setIsServiceVisible] = useState(false);
  const [isChooseVisible, setIsChooseVisible] = useState(false);

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

  const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlayPause = () => {
        if (videoRef.current.paused) {
            videoRef.current.play();
            setIsPlaying(true);
        } else {
            videoRef.current.pause();
            setIsPlaying(false);
        }
    };

    const reviews = [
        {
            name: 'Praveen Prasannan',
            rating: 5,
            comment: `Exact timing
            Quality work
            Affordable cost
            Best in town... Not replaceable`,
            profilePhotoUrl: 'https://via.placeholder.com/150'
        },
        {
            name: 'Sunu S',
            rating: 5,
            comment: 'Good quality and affordable prize❣️',
            profilePhotoUrl: 'https://via.placeholder.com/150'
        },
        {
            name: 'Salumon Thaloor',
            rating: 5,
            comment: 'Great service all over in Kerala. Professional working methods and quality works at low price',
            profilePhotoUrl: 'https://via.placeholder.com/150'
        }
    ];

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    const sections = useRef({
        '#home': null,
        '#about': null,
        '#services': null,
        '#projects': null,
        '#contact': null
    });

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.25
        };
    
        const observerCallback = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveLink(`#${entry.target.id}`);
                }
            });
        };
    
        const observer = new IntersectionObserver(observerCallback, options);
    
        Object.values(sections.current).forEach(section => {
            if (section) observer.observe(section);
        });
    
        return () => {
            Object.values(sections.current).forEach(section => {
                if (section) observer.unobserve(section);
            });
        };
    }, []);

  return (
    <div className='overflow-x-hidden' style={{backgroundColor:'#222222'}}>

        {/* Navbar */}

        {/* src={`${process.env.PUBLIC_URL}/logo.jpeg`} */}

        <div className= "z-50 fixed top-0 left-0 right-0" style={{ transition: 'background-color 0.3s', backgroundColor: isScrolled ? '#222222' : 'transparent' }}>
            <div className='container mx-auto'>
                <div className="mx-auto max-w-8xl px-4 sm:px-6 md:px-8 lg:px-10">
                    <div className='flex items-center justify-between h-24'>
                        <div className="flex-shrink-0 navbar-logo">
                            <img href='#home' className="h-8 w-auto lg:h-10 lg:w-auto filter brightness-0 invert" src={`${process.env.PUBLIC_URL}/logo2.png`} alt="Your Company" />
                        </div>
                        <div className="hidden sm:block sm:ml-6 md:flex md:ml-6">
                            <div className="flex flex-grow justify-between navbar-opt">
                                <a 
                                    href="#home" 
                                    className={`px-3 hover:text-red-500 md:text-base lg:text-xl font-bold ${activeLink === '#home' ? 'text-red-500' : 'text-white'}`}
                                    onClick={() => handleLinkClick('#home')}
                                >HOME</a>
                                <a 
                                    href="#about" 
                                    className={`px-3 hover:text-red-500 md:text-base lg:text-xl font-bold ${activeLink === '#about' ? 'text-red-500' : 'text-white'}`}
                                    onClick={() => handleLinkClick('#about')}
                                >ABOUT US</a>
                                <a 
                                    href="#services" 
                                    className={`px-3 hover:text-red-500 md:text-base lg:text-xl font-bold ${activeLink === '#services' ? 'text-red-500' : 'text-white'}`}
                                    onClick={() => handleLinkClick('#services')}
                                >SERVICES</a>
                                <a 
                                    href="#projects" 
                                    className={`px-3 hover:text-red-500 md:text-base lg:text-xl font-bold ${activeLink === '#projects' ? 'text-red-500' : 'text-white'}`}
                                    onClick={() => handleLinkClick('#projects')}
                                >PROJECTS</a>
                                <a 
                                    href="#contact" 
                                    className={`px-3 hover:text-red-500 md:text-base lg:text-xl font-bold ${activeLink === '#contact' ? 'text-red-500' : 'text-white'}`}
                                    onClick={() => handleLinkClick('#contact')}
                                >CONTACT US</a>
                            </div>
                        </div>
                        <div className="flex sm:hidden">
                            <button
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                type="button"
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:text-red-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
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
                        <a href="#home" className={`block px-3 py-2 text-base font-bold hover:text-red-500 ${activeLink === '#home' ? 'text-red-500' : 'text-white'}`}>HOME</a>
                        <a href="#about" className={`block px-3 py-2 text-base font-bold hover:text-red-500 ${activeLink === '#about' ? 'text-red-500' : 'text-white'}`}>ABOUT US</a>
                        <a href="#services" className={`block px-3 py-2 text-base font-bold hover:text-red-500 ${activeLink === '#services' ? 'text-red-500' : 'text-white'}`}>SERVICES</a>
                        <a href="#projects" className={`block px-3 py-2 text-base font-bold hover:text-red-500 ${activeLink === '#projects' ? 'text-red-500' : 'text-white'}`}>PROJECTS</a>
                        <a href="#contact" className={`block px-3 py-2 text-base font-bold hover:text-red-500 ${activeLink === '#contact' ? 'text-red-500' : 'text-white'}`}>CONTACT US</a>
                    </div>
                </div>
            </div>
        </div>
        {/* End of Navbar */}


        {/* Home */}
        <div id="home" ref={el => sections.current['#home'] = el} className="relative h-screen overflow-hidden">
            {images.map((image, index) => (
                <img
                key={index}
                src={process.env.PUBLIC_URL + '/' + image}
                alt={`Image ${index + 1}`}
                className={`absolute inset-0 w-full h-full object-fill  opacity-${index === currentIndex ? '100' : '0'} transition-opacity duration-0 home-img`}
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
            <div id='about' ref={el => sections.current['#about'] = el} className=' flex flex-col px-4 sm:px-6 md:px-8 lg:px-10 md:flex-row lg:flex-row mx-auto mt-28'>
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
                            Welcome to our Kiran Iron Builders! We specialize in high-quality welding services for residential and commercial projects.
                        </p>
                        <p className="mb-4 text-gray-400">
                            From metal fabrication to repairs, our skilled team ensures exceptional results. We focus on craftsmanship, attention to detail, and customer satisfaction.
                        </p>
                        <p className="mb-4 text-gray-400">
                            Contact us today to discuss your project needs. Let us help you achieve your welding goals!
                        </p>
                        <p className="mb-8 text-xl text-white mt-12">
                            Roof works starts @ <span className='text-red-500 font-bold'> SQFT ₹15 </span> only
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
        </div>
        <div className='mb-20'>
            <div>
                <div className='flex mt-10 lg:mt-2 xl:mt-24 lg:ml-8 justify-center'>
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
                <div className='mt-5 lg:mt-12 min-w-max logos flex'>
                    <div className='flex justify-between logos-slide'>
                        <div className='flex items-center mx-5'>
                            <img src={`${process.env.PUBLIC_URL}/clientlogo2.png`} alt="About" className="h-20 lg:h-28 filter brightness-0 invert client-logo" />
                        </div>
                        <div className='flex items-center mx-5'>
                            <img src={`${process.env.PUBLIC_URL}/clientlogo1.png`} alt="About" className="h-10 lg:h-12 filter brightness-0 invert client-logo" />
                        </div>
                        <div className='flex items-center mx-5'>
                            <img src={`${process.env.PUBLIC_URL}/clientlogo4.png`} alt="About" className="h-20 lg:h-28 filter brightness-0 invert client-logo" />
                        </div>
                        <div className='flex items-center mx-5'>
                            <img src={`${process.env.PUBLIC_URL}/clientlogo3.png`} alt="About" className="h-16 lg:h-24 filter brightness-0 invert client-logo" />
                        </div>
                        <div className='flex items-center mx-5'>
                            <img src={`${process.env.PUBLIC_URL}/clientlogo4.png`} alt="About" className="h-20 lg:h-28 filter brightness-0 invert client-logo" />
                        </div>
                    </div>
                    <div className='flex justify-between logos-slide'>
                        <div className='flex items-center mx-5'>
                            <img src={`${process.env.PUBLIC_URL}/clientlogo2.png`} alt="About" className="h-20 lg:h-28 filter brightness-0 invert client-logo" />
                        </div>
                        <div className='flex items-center mx-5'>
                            <img src={`${process.env.PUBLIC_URL}/clientlogo1.png`} alt="About" className="h-10 lg:h-12 filter brightness-0 invert client-logo" />
                        </div>
                        <div className='flex items-center mx-5'>
                            <img src={`${process.env.PUBLIC_URL}/clientlogo4.png`} alt="About" className="h-20 lg:h-28 filter brightness-0 invert client-logo" />
                        </div>
                        <div className='flex items-center mx-5'>
                            <img src={`${process.env.PUBLIC_URL}/clientlogo3.png`} alt="About" className="h-16 lg:h-24 filter brightness-0 invert client-logo" />
                        </div>
                        <div className='flex items-center'>
                            <img src={`${process.env.PUBLIC_URL}/clientlogo4.png`} alt="About" className="h-20 lg:h-28 filter brightness-0 invert client-logo" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ms-8 me-10 gap-4 mt-12 p-4">
                {reviews.map((review, index) => (
                    <div key={index} className="review-card p-4 border rounded-lg shadow-lg bg-white">
                        <div className="flex items-center mb-4">
                        <a alt={review.name} className="w-12 h-12 rounded-full object-cover flex justify-center items-center">
                            <RxAvatar size={44} className='pt-1'/>
                        </a>
                            <div className='ps-3'>
                                <h3 className="font-bold">{review.name}</h3>
                                <div className="flex">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <IoIosStar key={i} className="text-yellow-500" />
                                    ))}
                                </div>
                            </div>
                        </div>
                        <p className="whitespace-pre-line ms-16">{review.comment}</p>
                    </div>
                ))}
            </div>
        </div>
        {/* End of About us */}

        {/* SERVICES */}
        <div class="bg-fixed bg-cover service-img" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/service2.jpeg)`}}>
            <div id='services' ref={el => sections.current['#services'] = el} className='container mx-auto'>
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
                                <MdOutlineRoofing className="h-20 w-20 lg:h-28 lg:w-28 mr-2 text-red-500 srvc-icon" />
                            </div>
                            <div className="text-center">
                                <h1 className='text-white font-bold text-2xl tracking-wide'>POLYCARBON ROOFING</h1>
                                <p className='text-gray-400 mt-5'>Durable and lightweight polycarbonate roofing solutions.</p>
                            </div>
                        </animated.div>
                        <animated.div className="flex flex-col justify-center items-center p-4 border-2 service-card transition-slide" style={serviceanimationProps2}>
                            <div className="mb-4">
                                <MdOutlineRoofing className="h-20 w-20 lg:h-28 lg:w-28 mr-2 text-red-500 srvc-icon"/>
                            </div>
                            <div className="text-center">
                                <h1 className='text-white font-bold text-2xl tracking-wide'>CERAMIC ROOFING</h1>
                                <p className='text-gray-400 mt-5'>Premium ceramic roofing for lasting beauty and durability.</p>
                            </div>
                        </animated.div>
                        <animated.div className="flex flex-col justify-center items-center p-4 border-2 service-card transition-slide" style={serviceanimationProps3}>
                            <div className="mb-4">
                                <MdOutlineRoofing className="h-20 w-20 lg:h-28 lg:w-28 mr-2 text-red-500 srvc-icon" />
                            </div>
                            <div className="text-center">
                                <h1 className='text-white font-bold text-2xl tracking-wide'>STONE COATED SHEET ROOFING</h1>
                                <p className='text-gray-400 mt-5'> Premium stone-coated sheet roofing for enhanced durability and aesthetic appeal.</p>
                            </div>
                        </animated.div>
                        <animated.div className="flex flex-col justify-center items-center p-4 border-2 service-card transition-slide" style={serviceanimationProps4}>
                            <div className="mb-4">
                            {/* < GiFlamethrower /> */}

                                <MdHomeWork className="h-20 w-20 lg:h-28 lg:w-28 mr-2 text-red-500 srvc-icon" />
                            </div>
                            <div className="text-center">
                                <h1 className='text-white font-bold text-2xl tracking-wide'>ON-SITE STRUCTURAL FABRICATION</h1>
                                <p className='text-gray-400 mt-5'>Expert on-site structural fabrication services for precision and durability.</p>
                            </div>
                        </animated.div>
                        <animated.div className="flex flex-col justify-center items-center p-4 border-2 service-card transition-slide" style={serviceanimationProps5}>
                            <div className="mb-4">
                                <GiGate className="h-20 w-20 lg:h-28 lg:w-28 mr-2 text-red-500 srvc-icon" />
                            </div>
                            <div className="text-center">
                                <h1 className='text-white font-bold text-2xl tracking-wide'>AUTOMATIC GATE</h1>
                                <p className='text-gray-400 mt-5'>Reliable automatic gate systems for enhanced security and convenience.</p>
                            </div>
                        </animated.div>
                        <animated.div className="flex flex-col justify-center items-center p-4 border-2 service-card transition-slide" style={serviceanimationProps6}>
                            <div className="mb-4">
                                <GiGloves className="h-20 w-20 lg:h-28 lg:w-28 mr-2 text-red-500 srvc-icon" />
                                {/* <GiSteampunkGoggles className="h-20 w-20 lg:h-28 lg:w-28 mr-2 text-red-500 srvc-icon" /> */}
                            </div>
                            <div className="text-center">
                                <h1 className='text-white font-bold text-2xl tracking-wide'>STAINLESS STEEL FABRICATION</h1>
                                <p className='text-gray-400 mt-5'>High-quality stainless steel fabrication for precision engineering.</p>  
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
                                <p className='text-gray-400 xl:pt-8 px-5 xl:px-12 pb-5'>
                                    Precision at its finest, ensuring excellence in every detail.
                                </p>
                            </animated.div>
                            <animated.div className='choose-card transition-slide' style={ChooserightanimationProps}>
                                <h1 className='text-white font-bold xl:text-xl pt-5 xl:pt-8 px-5'>
                                    02/. Competitive pricing
                                </h1>
                                <p className='text-gray-400 xl:pt-8 px-5 xl:px-12 pb-5'>
                                    Offering competitive pricing without compromising on quality.
                                </p>
                            </animated.div>
                            <animated.div className='choose-card transition-slide' style={ChoosedownanimationProps}>
                                <h1 className='text-white font-bold xl:text-xl pt-5 xl:pt-8 px-5'>
                                    03/. Honest & dependable
                                </h1>
                                <p className='text-gray-400 xl:pt-8 px-5 xl:px-12 pb-5'>
                                    Providing honest and dependable service you can trust.
                                </p>
                            </animated.div>
                            <animated.div className='choose-card transition-slide' style={ChooserightanimationProps}>
                                <h1 className='text-white font-bold xl:text-xl pt-5 xl:pt-8 px-5'>
                                    04/. Customer Satisfaction
                                </h1>
                                <p className='text-gray-400 xl:pt-8 px-5 xl:px-12 pb-5'>
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
        <div id='projects' ref={el => sections.current['#projects'] = el}>
            <div className='container'>
                <h1 className='text-left pl-5 md:text-center lg:text-center font-bold text-red-500 content-heading pt-28'>
                    PROJECTS
                </h1>
                <p className='text-2xl px-16 font-bold text-white md:text-center lg:text-center tracking-wide leading-tight tracking-wider md:px-10 md:text-4xl lg:text-4xl leading-none content-heading'>
                    TRANSFORMATIVE WELDING PROJECTS COMPLETED
                </p>
                <div className="mx-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                    <div className="project-card relative group">
                        <img src={`${process.env.PUBLIC_URL}/ss.jpeg`} alt="Stainless Steel" className="w-full h-full object-cover filter grayscale group-hover:filter-none transition-all duration-300 ease-in-out"/>
                    </div>
                    <div className='mt-16'>
                        <div className="project-card relative group">
                            <img src={`${process.env.PUBLIC_URL}/roofing.jpeg`} alt="Roofing" className="w-full h-full object-cover filter grayscale group-hover:filter-none transition-all duration-300 ease-in-out"/>
                        </div>
                        <div className="project-card relative group mt-4">
                            <img src={`${process.env.PUBLIC_URL}/gate.jpeg`} alt="Gate" className="w-full h-full object-cover filter grayscale group-hover:filter-none transition-all duration-300 ease-in-out"/>                      
                        </div>
                    </div>
                    <div className="project-card relative group">
                        <video 
                            ref={videoRef} 
                            src={`${process.env.PUBLIC_URL}/video.MOV`} 
                            alt="Video" 
                            controls 
                            className={`w-full h-full object-cover filter ${!isPlaying ? 'grayscale' : ''} group-hover:filter-none transition-all duration-300 ease-in-out`}
                            onPlay={() => setIsPlaying(true)}
                            onPause={() => setIsPlaying(false)}
                        />
                        {!isPlaying && (
                            <div 
                                className="absolute inset-0 group-hover:filter-none flex justify-center items-center cursor-pointer"
                                onClick={handlePlayPause}
                            >
                                <div className="flex items-center justify-center w-16 h-16 bg-red-500 rounded-full">
                                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
        {/* End of Project */}
        
    
        {/* Footer */}

        <footer id='contact' ref={el => sections.current['#contact'] = el} className="bg-black text-white py-8 px-8">
            <div className="container mx-auto flex flex-wrap justify-between">
                <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-6 mt-10">
                    <div className='flex flex-col items-center justify-center'>
                        <img src={`${process.env.PUBLIC_URL}/logo.png`} className='filter brightness-0 invert h-24' alt="Map" />
                        <div className='flex mt-5'>
                            <a href="#" className="flex items-center justify-center -ms-5 w-12 h-12 hover:bg-red-500 border border-white rounded-full text-white">
                                <FaInstagram />
                            </a>
                            <a 
                                href="https://wa.me/919207083903" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center mx-5 justify-center w-12 h-12 hover:bg-red-500 border border-white rounded-full text-white">
                                <FaWhatsapp />
                            </a>
                            <a href="https://www.facebook.com/profile.php?id=100063949719420&mibextid=JRoKGi" className="flex items-center justify-center w-12 h-12 border hover:bg-red-500 border-white rounded-full text-white">
                                <FaFacebook />
                            </a>
                        </div>
                    </div>
                </div>
                {/* Contact Information */}
                <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-6">
                    <h2 className="text-lg font-bold mb-4">Contact</h2>
                    <p 
                        className="mb-2 flex items-center tracking-wider hover:text-red-500 leading-loose mt-6"
                        onClick={() => window.open("https://www.google.com/maps?q=9.195950,76.628030", "_blank")}
                    ><FaMapMarkerAlt className="mr-2"/>Nooranadu, Alappuzha</p>
                    <a 
                        className="mb-2 flex items-center tracking-wider hover:text-red-500 leading-loose"
                        href='mailto:Kiranironbuilders@gmail.com'
                    ><FaEnvelope className="mr-2"/>Kiranironbuilders@gmail.com</a>
                    <a 
                        className="mb-2 flex items-center tracking-wider hover:text-red-500 leading-loose"
                        href="tel:+919207083903"
                    ><FaPhoneAlt className="mr-2"/>+91 9207083903</a>
                    <a
                        href="https://wa.me/919207083903" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="mb-2 flex items-center tracking-wider hover:text-red-500 leading-loose"
                    ><FaWhatsapp className="mr-2"/>+91 9207083903</a>
                </div>

                {/* Map Image */}
                <div className="w-full md:w-1/2 lg:w-1/4 mb-6 flex flex-wrap justify-between pe-4">
                    <h2 className="text-lg font-bold mb-4">We are here!</h2>
                    <img 
                        src={`${process.env.PUBLIC_URL}/map.jpeg`} 
                        alt="Map" 
                        className="h-40 mt-1 rounded-lg shadow-lg cursor-pointer mr-2"
                        onClick={() => window.open("https://www.google.com/maps?q=9.195950,76.628030", "_blank")}
                    />
                </div>

                {/* Sitemap */}
                <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-6 justify-items-end">
                    <h2 className="text-lg font-bold mb-4">Sitemap</h2>
                    <ul className='mt-5'>
                        <li><a href="#home" className="text-gray-400 hover:text-red-500 tracking-wider leading-loose">Home</a></li>
                        <li><a href="#about" className="text-gray-400 hover:text-red-500 tracking-wider leading-loose">About us</a></li>
                        <li><a href="#services" className="text-gray-400 hover:text-red-500 tracking-wider leading-loose">Services</a></li>
                        <li><a href="#projects" className="text-gray-400 hover:text-red-500 tracking-wider leading-loose">Project</a></li>
                        <li><a href="#contact" className="text-gray-400 hover:text-red-500 tracking-wider leading-loose">Contact</a></li>
                    </ul>
                </div>
            </div>
        </footer>

        {/* End of Footer */}

    </div>
  );
}

export default Home;
