import Head from 'next/head'
import Image from 'next/image'
import React, { useState, useEffect } from 'react';

import Videobutton from '../components/videobutton'
import DisclaimerPopup from '../components/Disclaimer'
import dynamic from "next/dynamic";
import HeroSection from '../components/HeroSection';
import Link from 'next/link'
import HeaderNav from '../components/HeaderNav';
import { serverSideTranslations } from "next-i18next/serverSideTranslations";


export default function Home() {

  const [deferredPrompt, setDeferredPrompt] = useState(null);
  useEffect(() => {
    // Check if the user has already accepted the disclaimer

      const handleBeforeInstallPrompt = (event) => {
        
        event.preventDefault();
        setDeferredPrompt(event);
      };
      window?.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

  
  }, []);
 


    const addToHomeScreen = () => {
      if (deferredPrompt) {
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((choiceResult) => {
          if (choiceResult.outcome === 'accepted') {
            console.log('User accepted the installation prompt.');
          } else {
            console.log('User dismissed the installation prompt.');
          }
          setDeferredPrompt(null);
        });
      }
      else{
        console.log("hi")
      }
    };
  

  
  return (
    <div >
     
      <Head>
    <title>REPS- Lower limb and upper limb exercises for people with stroke</title>
      <link rel="icon" href="/favicon.ico" />
            <meta charSet="UTF-8" />
            <meta name={`REPS physiotherapy exercises for people with stroke`} content="REPS consists of two post stroke exercise programs TASK and PUSH. Both programs utilise a stragety that can assist recovery after stroke - repetitive exercise. TASK involves the repetitive practice of four everyday tasks whereas PUSH involves the repetitive practice of arm movements." />
            <meta name="viewport" content="width=device-width,initial-scale=1.0" /> 
            <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.0/flowbite.min.css" rel="stylesheet" />
    </Head>

    
      
      <HeroSection></HeroSection>

      
     

      
  
      {deferredPrompt? <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4"><div className="container mx-auto flex items-center justify-between">
    <div>
      <p>Install this app on your device for quick access.</p>
      
    </div>
    <button className="bg-white text-gray-900 rounded px-4 py-2" onClick={addToHomeScreen}>Install</button>
  
  </div></div>:null}
  

      

   
    </div>
  )
  
}

export async function getStaticProps(context) {
  // extract the locale identifier from the URL
  const { locale } = context

  return {
    props: {
      // pass the translation props to the page component
      ...(await serverSideTranslations(locale)),
    },
  }
}
