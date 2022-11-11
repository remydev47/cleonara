import React from 'react'
import { Button } from './Button'

const Offers = () => {
  return (
    <section className="bg-[#fff] sm:py-16 lg:py-24">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
    <div className="max-w-2xl mx-auto text-center">
      <h2 className="text-xl italic font-semibold leading-tight text-black  lg:text-2xl">What We Offer</h2>
    </div>

    <div className="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 text-center lg:max-w-full lg:mt-16 lg:grid-cols-3">
   
        <div className="overflow-hidden bg-[#092341] shadow-xl border-gray-300 rounded-md">             
          <div className="p-8 xl:px-12 flex flex-col items-center justify-center">
             <div className='flex flex-col'>
               <h1 className='text-3xl font-semibold text-white'>Opening</h1>
               <span className='italic text-2xl text-blue-400'>HOURS</span>
             </div>
             <h2 className='font-bold text-xl italic text-white text-center mt-2'>
               We are Open
             </h2>
             <p className='text-xl text-white text-center font-bold'>
               MON-FRI: 08:00-17:00
             </p>
             <p className='text-xl text-white text-center font-bold'>
               SAT-SUN: 10:00-17:00
             </p>
          </div>   
        </div>

        <div className="overflow-hidden bg-blue-600 shadow-xl border-gray-300 rounded-md">             
          <div className="p-8 xl:px-12 flex flex-col items-center justify-center">
             <div className='flex flex-col'>
               <h1 className='text-3xl font-semibold text-white'>Commercial</h1>
               <span className='italic text-2xl text-yellow-400'>Service</span>
             </div> 
             <h2 className='font-bold text-xl italic text-white text-center mt-2'>
                Contact The Cleaning Authority and we’ll do the cleaning for you!
             </h2>
             <p>
              <Button variant='outline'>
                READ MORE!
              </Button>
             </p>
          </div>   
        </div>

        
        <div className="overflow-hidden bg-[#0693e3] shadow-xl border-gray-300 rounded-md">             
          <div className="p-8 xl:px-12 flex flex-col items-center justify-center">
             <div className='flex flex-col'>
               <h1 className='text-3xl font-semibold text-white'>Residential</h1>
               <span className='italic text-2xl text-yellow-400'>Services</span>
             </div> 
             <h2 className='font-bold text-xl italic text-white text-center mt-2'>
               Invest in your free time with our services. Get started with an in-home estimate!
             </h2>
             <p>
              <Button variant='outline'>
                READ MORE!
              </Button>
             </p>
          </div>   
        </div>

        <div className="overflow-hidden bg-yellow-400 shadow-xl border-gray-300 rounded-md">             
          <div className="p-8 xl:px-12 flex flex-col items-center justify-center">
             <div className='flex flex-col'>
               <h1 className='text-3xl font-semibold text-[#092341]'>Special</h1>
               <span className='italic text-2xl text-gray-600'>Service</span>
             </div> 
             <h2 className='font-bold text-xl italic text-[#0f3664] text-center mt-2'>
              We perform ongoing inspections to ensure every clean is up to our standards. 
             </h2>
             <p>
              <Button variant='outline'>
                READ MORE!
              </Button>
             </p>
          </div>   
        </div>
     
    </div>
</div>
</section>
  )
}

export default Offers