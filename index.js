var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var cookieParser = require("cookie-parser");
var session = require("express-session");
var nunjucks = require("nunjucks");

var app = express();

var pedidos = [];

let agorasim = "";

var enderecoCompleto = "";

const port = 3000 || process.env.PORT;

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "public")));

nunjucks.configure(__dirname + "/views", {
  autoescape: true,
  express: app,
});

app.use(cookieParser());
app.use(
  session({
    secret: "secret!",
    resave: false,
    saveUninitialized: true,
  })
);

app.get("/mavros", (req, res) => {
  res.redirect("http://18.230.167.89:5555/");
});

app.get("/golds", (req, res) => {
  res.redirect("http://18.230.167.89:3333/");
});

http: app.listen(3333 || process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});

//app.listen(3000);
