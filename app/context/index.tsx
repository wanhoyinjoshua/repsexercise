'use client'

import { createContext, useState } from 'react';
import AppContext from './creation';


export function ContextProvider({ children }) {
  const [score,setScore]=useState()
  


  return (
    <AppContext.Provider value={{"score":score,"setScore":setScore}}>
      {children}
    </AppContext.Provider>
  )
}

