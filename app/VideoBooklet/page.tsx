'use client'
import React, { useState } from 'react'

import { CheckCircleIcon ,InformationCircleIcon} from '@heroicons/react/20/solid'
import Player from '@vimeo/player'
import { useRef,useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { convertid2Object } from '../ExerciseGallery/utils/convertId2Object'
import Preview from '../ExerciseGallery/components/Preview'
import { Suspense } from 'react'
import PreviewCardItem from '../ExerciseGallery/components/PreviewCardItem'
import Congragulations from './components/Congragulations'
import Disclaimer from './components/Disclaimer'
import { getDuration } from './utils/getDuration'
import { getEquip } from './utils/getEquip'
import { getReps } from './utils/getReps'
import { addScore } from '../services/score'
const Page = () => {
    const searchParams = useSearchParams()
    const search = searchParams.get('id')
    const [videoId,setVideoId]=useState(convertid2Object(search.split("_").map((id)=>{return Number(id)})).map((e)=>{return {...e,completed:false}}))
    const [count,setCount]=useState(-1)
    const [ack,setAcknowledge]=useState(false)
    const [disclaimer,setDisclaimer]=useState(false)
    

    const iframeRefs = useRef([]);
    
   
    useEffect(() => {
        iframeRefs.current = videoId.map((_, i) => iframeRefs.current[i] || React.createRef());
     
        if (iframeRefs.current[count]&&iframeRefs.current[count].current) {
          // Destroy the existing player instance if it exists
        

        
          // Create a new player instance
          const player = new Player(iframeRefs.current[count].current);
          
          // Add event listeners or perform actions with the player
          player.on('play', () => {
          
          });
    
          
    
          player.on('ended', () => {
        
            console.log(`Video ${count} ended`);
            var cc= videoId
            videoId[count].completed=true
            addScore(cc[count].reps)
          
            
           
            setVideoId([...cc])
            //it is the same player all along
         

            if(count==videoId.length-1){
               

            }
            else{
                setCount(count=>count+1)

            }
            
           

        
           

            
             
        
            
           
            //loadvideo(videoId[count+1].videolink)
          

            
            
          });
    
          // Cleanup function to remove event listeners and destroy player when unmounted
          return () => {

            player.destroy()

           
            


          }
         
        }
      }, [count]);
      



    function isCompleted(){
        var isComplete=true
        videoId.forEach(element => {
            if(element.completed==false){
                isComplete=false
            }
            
        });

        return isComplete
    }

    
    

   
        return (
            <>

{disclaimer==false?<Disclaimer 
setAcknowledge={setAcknowledge}
setDisclaimer={setDisclaimer}
setCount={setCount}
duration={getDuration(videoId)}
equip={getEquip(videoId)}
></Disclaimer>:


<div className="mx-auto max-w-7xl px-6 lg:px-8">
         
            

           
         {isCompleted()?<Congragulations 
         stats={getReps(videoId)}
         id={search}></Congragulations>:
         
         <section>
              <div className="rounded-md bg-blue-50 p-4">
      <div className="flex">
        <div className="flex-shrink-0">
          <InformationCircleIcon aria-hidden="true" className="h-5 w-5 text-blue-400" />
        </div>
        <div className="ml-3 flex-1 md:flex md:justify-between">
          <p className="text-sm text-blue-700">Play the video to the end to complete the exercise. Alternatively, click completed reps to complete the exercise. Complete all exercises to collect your reward!</p>
          <p className="mt-3 text-sm md:ml-6 md:mt-0">
           
          </p>
        </div>
      </div>
    </div>
         <div className='aspect-video w-full relative '>
           
            {videoId.map((e,index)=>{
                if(count==index){
                    return <iframe   key={index} className=" w-full h-full"
                    
                    ref={iframeRefs.current[index]} src={`https://player.vimeo.com/video/${videoId[index].videolink}`}   allow="autoplay; fullscreen; picture-in-picture; clipboard-write" title="Exercise 1 - The Shoulder PUSH"></iframe>

                }
                

            })}
            <div className='flex justify-end mt-5 mb-5'>
            <button
            disabled={videoId[count].completed==true}
            onClick={()=>{
                var cc=videoId
                cc[count].completed=true
                addScore(cc[count].reps)
                setVideoId([...cc])
            }}
        type="button"

        className="inline-flex items-center gap-x-2 rounded-md bg-rose-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-rose-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        <CheckCircleIcon aria-hidden="true" className="-ml-0.5 h-5 w-5" />
        Completed Reps
      </button>
     
            </div>
            <div>
    
      </div>

            
          
            </div>
         
            <section className='mt-5'>
                
                {videoId.map((vid,index)=>{
                    return <div 
                    
                    key={2}
                    className={`${index==count?"p-5  border-2 border-rose-600":""}`}
                    
                    onClick={()=>{
                        const selecttionid=vid.id
                        const indexarray= videoId.map((object)=> object.id)
                        const indexInArray=indexarray.indexOf(selecttionid)
                        setCount(indexInArray)
                        //setVideoActive(indexInArray)
                        //loadvideo(videoId[indexInArray].videolink)
    
                    }}>
                    <PreviewCardItem 
                    isPreview={false}
                    img={vid.img} 
                    header={vid.label} 
                    currentid={undefined} 
                    setid={undefined} 
                    videoid={undefined}
                    active={vid.completed}
                    ></PreviewCardItem>
                    </div>
                })}
            </section>
            </section>}
         
       
         </div>




}



            </>
         
          
           
          )

    }
  


export default Page