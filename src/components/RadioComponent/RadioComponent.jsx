import "./radioComponent.css";
import { useEffect, useState } from "react";
import { RadioBrowserApi } from "radio-browser-api";
import AudioPlayer from 'react-h5-audio-player';


const RadioComponent = () => {
   
  return (
    <div>
      <AudioPlayer 
         className="flex"
      />
    </div>
  )
}

export default RadioComponent