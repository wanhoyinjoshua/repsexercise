import React from 'react'
import Videobutton from '../components/videobutton'
import { useRouter } from "next/router"
const Gallery = () => {
    const router = useRouter()
  return (
    <div >
    <h1>
        Exercise Gallery
    </h1>
    <Videobutton link={"/Push"} content={"PUSH"}></Videobutton>
    
    <Videobutton link={"/Task"} content={"TASK"}></Videobutton>
    
    </div>
  )
}

export default Gallery