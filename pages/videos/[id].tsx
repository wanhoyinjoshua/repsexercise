import React from 'react'
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });
import { useRouter } from 'next/router'

const index = () => {
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
      "push_part2":"https://vimeo.com/121079268"




    }

    console.log(id)
  return (
    <div >
      <div >
      <ReactPlayer 
      width='auto'
      
      
      controls={true} url={dictionary[`${id}`]} />

      </div>
      
     
    </div>
   
  )
}

export default index