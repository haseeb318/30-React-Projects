import React from 'react'

export const Suggestions = ({filterUser,handleClick}) => {
  return (
    <ul>
        {
        filterUser.map((item,index)=>
        <li
        onClick={handleClick}
        key={index}>
            {item}
        </li>)}
    </ul>
  )
}
