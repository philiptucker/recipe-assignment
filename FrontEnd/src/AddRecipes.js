import './App.css';
import { Link } from "react-router-dom";


export function AddRecipe(){
  return (
    <div>
      <nav>
        <Link to="/">Recipes</Link>
      </nav>
      <h1>Add a recipe!</h1>
      <form action="/api/addRecipe" method="POST" encType="multipart/form-data">
        <input
          name='name'
          type="text"
          placeholder="Recipe name..."
        />
        <input
          name='description'
          type="text"
          placeholder="Recipe description..."
        />
        <input
          name='ingredients'
          type="text"
          placeholder="List ingredients..."
        />
        <input
          name='directions'
          type="text"
          placeholder="Recipe directions..."
        />
        <input 
          type="file" 
          name="file"
          required
        />  
        <button type='submit'>Add Recipe</button>
      </form>
    </div>
  );
}