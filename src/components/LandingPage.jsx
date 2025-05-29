import React from 'react'
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
    const navigate = useNavigate();
  return (
    <div className='relat ive w-full h-screen overflow-hidden'>
      <img className='absolute left-0 top-0 z-[0] w-full h-screen' src="./bg.png" alt="Backround Image" />
      <div className='absolute top-0 left-0 z-[1] w-full h-screen flex flex-col justify-center items-center'>
        <div className=' w-full h-1/2 flex justify-center items-baseline-last '>
          <img className='w-40 h-40 mt-20' src="./logo.png" alt="" />
        </div>
        <div className=' w-full h-1/2 mb-10 flex flex-col justify-evenly items-center '>
          <h1 className='uppercase text-4xl mb-10 text-white '>Unlock The Screts of the Universe</h1>
          <div>
            <h2 className='text-2xl text-white'>Draw a card, embrace the night</h2>
            <h2 className='text-2xl text-white'>Let the stars reveal your light.....</h2>
          </div>          
          <button onClick={() => navigate('/signin')} className='bg-gradient-to-b from-amber-200 to-yellow-600 shadow-[0_2px_30px_rgba(255,_215,_0,_0.9)] w-50 h-10 rounded-full uppercase  px-5 py-4 active:scale-[0.97] hover:border-2 hover:border-amber-400 animate-bounce'>Start Your Journey</button>
        </div>
        <div className='w-full h-1/3'>
          <img className='w-full h-full object-cover' src="./table.jpg" alt="" />
        </div>
      </div>      
    </div>
  )
}

export default LandingPage