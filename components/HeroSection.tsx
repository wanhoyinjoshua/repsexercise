import React from 'react'
import Videobutton from './videobutton'
import HeaderNav from './HeaderNav'
import Tagline from './Tagline'
import Download from './Download'
import ProgramInfo from './ProgramInfo'

const HeroSection = () => {
  return (
    <div>
        
        <section>
            <Tagline></Tagline>
            
        </section>

        <ProgramInfo></ProgramInfo>

    
        

<section className=''>
    <Download></Download>
    

</section>
    </div>
  )
}

export default HeroSection