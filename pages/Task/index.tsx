import React from 'react'
import Videobutton from '../../components/videobutton'
import Modal from "../../components/Modal"
import { useRouter } from "next/router"
const Index = () => {
    const router = useRouter()
    return (
        <div>
          
  
        
        <Videobutton link={"/videos/Task_Intro"} content={"Task Intro"}></Videobutton>
        <Videobutton link={"/Task/beginner"} content={"Task Beginner"}></Videobutton>
        <Videobutton link={"/Task/advanced"} content={"Task Advanced"}></Videobutton>
        <Videobutton link={"/Task/info"} content={"Task Info"}></Videobutton>
        <Videobutton blank={true} link={"https://www.mq.edu.au/about/about-the-university/our-faculties/medicine-and-health-sciences/departments-and-centres/department-of-health-professions/our-research/task-program/equipment"} content={"Task Equipment"}></Videobutton>
        
        
        
        </div>
      )
}

export default Index