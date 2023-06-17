import React from 'react'
import Videobutton from '../../components/videobutton'
import { useRouter } from "next/router"
const Index = () => {
    const router = useRouter()
  return (
    <div >
    <h1>
        PUSH Exercises
    </h1>
    <Videobutton link={"/Push/Sitting"} content={"Sitting"}></Videobutton>
    
    <Videobutton link={"/Push/Lying"} content={"Lying"}></Videobutton>
    
    </div>
  )
}

export default Index