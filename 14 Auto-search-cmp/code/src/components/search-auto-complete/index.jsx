import { useState, useEffect } from "react" 
import { Suggestions } from "./Suggestions"
import "./searchAuto.css"



const SearchAutoComplete =()=>{

    const [loading,setLoading] =useState(false)
    const [users , setUsers] =useState([])
    const [error,setError]=useState(null)
    const [serachParam,setSerachParam]=useState([])
    const[filterUser, setFilterUser]=useState([])
    const [showDropDown , setShowDropDown]= useState(false)
    

    const  fetchListOfUsers = async()=>{
       try {
        setLoading(true)
        const response =await fetch("https://dummyjson.com/users")
        const data = await response.json()
        console.log(data)

        if(data && data.users && data.users.length){
            setUsers(data.users.map((userItem)=>userItem.firstName))
            setLoading(false)
            setError(null)
        }
       } catch (error) {
        console.log(error)
        setError(error)
       }

    }

    useEffect(()=>{
        fetchListOfUsers();

    },[])

    const handleChange =(event)=>{
        const query = event.target.value.toLowerCase()
        setSerachParam(query)

        if(query.length > 1) {
           const filteredData = users && users.length ?
            users.filter((item)=>(item.toLowerCase().indexOf(query) > -1))
            :[]
            setFilterUser(filteredData)
            console.log("filterData",filteredData)
            setShowDropDown(true)
        }else{
            setShowDropDown(false)
        }

    }
  

    const handleClick =(event)=>{
        setShowDropDown(false)
        setSerachParam(event.target.innerText)
        setFilterUser([])

    }
        return(
        <div className="search-main-container">
            <div className="search-input">
                <input type="text"
                placeholder="Serach "
                value={serachParam}
                 onChange={handleChange}
                 />

            </div>
            <div className="serach-data-display">
            
           { showDropDown && <Suggestions  handleClick={handleClick} filterUser={filterUser}/>
}
            </div>

        </div>
    )
}

export default SearchAutoComplete