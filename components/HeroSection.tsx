import React from 'react'
import Videobutton from './videobutton'
import HeaderNav from './HeaderNav'
import Tagline from './Tagline'
import Download from './Download'

const HeroSection = () => {
  return (
    <div>
        
        <section>
            <Tagline></Tagline>
            
        </section>

        <section>
        <div className=' p-5 md:p-10 lg:p-20'>
        <div>Program info</div>
        <br></br>
        <section>
            <h3>REPS- Recovery Exercise Post Stroke</h3>
            <br></br>
            Welcome to the REPS app!
            <h4>
            REPS consists of two post stroke exercise programs TASK and PUSH.
            <br></br>
            Both programs utilise a stragety that can assist recovery after stroke -task oriented repetitive exercise.
            TASK involves the repetitive practice of four everyday tasks whereas PUSH involves the repetitive practice of arm movements.
            </h4>
        </section>
        <section className='flex items-center justify-center'>
            <img src='/KScrivener020_close.webp'></img>
        </section>
    </div>
        </section>
        

<section className=''>
    <Download></Download>
    

</section>
    </div>
  )
}

export default HeroSection