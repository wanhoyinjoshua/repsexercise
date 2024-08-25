import React from 'react'
import { DevicePhoneMobileIcon } from '@heroicons/react/20/solid'
const Download = () => {

  return (
    <div id="downloads"><section className="bg-gray-50">
    <div
      className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center"
    >
      <div className="mx-auto max-w-xl text-center">
        <div className="text-3xl font-extrabold sm:text-5xl">
        More Convenience.
<br></br>
          <strong className="font-extrabold text-red-700 sm:block">
          Install Now.
          </strong>
        </div>
  
        <p className="mt-4 sm:text-xl/relaxed">
        Exercises are most effective when they are easily accessible. You have the option to access the videos directly on the web or alternatively install them on your phone for quick access from the home screen.
         
        </p>
  
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            className="block w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
            href="https://play.google.com/store/apps/details?id=katescrivener.repsrecoveryexercises&hl=en_AU&gl=US&pli=1"
            target='_blank'
          >
           
      <DevicePhoneMobileIcon></DevicePhoneMobileIcon>
            Android
          </a>
          
         
         
        </div>
      </div>
    </div>
  </section></div>
  )
}

export default Download