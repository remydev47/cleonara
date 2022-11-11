import React from 'react'

const Offers = () => {
  return (
    <section className="bg-[#fff] sm:py-16 lg:py-24">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
    <div className="max-w-2xl mx-auto text-center">
      <h2 className="text-xl font-serif font-semibold leading-tight text-black  lg:text-2xl">Why Choose Us</h2>
      <p className="mx-auto mt-4 text-4xl font-bold leading-relaxed text-black">
       Your trust, security, and satisfaction are our top priorities.
      </p>
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

        <div className="overflow-hidden bg-yellow-400 shadow-xl border-gray-300 rounded-md">             
          <div className="p-8 xl:px-12 flex flex-col items-center justify-center">
             <div>
               <img src='/images/smartphone.png' className='h-20 w-20'/>
             </div>
             <h2 className='font-bold text-xl italic text-white text-center mt-2'>
               Call Us Now
             </h2>
             <p className='text-xl text-white text-center font-bold'>
              (+254)-789221140
             </p>
          </div>   
        </div>

        <div className="overflow-hidden bg-blue-300 shadow-xl border-gray-300 rounded-md">             
          <div className="p-8 xl:px-12 flex flex-col items-center justify-center">
             <div>
               <img src='/images/mail.png' className='h-20 w-20'/>
             </div>
             <h2 className='font-bold text-xl italic text-white text-center mt-2'>
               Order Service By Mail
             </h2>
             <p className='text-xl text-white text-center font-bold'>
              info@beClean.com
             </p>
          </div>   
        </div>
     
    </div>
</div>
</section>
  )
}

export default Offers