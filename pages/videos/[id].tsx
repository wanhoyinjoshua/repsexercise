import React,{useState} from 'react'
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });
import { useRouter } from 'next/router'
import Loading from '../../components/Loading';
const Index = () => {
  const router = useRouter()
  const { id } = router.query

    const dictionary=
    {
      "sittostand_beginner":"https://vimeo.com/268313650/14eafa961c",
      "sittostand_advanced":"https://vimeo.com/268313498/744a2ce4ec",
      "stepping_beginner":"https://vimeo.com/268313436/866a8a8136",
      "stepping_advanced":"https://vimeo.com/268313376/bbf5243eeb",
      "step_tap_beginner":"https://vimeo.com/268313312/5ad82d71e8",
      "step_tap_advanced":"https://vimeo.com/268313260/223bb6a4d0",
      "stand_and_reach_beginner":"https://vimeo.com/268313197/351790deae",
      "stand_and_reach_advanced":"https://vimeo.com/268313127/3fd635e6f4",
      "sit_and_reach_beginner":"https://vimeo.com/268313080/31e2376b3f",
      "sit_and_reach_advanced":"https://vimeo.com/268313022/31794a0c35",
      "push_part1":"https://vimeo.com/121074793",
      "push_part2":"https://vimeo.com/121079268",
      "The_shoulder_PUSH":"https://vimeo.com/285448922",
      "The_arm_PUSH":"https://vimeo.com/285448955",
      "The_elbow_bend_and_straighten":"https://vimeo.com/285448991",
      "Visualise_hand_movements":"https://vimeo.com/285449022",
      "The_thumb_slide":"https://vimeo.com/285449064/6b0905109b",
      "Hold_onto_your_head":"https://vimeo.com/285449098/3a39dff832",
      "The_in_and_out":"https://vimeo.com/120992262/0f3a940b59",
      "Task_Intro":"https://vimeo.com/268313721/bbd19b2574"




    }
    const [loading, setLoading] = useState(true);

  const handleBuffer = () => {
    setLoading(true);
  };

  const handleBufferEnd = () => {
    setLoading(false);
  };

  const handleReady = () => {
    setLoading(false);
  };
  var imglink="https://www.google.com/imgres?imgurl=https%3A%2F%2Fimgv3.fotor.com%2Fimages%2FvideoImage%2Fcreate-various-bridal-shower-invitation-with-fotor-copy.jpg&tbnid=CU-MuTeLP3-MAM&vet=12ahUKEwi_24zLncb_AhWjKrcAHeMHAHgQMygCegUIARCvAQ..i&imgrefurl=https%3A%2F%2Fwww.fotor.com%2Fdesign%2Fyoutube-thumbnail.html&docid=6Zb7KK2g3J9igM&w=1440&h=960&q=online%20image%20for%20video%20preview&ved=2ahUKEwi_24zLncb_AhWjKrcAHeMHAHgQMygCegUIARCvAQ"


   
  return (
    <div className="relative">
        {loading && (
        <div className="absolute inset-0 flex flex-col items-center justify-center">
         
          <div className="mt-2"><Loading></Loading></div>
        </div>
      )}
      <div >
    
      <ReactPlayer 
      width='auto'
      
      
      controls={true} url={dictionary[`${id}`]} 
      onBuffer={handleBuffer}
        onBufferEnd={handleBufferEnd}
        onReady={handleReady}
        
      />

      </div>

      
     
    </div>
   
  )
}

export default Index