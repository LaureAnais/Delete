// Rajouter l'url visée par notre application // api
// l'application frontend va faire une requete à cette api la 

const bcrypt = require('bcrypt');
const UserModel = require('./models/user-model');
const dotenv = require('dotenv').config();
const fs = require('fs');

// Installer json token pour login

// Async fonction because we will talk to the database
exports.signup = async (req, res, next) => {
   bcrypt.hash(req.body.password, 10)
      .then(hash => {
        UserModel.User.create({
            email: req.body.email,
            login: req.body.login,
            password: hash
        });
        User.save()
            .then(() => res.status(201).json({ message: ' Nouvel utilisateur créé !' }))
            .catch( error => res.status(400).json({ error }))
    })
    .catch( error => res.status(500).json({ error }))
  };

  /* exports.login = (req, res, next) => {
    User.findOne({ email: req.body.email })
      .then(user => {
        if (!user) {
          return res.status(401).json({ error: 'Utilisateur non trouvé !' });
        }
        bcrypt.compare(req.body.password, user.password)
          .then(valid => {
            if (!valid) {
              return res.status(401).json({ error: 'Mot de passe incorrect !' });
            }
            res.status(200).json({
              userId: user._id,
              token: 'TOKEN'
            });
          })
          .catch(error => res.status(500).json({ error }));
      })
      .catch(error => res.status(500).json({ error }));
  };


exports.getUserbyId = async (req, res, next) => {
    res.send("Get post by id route");
};

    */