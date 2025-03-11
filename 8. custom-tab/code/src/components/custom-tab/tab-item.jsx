import { useState } from "react"
import "./style.css"


const TabItem = ({tabs ,onChange})=>{

    const [getIndex, setGetIndex]=useState(0)
    const currentTab =(ind)=>{
        console.log(ind)
        setGetIndex(ind)
    }

    return (
        <>
        <div className="tab-container">
            
            <div className="tabs"> 
                {tabs.map((item,index)=>(
                    <div key={index}
                    onClick={()=>currentTab(index)}
                    >
                    <button className="tab">{item.label}</button>  
                    </div>
                ))}
            </div>

            <div className="content">
               <p>{tabs[getIndex] && tabs[getIndex].content}</p> 
            </div>



        </div>
        </>
    )
}
export default TabItem