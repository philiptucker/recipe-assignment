

export function RecipeList( {recipes} ){
  return (
    recipes.map((recipe, i) => {
      return <Recipe 
				name={recipe.name}
				img={recipe.img}
				ingredients={recipe.ingredients}
				directions={recipe.directions}
				description={recipe.description}
			/>
    })
  )
}


function Recipe({name, img, ingredients, description, directions}){
  return (
    <div>
      <p><b>Name:</b> {name}</p>
      <p><b>Description:</b> {description}</p>
			<p><b>Ingredients:</b> {ingredients}</p>
			<p><b>Directions:</b> {directions}</p>
      <img height={200} src={img} alt={description} />
      <button>Remove Recipe</button>
      <p><b>----------------------------------------------------------------</b></p>
    </div>
  )
}