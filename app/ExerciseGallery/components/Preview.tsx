
import React from 'react'
import { VideoCameraIcon } from '@heroicons/react/24/outline'
import SortableList, { SortableItem } from 'react-easy-sort'

import PreviewCardItem from './PreviewCardItem'
import { convertid2Object } from '../utils/convertId2Object'
const Preview = (props:{
    setPreview:any
    videoId:any
    setvideoid:any
}) => {



  const [items, setItems] = React.useState(convertid2Object(props.videoId))
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
            <section className='flex justify-between'>
            <button onClick={()=>{props.setPreview(false)}}>Back</button>
    <section className='flex  flex-wrap-reverse justify-end'>
    <button
          onClick={()=>{}}
        type="button"
        className="  inline-flex items-center gap-x-2 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        <VideoCameraIcon aria-hidden="true" className="-ml-0.5 h-5 w-5" />
        Share
      </button>
      <a
       href={`/VideoBooklet?id=${props.videoId.join("_")}`}
        type="button"
        className="ml-5 inline-flex items-center gap-x-2 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        <VideoCameraIcon aria-hidden="true" className="-ml-0.5 h-5 w-5" />
        Start
      </a>

    </section>
       

            </section>


            <section>

<SortableList onSortEnd={onSortEnd} className="list" draggedItemClassName="dragged">
{convertid2Object(props.videoId).map((item) => (
<SortableItem key={item.id}>
  <div className='item'>
    <PreviewCardItem isPreview={true} currentid={item.id} img={item.img} header={item.label} setid={props.setvideoid} videoid={props.videoId } ></PreviewCardItem>
  

  </div>
 
</SortableItem>
))}
</SortableList>
{convertid2Object(props.videoId).length==0?<div>No exercises selected</div>:null}

</section>
         
        </div>

      




      </div>

 

  )
}

export default Preview