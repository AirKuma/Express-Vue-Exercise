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
    res.render('auth/login', {
      title : "login"
    });
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
    res.redirect("/user/users")
  });

module.exports = router;
