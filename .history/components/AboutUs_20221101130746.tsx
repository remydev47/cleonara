import React from 'react'

const AboutUs = () => {
  return (
    <section className="py-6 bg-gray-50 sm:py-16 lg:py-24">
    <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-20">
            <div className="">
                <h1 className='text-3xl text-blue-800/70 text-center'>ABOUT CLEANING AGENCY</h1>
                <h2 className="text-4xl font-bold leading-tight text-blue-500 sm:text-4xl lg:text-4xl">We are committed to give our best services.</h2>
                <p className="mt-4 text-base leading-relaxed text-gray-600 font-semibold">
                We are specializes in technological and IT-related services such as product engineering,warranty management, building cloud, infrastructure, network, etc. We put a strong focus on the needs of your business to figure out solutions that best fits your demand..
                </p>
            </div>

            <div className=" pl-20 pr-6 sm:pl-6 md:px-0">
                <div className="relative w-full max-w-xs mt-4 mb-10 ml-auto">
                 <img className="relative -top-4 -left-4" src="/images/Cleaning.jpg" alt="" />
                

                    
                    <div className="absolute -bottom-10 -left-16 m-2">
                        
                         
                          <div className="px-8 py-8 bg-blue-700">
                               <span className="block text-4xl font-bold text-yellow-500 lg:text-5xl"> 50+ </span>
                                <span className="block mt-2 text-base leading-tight text-yellow-500"> Team<br />Member</span>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default AboutUs