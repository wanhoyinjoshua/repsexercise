'use client'
import React, { useState } from 'react'
import Player from '@vimeo/player'
import { useRef,useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { convertid2Object } from '../ExerciseGallery/utils/convertId2Object'
import Preview from '../ExerciseGallery/components/Preview'
import PreviewCardItem from '../ExerciseGallery/components/PreviewCardItem'
const Page = () => {
    const searchParams = useSearchParams()
    const search = searchParams.get('id')
    const [videoId,setVideoId]=useState(convertid2Object(search.split("_").map((id)=>{return Number(id)})).map((e)=>{return {...e,completed:false}}))
    const [count,setCount]=useState(0)
    useEffect(() => {
        const player = new Player(iframeRef.current);
    
        player.on('play', () => {
          console.log('Played the video');
        });

        player.on('ended', () => {
            //window.alert("sjit")
            console.log('Video ended');
            var oridtate=videoId
            oridtate[count].completed=true
            
            
            setVideoId([...oridtate])
            //loadvideo(oridtate[count+1].videolink)
            if(count+1>videoId.length){

            }
            setCount(count=>count+1)
            
           
          });
    
        // Cleanup function
        return () => {
          player.destroy();
        };
      }, []);

    const iframeRef = useRef(null);
    function loadvideo(id){
        var player= new Player(iframeRef.current)  
        player.loadVideo(id).then(function(id) {
            // the video successfully loaded
            playvideo()
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
        return<div>Congrats</div>

    }
    else{
        return (
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
         
               {JSON.stringify(count+1)}
               {JSON.stringify(videoId.length)}
                
             <div className='aspect-video w-full relative '>
                <iframe   className=" w-full h-full"
                ref={iframeRef} src={`https://player.vimeo.com/video/${videoId[count].videolink}`}   allow="autoplay; fullscreen; picture-in-picture; clipboard-write" title="Exercise 1 - The Shoulder PUSH"></iframe>
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