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

  const submit = (e) => {
    e.preventDefault();
    const name = txtName.current.value;
    const desc = txtDesc.current.value;
    const Ingred = txtIngred.current.value;
    const direct = txtDirect.current.value;
    alert(`${name} has been added to recipes.`)
    txtName.current.value = "";
    txtDesc.current.value = "";
    txtIngred.current.value = "";
    txtDirect.current.value = "";

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
        <button>Add Recipe</button>
      </form>
    </div>
  );
}


export function App() {

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
      <nav>
        <Link to="/add">AddRecipe</Link>
      </nav>
      <h1>Recipe Website</h1>
      <RecipeList recipes={recipes}/>
    </div>
  );
}
