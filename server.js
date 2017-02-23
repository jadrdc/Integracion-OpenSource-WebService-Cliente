const express = require('express');
const parameters = require('./config/parameter');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const ejsmate = require('ejs-mate');
const mainroute = require('./routes/mainroute');
const app = new express();

app.engine('ejs', ejsmate);
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(mainroute);
app.use(express.static(__dirname + '/static'));


app.listen(parameters.port, function(req, resp) {

    console.log('Hello World');
});
