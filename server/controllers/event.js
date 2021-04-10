const jwt = require('jsonwebtoken');
const fs = require('fs');
const util = require('util');
const Event = require('../models/event.model');
const { newEvent, editEvent } = require('../models/event.model');
const User = require('../models/user.model');
const RSA_PUBLIC_KEY = fs.readFileSync('./rsa/key.pub');
const { getEvents, deleteOne } = require('../queries/event.queries');

allPublicEvents = function (events) {
  let publicEvents = [];
  for (let e of events) {
    if (e.scope === "public") {
      publicEvents.push(e);
    }
  }
  return publicEvents;
}

exports.getAll = async (req, res, next) => {
  const token = req.headers.authorization;
  const allEvents = await getEvents();
  if (token) {
    jwt.verify(token, RSA_PUBLIC_KEY, (err, decoded) => {
      if (err) {
        res.status(200).json(allPublicEvents(allEvents));
      } else {
        const sub = decoded.sub;
        User.findOne({ '_id': sub }).exec((err, user) => {
          if (err || !user) { res.status(401).json('error') }
          else {
            let currentUser = user;
            let events = allEvents;
            for (let e of allEvents) {
              if (e.scope === "privé" && e.invités.indexOf(currentUser.name) === -1) {
                events.splice(events.indexOf(e), 1);
              }
            }
            res.status(200).json(events);
          }
        });
      }
    })
  } else {
    const events = allPublicEvents(allEvents);
    res.status(200).json(events);
  }
}

exports.create = (req, res) => {
  const event = newEvent(req);
  event.save((err) => {
    if (err) { res.status(500).json(err) }
    res.status(200).json(event);
  })
}

exports.uploadImages = (req, res) => {
  util.inspect(req.files, { compact: false, depth: 5, breakLength: 80, color: true });
  let upload = {};
  if (req.files.image1) {
    upload.image1 = req.files.image1[0].filename;
  }
  if (req.files.image2) {
    upload.image2 = req.files.image2[0].filename;
  }
  if (req.files.image3) {
    upload.image3 = req.files.image3[0].filename;
  }
  Event.updateOne({ _id: req.query.eventId }, upload,
    (err) => {
      if (err) { res.status(500).json(err) }
      res.status(200).json(upload);
    });
}

exports.modify = async (req, res) => {
  const event = editEvent(req);
  e = await Event.findByIdAndUpdate({ _id: req.body._id }, event, (err) => {
    if (err) { res.status(500).json(err) }
  })
  res.status(200).json(e);
}

exports.deleteOne = async (req, res, next) => {
  try {
    const eventDelete = await deleteOne({ _id: req.query.eventId });
    res.send(eventDelete);
  } catch (e) {
    next(e);
  }
}