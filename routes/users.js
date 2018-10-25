var express = require('express');
var router = express.Router();
const keys = require('../config/keys')
const jwt = require("jwt-simple");

// const auth = require('../middleware/auth');
// router.use(auth)

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login', function(req, res, next) {
  const payload = {
    sub: req.body.username,
    iat: new Date().getTime()
 };
 res.send(jwt.encode(payload, keys.jwt.secretKey));
});

module.exports = router;
