import React from 'react'
import Videobutton from './ui/VideoButton'
const HeroFirst = () => {
  return (
    <div>
     
<section className="overflow-hidden bg-white sm:grid sm:grid-cols-2 h-full">
  <div className="p-8 md:p-12 lg:px-16 lg:py-24 bg-[url('/logo2.png')]">
    <div
      className="mx-auto max-w-xl text-center "
    >
      <h1 className="text-2xl font-bold text-grey-100 md:text-3xl">
      Upper Limb and Lower limb exercises for Stroke - REPS
      
      </h1>

      <h2 className="hidden  text-grey-100 md:mt-4 md:block">
      REPS consists of two post stroke exercise programs TASK and PUSH. Both programs utilise a stragety that can assist recovery after stroke - repetitive exercise. TASK involves the repetitive practice of four everyday tasks whereas PUSH involves the repetitive practice of arm movements.
      
      </h2>

      <div className="mt-4 md:mt-8 ">
        <section className='flex flex-col gap-y-0.5'>
            <div  className='flex justify-center flex-row gap-x-0.5'>
            <Videobutton link={"/ExerciseGallery"} content={"Exercise Gallery"}></Videobutton>
              {/* This is how you write single line comments inside JSX 
               <Videobutton link={"/Program"} content={t('ai_tag')}></Videobutton>
              */}
              
             

            </div>
     
     
     

        </section>
       
      </div>
    </div>
  </div>

  <img
    alt="Student"
    src="/logo.png"
    className="h-56 w-full object-contain sm:h-full"
  />
</section>
    </div>
  )
}

export default HeroFirst