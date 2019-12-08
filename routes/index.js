var express = require('express');
var router = express.Router();

const mongoose = require('mongoose');
const UserModel = require('../mongo/model/UserModel');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET users listing. */
router.get("/users", (req, res, next) => {
  UserModel.find()
    .exec()
    .then(docs => {
      console.log(docs);
      res.json(docs);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

module.exports = router;
