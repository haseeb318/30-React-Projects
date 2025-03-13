import { useState } from "react"
import Model from "./model"

const ModelTest =()=>{
    const [showPopup, setShowPopup]= useState(false)
    
    const showModel =()=>{
        setShowPopup(!showPopup)
    }

    const onCloseHandler =()=>{
        setShowPopup(false)
    }
    return (
    <div className="main">
    <button onClick={showModel}>Popup</button>
    <div>
    {
        showPopup && <Model 
        onCloseHandler={onCloseHandler}
        />
    }
    </div>
    </div>
    )
}
export default ModelTest