import React,{ useEffect, useState} from 'react'

const Agreement = () => {
    const [prompt,setDisclaimerAgreed]=useState(true)
    useEffect(() => {
        // Check if the user has already accepted the disclaimer
        const disclaimerAcceptedInStorage = window?.localStorage.getItem('disclaimerAccepted');
      
          
        if (disclaimerAcceptedInStorage&&disclaimerAcceptedInStorage=="true") {
          setDisclaimerAgreed(true);  
        }else{
            setDisclaimerAgreed(false);  

        }
      }, []);
  return {prompt,setDisclaimerAgreed}
}

export default Agreement