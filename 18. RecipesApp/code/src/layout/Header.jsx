import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import "./header.css"
import { CiMenuFries } from "react-icons/ci";
import { globalContext } from '../context';
const Header = () => {
    const {search, setSearch,handleSubmit}=useContext(globalContext)
  return (
     <nav className='nav-container'>
       <div className='brand'>
        <Link href="">Food Recipes</Link>
       </div>
       <div className='nav-items'>
        <ul className='nav-item'>
          <li>
            <form onSubmit={handleSubmit}>   
             <input 
             value={search}
             onChange={(event)=>setSearch(event.target.value)}
             className='search' 
             type="search" 
              placeholder='Search'
              />
            </form>
          </li>
        <li>
            <Link to ="/">Home </Link>
            </li>
          <li>
            <Link to ="/favorite">Favorite</Link>
            </li>
           
        </ul>

        {/* responsive code  */}
        {/* <div className='mob-menu'>
        <CiMenuFries />
        </div> */}

       </div>
     </nav>
  )
}

export default Header