import express from 'express';
import bodyParser from 'body-parser';
import { MongoClient } from 'mongodb';
import multer from 'multer';



const clientData = 'mongodb://127.0.0.1:27017'
const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false}));
const port = 4000;

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '../frontend/public/images');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage: storage});

app.get('/api/recipes', async (req, res) => {
    const client = new MongoClient(clientData);
    await client.connect();
    const db = client.db("recipe-db");

    const data = await db.collection("recipes").find({}).toArray();
    res.json(data);
});

app.post('/api/removeRecipe', async (req, res) => {
    const client = new MongoClient(clientData);
    await client.connect();
    const db = client.db("recipe-db");

    const removedRecipe = await db.collection("recipes").deleteOne({"name":req.body.recipename});
    console.log(removedRecipe.deletedCount);
    const data = await db.collection("recipes").find({}).toArray();
    res.json(data);
});

app.post('/api/addRecipe', upload.single('file'), async (req, res) => {
    const client = new MongoClient(clientData);
    await client.connect();
    const db = client.db("recipe-db");

    await db.collection("recipes").insertOne({
        "name":req.body.name,
        "ingredients":req.body.ingredients, 
        "directions":req.body.directions,
        "description":req.body.description,
        "img":"./images/"+ req.file.filename
    });
    await db.collection("recipes").find({}).toArray();
});
/*
app.post('/upload', upload.single("file"), (req, res) => {
    console.log(file);
    res.json({ message: 'file uploaded succesffully!!'});
});*/

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

