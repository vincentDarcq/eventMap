const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = Schema({
    name: String,
    dateDebut: { type: String, required: true },
    dateFin: String,
    beginTime: String,
    endTime: String,
    space_and_time: String,
    type: { type: String, required: true },
    description: String,
    lieu: String,
    latitude: Number,
    longitude: Number,
    createur: String,
    emailCreateur: String,
    scope: String,
    invites: Array,
    createByOwner: Boolean,
    image1: String,
    image2: String,
    image3: String,
    imageUrl: String
});

const Event = mongoose.model('event', eventSchema);

module.exports = Event;

module.exports.newEvent = function (req) {
    const newEvent = new Event({
        name: req.body.name,
        dateDebut: req.body.dateDebut,
        beginTime: req.body.beginTime,
        dateFin: req.body.dateFin,
        space_and_time: req.body.space_and_time,
        endTime: req.body.endTime,
        type: req.body.type,
        description: req.body.description,
        lieu: req.body.lieu,
        latitude: req.body.latitude,
        longitude: req.body.longitude,
        createur: req.body.createur,
        emailCreateur: req.body.emailCreateur,
        scope: req.body.scope,
        invites: req.body.invites,
        createByOwner: req.body.createByOwner,
        image1: null,
        image2: null,
        image3: null,
        imageUrl: req.body.imageUrl
    });
    return newEvent;
}

module.exports.editEvent = function (req) {
    const editEvent = {
        name: req.body.name,
        dateDebut: req.body.dateDebut,
        dateFin: req.body.dateFin,
        beginTime: req.body.beginTime,
        endTime: req.body.endTime,
        space_and_time: req.body.space_and_time,
        type: req.body.type,
        description: req.body.description,
        lieu: req.body.lieu,
        latitude: req.body.latitude,
        longitude: req.body.longitude,
        createur: req.body.createur,
        emailCreateur: req.body.emailCreateur,
        scope: req.body.scope,
        invites: req.body.invites,
        createByOwner: req.body.createByOwner,
        imageUrl: req.body.imageUrl
    };
    return editEvent;
}