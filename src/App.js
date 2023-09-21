import './App.css';
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import { RecipeList } from './recipes';


export function App() {

  const [recipes, setRecipes] = useState([]);
  let newRecipeList = [];
  newRecipeList = JSON.parse(localStorage.getItem("storedRecipes"));

  function fetchJson (){
    fetch('./allRecipes.json')
      .then(response => response.json())
      .then(setRecipes)
      .catch( e => console.log(e.message));
  }

  useEffect(() => {
    fetchJson();
  }, []);

  if (recipes == null) return;
  console.log(newRecipeList);
  console.log(recipes);
  return (
    <div>
      <nav>
        <Link to="/add">AddRecipe</Link>
      </nav>
      <h1>Recipe Website</h1>
      <RecipeList recipes={[...recipes, ...newRecipeList]}/>
    </div>
  );
}
