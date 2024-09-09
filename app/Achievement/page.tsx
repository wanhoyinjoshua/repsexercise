'use client'
import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { getScore } from '../services/score';
import dynamic from 'next/dynamic'
import AppContext from '../context/creation';
const completedimg="https://www.gstatic.com/search-console-insights/achieved_milestone_item_list_small_medal.svg"
const inprogressimg="https://www.gstatic.com/search-console-insights/in_progress_milestone_item_list_small_medal.svg"
const achievementsData = [
  {
    title: "100 repetitions milestone",
    currentValue: 37,
    targetValue: 100,
    completed:true
    
  },
  {
    title: "200 repetitions milestone",
    currentValue: 37,
    targetValue: 40,
    completed:true
    
  },
  {
    title: "300 repetitions milestone",
    currentValue: 37,
    targetValue: 40,
    completed:true
    
  },
  {
    title: "400 repetitions milestone",
    currentValue: 25,
    targetValue: 50,
    completed:false
   
  },
  {
    title: "500 repetitions milestone",
    currentValue: 25,
    targetValue: 50,
    completed:false
   
  },
  {
    title: "600 repetitions milestone",
    currentValue: 25,
    targetValue: 50,
    completed:false
   
  },
  {
    title: "700 repetitions milestone",
    currentValue: 25,
    targetValue: 50,
    completed:false
   
  },
  {
    title: "800 repetitions milestone",
    currentValue: 25,
    targetValue: 50,
    completed:false
   
  },
  {
    title: "900 repetitions milestone",
    currentValue: 25,
    targetValue: 50,
    completed:false
   
  }
  ,
  {
    title: "1000 repetitions milestone",
    currentValue: 25,
    targetValue: 50,
    completed:false
   
  }
];

const Achievement = ({ title, currentValue, targetValue, icon,completed}) => (
  <div className="flex flex-col md:flex-row w-full justify-content mt-5 mb-5 w-full bg-white shadow-md rounded-lg p-4 items-center space-x-4">
    <img src={completed?completedimg:inprogressimg} alt="Trophy" className="w-50 h-50 p-5"/>
    <div className="flex-1">
      <h2 className="font-bold text-lg">{title}</h2>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div className="bg-rose-400 h-2.5 rounded-full" style={{ width: `${(currentValue / targetValue) * 100}%`, maxWidth:"100%"}}></div>
      </div>
      <p className="text-sm text-gray-600">{0} / {targetValue}</p>
    </div>
  </div>
);

const Achievements = () => {
  

  
const score= useContext(AppContext)
  
  
  

  return(
  <section>
    
     <section className='flex   justify-center'>
  <div className="flex w-full md:w-1/2 justify-content flex-col m-5">
    {achievementsData.map((achievement, index) => (
      <Achievement icon={undefined} key={index} {...achievement} />
    ))}
  </div>
  </section>


  <section className='flex   justify-center'>
  <div className="flex w-full md:w-1/2 justify-content flex-col m-5">
  {achievementsData.map((achievement, index) => (
      <Achievement icon={undefined} key={index} {...achievement} />
    ))}
  </div>
  </section>

  </section>
  )
 
  };

export default Achievements;
