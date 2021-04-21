const path = require('path');
const img = path.join(__dirname, './upload');
const pass = require('./rsa/mongopass');
const index = require('./routes/index');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

// Pour mapping avec mongoDB
const mongoose = require('mongoose');

// création du serveur
const http = require('http');
const express = require('express');
const app = express();
const server = app.listen(80);

module.exports = {
    server,
    app,
};;

require("./config/socket.config");

// imports pour les emails
const nodemailer = require('nodemailer');
const sparkPostTransport = require('nodemailer-sparkpost-transport');
const transporter = nodemailer.createTransport(sparkPostTransport({
    sparkPostApiKey: 'b58e0c8cdc97844c06e6e7e7f57eb4fe5df73067',
    endpoint: 'https://api.eu.sparkpost.com'
}));

app.use(logger('dev'));
//parser les objets qu'on envoie via les requêtes POST
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.static(path.join(__dirname, './upload')));

mongoose.connect('mongodb+srv://vincent:' + pass.password + '@cluster0.ic0uz.mongodb.net/EventMap?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("connexion db OK !")
}).catch(err => {
    console.log(err);
}
);

//http.createServer(app).listen(80);
app.use(index);

app.get('/upload?*', (req, res) => {
    res.sendFile(path.join(img, req.query.img));
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});