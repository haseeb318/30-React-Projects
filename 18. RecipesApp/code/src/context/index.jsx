import { createContext, use, useState } from "react";
import { useNavigate } from "react-router-dom";

export const globalContext = createContext();

export default function GlobalState({ children }) {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipes, setRecipes] = useState([]);
  const [recipesDetail , setRecipesDetail]= useState(null)
  const [favoritesList, setFavoritesList] = useState([])
 
  const navigate = useNavigate()
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${search}`
      );
      const result = await response.json();
    //   console.log(result);
    if(result?.data?.recipes){
        setRecipes(result?.data?.recipes);
        console.log([recipes])
        setLoading(false);
        navigate('/')
    }
    setSearch("")
      console.log("Submit");
    } catch (error) {
      console.log(error);
      setLoading(false);
      setSearch("")
    }
  };

  const handleAddToFavorite =(getid)=>{
    console.log("handleAddToFavorite",getid)
    const copyFavoriteList =[...favoritesList]
    const index = copyFavoriteList.findIndex(item =>item.id === getid.id)
    if (index=== -1){
      copyFavoriteList.push(getid)
    }else{
      copyFavoriteList.splice(index)
    }
    setFavoritesList(copyFavoriteList)
  }

  return (
    <globalContext.Provider
      value={{
        search,
        setSearch,
        handleSubmit,
        loading,
        setLoading,
        recipes,
        setRecipes,
        recipesDetail ,
        setRecipesDetail,
        favoritesList, 
        setFavoritesList,
        handleAddToFavorite
      }}
    >
      {children}
    </globalContext.Provider>
  );
}
