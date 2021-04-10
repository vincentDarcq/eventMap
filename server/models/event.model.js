const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = Schema({
    name: String,
    dateDebut: { type: String, required: true },
    beginTime: String,
    dateFin: String,
    endTime: String,
    type: { type: String, required: true },
    description: String,
    lieu: String,
    latitude: Number,
    longitude: Number,
    createur: String,
    emailCreateur: String,
    scope: String,
    invités: Array,
    image1: String,
    image2: String,
    image3: String
});

const Event = mongoose.model('event', eventSchema);

module.exports = Event;

module.exports.newEvent = function (req) {
    const newEvent = new Event({
        name: req.body.name,
        dateDebut: req.body.dateDebut,
        beginTime: req.body.beginTime,
        dateFin: req.body.dateFin,
        endTime: req.body.endTime,
        type: req.body.type,
        description: req.body.description,
        lieu: req.body.lieu,
        latitude: req.body.latitude,
        longitude: req.body.longitude,
        createur: req.body.createur,
        emailCreateur: req.body.emailCreateur,
        scope: req.body.scope,
        invités: req.body.invités,
        image1: null,
        image2: null,
        image3: null,
    });
    return newEvent;
}

module.exports.editEvent = function (req) {
    const editEvent = {
        name: req.body.name,
        dateDebut: req.body.dateDebut,
        beginTime: req.body.beginTime,
        dateFin: req.body.dateFin,
        endTime: req.body.endTime,
        type: req.body.type,
        description: req.body.description,
        lieu: req.body.lieu,
        latitude: req.body.latitude,
        longitude: req.body.longitude,
        createur: req.body.createur,
        emailCreateur: req.body.emailCreateur,
        scope: req.body.scope,
        invités: req.body.invités
    };
    return editEvent;
}