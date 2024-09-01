import React from 'react'

const PhoneNumber = (props:{
    inputValue:any,
    setParentInput:any
}) => {
  return (
    <div>
    <label htmlFor="phone-number" className="block text-sm font-medium leading-6 text-gray-900">
      Phone Number
    </label>
    <div className="relative mt-2 rounded-md shadow-sm">
      <div className="absolute inset-y-0 left-0 flex items-center">
        <label htmlFor="country" className="sr-only">
          Country
        </label>
        <select
          id="country"
          name="country"
          autoComplete="country"
          className="h-full rounded-md border-0 bg-transparent py-0 pl-3 pr-7 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
        >
          <option>AU</option>
          <option>UK</option>
          <option>HK</option>
        </select>
      </div>
      <input
        id="phone-number"
        name="phone-number"
        type="text"
        placeholder="+61 478679367"
        className="block w-full rounded-md border-0 py-1.5 pl-16 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      />
    </div>
  </div>
  )
}

export default PhoneNumber