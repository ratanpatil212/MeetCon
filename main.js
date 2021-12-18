const express = require('express');
const app = express();
const mongoose = require('mongoose');
const User = require('./DBSchemas/User.js')
const BodyParser = require('body-parser');
const mongojs = require('mongojs');

app.use(BodyParser());
const port = 3000;
const DB = "mongodb+srv://adminritzdb:adminritzmongo@cluster0.j61gc.mongodb.net/ritzdb?retryWrites=true&w=majority"
mongoose.connect(DB,()=>{
    console.log("Connected to MongoDB-Atlas ");
})

app.use(express.static('public'))
app.use(express.static('fonts'))
app.use(express.static('vendor'))
// Main Index page
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/html/main.html");
});

global.db = mongojs(DB);

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
var login = require('./jsfiles/login');
app.use('/login',login);

// homepage router where homepage.js is a module
var homepage = require('./jsfiles/homepage');
app.use('/homepage',homepage);

// sigup page router where login.js is a module
var signup = require('./jsfiles/signup');
app.use('/signup',signup);


app.get("/:id", (req, res) => {
    res.sendFile(__dirname + "/html/"+req.params.id+".html");
});

//receiving the psot request from signup
var ffname;
var llname;
var mmail;
var ppassword;

app.post('/',(req, res)=>{
    ffname = req.body.firstname;
    llname = req.body.lastname;
    mmail = req.body.email;
    ppassword = req.body.password;
    run();
    res.sendFile(__dirname +"/html/main.html")
})

app.post('/',(req, res)=>{
    mmail = req.body.email;
    ppassword = req.body.password;
    

})


app.listen(port,(req, res) => {
    console.log("listening on port 3000");
});


// Mongodb Insert Data
async function run(){
    try {
        if(db.users.find({ "email" : mmail})==null) {
            console.log("Appears to be a new email");
            const user = await User.create({
                fname : ffname,
                lname : llname,
                email : mmail,
                password : ppassword
            });
            console.log("Account Created");
        }
        else{
            console.log("User already exists");
            console.log("Couldnt create Account");
        }
        

    } catch(err) {
        console.log(err);
    }
    

    
}


// mongodb+srv://adminritzdb:<password>@cluster0.j61gc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

