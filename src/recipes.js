
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
      <p>Name: {name}</p>
			<p>Ingredients: {ingredients}</p>
			<p>Directions: {directions}</p>
      <img height={200} src={img} alt={description} />
    </div>
  )
}