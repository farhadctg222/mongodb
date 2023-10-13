const express = require('express')
const app = express()
const password = 'OrTTcJWUODPevEpP'
const body = require("body-parser")

const { MongoClient } = require('mongodb');
const bodyParser = require('body-parser');
const uri = "mongodb+srv://farhad:OrTTcJWUODPevEpP@cluster0.cgsbnjt.mongodb.net/prodeu?retryWrites=true&w=majority";
app.use(bodyParser.json())
// Create a new MongoClient
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("organicdb").collection("prodeuc")
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
    
  } finally {
    // Ensures that the client will close when you finish/error
    const student = {name: 'farhad',age: 20}
    client.insertOne(student=>{

    })
    await client.close();
  }
}
run().catch(console.dir);





app.get('/',(req,res)=>{
res.send('hello worl')
})
  
app.listen(4000)