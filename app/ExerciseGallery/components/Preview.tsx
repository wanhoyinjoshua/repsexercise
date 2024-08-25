
import React from 'react'
import { VideoCameraIcon } from '@heroicons/react/24/outline'
import SortableList, { SortableItem } from 'react-easy-sort'
import Videobutton from '@/app/components/ui/VideoButton'

const Preview = (props:{
    setPreview:any
    videoId:any
}) => {
  const [items, setItems] = React.useState(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'])
  const onSortEnd = (oldIndex: number, newIndex: number) => {
    setItems([...items])
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
      <button
          onClick={()=>{}}
        type="button"
        className="ml-5 inline-flex items-center gap-x-2 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        <VideoCameraIcon aria-hidden="true" className="-ml-0.5 h-5 w-5" />
        Start
      </button>

    </section>
       

            </section>


            <section>

<SortableList onSortEnd={onSortEnd} className="list" draggedItemClassName="dragged">
{items.map((item) => (
<SortableItem key={item}>
  <div className='item'>
  <Videobutton link={"/"} content={item}  ></Videobutton>

  </div>
 
</SortableItem>
))}
</SortableList>

</section>
         
        </div>

      




      </div>

 

  )
}

export default Preview