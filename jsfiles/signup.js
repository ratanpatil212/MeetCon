const express = require('express');
const app = express();
const router = express();
const BodyParser = require('body-parser');
app.use(BodyParser());
app.use(express.static('public'))


app.get("/:id", (req, res) => {
    res.sendFile(__dirname + "/html/"+req.params.id+".html");
});

app.post("/", (req, res) => {
    var fname = req.body.firstname;
    var lname = req.body.lastname;
    var email = req.body.email;
    // var password = req.body.password;
    console.log(fname + " " + lname + " " + email);
    // console.log(req.method);
    // console.log(req.url);
    // console.log(req.headers);
})

module.exports = router;