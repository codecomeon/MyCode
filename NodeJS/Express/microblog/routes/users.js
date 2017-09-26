var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:user', function(req, res, next) {
  res.send('respond with a resource：用户名是:'+reg.params.user);
});

module.exports = router;
