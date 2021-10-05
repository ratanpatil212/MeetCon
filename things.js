const express = require('express');

const router = express();

router.get('/',(req, res) => {
    res.send("GET route on things");
});

module.exports = router;
