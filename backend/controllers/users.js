// Rajouter l'url visée par notre application // api
// l'application frontend va faire une requete à cette api la 

const bcrypt = require('bcrypt');
const User = require('./models/user-model');
// const fs = require('fs');

// Async fonction because we will talk to the database
exports.signup = async (req, res, next) => {
   res.send("Get all posts route");
  };

exports.login = async (req, res, next) => {
    res.send("Get new post route");
};

exports.getUserbyId = async (req, res, next) => {
    res.send("Get post by id route");
};

/*

 bcrypt.hash(req.body.password, 10)
    .then(hash => {
      const user = new User({
        email: req.body.email,
        // pseudo: , 
        password: hash
      });
      user.save()
        .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
        .catch(error => res.status(400).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));

    */