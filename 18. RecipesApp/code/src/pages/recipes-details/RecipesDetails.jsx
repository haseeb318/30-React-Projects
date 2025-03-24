import React, { useContext, useEffect } from "react";
import "./recipes.css"

import { useParams } from "react-router-dom";
import { globalContext } from "../../context";
export const RecipesDetails = () => {

  const { id } = useParams();
  const {
    recipesDetail,
    setRecipesDetail,
    handleAddToFavorite,
    favoritesList,
  } = useContext(globalContext);
  console.log(id);

  useEffect(() => {
    const getRecipesDetails = async () => {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
      );
      const data = await response.json();
      console.log(data);
      setRecipesDetail(data.data.recipe);
    };
    getRecipesDetails();
  }, []);

  console.log(recipesDetail);
  return (

    <div className="recipe-detail">

      <h1 style={{margin:"20px"}}> Details of recipes</h1>

    <div className="recipe-cont">

      <div className="img-cont">
        <img src={recipesDetail?.image_url} alt="" />
      </div>

      <div className="ingredients">
        <h1>{recipesDetail?.title}</h1>
        <h1>ingredients</h1>
        <ul>
          {recipesDetail?.ingredients.map((item, index) => (
            <li key={index}>{item.description}</li>
          ))}
        </ul>

        <div>

          <button onClick={() => handleAddToFavorite(recipesDetail)}>
            {favoritesList &&
            favoritesList.length > 0 &&
            favoritesList.findIndex(
              (item) => item.id === recipesDetail?.id
            ) !== -1
              ? "Remove from favorites"
              : "Add to favorites"}
          </button>

        </div>
      </div>
      </div>

    </div>
  );
};
