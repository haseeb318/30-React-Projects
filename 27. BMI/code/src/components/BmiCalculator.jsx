import React, { use, useState } from 'react'

const BmiCalculator = () => {
    const [weight , setWeight]= useState("")
    const [height , setHeight] = useState("")
    const [bmi , setBmi]=useState(null)
    const [status , setStatus]= useState("")


    function bmiCalculate (){
        if(weight && height){
           const heightInMeters = height/100;
           const calculateBmi = (weight/(heightInMeters ** 2)).toFixed(2)
           setBmi(calculateBmi)
           if(calculateBmi <18.5){
            setStatus("underWeight")
           }else if (calculateBmi >= 18.5 && calculateBmi <= 24.9){
            setStatus("Normal weight")
           }else if (calculateBmi > 25 &&  calculateBmi <=29.9){
            setStatus("overWeight")
           }else{
            setStatus("Obesity")
           }
        }else{
            alert("Please enter Weight and Height")
        }
    }

  return (
    <>
    <div className="container">
        <h1 className='title'>BMI Calculator </h1>
        <div className="inputGroup">
            <input type="number" 
            placeholder='weight (kg)'
            className='inputField'
            onChange={(e)=>setWeight(e.target.value)}
            />
             <input type="number" 
            placeholder='height (cm)'
            className='inputField'
            onChange={(e)=>setHeight(e.target.value)}
            />
        </div>
        <button className="button" onClick={bmiCalculate}>Calculate BMI</button>
        {bmi && (<div className='result'>
            <h2>Your BMI : {bmi}</h2>
            <h3>Status: {status}</h3>

        </div>)}
    </div>
    </>
  )
}

export default BmiCalculator