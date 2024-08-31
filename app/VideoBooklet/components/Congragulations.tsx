import React from 'react'

const Congragulations = (props:{
    id:any
    stats:any
}) => {
  return (
    <div className='h-screen'>Congragulations
    <div>You have completed {props.stats}</div>
    
    <a href={`/VideoBooklet?id=${props.id}`}>Return</a>
    </div>
  )
}

export default Congragulations