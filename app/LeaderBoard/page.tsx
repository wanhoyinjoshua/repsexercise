import React from 'react'
import { fetchUsers } from '../services/firebase/LeaderBoard'

const Page = async () => {
    const users= await fetchUsers()
    
  return (
    <div>
        {users.map((e)=>{
            return <div>
                {e.username}
                {e.score}
                </div>
        })}
    
    
    </div>
  )
}

export default Page