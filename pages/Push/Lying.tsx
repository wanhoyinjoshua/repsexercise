import React from 'react'
import Videobutton from '../../components/videobutton'
import { useRouter } from "next/router"

const Lying = () => {
  return (
    <div >
        <h1>
            PUSH Lying 
        </h1>
        <Videobutton link={"/videos/Hold_onto_your_head"} content={"Hold onto your head"}></Videobutton>
        <Videobutton link={"/videos/The_in_and_out"} content={"The in and out"}></Videobutton>
       
        
    </div>
  )
}

export default Lying