import express from 'express';
import bodyParser from 'body-parser';

// cd recipe-assignment/backend
// npm run dev

/**[
  {name: "Banana Loaf", 
  ingredients: "Bananas and stuff", 
  directions: "Mix, bake", 
  description: "Delicious banana loaf", 
  img: "./images/banana_loaf.jpg"}, 
                  
  {name: "Lasagna", 
  ingredients: "Pasta, sauce, cheese", 
  directions: "layer, bake", 
  description: "Tasty lasagna", 
  img: "./images/Food.jpg"}
] */

const app = express();
app.use(express.json());

app.post('/hello', (req, res) =>{
    console.log(req.body);
    res.send(`Hello ${req.body.name} !`);
});

app.get('/hello/:name', (req, res) => {
    const {name} = req.params;
    res.send(`Hello ${name}!?!`);
});

app.listen(8000, () => {
    console.log('Server is listening on port 8000');
});

