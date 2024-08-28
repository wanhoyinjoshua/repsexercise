import React from 'react'
import { EllipsisVerticalIcon,MinusCircleIcon,CheckCircleIcon , CheckIcon} from '@heroicons/react/20/solid'
const PreviewCardItem = (props:{
    img:any,
    header:any,
    isPreview:any,
    currentid?:any,
    setid?:any,
    videoid?:any
    active?:any
}) => {
  return (
    <li key={"hi"} className="col-span-1 flex rounded-md shadow-sm mt-5 mb-5 cursor-move">
             {props.isPreview==true?<button
                  type="button"
                  className=" mr-2 inline-flex h-8 w-8 items-center justify-center rounded-full  bg-transparent text-rose-800 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >

                  <span className="sr-only">Open options</span>
                  <EllipsisVerticalIcon aria-hidden="true" className="h-5 w-5" />
                </button>:null}
             
            <div
              className={
                'bg-rose-800 flex w-16 flex-shrink-0 items-center justify-center rounded-l-md text-sm font-medium text-white'
              }
            >
              <img src={props.img}></img>
            </div>
            <div className="flex flex-1 items-center justify-between truncate rounded-r-md border-b border-r border-t border-gray-200 bg-white">
              <div className="flex-1 truncate px-4 py-2 text-sm">
                <div  className="font-medium text-gray-900 hover:text-gray-600">
                 {props.header}
                </div>
               
              </div>
              <div className="flex-shrink-0 pr-2">
              
            {props.isPreview? <button
                  type="button"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-transparent bg-white text-rose-800 hover:text-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
                  onClick={()=>{
                   window.alert(JSON.stringify(props.videoid))
                    var newid=props.videoid.filter((id)=>{return id!=props.currentid})
                    window.alert(JSON.stringify(newid))
                    props.setid([...newid])
                  }}
                >
                  <span className="sr-only">Open options</span>
                  <MinusCircleIcon aria-hidden="true" className="h-5 w-5 " />
                </button>: 
                <span className={`inline-flex h-8 w-8 items-center justify-center rounded-full bg-transparent bg-white ${props.active?"bg-green-800 text-white":"text-grey-800"} focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2`}>
                    <CheckIcon aria-hidden="true" className="h-5 w-5 " />
                    </span>}
               
              </div>
            </div>
          </li>
  )
}

export default PreviewCardItem