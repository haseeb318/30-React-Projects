import { useEffect, useState } from "react"


const Randomcolor =()=>{
    const [typeOfCOlor , setTypeOfcolor]=useState("hex")
    const [color , setColor]=useState("#000000")

    const randomMathColor =(length)=>{
        return Math.floor(Math.random()*length)
    }

    const handleCreateHexColor=()=>{
        const hex =[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
        let hexColor = "#"

        for(let i = 0 ; i<6 ;i++){
            hexColor += hex[randomMathColor(hex.length)]
            console.log(hexColor)
        }
        console.log(hexColor)
        setColor(hexColor)
    }
    useEffect(()=>{
        if (typeOfCOlor==="hex"){
            handleCreateHexColor()
        }
        else{
            
            handleCreateRbgColor()

        }

    },[typeOfCOlor])

    
   const  handleCreateRbgColor =()=>{
    console.log(typeOfCOlor)
      let r= randomMathColor(255)
      let g= randomMathColor(255)
      let b= randomMathColor(255)
      setColor(`rgb(${r},${g},${b})`)
      console.log(color)
   }

    return(
        <>
        <div style={{
            width:"100%",
            height:"100Vh",
            backgroundColor:color,
            textAlign:"center",


            
        }} >
        <button style={{padding:"8px", width:"6rem", borderRadius:"4px"}} onClick={()=>setTypeOfcolor("hex")}>Hex</button>
        <button style={{padding:"8px",width:"6rem", borderRadius:"4px" ,margin:"0px 4px"}} onClick={()=>setTypeOfcolor("RGB")}>RGB</button>
        <button  style={{padding:"8px", borderRadius:"4px"}}onClick={typeOfCOlor ==="hex"? handleCreateHexColor:handleCreateRbgColor} >Random Color generator</button>
        <div style={{
            fontSize:"xx-large",
            fontWeight:"bolder",
            padding:"50vh"

        }}>{typeOfCOlor} : {color}</div>
        </div>

        
        </>
    )
}
export default Randomcolor