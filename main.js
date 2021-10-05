const express = require('express');
const app = express();
const port = 3000;
var multer = require('multer');
var upload = multer();

app.use(express.static('public'))
app.use(express.static('fonts'))
app.use(express.static('vendor'))
// Main Index page
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/html/main.html");
});

// for templating: pug
app.set('view engine', 'pug');
app.set('views','./views');

// getting pug file
app.get('/first_template', function(req, res){
    res.render('first_view');
 });

// things page from course for reference
var things = require('./things');
app.use('/things',things);

// login page router where login.js is a module
var login = require('./servers/login');
app.use('/login',login);


app.get("/:id", (req, res) => {
    res.sendFile(__dirname + "/html/"+req.params.id+".html");
});


app.listen(port,(req, res) => {
    console.log("listening on port 3000");
});