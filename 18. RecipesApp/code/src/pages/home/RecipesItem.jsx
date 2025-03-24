import React from 'react'
import "./recipesitem.css"
import { Link } from 'react-router-dom'

export const RecipesItem = ({item}) => {
    console.log(item)
  return (
    <>
    <div className='item'>
        <img src={item.image_url} alt={item.title} />
        </div>
         <h6>{item.publisher}</h6>
         <h5>{item.title}</h5>
         <Link to={`/detail/${item?.id}`}><button>RECIPES DETAILS</button> </Link>
    </>
  )
}
