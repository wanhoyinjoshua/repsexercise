import React from 'react'
import Videobutton from '../../components/videobutton'
const Sitting = () => {
  return (
    <div >
        <h1>
            PUSH Sitting
        </h1>
        <Videobutton link={"/videos/The_shoulder_PUSH"} content={"The shoulder PUSH"}></Videobutton>
        <Videobutton link={"/videos/The_arm_PUSH"} content={"The arm PUSH"}></Videobutton>
        <Videobutton link={"/videos/The_elbow_bend_and_straighten"} content={"The elbow bend and straighten"}></Videobutton>
        <Videobutton link={"/videos/Visualise_hand_movements"} content={"Visualise hand movements"}></Videobutton>
        <Videobutton link={"/videos/The_thumb_slide"} content={"The thumb slide"}></Videobutton>
        
    </div>
  )
}

export default Sitting