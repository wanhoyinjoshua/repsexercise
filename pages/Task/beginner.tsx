import React from 'react'
import { useRouter } from "next/router"
import Videobutton from '../../components/videobutton'
const beginner = () => {
    const router = useRouter()
  return (
    <div>
    <h1>TASK Beginner</h1>
    <Videobutton link={"/videos/sittostand_beginner"} content={"Sit to Stand"}></Videobutton>
    <Videobutton link={"/videos/stepping_beginner"} content={"Stepping"}></Videobutton>
    <Videobutton link={"/videos/step_tap_beginner"} content={"Step tap"}></Videobutton>
    <Videobutton link={"/videos/stand_and_reach_beginner"} content={"Stand and Reach"}></Videobutton>
    <Videobutton link={"/videos/sit_and_reach_beginner"} content={"Sit and Reach"}></Videobutton>
    
</div>
  )
}

export default beginner