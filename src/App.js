import logo from './logo.svg';
import './App.css';
import {useState, useEffect, useRef} from 'react';
import { RecipeList } from './recipes';

function App() {

  let recipeData = [

    {name: "Banana Loaf", 
    ingredients: "Bananas and stuff", 
    directions: "Mix, bake", 
    description: "Delicious Banana Loaf", 
    img: "./images/banana_loaf.jpg"}, 
                    
    {name: "Lasagna", 
    ingredients: "", 
    directions: "", 
    description: "", 
    img: "./images/"}
  
  ];

  const [recipes, setRecipes] = useState(null);

  useEffect( () => {
    setRecipes(recipeData)
  }, []);

  if (recipes == null) return;

  return (
    <div>
      <h1>Recipe Website</h1>
      <RecipeList recipes={recipes}/>
    </div>
  );
}

export default App;
