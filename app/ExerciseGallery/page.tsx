'use client'
import React from 'react'

import { dictionary } from '@/constants/videodictionary'
import { useState } from 'react'
import TopBar from './components/TopBar'
import { searchInitialState } from '@/constants/searchInitialState'

import Preview from './components/Preview'

const Page = () => {
    //top bar needs to be able to change the state in main , conditions
    //top bar needs to change the main screen state 
    
    const [searchConditions,setConditons]=useState(searchInitialState)
    const [isPreview,setPreview]=useState(false)
    const [videoId,setVideoId]=useState<any>([])
    const [count,setCount]=useState()

    function toggleVideo(object){
        const id= object.id

        if (videoId.includes(id)){
            var filtered= videoId.filter((e:any)=>e!=id)
            setVideoId([...filtered])
        }else{
            setVideoId([...videoId,id])
        }


    }
    function isMatch(object){
        
        //of all criterias, apply each one and then determine if 
        // that one is a=correct all criterias must be correct 
        
        
        console.log(searchConditions)
        var string=[]
        var isbeginner=searchConditions.beginner_task&&object.filter.includes("beginner_task")
        //var isadvanced=searchConditions.advanced_task&&object.filter.includes("advanced_task")
        var isPush=searchConditions.push&&object.filter.includes("push")
        var isSelected=videoId.includes(object.id)
        
       
        if(isPush||isbeginner){
            
            return true

        }

        else{
            return false
        }


      


       
       
    }
    function filtered(){
       
        //a lis to objects 
       const filteredObjects= dictionary.filter((object)=>{
            if(isMatch(object)){
                return object
            }
        })
    

        return filteredObjects

    }

    if(isPreview){
        return(
        <div>
            <Preview setPreview={setPreview} videoId={videoId} setvideoid={setVideoId}></Preview>

        </div>
        )
    }else{

        return (
            <div>
                <div className='z-50 sticky top-0'>
        <TopBar 
        searchConditions={searchConditions}
        setConditons={setConditons}
        setPreview={setPreview}
        count={filtered().length}
        selected={videoId.length}
        setVideoId={setVideoId}

        ></TopBar>
        </div>
            
        
            
            <div className='flex justify-center'>
                <div className='w-11/12 flex flex-wrap justify-center'>
        
                {
                    filtered().map((object)=>{
                        return <div key={"hi"} onClick={()=>toggleVideo(object)} className={`${videoId.includes(object.id)?"bg-red-100 border-stone-700 border-4":""}  relative w-96 aspect-video mt-5 md:m-10 lg:m-15 p-5 cursor-pointer`}>
                            <div className='absolute rounded-full top-0 right-0 w-1/4 aspect-square bg-slate-50  border-4 border-red-700'>
        
                            <div className={`${videoId.includes(object.id)?"opacity-100":"opacity-0"} w-full h-full  text-green hover:opacity-100`}>
                            {videoId.includes(object.id)&&
                             <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full">
                             <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                           </svg>
                            }
                           
        
                                
                                </div>
                                </div>
                            
                            <img src={object.img}></img>
        
                            {object.label}
        
                          
                            
                        
        
                            
        
                        </div>
        
                    })
        
                }
        
        
                </div>
                
               
        
        
            </div>
            </div>
          )

    }



}

export default Page