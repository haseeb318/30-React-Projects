import { useEffect, useState } from "react"


const useLocalStorage =(key , defualtValue)=>{
    const [value, setValue] =useState(()=>{
        let currentValue ;
        try {
            currentValue = JSON.parse(
                localStorage.getItem(key)|| String(defualtValue)
            )
        } catch (error) {
            console.log(error)
            currentValue = defualtValue    
        }
        return currentValue
    })

    useEffect(()=>{
        localStorage.setItem(key, JSON.stringify(value))
    },[key,value])


    return[value, setValue]
}

export default useLocalStorage