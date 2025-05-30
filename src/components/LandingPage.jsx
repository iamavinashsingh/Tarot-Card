import React from 'react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useNavigate } from 'react-router-dom';
import Sparkle from './Sparkle';

const LandingPage = () => {
  const bgRef = useRef(null);
  const logoRef = useRef(null);
  const h1ref = useRef(null);
  const h2ref = useRef(null);
  const h3ref = useRef(null);
  const btnRef = useRef(null);
  const tabRef = useRef(null);

  useEffect(() => {
  if (
    !bgRef.current || !logoRef.current || !h1ref.current ||
    !h2ref.current || !h3ref.current || !btnRef.current || !tabRef.current
  ) return;

  const tl = gsap.timeline({ defaults: { ease: "power1.out", duration: 1 } });
  tl.from(bgRef.current, { opacity: 0 })
    .from(tabRef.current, { scale: 0.8, opacity: 0 }, "-=0.01")
    .from(logoRef.current, { y: -100, opacity: 0 }, "-=0.01")
    .from(h1ref.current, { y: -50, opacity: 0 }, "-=0.01")
    .from(h2ref.current, { y: 50, opacity: 0 }, "-=0.01")
    .from(h3ref.current, { y: 50, opacity: 0 }, "-=0.01")
    .from(btnRef.current, { scale: 0.5, opacity: 0 }, "-=0.01")
    
  return () => {
    tl.kill();  // cleanup timeline on unmount
  };
}, []);

  const navigate = useNavigate();
  return (
    <div  className='relative w-full h-screen overflow-hidden'>
      <Sparkle />
      <img ref={bgRef} className='absolute left-0 top-0 z-[0] w-full h-screen' src="./bg.png" alt="Backround Image" />
      <div className='absolute top-0 left-0 z-[1] w-full h-screen flex flex-col justify-center items-center'>
        <div className=' w-full h-1/2 flex justify-center items-baseline-last '>
          <img ref={logoRef} className='w-40 h-40 mt-20' src="./logo.png" alt="" />
        </div>
        <div className=' w-full h-1/2 mb-10 flex flex-col justify-evenly items-center '>
          <h1 ref={h1ref} className='uppercase text-4xl mb-10 text-white '>Unlock The Screts of the Universe</h1>
          <div>
            <h2 ref={h2ref} className='text-2xl text-white'>Draw a card, embrace the night</h2>
            <h2 ref={h3ref} className='text-2xl text-white'>Let the stars reveal your light.....</h2>
          </div>          
          <button ref={btnRef} onClick={() => navigate('/signin')} className='bg-gradient-to-b from-amber-200 to-yellow-600 shadow-[0_2px_30px_rgba(255,_215,_0,_0.9)] cursor-pointer w-50 h-10 rounded-full uppercase  px-5 py-4 active:scale-[0.97] hover:border-2 hover:border-amber-400 animate-bounce'>Start Your Journey</button>
        </div>
        <div className='w-full h-1/3'>
          <img ref={tabRef} className='w-full h-full object-cover' src="./table.jpg" alt="" />
        </div>
      </div>      
    </div>
  )
}

export default LandingPage