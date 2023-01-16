const { MongoClient, ObjectId } = require("mongodb");
// Database Name
const dbName = 'transactions';
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

const createUser = async(req,res,next)=> {
    try{
        let body = req.body;
        let collectionName = 'users'
        console.log("in controllers of user creation")
        const db = client.db(dbName);
        const collection = db.collection(collectionName);
        console.log("In collection")
         // ****************insret document in MongoDB
         const insertResult = await collection.insertMany([{ "firstName": body.firstName , "lastName": body.lastName }]);
         console.log('Inserted documents =>', insertResult);
        res.send({
            error : false ,
            message : "User created",
            data :insertResult
        })

    }catch(err){
        next(err)
    }
}


//dailyTransaction
const dailyTransaction = async(req,res,next)=> {
    try{
        let body = req.body;
        let collectionName = 'dailyTransaction'
        console.log("in controllers of user creation")
        const db = client.db(dbName);
        const collection = db.collection(collectionName);
        console.log("In collection")
         // ****************insret document in MongoDB
         const insertResult = await collection.insertMany([{  "user" : body.user, "itemName" : body.itemName, "amount" : body.amount, "date" : new Date() }]);
         console.log('Inserted documents =>', insertResult);
        res.send({
            error : false ,
            message : "User Transaction created",
            data :insertResult
        })

    }catch(err){
        next(err)
    }
}

//getTransactionDetail
const getTransactionDetail = async(req,res,next)=> {
    try{
        //let body = req.body
        //var {ObjectId} = require('mongodb');
        let id = String(req.body.id);
        let name = req.body.name
        let collectionName = 'dailyTransaction'
        console.log("in controllers of user creation")
        const db = client.db(dbName);
        const collection = db.collection(collectionName);
        console.log("In collection")
      
         // read documents from mongo
         const findResult = await collection.find({"_id": new ObjectId(id)}).toArray();
         //const findResult = await collection.find({user : name}).toArray();
        console.log('Found documents =>', findResult);
        res.send({
            error : false ,
            message : "User created",
            data :findResult
        })

    }catch(err){
        next(err)
    }
}
module.exports = {createUser : createUser, getTransactionDetail: getTransactionDetail, dailyTransaction:dailyTransaction}