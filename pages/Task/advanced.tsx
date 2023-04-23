import React from 'react'
import Videobutton from '../../components/videobutton'
import { useRouter } from "next/router"
const advanced = () => {
    const router = useRouter()
  return (
    <div >
        <h1>
            TASK Advanced
        </h1>
        <Videobutton link={"/videos/sittostand_advanced"} content={"Sit to Stand"}></Videobutton>
        <Videobutton link={"/videos/stepping_advanced"} content={"Stepping"}></Videobutton>
        <Videobutton link={"/videos/step_tap_advanced"} content={"Step tap"}></Videobutton>
        <Videobutton link={"/videos/stand_and_reach_advanced"} content={"Stand and Reach"}></Videobutton>
        <Videobutton link={"/videos/sit_and_reach_advanced"} content={"Sit and Reach"}></Videobutton>
        
    </div>
   
  )
}

export default advanced