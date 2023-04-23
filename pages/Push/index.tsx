import React from 'react'
import Videobutton from '../../components/videobutton'
import { useRouter } from "next/router"
const Index = () => {
    const router = useRouter()
  return (
    <div >
    <h1>
        Lying Exercises
    </h1>
    <Videobutton link={"/videos/push_part1"} content={"Hold onto your head"}></Videobutton>
    <Videobutton link={"/videos/push_part2"} content={"The In and Out"}></Videobutton>
    
    </div>
  )
}

export default Index