import Link from 'next/link'
interface button {
    link: any
    content: any;

}
export default function Videobutton(props:button) {

  
    
    return (
    <Link href={props.link}>
<button 
 className="m-2 py-4 px-6  bg-rose-800 hover:bg-rose-500 focus:ring-rose-500 focus:ring-offset-rose-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 " >
   { props.content}
</button>
</Link>

      
       
    )
  }