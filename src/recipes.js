
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
      <p>{name}</p>
			<p>{ingredients}</p>
			<p>{directions}</p>
      <img height={200} src={img} alt={description} />
    </div>
  )
}