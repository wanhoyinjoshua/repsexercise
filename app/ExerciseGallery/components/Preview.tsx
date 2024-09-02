
import React from 'react'
import { VideoCameraIcon } from '@heroicons/react/24/outline'
import { Button, Dialog, DialogPanel, DialogTitle,DialogBackdrop } from '@headlessui/react'
import { useState } from 'react'
import {SortableList} from "../../components/ui/SortableList"
import { action_btn_accent, action_btn_color } from '@/constants/ui_style_tailwind'
import { convertid2Object } from '../utils/convertId2Object'
import {MinusCircleIcon} from '@heroicons/react/24/outline'
import ShareBookletDialog from './Dialog'
const Preview = (props:{
    setPreview:any
    videoId:any
    setvideoid:any
}) => {



  const [items, setItems] = React.useState(convertid2Object(props.videoId))
  let [isOpen, setIsOpen] = useState(false)

  function open() {
    setIsOpen(true)
  }

  function close() {
    setIsOpen(false)
  }
  const onSortEnd = (oldIndex: number, newIndex: number) => {
    var oriarray=props.videoId
    var oldIndexItem=oriarray[oldIndex]
    var NewIndexItem=oriarray[newIndex]
    oriarray[oldIndex]=NewIndexItem
    oriarray[newIndex]=oldIndexItem
    props.setvideoid([...oriarray])
  }
  return (
   
        
      <div className="relative isolate z-50 shadow py-5">
      
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <section className='flex justify-between mb-5'>
            <button  className={`inline-flex items-center gap-x-2 rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-${action_btn_color} shadow-sm hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`} onClick={()=>{props.setPreview(false)}}>Back</button>
    <section className='flex  flex-wrap-reverse justify-end'>
    <button
        onClick={open}
        type="button"
        className={`inline-flex items-center gap-x-2 rounded-md bg-${action_btn_color} px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-${action_btn_accent} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
      >
        <VideoCameraIcon aria-hidden="true" className="-ml-0.5 h-5 w-5" />
        Share
      </button>
      <ShareBookletDialog isOpen={isOpen} close={close} program_id={props.videoId.join("_")}></ShareBookletDialog>
      
      <a
       href={`/VideoBooklet?id=${props.videoId.join("_")}`}
        type="button"
        className={`ml-5 inline-flex items-center gap-x-2 rounded-md bg-${action_btn_color} px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-${action_btn_accent} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
      >
        <VideoCameraIcon aria-hidden="true" className="-ml-0.5 h-5 w-5" />
        Start
      </a>

    </section>
       

            </section>


            <section>

            <SortableList
        items={items}
        onChange={setItems}
        renderItem={(item) => (
          <SortableList.Item id={item.id}>
            <button
                  type="button"
                  className=" mr-5 inline-flex h-8 w-8 items-center justify-center rounded-full bg-transparent bg-white text-rose-800 hover:text-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
                  onClick={()=>{
                
                    var newid=items.filter((obj)=>{return obj.id!=item.id})
                    var newidparent=props.videoId.filter((id)=>{return id!=item.id})
                    //window.alert(JSON.stringify(newid))
                    setItems([...newid])
                    props.setvideoid([...newidparent])
                  }}
                >
                  <span className="sr-only">Open options</span>
                  <MinusCircleIcon aria-hidden="true" className="h-5 w-5 " />
                </button>
          
            <span className='flex justify-items-start text-wrap'>
              {item.filter.includes("beginner_task")?<span className='mr-5'><strong>{`(TASK)`}</strong></span>:<span  className='mr-5'><strong>{`(PUSH)`}</strong></span>}
            {item.label}

            </span>
            
            <section>

            <SortableList.DragHandle />
            


            </section>
            
          </SortableList.Item>
        )}
      />


{convertid2Object(props.videoId).length==0?<div>No exercises selected</div>:null}

</section>
         
        </div>

      




      </div>

 

  )
}

export default Preview