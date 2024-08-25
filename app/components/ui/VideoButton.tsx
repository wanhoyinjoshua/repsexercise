import Link from 'next/link'
interface button {
    link: any
    content: any;
    blank?:boolean;

}
export default function Videobutton(props:button) {

  
    
    return (
        <div>
            
             <Link href={props.link} target={props.blank?"_blank":""}>
<button 
 className="mb-2 mt-1 py-4 px-6  bg-rose-800 hover:bg-rose-500 focus:ring-rose-500 focus:ring-offset-rose-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 " >
   { props.content}
</button>
</Link>

        </div>
   

      
       
    )
  }