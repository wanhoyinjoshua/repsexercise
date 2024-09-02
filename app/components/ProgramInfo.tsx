import React from 'react'

import { CheckCircleIcon } from '@heroicons/react/20/solid'
const benefits = [
    'High Quality Videos',
    'Make your own exercise video booklet',
    'Share your exercise booklets',
    'Designed for ease of use',
    "Champion Board"
   
  ]

const ProgramInfo = () => {
  return (
   
        <div className="bg-gray-900 py-24 sm:py-32">
          <div className="relative isolate">
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="mx-auto flex max-w-2xl flex-col gap-16 bg-white/5 px-6 py-16 ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20">
                <img
                  alt=""
                  src="/kate.jpg"
                  className="h-96 w-full flex-none rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-sm"
                />
                <div className="w-full flex-auto">
                  <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Program Info</h2>
                  <p className="mt-6 text-lg leading-8 text-gray-300">
                  REPS- Recovery Exercise Post Stroke
                  <br></br>
                  Welcome to the REPS app!
                  <br></br>

                  </p>
                 
                  <div className='text-white mt-5'>
                  REPS consists of two post stroke exercise programs TASK and PUSH.
Both programs utilise a stragety that can assist recovery after stroke -task oriented repetitive exercise. TASK involves the repetitive practice of four everyday tasks whereas PUSH involves the repetitive practice of arm movements.

                  </div>
                  <div className='text-white mt-5'>
                  REPS also allows therapist to send and patients to receive custom video booklets vis email. In addition this website has a champion board which allows patients to share their achievements- reps completed to the wider community!
                  </div>
                  <div className='text-white mt-5 border-2 border-gray-300 p-5'>
                  
                   <div className='text-lg'>
                   Features
                    </div> 

                  <ul
                role="list"
                className="mt-10 grid grid-cols-1 gap-x-8 gap-y-3 text-base leading-7 text-white sm:grid-cols-2"
              >
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex gap-x-3">
                    <CheckCircleIcon aria-hidden="true" className="h-7 w-5 flex-none" />
                    {benefit}
                  </li>
                ))}
              </ul>

                  </div>
                </div>
              </div>
            </div>
          
          </div>
        </div>
      )
  
}

export default ProgramInfo