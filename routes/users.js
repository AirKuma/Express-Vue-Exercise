var express = require('express');
var router = express.Router();

const mongoose = require('mongoose');
const UserModel = require('../mongo/model/UserModel');

/* GET users listing. */
router.get("/users", (req, res, next) => {
  UserModel.find()
    .exec()
    .then(docs => {
      console.log(docs);
      res.render('user/list', {
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
});

router.get("/:userId", (req, res, next) => {
  const id = req.params.userId;
  UserModel.findById(id)
    .exec()
    .then(doc => {
      console.log("From database", doc);
      if (doc) {
        console.log(doc);
        res.render('user/view', {
          user: doc,
          title : "tst"
        });
      } else {
        res
          .status(404)
          .json({ message: "No valid entry found for provided ID" });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

router.post("/:userId", (req, res, next) => {
  const id = req.params.userId;
  const updateOps = {};
  let formData = req.body;
  console.log(formData);
  UserModel.update({ _id: id }, { $set: formData })
    .exec()
    .then(result => {
      console.log(result);
     // backURL=req.header('Referer') || '/';
      // do your thang
      //res.redirect(backURL);
      res.status(200).json(result);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

module.exports = router;
