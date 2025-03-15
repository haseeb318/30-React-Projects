import React from 'react'

import { useRef,useCallback } from 'react'

const DisplayColor = ({redValue,greenValue,blueValue}) => {
    const copycolor = useRef()
    
   const colorCopy = useCallback(()=>{

    if (copycolor.current) {
      copycolor.current.select(); 
      window.navigator.clipboard.writeText(copycolor.current.value);
      alert("Color code copied to clipboard!");

    }
  },[redValue,greenValue,blueValue])
  return (
    <div>
    <label >RGB : </label>
    <input type="text"
    value={`rgb(${redValue},${greenValue},${blueValue})`}
    readOnly
    ref={copycolor}
     />
    <button  className= "btn"onClick={colorCopy}>copy</button>
    </div>
  )
}

export default DisplayColor