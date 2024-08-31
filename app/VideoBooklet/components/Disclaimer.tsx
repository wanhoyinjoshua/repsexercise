import React, { useState } from 'react'
import { CheckIcon } from '@heroicons/react/24/outline'
import {VideoCameraIcon, CalendarDaysIcon, CreditCardIcon, UserCircleIcon ,ClockIcon} from '@heroicons/react/20/solid'
import { action_btn_color } from '@/constants/ui_style_tailwind'
const Disclaimer = (props:{
    setDisclaimer:any
    setAcknowledge:any
    duration:number,
setCount:any
bookletName?:any,
equip:any
}) => {

    const [ticked,setTick]=useState(false)
  return (
    <div>

<section className='relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all'>


<div >
              <div className="m-5 mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-rose-800">
                <VideoCameraIcon aria-hidden="true" className={`h-6 w-6 text-white`} />
              </div>
              <div className="text-center text-base font-semibold leading-6 text-gray-900">
                  REPS Video Exercise Booklet  {props.bookletName==true?`:${props.bookletName}`:""}
                </div>
              <div className="flex  justify-center mt-3 text-center sm:mt-5">
                
                <div className="max-w-lg  mt-2">
                    <section className='flex justify-between '>
                       <div>Estimated Time:</div>
                        <div className='flex '>
                        
                        {props.duration} minutes
                            </div>
                    </section>
                    
                    <div className='text-left'>Equipment Required:</div>
                        <div className='flex '>
                        <ul className='list-disc'>
                        {props.equip.map((e)=>{
                            return <li className='text-left'>{e}</li>
                        })}

                        </ul>
                      
                            </div>
                    

                    <section className='flex mt-10'>
                    <div>I agree to all terms and conditions outlined in the <a className='underline text-rose-800' target='_blank' href='/Disclaimer'>disclaimer</a>.</div>
                        <div className=' '>

                        <input
                       
                        checked={ticked}
                        onChange={(e)=>{
                            setTick(e.target.checked)
                            props.setAcknowledge(e.target.checked)

                        }}

              id="comments"
              name="comments"
              type="checkbox"
              aria-describedby="comments-description"
              className={`m-2 h-10 w-10 rounded border-${action_btn_color} text-${action_btn_color} focus:ring-rose-100`}
            />
                        
                      
                            </div>
                    </section>
                 
                </div>
              </div>
            </div>
            <div className={`mt-5 sm:mt-6 `}>
              <button
           
            
                type="button"
                onClick={() => {
                    if(ticked){
                        props.setCount(0)
                    props.setDisclaimer(true)

                    }
                    
                    

                }}
                className={`inline-flex w-full justify-center  rounded-md bg-rose-800 ${ticked==true?"opacity-100":"opacity-25"} px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-rose-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:col-start-2`}
              >
                Begin
              </button>
         
            </div>
            </section>
    </div>
  )
}

export default Disclaimer