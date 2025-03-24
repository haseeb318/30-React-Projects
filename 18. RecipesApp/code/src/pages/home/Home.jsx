import React, { useContext } from "react";
import { globalContext } from "../../context";
import { RecipesItem } from "./RecipesItem";
import "./home.css";

const Home = () => {
  const { loading, recipes } = useContext(globalContext);
  // console.log("recipes", recipes)
  return (
    <>
      {loading && <div style={{textAlign:"center" ,margin:"21px"}}>Loading....</div>}
      
      {recipes && recipes.length ? (
        <ul className="recipes-container">
          {recipes.map((item) => (
            <li className="recipesitem" key={item.id}>
              <RecipesItem item={item} />
            </li>
          ))}
        </ul>
      ) : (
        !loading &&
        <h1 style={{textAlign:"center" ,margin:"21px"}}>Dont have data to represent please Search it</h1>
      )}
    </>
  );
};

export default Home;
