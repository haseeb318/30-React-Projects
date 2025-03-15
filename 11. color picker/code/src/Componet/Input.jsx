import { useState } from "react"

const Input = ({ label,onChangeColor}) => {
    const[red , setRed] = useState(0)

    const onChangeHandler =(e)=>{
        const newValue = e.target.value;
        setRed(newValue)
        console.log("on change",newValue)
        onChangeColor(newValue)
      }


  return (
   <>
   <label >
    {label}
    </label>
   <input type="range"
    value ={red}
    onChange={onChangeHandler}
     min="0"  max= "255"/>
   
   </>
  )
}

export default Input