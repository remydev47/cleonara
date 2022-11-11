import React from 'react'

const Hero = () => {
  return (
    <section className='relative pt-48 pb-12 xl:pt-60 sm:pb-16 lg:pb-32 xl:pb-48 2xl:pb-56'>
    <div className="absolute inset-0">
     <img className="object-cover w-full h-full" src="/images/7.jpg" alt="" />
    </div>
   <div className='relative'>
    <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
      <div className="w-full lg:w-2/3 xl:w-1/2">
        <h1 className="font-serif text-xl font-bold tracking-tight text-white text-opacity-70 text-center">Proffesional Cleaning Services</h1>
        <p className="mt-6 tracking-tighter text-[#656b72]">
          <span className="font-sans font-bold text-6xl">BEST CLEANING </span><br />
          <span className="font-serif italic font-BOLD text-7xl">SERVICES IN TOWN</span>
        </p>
        <p className="mt-8 font-erif text-xl font-normal text-[#656b72]">
         Our professional and experienced cleaning staff does the job right the first time are Carefully selected Give them a deep.
        </p>
      </div>
    </div>
   </div>
  </section>
  )
}

export default Hero