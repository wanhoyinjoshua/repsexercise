'use client'
import React from 'react'
import Player from '@vimeo/player'
import { useRef } from 'react'
const Page = () => {
    const iframeRef = useRef(null);
    function playvideo(){

      var player= new Player(iframeRef.current)  
      console.log(player)
      player.play().then(function() {
        // the video was played
        
    }).catch(function(error) {
        switch (error.name) {
            case 'PasswordError':
                // the video is password-protected and the viewer needs to enter the
                // password first
                break;
    
            case 'PrivacyError':
                // the video is private
                break;
    
            default:
                // some other error occurred
                break;
        }
    });

    }
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
        VideoBooklet
        <button onClick={playvideo}>Play</button>
        <iframe  ref={iframeRef} src="https://player.vimeo.com/video/285448922"  allow="autoplay; fullscreen; picture-in-picture; clipboard-write" title="Exercise 1 - The Shoulder PUSH"></iframe>
    
    </div>
  )
}

export default Page