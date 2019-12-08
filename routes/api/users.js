var express = require('express');
var router = express.Router();

const mongoose = require('mongoose');
const UserModel = require('../../mongo/model/UserModel');

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

router.post("/user",(req, res, next) => {
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
});


router.get("/user/:userId", (req, res, next) => {
  const id = req.params.userId;
  UserModel.findById(id)
    .exec()
    .then(doc => {
      console.log("From database", doc);
      if (doc) {
        console.log(doc);
        res.json(doc);
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

router.put("/user/:userId", (req, res, next) => {
  const id = req.params.userId;
  const updateOps = {};
  let formData = req.body;
  console.log(formData);
  UserModel.update({ _id: id }, { $set: formData })
    .exec()
    .then(result => {
      console.log(result);
      res.status(200).json(result);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

router.delete('/user/:userId', (req, res, next) => {
  UserModel.remove({ _id: req.params.userId}).then((result) => {
      res.send('User deleted!')
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

module.exports = router;
