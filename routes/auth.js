var express = require('express');
var router = express.Router();

const mongoose = require('mongoose');
const UserModel = require('../mongo/model/UserModel');

/* GET login page. */
/*router.get('/login', function (req, res, next) {
  res.render('auth/login', {
    title: 'login'
  });
});*/

router.route('/login')
  .get(function (req, res) {
    res.render('auth/login');
  })
  .post(function (req, res) {
    const user = new UserModel({
      account: req.body.account,
      date: new Date()
    });
    user.save()
      .then(result => {
        console.log(result);
        res.status(201).json({
          message: "Handling POST requests to /products",
          createdProduct: result
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
    res.redirect("/auth/users")
  });

router.get("/users", (req, res, next) => {
  UserModel.find()
    .exec()
    .then(docs => {
      console.log(docs);
      res.render('list/list', {
        drinks: docs,
        title : "user list"
      });
      // res.status(200).json(docs);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });

  // var drinks = [
  //   {name: 'Bloody Mary', drunkness: 3},
  //   {name: 'Martini', drunkness: 5},
  //   {name: 'Scotch', drunkness: 10}
  // ];

});

module.exports = router;
