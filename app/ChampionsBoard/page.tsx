import React from 'react'
import { fetchUsers } from '../services/firebase/LeaderBoard'
import { UserCircleIcon } from '@heroicons/react/20/solid'
const Page = async () => {
    const users= await fetchUsers()
    
  return (
    <div className='flex justify-center'>
      <section>
      <h1 className='text-center text-5xl m-10'>Champion Board</h1>
      <ul role="list" className="divide-y divide-gray-100">

      {users.map((person) => (
        <li key={person.email} className="flex gap-x-4 py-5">
          <div  className="h-12 w-12 flex-none rounded-full bg-gray-50"> <UserCircleIcon></UserCircleIcon></div>
          <p className="text-3xl font-semibold leading-6 text-gray-900 align-middle h-full align-bottom">{person.score} reps</p>
        
          <div className="min-w-0">
            
            <p className="mt-1 truncate text-xs leading-5 text-gray-500">{person.username}_{person.date}</p>
          </div>
        </li>
      ))}
    </ul>
    {users.length<1&&<div>No user data.</div>}
       </section>
    
    
    </div>
  )
}

export default Page