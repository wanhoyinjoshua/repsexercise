import React from 'react'
import Videobutton from '../../components/videobutton'
import Modal from "../../components/Modal"
import { useRouter } from "next/router"
import Agreement from '../../hooks/Agreement'
const Index = () => {
    const router = useRouter()
    const {prompt,setDisclaimerAgreed} = Agreement()
    
    return (
        <div>
           {prompt==false&&
      <section>
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50 overflow-scroll max-h-screen p-10">
        <div className="bg-white p-6 rounded shadow-md max-h-[90vh] overflow-scroll">
          <h2 className="text-lg font-medium mb-4">Disclaimer</h2>
          <p className="mb-4 text-gray-950 z-50">
          Disclaimer

The exercise programs contained in the REPS app are general exercise programs that are not comprehensive or intended to be suitable for all people after stroke.

Macquarie University does not make any representations or warranties as to the effectiveness of the exercises contained in this video.

Use of the PUSH or TASK exercise programs contained in REPS should be prescribed by a healthcare professional and adapted to your individual needs.

This video should be used as a guide only and is not a substitute for the advice or prescribed course of treatment of qualified physiotherapists, occupational therapists or medical practitioners.

Should you have any questions or problems regarding the use of the PUSH or TASK programs please consult your relevant healthcare professional.

You hereby assume full responsibility for ensuring the appropriateness of any use of the PUSH or TASK exercise program, and you acknowledge that neither Macquarie University nor any of the developers of the PUSH or TASK programs accept any responsibility for decisions made by you based on the use of the PUSH or TASK programs.

Exclusion of Liability
Participation in any of the exercises shown on this video is at your own risk. By viewing this demonstration exercise video or performing the exercises demonstrated, you acknowledge and accept that, to the extent permitted by law, Macquarie University or the developers of the PUSH or TASK exercise programs will be under any liability to you whatsoever, whether in contract or tort (including, without limitation, negligence), breach of statute or any other legal or equitable obligation, in respect of any injury, loss or damage (including loss of profit or savings), howsoever caused, which may be suffered or incurred by the viewer or any other person.

          </p>
          <button 
          
          onClick={()=>{
            localStorage.setItem('disclaimerAccepted', 'true')
            setDisclaimerAgreed(true)
          }
            
            
          }
          className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 mr-2" >
            I Agree
          </button>
        </div>
      </div>

      </section>
      }
          
  
        
        <Videobutton link={"/videos/Task_Intro"} content={"Task Intro"}></Videobutton>
        <Videobutton link={"/Task/beginner"} content={"Task Beginner"}></Videobutton>
        <Videobutton link={"/Task/advanced"} content={"Task Advanced"}></Videobutton>
        <Videobutton link={"/Task/info"} content={"Task Info"}></Videobutton>
        <Videobutton blank={true} link={"https://www.mq.edu.au/about/about-the-university/our-faculties/medicine-and-health-sciences/departments-and-centres/department-of-health-professions/our-research/task-program/equipment"} content={"Task Equipment"}></Videobutton>
        
        
        
        </div>
      )
}

export default Index