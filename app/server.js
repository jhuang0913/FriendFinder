var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
    type: "application/json"
}));

var survey = [];

app.get("/home", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/home.html"));
});

app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/survey.html"));
});

app.listen(PORT, function() {
    console.log("App is listening on PORT " + PORT);
});