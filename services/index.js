var express = require("express");
var bodyParser = require("body-parser");
var routes = require("./routes/routes.js");
var app = express();

//var mongoose = require('mongoose');
//const db = mongoose.connect('mongodb://admin:8x8atmLab@ds153730.mlab.com:53730/microwaves');

//var microwaveRouter = require('./Routes/microwaveRoutes.js');
//app.use('/api/microwaves', microwaveRouter);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

routes(app);

var server = app.listen(3000, function () {
    console.log("app running on port.", server.address().port);
});