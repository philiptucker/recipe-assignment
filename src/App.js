import logo from './logo.svg';
import './App.css';
import { Link } from "react-router-dom";
import {useState, useEffect, useRef} from 'react';
import { RecipeList } from './recipes';



export function AddRecipe(){


  const txtName = useRef();
  const txtDesc = useRef();
  const txtIngred = useRef();
  const txtDirect = useRef();
  const recipeImg = useRef();

  const submit = (e) => {
    e.preventDefault();
    /*
    const fs = require('fs');
    const data = fs.readFileSync('allRecipes.json');
    const jsonData = JSON.parse(data);*/

    const name = txtName.current.value;
    const desc = txtDesc.current.value;
    const ingred = txtIngred.current.value;
    const direct = txtDirect.current.value;
    const pic = recipeImg.current.value;

    let recipeData = {
      name: {name}, 
      ingredients: {ingred}, 
      directions: {direct}, 
      description: {desc}, 
      img: {pic} 
    };
    /*
    jsonData.push(recipeData);
    const jsonString = JSON.stringify(jsonData);

    fs.writeFileSync('allRecipes.json', jsonString, 'utf-8', (err) => {
      if (err) throw err;
      console.log(`${name} added to file`)
    });*/



    alert(`${name} has been added to recipes.`);
    txtName.current.value = "";
    txtDesc.current.value = "";
    txtIngred.current.value = "";
    txtDirect.current.value = "";
    recipeImg.current.value = "";
  };

  return (
    <div>
      <nav>
        <Link to="/">Recipes</Link>
      </nav>
      <h1>Add a recipe!</h1>
      <form onSubmit={submit}>
        <input
          ref={txtName}
          type="text"
          placeholder="Recipe name..."
        />
        <input
          ref={txtDesc}
          type="text"
          placeholder="Recipe description..."
        />
        <input
          ref={txtIngred}
          type="text"
          placeholder="List ingredients..."
        />
        <input
          ref={txtDirect}
          type="text"
          placeholder="Recipe directions..."
        />
        <input
          ref={recipeImg}
          type="file"
          placeholder="Picture of recipe..."
        />
        <button>Add Recipe</button>
      </form>
    </div>
  );
}


export function App() {

  const [recipes, setRecipes] = useState(null);
  const fetchJson = () => {
    fetch('./allRecipes.json')
    .then(response => {
      return response.json();
    }).then(setRecipes);
  }
  
  useEffect(() => {
    fetchJson()
  }, [])

  console.log({recipes});
  if (recipes == null) return;

  return (
    <div>
      <nav>
        <Link to="/add">AddRecipe</Link>
      </nav>
      <h1>Recipe Website</h1>
      <RecipeList recipes={recipes}/>
    </div>
  );
}
