`use client`
import React from 'react'
import Head from 'next/head'
import HeroFirst from './components/HeroFirst'
import ProgramInfo from './components/ProgramInfo'
import Download from './components/AndroidDownload'
import TestHero from './components/TestHero'
const Page = () => {
  return (
    <div>

<Head>
    <title>REPS- Lower limb and upper limb exercises videos for people with stroke</title>
      <link rel="icon" href="/favicon.ico" />
            <meta charSet="UTF-8" />
            <meta name={`REPS physiotherapy exercises videos for people with stroke`} content="REPS consists of two post stroke exercise programs TASK and PUSH. Both programs utilise a stragety that can assist recovery after stroke - repetitive exercise. TASK involves the repetitive practice of four everyday tasks whereas PUSH involves the repetitive practice of arm movements. This webpage also allows therapists to customise video booklets and send to patients via email." />
            <meta name="viewport" content="width=device-width,initial-scale=1.0" /> 
            <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
       
    </Head>
    <TestHero></TestHero>
    
    <ProgramInfo></ProgramInfo>
    <Download></Download>
        
        
        
        
        
        </div>
  )
}

export default Page