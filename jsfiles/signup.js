const express = require('express');
const app = express();
const router = express();

app.use(express.static('public'))



app.get("/:id", (req, res) => {
    res.sendFile(__dirname + "/html/"+req.params.id+".html");
});

module.exports = router;