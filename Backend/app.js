var express = require('express')
var dotenv = require('dotenv')
var indexRouter = require('./routes/indexRouter')
const DB_Connect = require('./Modal/dbConnection')
var server = express()
var cors = require('cors')

dotenv.config({
    path: "./env/secure.env"})

    var port = process.env.PORT

    DB_Connect("Database","mongodb://localhost:27017/")

  


    const corsOptions = {
        origin: 'http://localhost:5173',
        credentials: true
    }
    server.use(cors(corsOptions));
    
    server.use(function (req, res, next) {
    
        // Website you wish to allow to connect
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
    
        // Request methods you wish to allow
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    
        // Request headers you wish to allow
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    
        // Set to true if you need the website to include cookies in the requests sent
        // to the API (e.g. in case you use sessions)
        res.setHeader('Access-Control-Allow-Credentials', true);
    
        // Pass to next layer of middleware
        next();
    });
    
      server.use(express.json());
       
    server.use(express.urlencoded({ extended: true }))
 
    server.use('/',indexRouter)
server.listen(port, ()=>{
  })