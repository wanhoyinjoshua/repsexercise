'use client'
import React, { useState } from 'react'
import Player from '@vimeo/player'
import { useRef,useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { convertid2Object } from '../ExerciseGallery/utils/convertId2Object'
import Preview from '../ExerciseGallery/components/Preview'
import { Suspense } from 'react'
import PreviewCardItem from '../ExerciseGallery/components/PreviewCardItem'
const Page = () => {
    const searchParams = useSearchParams()
    const search = searchParams.get('id')
    const [videoId,setVideoId]=useState(convertid2Object(search.split("_").map((id)=>{return Number(id)})).map((e)=>{return {...e,completed:false}}))
    const [count,setCount]=useState(0)
    
    const [videoactive,setVideoActive]=useState(0)
    const iframeRef = videoId.map(()=>{return useRef(null)});

    const [canUpdate,setUpdate]=useState(true)
   
    useEffect(() => {
     
        if (iframeRef[count].current) {
          // Destroy the existing player instance if it exists
        

        
          // Create a new player instance
          const player = new Player(iframeRef[count].current);
          
          // Add event listeners or perform actions with the player
          player.on('play', () => {
            console.log('Played the video');
            setUpdate(true)
          });
    
          
    
          player.on('ended', (props) => {
            window.alert(JSON.stringify(props))
            console.log(`Video ${count} ended`);
            var cc= videoId
            cc[count].completed=true
            
           
            setVideoId([...cc])
            //it is the same player all along

            
            setCount(count=>count+1)
            window.alert(JSON.stringify(cc))
            
            window.alert(`Video ${count} ended`)
            window.alert(JSON.stringify(player))
        
           

            
             
        
            
           
            //loadvideo(videoId[count+1].videolink)
          

            
            
          });
    
          // Cleanup function to remove event listeners and destroy player when unmounted
          return () => {

           
            


          }
         
        }
      }, [count]);
      

    function setComplete(){
        var cc= videoId
        cc[count].completed=true
        setVideoId(cc)
    }

    function isCompleted(){
        var isComplete=true
        videoId.forEach(element => {
            if(element.completed==false){
                isComplete=false
            }
            
        });

        return isComplete
    }

    
    function loadvideo(id){
        var player= new Player(iframeRef.current)  
        player.loadVideo(id).then(function(id) {
            // the video successfully loaded
            //playvideo()
        }).catch(function(error) {
            switch (error.name) {
                case 'TypeError':
                    // the id was not a number
                    break;
        
                case 'PasswordError':
                    // the video is password-protected and the viewer needs to enter the
                    // password first
                    break;
        
                case 'PrivacyError':
                    // the video is password-protected or private
                    break;
        
                default:
                    // some other error occurred
                    break;
            }
        });
    }
    function playvideo(){

      var player= new Player(iframeRef.current)  
      console.log(player)
      player.play().then(function() {
        // the video was played
        
    }).catch(function(error) {
        switch (error.name) {
            case 'PasswordError':
                // the video is password-protected and the viewer needs to enter the
                // password first
                break;
    
            case 'PrivacyError':
                // the video is private
                break;
    
            default:
                // some other error occurred
                break;
        }
    });

    }
    if(count+1>videoId.length){
        return (
        <Suspense>
       <div>Congrats</div>
        </Suspense>)

    }
    else{
        return (

         
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
         
            

           
            {isCompleted()?<div>hihi</div>:<div>hihihihihi</div>}
            
            
             <div className='aspect-video w-full relative '>
               
                {videoId.map((e,index)=>{
                    if(count==index){
                        return <iframe   key={index} className=" w-full h-full"
                        ref={iframeRef[index]} src={`https://player.vimeo.com/video/${videoId[index].videolink}`}   allow="autoplay; fullscreen; picture-in-picture; clipboard-write" title="Exercise 1 - The Shoulder PUSH"></iframe>

                    }
                    

                })}

                
              
                </div>
                {count  }
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
            </div>
           
          )

    }
  
}

export default Page