import React from 'react'

const Disclaimer = (props:{
    setDisclaimer:any
setCount:any
}) => {
  return (
    <div>

        <button onClick={()=>{
            props.setCount(0)
            props.setDisclaimer(true)
        }}>Acknowledge</button>
    </div>
  )
}

export default Disclaimer