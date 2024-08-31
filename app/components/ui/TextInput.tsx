import React from 'react'
import { EnvelopeIcon } from '@heroicons/react/20/solid'

const TextInput = (props:{
    inputValue:any,
    setParentInput:any
}) => {
  return (
    <div>
    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
      Email
    </label>
    <div className="relative mt-2 rounded-md shadow-sm">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        <EnvelopeIcon aria-hidden="true" className="h-5 w-5 text-gray-400" />
      </div>
      <input
        id="email"
        name="email"
        type="email"
        placeholder="you@example.com"
        className="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      />
    </div>
  </div>
  )
}

export default TextInput