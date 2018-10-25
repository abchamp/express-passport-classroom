var express = require('express');
var router = express.Router();
const passport = require('passport');

const requireJWTAuth = passport.authenticate("jwt",{session:false});

/* GET home page. */
router.get('/', requireJWTAuth, function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
