var express = require("express"),
    bodyParser = require("body-parser"),
    path = require("path");

var app = express(),
    PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
    type: "application/json"
}));

app.use('/app', express.static('app'));

require('./app/routing/htmlRoutes')(app);
// require('./app/routing/apiRoutes')(app);

app.listen(PORT, function() {
    console.log("Listening on PORT " + PORT);
});