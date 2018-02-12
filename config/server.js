var express = require("express");
var consign = require("consign");
var bodyParser = require("body-parser");
var expressValidator = require("express-validator");

var app = express();

app.set('view engine', 'ejs');
app.set('views', './app/views');

/*midleware*/
app.use(express.static('./app/public'));

app.use(bodyParser.urlencoded({extended:true}));
app.use(expressValidator());
/* todas as rotas*/
consign()
  .include('app/routes').into(app)
  .then('app/models')
  .then('app/controllers')
  .into(app);




module.exports = app;