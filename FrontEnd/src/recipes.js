import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
    <Container>
    <div id={index} left="50%">
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
      <Button variant='flat text' size='xxl' onClick={() => removeRecipe(index)}>Remove Recipe</Button>
      <hr/>
    </div>
    </Container>
  )
}