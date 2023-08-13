import React from 'react'

const Toast = (props:any) => {
  return (
    <div role="alert" className="rounded border-s-4 border-green-500 bg-green-50 p-4">
    <strong className="block font-medium text-green-800"> Search is successful </strong>
  
    <p className="mt-2 text-sm text-green-700">
      Below are exercises for {props.goals}
    </p>
  </div>
  )
}

export default Toast