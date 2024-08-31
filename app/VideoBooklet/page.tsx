'use client'
import React, { useState } from 'react'
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
            cc[count].completed=true
          
            
           
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
         <div className='aspect-video w-full relative '>
           
            {videoId.map((e,index)=>{
                if(count==index){
                    return <iframe   key={index} className=" w-full h-full"
                    
                    ref={iframeRefs.current[index]} src={`https://player.vimeo.com/video/${videoId[index].videolink}`}   allow="autoplay; fullscreen; picture-in-picture; clipboard-write" title="Exercise 1 - The Shoulder PUSH"></iframe>

                }
                

            })}

            
          
            </div>
         
            <section>
                
                {videoId.map((vid,index)=>{
                    return <div 
                    
                    key={2}
                    className={`${index==count?"p-5 bg-rose-800":""}`}
                    
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