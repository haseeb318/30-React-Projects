import React, { useContext } from "react";
import { globalContext } from "../../context";
import { RecipesItem } from "../home/RecipesItem";

const Favorite = () => {
  const { favoritesList } = useContext(globalContext);
  return (
    <>
       {favoritesList && favoritesList.length ? 
             
               <ul  style={{display:"flex", justifyContent:"center"}}>
                 {favoritesList.map((item)=>(<li className='recipesitem'key={item.id}>
                   <RecipesItem item ={item}/>
                   </li>))}
               </ul>:
             <h1>
                Nothing is added in favorites.
               </h1>}

    </>
  );
};

export default Favorite;
