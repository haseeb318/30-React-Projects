
import './App.css'
import {  useState } from 'react'
import Input from './Componet/Input'
import DisplayColor from './Componet/DisplayColor'

function App() {
    const [redValue,setRedValue] = useState(0)
    const [greenValue , setGreenValue] = useState(0)
    const [blueValue, setBlueValue]= useState(0)


    const handlerRedValue =(value)=>{
      setRedValue(value)
      console.log("value of red ",value)
    }

    const handleGreenValue =(value)=>{
      setGreenValue(value)
      console.log("value of red ",value)
    }

    const handleBlueValue =(value)=>{
      setBlueValue(value)
      console.log("value of red ",value)
    }


  return (
    <> 
     <div className='main--container'>
      <div className='color'>
         <div style={{background: `rgb(${redValue},${greenValue},${blueValue})`}}>
         
        </div>
      </div>

      <div className='slide'>
        <h1 style={{paddingBottom:"0.5rem"}}>Color Generator</h1>
        <Input  label="Red" onChangeColor ={handlerRedValue}/>
        <Input label ="Green" onChangeColor ={handleGreenValue}/>
        <Input label ="Blue" onChangeColor ={handleBlueValue}/>
        <DisplayColor  redValue={redValue} 
        greenValue={greenValue} blueValue={blueValue} />
        
      </div>
   
      {/* <div className='colorDispay'>
        <DisplayColor  redValue={redValue} 
        greenValue={greenValue} blueValue={blueValue} />
      </div> */}
        
    
     </div>
    </>

  )
}

export default App
