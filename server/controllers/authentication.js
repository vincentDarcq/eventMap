const fs = require('fs');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/user.model');

const RSA_PUBLIC_KEY = fs.readFileSync('./rsa/key.pub');
const RSA_KEY_PRIVATE = fs.readFileSync('./rsa/key');

const { getUserByMail, getUsers, editUserPass } = require('../queries/user.queries');

exports.refresh_token = async (req, res) => {
  const token = req.headers.authorization;
  if (token) {
    jwt.verify(token, RSA_PUBLIC_KEY, (err, decoded) => {
      if (err) { res.status(403).json('token invalid') }
      const newToken = jwt.sign({}, RSA_KEY_PRIVATE, {
        algorithm: 'RS256',
        expiresIn: '300s',
        subject: decoded.sub
      })
      res.status(200).json(newToken);
    })
  } else {
    res.json('no token to refresh');
  }
}

exports.isLoggedIn = async (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    jwt.verify(token, RSA_PUBLIC_KEY, (err, decoded) => {
      if (err) { res.status(401).json('token invalid'); }
      const sub = decoded.sub;
      User.findOne({ '_id': sub }).exec((err, user) => {
        if (err || !user) { res.status(401).json('error') }
        user.password = null;
        res.status(200).json(user);
      })
    })
  } else {
    res.status(401).json('pas de token');
  }
}

exports.user = async (req, res, next) => {
  try {
    const users = await getUsers();
    users.forEach((user) => {
      if (req.query.user === user.name) {
        res.status(200).json(user)
      }
    })
  } catch (e) {
    next(e);
  }
}

exports.signin = async (req, res, next) => {
  try {
    await getUserByMail(req.body.email).exec((err, user) => {
      if (user && bcrypt.compareSync(req.body.password, user.password)) {
        const token = jwt.sign({}, RSA_KEY_PRIVATE, {
          algorithm: 'RS256',
          expiresIn: '300s',
          subject: user._id.toString()
        })
        res.status(200).json(token)
      } else {
        res.status(401).json('signin fail');
      }
    });
  } catch (e) {
    next(e);
  }
}

exports.signup = async (req, res) => {
  const newUser = new User({
    email: req.body.email,
    name: req.body.name,
    password: bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(8)),
    profile_type: req.body.profile_type
  })

  let errUser = ""
  const users = await getUsers();
  users.forEach((user) => {
    if (user.name === newUser.name) {
      errUser = "Ce nom existe déjà";
    } else if (user.email === newUser.email) {
      errUser = "Cet email est déjà enregistré";
    }
  })

  if (errUser !== "") {
    res.status(409).json(errUser)
  } else {
    newUser.save((err) => {
      if (err) {
        res.status(500).json("erreur serveur au signup")
      }
      res.status(200).json('signup ok')
    })
  }
}

exports.editPass = async (req, res) => {
  try {
    await getUserByMail(req.body.email).exec((err, user) => {
      if (user && bcrypt.compareSync(req.body.oldPass, user.password)) {
        editUserPass(req.body.email, bcrypt.hashSync(req.body.newPass, bcrypt.genSaltSync(8))).exec((err, user) => {
          if (err) { res.status(401).json('Problème au changement du mdp'); }
          res.status(200).json(user);
        })
      } else {
        res.status(401).json('Ancien mot de passe invalide');
      }
    });
  } catch (e) {
    next(e);
  }
}