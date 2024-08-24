import React from 'react'
import { dictionary } from '../../constants/videodictionary'
import { useState } from 'react'
import TopBar from './components/TopBar'
import { searchInitialState } from './constants/searchInitialState'
import Preview from './components/Preview'

const Index = () => {
    //top bar needs to be able to change the state in main , conditions
    //top bar needs to change the main screen state 
    
    const [searchConditions,setConditons]=useState(searchInitialState)
    const [isPreview,setPreview]=useState(false)
    const [videoId,setVideoId]=useState([])

    function toggleVideo(key:string){
        const id= dictionary[key].id

        if (videoId.includes(id)){
            var filtered= videoId.filter((e)=>e!=id)
            setVideoId([...filtered])
        }else{
            setVideoId([...videoId,id])
        }


    }

    if(isPreview){
        return(
        <div>
            <Preview setPreview={setPreview}></Preview>

        </div>
        )
    }else{

        return (
            <div>
        <TopBar 
        searchConditions={searchConditions}
        setConditons={setConditons}
        setPreview={setPreview}

        ></TopBar>
            
        
            
            <div className='flex justify-center'>
                <div className='w-11/12 flex flex-wrap justify-start'>
        
                {
                    Object.keys(dictionary).map((key)=>{
                        return <div onClick={()=>toggleVideo(key)} className={`${videoId.includes(dictionary[key].id)?"bg-red-100":""} relative w-96 aspect-video m-10`}>
                            <div className='absolute rounded-full top-0 right-0 w-1/4 aspect-square bg-slate-50  border-4 border-red-700'>
        
                            <div className={`${videoId.includes(dictionary[key].id)?"opacity-100":"opacity-0"}w-full h-full  text-green hover:opacity-100`}>
                            {videoId.includes(dictionary[key].id)&&
                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
                             <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                           </svg>
                            }
                           
        
                                
                                </div>
                                </div>
                            
                            <img src={dictionary[key].img}></img>
        
                            {dictionary[key].label}
        
                          
                            
                        
        
                            
        
                        </div>
        
                    })
        
                }
        
        
                </div>
                
               
        
        
            </div>
            </div>
          )

    }



}

export default Index