const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = Schema({
    email: String,
    name: String,
    password: String,
    profile_type: String,
    amis: Array,
    pri: String,
    pub: String
});

const User = mongoose.model('user', userSchema);

module.exports = User;