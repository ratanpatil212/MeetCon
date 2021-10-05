const express = require('express');
const router = express();
const path = require('path');

var bodyParser = require('body-parser');
router.use((req,res,next) => {
    bodyParser.urlencoded({extended: false});
    next();
});


router.get('/',(req, res,next) => {
    let reqPath = path.join(__dirname,'../html/login.html');
    res.sendFile(reqPath);
    next();
});

router.post('/',(req, res, next) => {
    res.end(JSON.stringify(req.body));

});


module.exports = router;