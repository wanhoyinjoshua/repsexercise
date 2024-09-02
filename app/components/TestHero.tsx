import React from 'react'
import Videobutton from './ui/VideoButton'

const TestHero = () => {
  return (
    <div className="bg-white relative isolate overflow-hidden bg-gradient-to-b from-rose-800 pt-14">
        <div
          aria-hidden="true"
          className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96"
        />
        <div className="mx-auto max-w-7xl px-6 py-0 sm:py-5 lg:px-5">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
            <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:col-span-2 xl:col-auto">
            Upper Limb and Lower limb exercise videos for Stroke - REPS
            </h1>
            <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
              <h2 className="text-lg leading-8 text-gray-600">
              REPS consists of two post stroke exercise video programs TASK and PUSH. Both programs utilise a stragety that can assist recovery after stroke - repetitive exercise. TASK involves the repetitive practice of four everyday tasks whereas PUSH involves the repetitive practice of arm movements.
              </h2>

              
              <div className="mt-10 flex items-center gap-x-6">
                <Videobutton link={"/ExerciseGallery"} content={"Exercise Videos"}></Videobutton>
                <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
            <img
              alt=""
              src="/logo.png"
              className="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
            />
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
      </div>
  )
}

export default TestHero