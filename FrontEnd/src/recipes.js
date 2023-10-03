import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export function RecipeList( {recipes, setRecipes} ){
  if (!Array.isArray(recipes)) {
    console.log(recipes);
    let adjustRecipe = recipes;
    recipes = [];
    recipes = JSON.parse(adjustRecipe);
  }
  return (
    recipes.map((recipe, i) => {
      return <Recipe 
				name={recipe.name}
				img={recipe.img}
				ingredients={recipe.ingredients}
				directions={recipe.directions}
				description={recipe.description}
        index = {i}
        setRecipes = {setRecipes}
			/>
    })
  )
}

const removeRecipe = (name, {setRecipes}) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

  var urlencoded = new URLSearchParams();
  urlencoded.append("recipename", name);

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: urlencoded,
    redirect: 'follow'
  };

  fetch("/api/removeRecipe", requestOptions)
  .then(response => response.text())
  .then( setRecipes )
  .catch(error => console.log('error', error));
}

function Recipe({name, img, ingredients, description, directions, index, setRecipes}){
  return (
    <Container>
    <div key={index} left="50%">
      <style>
        {`
        .btn-flat {
          background-color: indigo;
          color: white;
          position: relative;
          left: 50%;
        }
        .btn-xxl {
          padding: 1rem 1.5rem;
          font-size: 1.5rem;
        }
        `}
      </style>
      <Row>
        <Col><h2>{name}</h2><p class="lead"><b>Description:</b> {description}</p></Col>
        <Col><img height={200} src={img} alt={description} /></Col>
      </Row>
      <Row>
			<Col><p><b>Ingredients:</b> {ingredients}</p></Col>
			<Col><p><b>Directions:</b> {directions}</p></Col>
      </Row>
      <br/>
      <Button variant='flat text' size='xxl' onClick={() => removeRecipe(name, {setRecipes})}>Remove Recipe</Button>
      <hr/>
    </div>
    </Container>
  )
}