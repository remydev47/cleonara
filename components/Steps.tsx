import React from 'react'

const Steps = () => {
  return (
    <section className="py-10  bg-white sm:py-16 lg:py-24">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl italic font-semibold leading-tight text-[#092341]">Enjoy Your Time Off</h2>
           
        </div>

        <div className="relative mt-12 lg:mt-20">
            

            <div className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12">
                <div>
                    <div className="flex items-center justify-center w-60 h-60 mx-auto bg-blue-100 border-2 border-gray-200 shadow">
                        <span className="text-xl font-semibold text-gray-700">
                            <img src='/images/step-1.jpg' className='h-full w-full ' />
                        </span>
                    </div>
                    <h3 className="mt-6 text-2xl italic leading-tight text-gray-500 md:mt-10">Give Us A call</h3>
                    <p className="mt-4 font-serif text-base text-gray-600">You can also fill out our enquiry form and we will call you back…</p>
                </div>

                <div>
                    <div className="flex items-center justify-center w-60 h-60 mx-auto bg-blue-100 border-2 border-gray-200 shadow">
                        <span className="text-xl font-semibold text-gray-700">
                          <img src='/images/step-2.jpg' className='h-full w-full ' />
                        </span>
                    </div>
                    <h3 className="mt-6 text-2xl italic leading-tight text-gray-500 md:mt-10">Welcome Our Cleaning Team</h3>
                    <p className="mt-4 font-serif text-base text-gray-600">We are ready to glad to see you as our client and always try to exceed your expectations.</p>
                </div>

                <div>
                    <div className="flex items-center justify-center w-60 h-60 mx-auto bg-blue-100 border-2 border-gray-200 shadow">
                        <span className="text-xl font-semibold text-gray-700">
                        <img src='/images/step-3.jpg' className='h-full w-full ' />
                        </span>
                    </div>
                    <h3 className="mt-6 text-2xl italic leading-tight text-gray-500 md:mt-10">Easy Payment</h3>
                    <p className="mt-4 font-serif text-base text-gray-600">Book & pay online. We’ll match you with a trusted, experienced house cleaner.</p>
                </div>

            </div>
        </div>
    </div>
 </section>
  )
}

export default Steps