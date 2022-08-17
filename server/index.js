// server/index.js
//const path = require('path');
const express = require("express");
//const PORT = process.env.PORT || 3001;
let mongoose = require('mongoose');
require('dotenv').config()
let cors = require('cors');
let bodyParser = require('body-parser');
const userRoute = require('../server/routes/user.routes')
const authRoute = require('../server/routes/authentication.routes')
const characterRoute = require('../server/routes/character.routes')
const settingRoute = require('../server/routes/setting.routes')
const createError = require('http-errors');



mongoose
    .connect(process.env.DB_URL)
    .then((x) => {
        console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
    })
    .catch((err) => {
        console.error('Error connecting to mongo', err.reason)
    })

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(cors());
app.use('/users', userRoute)
app.use('/authentication', authRoute)
app.use('/character', characterRoute )
app.use('/setting', settingRoute)
const port = process.env.PORT || 3001;
const server = app.listen(port, () => {
    console.log('Connected to port ' + port)
})
//Error Handling
app.use((req, res, next) => {
    next(createError(404));
});
app.use(function (err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
});


// Have Node serve the files for our built React app
//app.use(express.static(path.resolve(__dirname, '../client/build')));

// Handle GET requests to /api route
//app.get("/api", (req, res) => {
//    res.json({ message: "Hello from server!" });
//  });

// All other GET requests not handled before will return our React app
//app.get('*', (req, res) => {
//    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
//});

// Listening on PORT
//app.listen(PORT, () => {
//    console.log(`Server listening on ${PORT}`);
//   });