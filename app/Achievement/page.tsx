'use client'
import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { addStat } from '../services/firebase/LeaderBoard';
import { getScore } from '../services/score';

import { useRouter } from 'next/navigation'
import dynamic from 'next/dynamic'
import AppContext from '../context/creation';
const completedimg="https://www.gstatic.com/search-console-insights/achieved_milestone_item_list_small_medal.svg"
const inprogressimg="https://www.gstatic.com/search-console-insights/in_progress_milestone_item_list_small_medal.svg"


const Achievement = ({ title, currentValue, targetValue, icon,completed}) => (
  <div className="flex flex-col md:flex-row w-full justify-content mt-5 mb-5 w-full bg-white shadow-md rounded-lg p-4 items-center space-x-4">
    <img src={icon} alt="Trophy" className="w-50 h-50 p-5"/>
    <div className="flex-1">
      <h2 className="font-bold text-lg">{title}</h2>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div className="bg-rose-400 h-2.5 rounded-full" style={{ width: `${(currentValue / targetValue) * 100}%`, maxWidth:"100%"}}></div>
      </div>
      <p className="text-sm text-gray-600">{currentValue} / {targetValue}</p>
    </div>
  </div>
);

const Achievements = () => {
  

  
const score= useContext(AppContext)
const router = useRouter()
  
{score.score==undefined?"loading":score.score}
if(score.score==undefined){
  return <div className='h-screen text-center w-full p-10'>loading</div>
}else{

  var achievedarray=[]
  for(let i=0;i<=score.score;i+=100){
    if(i==0){
      

    }else{
      achievedarray.unshift(i)

    }
   

  }
  var digit=Math.floor(Math.log10(score.score))
  console.log(digit)
  var base=10 // if digit ==1 
  var target:any
  if(score.score<10){
    target=100

  }
  else if(digit==1){
    target=100

  }else{
   var firstdigit= Math.floor(score.score/Math.pow(base,digit))+1
   target = firstdigit*Math.pow(base,digit)
  
  }
 

  const initialvalue={
    title: `${target} reps milestone`,
    currentValue: score.score,
    targetValue: target,
    completed: false,
}
  return(
  <section>
    <div className="bg-white py-5">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className=" border-b border-gray-200 pb-5 sm:flex sm:items-center sm:justify-between">
      <h3 className="text-base font-semibold leading-6 text-gray-900">Achievements</h3>
      <div className="mt-3 flex sm:ml-4 sm:mt-0">
        <a
        href='/ChampionsBoard'
    
          className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
          View Champion Board
        </a>
        <button
        onClick={async ()=>{
          const result= await addStat("Anonymous", score.score)
          if(result instanceof Error){
           window.alert("error when adding records, try again later!")

          }else{
           router.push('/ChampionsBoard')
          }
        }}
          type="button"
          className="ml-3 inline-flex items-center rounded-md bg-rose-800 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-rose-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Share your achivements!
        </button>
      </div>
    </div>
    </div>
    </div>
  

     
     <section className='flex   justify-center'>
  <div className="flex w-full md:w-1/2 justify-content flex-col m-5">
      <span>In progress</span>
    
      <Achievement icon={inprogressimg} key={1} {...initialvalue} />

  </div>
  </section>


  <section className='flex   justify-center'>
  <div className="flex w-full md:w-1/2 justify-content flex-col m-5">
  <span>{achievedarray.length==0?"":"Achieved"}
  </span>
  {achievedarray.map((achievement_target) => (
      <Achievement  key={achievement_target}  
      title={`${achievement_target} reps milestone`}
      currentValue={achievement_target}
      targetValue={achievement_target}
      icon={completedimg}
      completed={true} />
    ))}
  </div>
  </section>

  </section>
  )
}
 
  };

export default Achievements;
