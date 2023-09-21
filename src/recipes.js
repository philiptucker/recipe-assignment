

export function RecipeList( {recipes} ){
  console.log(recipes);
  return (
    recipes.map((recipe, i) => {
      return <Recipe 
				name={recipe.name}
				img={recipe.img}
				ingredients={recipe.ingredients}
				directions={recipe.directions}
				description={recipe.description}
        index = {i}
			/>
    })
  )
}

const removeRecipe = (id) => document.getElementById(id).remove();


function Recipe({name, img, ingredients, description, directions, index}){

  return (
    <div id={index}>
      <p><b>Name:</b> {name}</p>
      <p><b>Description:</b> {description}</p>
			<p><b>Ingredients:</b> {ingredients}</p>
			<p><b>Directions:</b> {directions}</p>
      <img height={200} src={img} alt={description} />
      <button onClick={() => removeRecipe(index)}>Remove Recipe</button>
      <p><b>----------------------------------------------------------------</b></p>
    </div>
  )
}