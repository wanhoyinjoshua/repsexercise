`use client`
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon, RectangleGroupIcon } from '@heroicons/react/20/solid'
import { ChartPieIcon, CursorArrowRaysIcon, FingerPrintIcon, SquaresPlusIcon } from '@heroicons/react/24/outline'
import { Description, Field, Label, Switch } from '@headlessui/react'
import { VideoCameraIcon, HandRaisedIcon, FireIcon,SunIcon ,LifebuoyIcon} from '@heroicons/react/20/solid'
import Dialog1 from './Dialog'
import { count } from 'console'
import { useState } from 'react'
import { useDetectClickOutside } from 'react-detect-click-outside';
import { action_btn_accent, action_btn_color } from '@/constants/ui_style_tailwind'

const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
  { name: 'View all products', href: '#', icon: RectangleGroupIcon },
]

export default function TopBar(props:{
    searchConditions:any
        setConditons:any
        setPreview:any
        count:any
        selected:any

}) {
 
    const solutions = [
  {
    name: 'Task',
    description: 'Toggle to show or hide the TASK program',
    href: '#',
    booleanval:"beginner_task",
    icon: SunIcon,
  },
  /*
  {
    name: 'Task (Advanced)',
    description: 'Toggle to show or hide advanced exercises',
    href: '#',
    booleanval:"advanced_task",
    icon: FireIcon,
  },
  */
  { name: 'PUSH', 
    booleanval:"push",
    description: "Toggle to show or hide the PUSH program", href: '#', icon: HandRaisedIcon },
  
]
const [open,setOpen]=useState(false)
const [isPush,setPush]=useState(false)
const ref = useDetectClickOutside({ onTriggered: ()=>setOpen(false) });
  return (
    <>

<div className="relative isolate z-50 shadow" ref={ref}>
        
        <div className="bg-white py-5">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <section className='flex justify-between'>
              <button onClick={()=>setOpen(!open)} className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
              Video Filters
              <ChevronDownIcon aria-hidden="true" className="h-5 w-5" />
            </button>
  
            <button
            onClick={()=>{props.setPreview(true)}}
          type="button"
          className={`inline-flex items-center gap-x-2 rounded-md bg-${action_btn_color} px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-${action_btn_accent} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-${action_btn_accent}`}
        >
          <VideoCameraIcon aria-hidden="true" className="-ml-0.5 h-5 w-5" />
          Preview {`(${props.selected})`}
  
        </button>
      
  
              </section>
              <div className='mt-5'>You are now viewing the <span className='text-xl underline'>{isPush==true?"Push":"Task"}</span> program.</div>
              <div className='text-black'>{`(${props.count} videos available)`}</div>
           
          </div>
        </div>
      {open&&
      <div
          
      className="relative inset-x-0  sm:top-0 md:top-0 -z-10 bg-white  shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:-translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
    >
      
      {/**  <div className="bg-gray-50">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div>
    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
      Search candidates
    </label>
    <div className="mt-2 flex rounded-md shadow-sm">
      <div className="relative flex flex-grow items-stretch focus-within:z-10">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <UsersIcon aria-hidden="true" className="h-5 w-5 text-gray-400" />
        </div>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="John Smith"
          className="block w-full rounded-none rounded-l-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
      <button
        type="button"
        className="relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
      >
        <BarsArrowUpIcon aria-hidden="true" className="-ml-0.5 h-5 w-5 text-gray-400" />
        Sort
      </button>
    </div>
  </div>
        </div>
      </div>*/}
          

      <div className=" mx-auto grid max-w-7xl grid-cols-1 gap-2 px-6  sm:grid-cols-2 sm:gap-x-6 sm:gap-y-0 pb-5 lg:grid-cols-3 lg:gap-4 lg:px-8 xl:gap-8">
        {solutions.map((item) => (
          <div
            key={item.name}
            onClick={()=>{
              console.log("hihi")
             
              var initial=props.searchConditions
             initial[item.booleanval]=!initial[item.booleanval]
              if(item.booleanval=="beginner_task"){
                
                initial["push"]=!initial[item.booleanval]
                setPush(true)

              }else{
                initial["beginner_task"]=!initial[item.booleanval]
                setPush(false)

              }
              props.setConditons({...initial})}}
            className="group relative -mx-3 flex gap-6 rounded-lg p-3 text-sm leading-6 hover:bg-gray-50 sm:flex-col sm:p-6"
          >
            <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
              <item.icon aria-hidden="true" className="h-6 w-6 text-gray-600 group-hover:text-rose-600" />
              
            </div>
         

            <div>
              <div  className="font-semibold text-gray-900">
                  <section className='flex justify-between'>
                {item.name}
                   <Switch
      checked={props.searchConditions[item.booleanval]}
      
      className="group relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-200 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 data-[checked]:bg-green-600"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out group-data-[checked]:translate-x-5"
      />
                  </Switch>
                  </section>
                <span className="absolute inset-0" />
              </div>
              <p className="mt-1 text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
 
    </div>


      }
        
        
      </div>
      



   
    
    </>
  )
}
