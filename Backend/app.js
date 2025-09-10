var express = require('express')
var dotenv = require('dotenv')
var indexRouter = require('./routes/indexRouter')
const DB_Connect = require('./Modal/dbConnection')
var server = express()
const cors = require('cors');

dotenv.config({
  path: "./env/secure.env"
})

var port = process.env.PORT ||5000

// Connect to database
DB_Connect("Database", "mongodb+srv://aditya9477:Aditya%409477@cluster0.2gpl38v.mongodb.net/")

const corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true
}
server.use(cors(corsOptions));

// server.use(function (req, res, next) {

//     // Website you wish to allow to connect
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3444');

//     // Request methods you wish to allow
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

//     // Request headers you wish to allow
//     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

//     // Set to true if you need the website to include cookies in the requests sent
//     // to the API (e.g. in case you use sessions)
//     res.setHeader('Access-Control-Allow-Credentials', true);

//     // Pass to next layer of middleware
//     next();
// });

// Middleware setup
server.use(express.json()) // You might want to add this for JSON request bodies

server.use(express.urlencoded({ extended: true }))

// Routes
server.use('/', indexRouter)

// Start server
server.listen(port, () => {
  console.log(`server is running on ${port}`);
})
