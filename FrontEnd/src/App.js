import './App.css';
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import { RecipeList } from './recipes';
import 'bootstrap/dist/css/bootstrap.min.css';
import Stack from 'react-bootstrap/Stack'


export function App() {

  const [recipes, setRecipes] = useState(null);

  const fetchJson = async () =>{
    fetch('/api/recipes')
      .then(response => response.json())
      .then(setRecipes)
      .catch( e => console.log(e.message));
  }

  useEffect(() => {
    fetchJson();
  }, []);

  if (recipes == null) return;
  return (
    <div>
      <nav>
        <Link to="/add">AddRecipe</Link>
      </nav>
      <h1 class="text-center">Recipe Website</h1>
      <Stack  gap={3}>
        <RecipeList recipes={recipes} setRecipes={setRecipes}/>
      </Stack>
    </div>
  );
}
