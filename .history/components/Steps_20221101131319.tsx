import React from 'react'

const Steps = () => {
  return (
    <section className="py-10  bg-white sm:py-16 lg:py-24">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl italic font-semibold leading-tight text-gray-400">Enjoy Your Time Off</h2>
            <p className="mx-auto mt-4 text-4xl font-bold leading-relaxed text-blue-400">
              How We Work.
            </p>
        </div>

        <div className="relative mt-12 lg:mt-20">
            

            <div className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12">
                <div>
                    <div className="flex items-center justify-center w-40 h-40 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                        <span className="text-xl font-semibold text-gray-700">
                            <img src='/images/step-1.jpg' className='h-full w-full ' />
                        </span>
                    </div>
                    <h3 className="mt-6 text-2xl font-bold leading-tight text-gray-500 md:mt-10">Contact Us To Book a Term</h3>
                    <p className="mt-4 font-serif text-base text-gray-600">Bug Up all your Dirty Clothes</p>
                </div>

                <div>
                    <div className="flex items-center justify-center w-40 h-40 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                        <span className="text-xl font-semibold text-gray-700">
                          <img src='/images/step-2.jpg' className='h-full w-full ' />
                        </span>
                    </div>
                    <h3 className="mt-6 text-2xl font-bold leading-tight text-gray-500 md:mt-10">Welcome Our Cleaning Team</h3>
                    <p className="mt-4 font-serif text-base text-gray-600">We pick-Up your Clothes</p>
                </div>

                <div>
                    <div className="flex items-center justify-center w-40 h-40 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                        <span className="text-xl font-semibold text-gray-700">
                        <img src='/images/step-3.jpg' className='h-full w-full ' />
                        </span>
                    </div>
                    <h3 className="mt-6 text-2xl font-bold leading-tight text-gray-500 md:mt-10">Enjoy The Premium Service</h3>
                    <p className="mt-4 font-serif text-base text-gray-600">We Clean your Clothes.</p>
                </div>

            </div>
        </div>
    </div>
 </section>
  )
}

export default Steps