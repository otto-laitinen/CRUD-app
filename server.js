const express = require('express');         // for building the Rest apis
const bodyParser = require('body-parser');  // helps to parse the request and create the req.body object
const cors = require('cors');               // provides Express middleware to enable CORS with various options

const app = express();


var corsOptions = {origin: "http://localhost:8081"};
app.use(cors(corsOptions));

// parse requests of content-type 'application/json'
app.use(bodyParser.json());

// parse requests of content-type 'application/x-www-form-urlencoded'
// extended: true precises that the req.body object will contain values of any type instead of just strings
app.use(bodyParser.urlencoded({ extended: true}));

// db
const db = require("./app/models");
db.sequelize.sync();
// In development, you may need to drop existing tables and re-sync database:
// db.sequelize.sync({ force: true }).then(() => {
//     console.log("Drop and re-sync db.");
//   });

// simple route
app.get('/', (req, res) => {
    res.json({message: "hello world"})
});

// set port & listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`server listening on ${PORT}`);
});