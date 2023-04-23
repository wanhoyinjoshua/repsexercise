import React from 'react'
import Videobutton from '../../components/videobutton'
import Modal from "../../components/Modal"
import { useRouter } from "next/router"
const Index = () => {
    const router = useRouter()
    return (
        <div>
        
        <Videobutton link={"/videos/hold_onto_your_head"} content={"Task Intro"}></Videobutton>
        <Videobutton link={"/Task/Beginner"} content={"Task Beginner"}></Videobutton>
        <Videobutton link={"/Task/Advanced"} content={"Task Advanced"}></Videobutton>
        <Videobutton link={"/videos/the_in_and_out"} content={"Task Info"}></Videobutton>
        <Videobutton link={"/videos/the_in_and_out"} content={"Task Beginner"}></Videobutton>
        

        
        </div>
      )
}

export default Index