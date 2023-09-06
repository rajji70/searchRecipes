import "./App.css";
import Recipe from "./component/Recipe";
import React, { useEffect, useState } from "react";

function App() {
  const APP_ID = "d30ea125";
  const APP_Key = "8c075768501bafb349550b18d9437252";
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");



  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_Key}`
    );
    const data = await response.json();
    setRecipes(data.hits);
  };

  useEffect(() => {
    const interval = setInterval(()=>{
      getRecipes();
    },2000);
    // getRecipes();
    return ()=> {
      clearInterval(interval);
    };
  }, [query]);

  const updateSearch = (e) => {
    setSearch(e.target.value);
    setQuery(search)
  };

  const getSearch = (e) => {
    // setQuery(value)
    // console.log(query)
    e.preventDefault();
    setQuery(search)
    getRecipes()
  }

  return (
    <div className="App">
      <h1 style={{}}>Search Recipe</h1>
      <form className="search-form" onSubmit={getSearch}>
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="recipes">
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
