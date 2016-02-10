var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var session = require("express-session");
var middleware = require("./middleware.js");
var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({extended: false}));

app.use(session({
  secret: "jlskdjfsd09fsd90f8sdfsfdfsdfs",
  cookie: {
    maxAge: 60000
  },
  saveUninitialized: true,
  resave: false
}));

app.use("/static", express.static("public"));

app.get("/", function(req, res) {
  res.sendFile(process.cwd() + "/views/index.html");
});

app.get("/rps", function(req, res) {
  res.sendFile(process.cwd() + "/views/rps.html");
});

app.get("/clicky", function(req, res) {
  res.sendFile(process.cwd() + "/views/clicky.html");
});

app.get("/:default", function(req, res) {
  res.status(404);
  res.sendFile(process.cwd() + "/views/404.html");
});

app.listen(PORT, function() {
  console.log("Listening on port %s", PORT);
});