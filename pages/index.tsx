import Head from 'next/head'
import Image from 'next/image'
import React, { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css'
import Videobutton from '../components/videobutton'
import DisclaimerPopup from '../components/Disclaimer'
import dynamic from "next/dynamic";
import HeroSection from '../components/HeroSection';
import Link from 'next/link'
import HeaderNav from '../components/HeaderNav';
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

export default function Home() {
  const [disclaimerAgreed, setDisclaimerAgreed] = useState(false);
  const handleAgree = () => {
    setDisclaimerAgreed(true);
    
    localStorage.setItem('disclaimerAccepted', 'true');
  };
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  useEffect(() => {
    // Check if the user has already accepted the disclaimer
    const disclaimerAcceptedInStorage = window?.localStorage.getItem('disclaimerAccepted');
  
      const handleBeforeInstallPrompt = (event) => {
        
        event.preventDefault();
        setDeferredPrompt(event);
      };
      window?.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    if (disclaimerAcceptedInStorage) {
      setDisclaimerAgreed(true);  
    }
  }, []);
  if (!disclaimerAgreed ) {
    return (
      <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50 overflow-scroll max-h-screen p-10">
        <div className="bg-white p-6 rounded shadow-md max-h-[90vh] overflow-scroll">
          <h2 className="text-lg font-medium mb-4">Disclaimer</h2>
          <p className="mb-4 text-gray-950 z-50">
          Disclaimer

The exercise programs contained in the REPS app are general exercise programs that are not comprehensive or intended to be suitable for all people after stroke.

Macquarie University does not make any representations or warranties as to the effectiveness of the exercises contained in this video.

Use of the PUSH or TASK exercise programs contained in REPS should be prescribed by a healthcare professional and adapted to your individual needs.

This video should be used as a guide only and is not a substitute for the advice or prescribed course of treatment of qualified physiotherapists, occupational therapists or medical practitioners.

Should you have any questions or problems regarding the use of the PUSH or TASK programs please consult your relevant healthcare professional.

You hereby assume full responsibility for ensuring the appropriateness of any use of the PUSH or TASK exercise program, and you acknowledge that neither Macquarie University nor any of the developers of the PUSH or TASK programs accept any responsibility for decisions made by you based on the use of the PUSH or TASK programs.

Exclusion of Liability
Participation in any of the exercises shown on this video is at your own risk. By viewing this demonstration exercise video or performing the exercises demonstrated, you acknowledge and accept that, to the extent permitted by law, Macquarie University or the developers of the PUSH or TASK exercise programs will be under any liability to you whatsoever, whether in contract or tort (including, without limitation, negligence), breach of statute or any other legal or equitable obligation, in respect of any injury, loss or damage (including loss of profit or savings), howsoever caused, which may be suffered or incurred by the viewer or any other person.

          </p>
          <button className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 mr-2" onClick={handleAgree}>
            I Agree
          </button>
        </div>
      </div>
    );
  }
  else{

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
            <meta name={`REPS exercises for people with stroke`} content="" />
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
