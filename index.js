var createError = require('http-errors');
var express = require('express');
var app = express();
var path = require('path')
var bodyParse = require('body-parser')
const PORT = process.env.port || 3000
const { get }= require('./controllers/health')
const { createUser ,dailyTransaction, getTransactionDetail}= require('./controllers/user')
const { MongoClient } = require("mongodb");

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug');

app.use(express.urlencoded({ extended: false}))

app.use(express.json())

app.use((req,res,next) => {
  req.response = {};
  req.options = req.query.options || {}
  next()
})

//routes
app.get('/health',get)
app.post('/user',createUser)
app.post('/transaction',dailyTransaction)
app.post('/getTransaction',getTransactionDetail)


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404, 'this does not exixts'));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// express server 
app.listen(PORT, ()=>{
  console.log(`listening to ${PORT}`)
})

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'transactions';
// const collectionName = ['dailyTransaction','user']


async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
 



  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
//   .finally(() => client.close());
module.exports = app;
