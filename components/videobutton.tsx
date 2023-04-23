import Link from 'next/link'
interface button {
    link: any
    content: any;

}
export default function Videobutton(props:button) {

  
    
    return (
    <Link href={props.link}>
<button 
 className="py-4 px-6  bg-pink-600 hover:bg-pink-700 focus:ring-pink-500 focus:ring-offset-pink-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 ">
   { props.content}
</button>
</Link>

      
       
    )
  }