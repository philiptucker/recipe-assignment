import './App.css';
import { Link } from "react-router-dom";
import { useRef } from 'react';


export function AddRecipe(){
  const txtName = useRef();
  const txtDesc = useRef();
  const txtIngred = useRef();
  const txtDirect = useRef();
  const recipeImg = useRef();

  const submit = (e) => {
    e.preventDefault();
    
    const name = txtName.current.value;
    const desc = txtDesc.current.value;
    const ingred = txtIngred.current.value;
    const direct = txtDirect.current.value;
    const pic = recipeImg.current.value;

    let recipeData = {
      name: txtDesc.current.value, 
      ingredients: txtIngred.current.value, 
      directions: txtDirect.current.value, 
      description: txtDesc.current.value, 
      img: recipeImg.current.value 
    };

    if (name!="" && desc!="" && ingred!="" && direct!="" && pic!=""){
      
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
      
      var urlencoded = new URLSearchParams();
      urlencoded.append("name", name);
      urlencoded.append("ingredients", ingred);
      urlencoded.append("directions", direct);
      urlencoded.append("description", desc);
      urlencoded.append("img", pic);
      
      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: urlencoded,
        redirect: 'follow'
      };
      
      fetch("http://localhost:4000/api/addRecipe", requestOptions)
        .then(response => response.text())
        .then(result => console.log(recipeData))
        .catch(error => console.log('error', error));

      let newRecipeList = []
      if (localStorage.getItem("storedRecipes")){
        newRecipeList = JSON.parse(localStorage.getItem("storedRecipes"));
      }
     
      newRecipeList.push(recipeData);
      localStorage.setItem("storedRecipes", JSON.stringify(newRecipeList));
      alert(`${name} has been added to recipes.`);
    } else{
      alert(`You must fill in all forms.`);
    }
  
    console.log(recipeData);
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
        <select ref={recipeImg}>
          <option value="" disabled selected>Select an Image</option>
          <option value="./images/banana_loaf.jpg">Banana Loaf</option>
          <option value="./images/Food.jpg">Other Food</option>
        </select>
        <button>Add Recipe</button>
      </form>
    </div>
  );
}