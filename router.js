const X = require('express');
const { MongoClient } = require("mongodb");
const URI = "mongodb://localhost/";
const CLIENT = new MongoClient(URI);
const DB = CLIENT.db('MyProject').collection('Angular');
const GO = X.Router();

const ALL = async () => {
    await CLIENT.connect();
    await CLIENT.db("admin").command({ ping: 1 });
    console.log("Connected successfully to MongoDB");
    const result = await DB.find({
    //  date: {
    //      $gte: new Date(new Date().setHours(00, 00, 00)),
    //      $lt: new Date(new Date().setHours(23, 59, 59)),
    //  },
    }).toArray();
    return result;
}
const FILTER = async () => {
    await CLIENT.connect();
    await CLIENT.db("admin").command({ ping: 1 });
    console.log("Connected successfully to MongoDB");
    const result = await DB.find({
        "lector.kapsel":{$exists:true}
    }).toArray();
    return result;
}
const ADD = async (x) => {
    await CLIENT.connect();
    await CLIENT.db("admin").command({ ping: 1 });
    console.log("Connected successfully to MongoDB");
   const insert = await DB.insertMany([{"date":new Date(),"value":x}]);
 console.log('INSERT =>', insert);
return(insert)
}


GO.route('/').all((req, res) => {
    res.send("OK !!!!!")
})

GO.route('/all').get((req,res)=>{
    ALL()
    .then(
        (x)=>{
            console.log(x)
            res.send(x)
        }
    )
    .catch(console.error)
    .finally(()=>CLIENT.close())
})
GO.route('/filter').get((req,res)=>{
    FILTER()
    .then(
        (x)=>{
            console.log(x)
            res.send(x)
        }
    )
    .catch(console.error)
    .finally(()=>CLIENT.close())
})
GO.route('/add/:param').get((req,res)=>{
    ADD(req.params.param)
    .then(
        (x)=>{
            console.log(x)
            res.send(x)
        }
    )
    .catch(console.error)
    .finally(()=>CLIENT.close())
})
module.exports = GO;