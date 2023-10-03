import express from 'express';
import bodyParser from 'body-parser';
import { MongoClient } from 'mongodb';

const clientData = 'mongodb://127.0.0.1:27017'
const app = express();
app.use(bodyParser.urlencoded({ extended: false}));
const port = 4000;

app.get('/api/recipes', async (req, res) => {
    const client = new MongoClient(clientData);
    await client.connect();
    const db = client.db("recipe-db");

    const data = await db.collection("recipes").find({}).toArray();
    res.json(data);
})

app.post('/api/removeRecipe', async (req, res) => {
    const client = new MongoClient(clientData);
    await client.connect();
    const db = client.db("recipe-db");

    const removedRecipe = await db.collection("recipes").deleteOne({"name":req.body.recipename});
    console.log(removedRecipe.deletedCount);
    const data = await db.collection("recipes").find({}).toArray();
    res.json(data);
})

app.post('/api/addRecipe', async (req, res) => {
    const client = new MongoClient(clientData);
    await client.connect();
    const db = client.db("recipe-db");

    const newRecipe = req.body.recipeObj;

    await db.collection("recipes").insertOne({
        "name":req.body.name,
        "ingredients":req.body.ingredients, 
        "directions":req.body.directions,
        "description":req.body.description,
        "img":req.body.img
    });
    res.sendStatus(200);
})

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

