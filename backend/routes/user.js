const router = require("express").Router();
const User = require("../models/user.model");

router.route("/specific").get((req,res)=>{
    User.findOne({username:req.query.username,password:req.query.password}).then(user => res.send(user))
        .catch(err => res.status(400).json("Error: " + err));
})

router.route("/").get((req,res)=>{
    User.find().then(users => res.send(users))
        .catch(err => res.status(400).json("Error: " + err));
})

router.route("/").post((req,res)=>{
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const admin = req.body.admin;

    const newUser = new User({firstname,lastname,username,email,password,admin});

    newUser.save().then(
        ()=>{res.json("User added")}
    ).catch(err => res.status(400).json("Error: " + err));
})

module.exports = router;

