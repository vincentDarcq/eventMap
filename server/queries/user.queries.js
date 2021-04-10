const fs = require('fs');
const User = require("../models/user.model");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const RSA_KEY_PRIVATE = fs.readFileSync('./rsa/key');
const RSA_PUBLIC_KEY = fs.readFileSync('./rsa/key.pub');

exports.getUsers = () => {
  return User.find({}).exec();
}

exports.getUserByMail = (email) => {
  return User.findOne({'email': email});
}

exports.deleteUser = (userEmail) => {
  return User.findOneAndDelete({email: userEmail}).exec();
}

exports.addFriend = (name, ami) => {
  return User.updateOne({name: name}, { $push: { amis: ami }}).exec();
}

exports.deleteFriend = (name, ami) => {
  return User.updateOne({name: name}, { $pull: { amis: ami }}).exec();
}

exports.editUserPass = (email, pass) => {
  return User.updateOne({email: email}, { $set: { password: pass }});
}