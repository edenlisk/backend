var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res
      .status(200)
      .json(
          {
            status: "success",
            data: {
              id: 0,
              name: "bituri fabrice",
              username: "fabrice",
              occupation: "software engineer"
            }
          }
      )
});

module.exports = router;
