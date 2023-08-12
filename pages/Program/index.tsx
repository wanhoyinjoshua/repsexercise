import React,{useState,useEffect} from 'react'
import dynamic from "next/dynamic";
import helper from "../../components/helper"
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

import Loading from '../../components/Loading';
const Index = () => {

  const [submittedgoal,setSubmittedGoal]=useState("Submit A Goal and exercises will be recommended below!")

  const [data, setData] = useState(null);
  const [activevideo,setVideo]=useState(null)
const [goalloading,setGoalloading]=useState(false)
const [nomatch,setnomatch]=useState(false)


  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = event => {
    setSearchValue(event.target.value);
  };
    const dictionary=
    {
      "sittostand_beginner":"https://vimeo.com/268313650/14eafa961c",
      "sittostand_advanced":"https://vimeo.com/268313498/744a2ce4ec",
      "stepping_beginner":"https://vimeo.com/268313436/866a8a8136",
      "stepping_advanced":"https://vimeo.com/268313376/bbf5243eeb",
      "step_tap_beginner":"https://vimeo.com/268313312/5ad82d71e8",
      "step_tap_advanced":"https://vimeo.com/268313260/223bb6a4d0",
      "stand_and_reach_beginner":"https://vimeo.com/268313197/351790deae",
      "stand_and_reach_advanced":"https://vimeo.com/268313127/3fd635e6f4",
      "sit_and_reach_beginner":"https://vimeo.com/268313080/31e2376b3f",
      "sit_and_reach_advanced":"https://vimeo.com/268313022/31794a0c35",
      "push_part1":"https://vimeo.com/121074793",
      "push_part2":"https://vimeo.com/121079268",
      "The_shoulder_PUSH":"https://vimeo.com/285448922",
      "The_arm_PUSH":"https://vimeo.com/285448955",
      "The_elbow_bend_and_straighten":"https://vimeo.com/285448991",
      "Visualise_hand_movements":"https://vimeo.com/285449022",
      "The_thumb_slide":"https://vimeo.com/285449064/6b0905109b",
      "Hold_onto_your_head":"https://vimeo.com/285449098/3a39dff832",
      "The_in_and_out":"https://vimeo.com/120992262/0f3a940b59",
      "Task_Intro":"https://vimeo.com/268313721/bbd19b2574"




    }
    const [loading, setLoading] = useState(true);

  const handleBuffer = () => {
    setLoading(true);
  };

  const handleBufferEnd = () => {
    setLoading(false);
  };

  const handleReady = () => {
    setLoading(false);
  };
  var imglink="https://www.google.com/imgres?imgurl=https%3A%2F%2Fimgv3.fotor.com%2Fimages%2FvideoImage%2Fcreate-various-bridal-shower-invitation-with-fotor-copy.jpg&tbnid=CU-MuTeLP3-MAM&vet=12ahUKEwi_24zLncb_AhWjKrcAHeMHAHgQMygCegUIARCvAQ..i&imgrefurl=https%3A%2F%2Fwww.fotor.com%2Fdesign%2Fyoutube-thumbnail.html&docid=6Zb7KK2g3J9igM&w=1440&h=960&q=online%20image%20for%20video%20preview&ved=2ahUKEwi_24zLncb_AhWjKrcAHeMHAHgQMygCegUIARCvAQ"

  function changevideo(link:string){
    
setVideo(link)
  }

  async function submit(){
    setGoalloading(true)
    const data= await helper(searchValue)
    console.log(data)
    setData(data);

    setVideo(data[0]["videolink"])
    setSubmittedGoal(searchValue)
    setGoalloading(false)
    /*
    fetch(`/api/queryvideos?goals=${searchValue}`)
        .then(response => response.json())
        .then(data => {
          setData(data);
          setVideo(data[0]["videolink"])
          setSubmittedGoal(searchValue)
          setGoalloading(false)
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
        */

  }

   
  return (
    <div className='h-[90vh]'>
        <section className='mb-1.5'>
        <div
  className="flex items-center justify-between gap-4 px-4 py-3 text-black"
>
  <p className="text-sm font-medium">
    This page allows you to find the right exercise videos for you based on your goals. Type your goal in the box below and hit search. Unsure what your goal is? Explore our example goals with the buttons below!
   
  </p>


</div>
        </section>


        <section>
        <div
  role="alert"
  className="rounded-xl border border-gray-100 bg-white p-4 shadow-xl"
>
  <div className="flex items-start gap-4">
  {goalloading?<span className="text-green-600">
  <span className="text-green-600">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    className="h-6 w-6 animate-spin"
  >
    
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M12 2.5L3.5 9.5L8 14H6L12 22L18 14H16L20.5 9.5L12 2.5z"
    />
  </svg>
</span>

</span>
:<span className="text-green-600">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </span>}
    
{goalloading?
<div className="flex-1">
      <strong className="block font-medium text-gray-900"> Finding exercises based on your goal </strong>

      <p className="mt-1 text-sm text-gray-700">
        Finding exercises for<strong>{submittedgoal}</strong> <br></br>
        Almost there...
      </p>
    </div>:
    <div className="flex-1">
     

      <strong className="block font-medium text-gray-900"> Search our video library using your goal! </strong>

      <div className="mt-1 text-sm text-gray-700">
      <div>
        <button
          onClick={()=>{setSearchValue("I want to be able better at walking outdoors so I can walk my dog, the exercises should be quite challenging. ")}}
    className="inline-flex items-center justify-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-emerald-700 hover:bg-emerald-200 hover:text-emerald-800"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      className="-ms-1 me-1.5 h-4 w-4"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>

    <div className="whitespace-nowrap text-sm">Walking my dog</div>
        </button>


        <button
          className="inline-flex items-center justify-center rounded-full bg-amber-100 px-2.5 py-0.5 text-amber-700 hover:bg-amber-200 hover:text-amber-800"
          onClick={()=>{setSearchValue("I want to be better at opening the water bottle cap with my hands and reaching for the bottle by myself.")}}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="-ms-1 me-1.5 h-4 w-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>

          <div className="whitespace-nowrap text-sm">Open the bottle cap by myself</div>
        </button>

        <button
          className="inline-flex items-center justify-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-emerald-700 hover:bg-emerald-200 hover:text-emerald-800"
          onClick={()=>{setSearchValue("I want to be better at moving my shoulder to reach back to tie my hair and be better with my fingers")}}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="-ms-1 me-1.5 h-4 w-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>

          <div className="whitespace-nowrap text-sm">Tie my hair up</div>
        </button>
          <div className="mb-3">
          <div className="mb-3">
  <div className="relative mb-4 flex w-full flex-wrap items-stretch">
    <input
      type="search"
      className="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
      placeholder="Search"
      aria-label="Search"
      aria-describedby="button-addon3" 
      value={searchValue}
      onChange={handleSearchChange}/>

    <button
      className="relative z-[2] rounded-r border-2 border-primary px-6 py-2 text-xs font-medium uppercase text-primary transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
      type="button"
      id="button-addon3"
      onClick={submit}
      data-te-ripple-init>
      Search
    </button>
  </div>
</div>
          
        </div>

      </div>
      </div>
    </div>}
    

    
  </div>
</div>


        </section>
 
{data&&goalloading==false?  <div className="h-full grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
  <div className="h-full rounded-lg bg-gray-100">
  <ul>

    

    {data&&data.map((exercise)=>(
          <li key={exercise["id"]}>
            
          <button
          onClick={()=>{changevideo(exercise["videolink"])}}
            
            className={`flex items-center gap-2 w-full ${activevideo==exercise["videolink"]?"border-s-[3px] border-red-500 bg-red-50 px-4 py-3 text-red-700 hover:bg-red-200 hover:text-red-800" : "border-s-[0px] border-red-100 bg-red-10 px-4 py-3 text-black-700 hover:border-red-500 hover:bg-red-50"} `}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 opacity-75"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
      
            <span className="text-sm font-medium"> {JSON.stringify(exercise["name"])} </span>
          </button>
        </li>


    ))
    }



  
</ul>
  </div>
  <div className="h-full rounded-lg bg-gray-100 lg:col-span-2">
    {activevideo==null?<div></div>: 
    <section>
      <div className='h-fit rounded-lg bg-gray-200 lg:col-span-2 bg-black'>
          {goalloading?<Loading></Loading>:<ReactPlayer 
        width='100%'
        light={true}
        
        
        controls={true} url={activevideo} 
      
          
        />}
          


      </div>
      <div className='h-1/6 rounded-lg bg-gray-300 lg:col-span-2'>
    




        
      </div>

    </section>
    }

 
  </div>
</div>:<div></div>}
      

    </div>
   
  )
}

export default Index