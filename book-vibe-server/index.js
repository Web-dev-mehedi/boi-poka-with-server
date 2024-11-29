const express = require('express');
require("dotenv").config()
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;



// middleware
app.use(cors());
app.use(express.json());



// uri
const uri = `mongodb+srv://${process.env.BOOK_VIBE_USER}:${process.env.BOOK_VIBE_PASS}@cluster0.pm9ea.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    //  
    const bookCollection = client.db("BookVibeDB").collection("books");
    const userColllection = client.db("bookVibeUserDB").collection("bookVibeUser");
    const adminColllection = client.db("bookVibeUserDB").collection("bookVibeAdmin")
    // get all data
    app.get('/admin/books', async(req ,res) =>{ 
        const cursor = bookCollection.find()
        const result = await cursor.toArray();
          res.send(result)

    })

    // for single api by id

    app.get('/admin/books/:id', async(req ,res) => {
        const id = req.params.id ;
        const query = {_id : new ObjectId(id)  };
        const result = await bookCollection.findOne(query);
        res.send(result)
    })

    // post
    app.post('/admin/books', async( req , res ) => {
        const bookData = req.body;
        const result = await bookCollection.insertOne(bookData);
        res.send(result)
    })

// put/ update

app.put('/admin/books/:id' , async(req , res ) => {
      const id = req.params.id
      const filter = { _id : new ObjectId(id) };
      const options = { upsert: true };
      const updateBookInfo = req.body
      const updateBook = {
        $set: {
            bookName:updateBookInfo.bookName , author:updateBookInfo.author,photoUrl: updateBookInfo.photoUrl,review:updateBookInfo.review ,rating:updateBookInfo.rating , tags:updateBookInfo.tags ,publisher:updateBookInfo.publisher ,yearOfPublishing:updateBookInfo.yearOfPublishing ,totalPages:updateBookInfo.totalPages,category:updateBookInfo.category
        },
      };

      const result = await bookCollection.updateOne(filter,updateBook, options);
      res.send(result)
}) 



    // delete

    app.delete('/admin/books/:id' , async(req ,res) =>{

        const id = req.params.id;
        const query = { _id : new ObjectId(id) };
        const result = await bookCollection.deleteOne(query);
        res.send(result)
    })


// user collection

app.get('/users', async(req ,res) =>{
    const cursor = userColllection.find();
    const result = await cursor.toArray();
    res.send(result)
})


// get dat for endpoint
app.get('/users/:id', async(req , res )=> {
      const id = req.params.id;
      console.log(id)
      const query = { _id : new ObjectId(id) };
      const result = await userColllection.findOne(query);
      res.send(result)
})

// add user data from firebase
app.post('/users', async ( req, res ) =>{
    const  userData = req.body;
    const result = await userColllection.insertOne(userData);
    res.send(result)

})

// user data delete
app.delete('/users/:id', async(req ,res)=>{
     const id = req.params.id;
     const query = { _id: new ObjectId(id) };
     const result = await userColllection.deleteOne(query)
     res.send(result)
     
})


// delete all
app.delete('/users', async ( req ,res) =>{

  
})


// get admin data
app.get("/admin/virus" , async(req , res) =>{
  const cursor = adminColllection.find();
    const result = await cursor.toArray();
    res.send(result)
})














    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);





// read 
app.get("/", (req , res)=> {
    res.send("boi-poka-book-vibe succesfully running on the server")
})

app.listen(port , ()=>{
    console.log(`book-vibe running on the port : ${port}`)
} )
