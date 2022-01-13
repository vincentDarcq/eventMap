const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');
const RSA_PUBLIC_KEY = fs.readFileSync('./rsa/key.pub');
const util = require('util');
const Event = require('../models/event.model');
const User = require('../models/user.model');
const { newEvent, editEvent } = require('../models/event.model');
const { getEvents, deleteOne, getEvent, findEventsForNamesStartWith } = require('../queries/event.queries');
const {
  deleteMessage,
  createMessage,
  findMessagesPerEventId } = require('../queries/message.queries');

getAllEvents = function (token, allEvents) {
  let events = [];
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
            for (let e of allEvents) {
              if (e.scope === "privé" && e.invites.indexOf(currentUser.name) === -1) {
                events.splice(events.indexOf(e), 1);
              }
              if (e.scope === "public") {
                events.push(e);
              }
            }
          }
        });
      }
    })
  } else {
    for (let e of allEvents) {
      if (e.scope === "public") {
        events.push(e);
      }
    }
  }
  return events;
}

exports.get = async (req, res, next) => {
  const token = req.headers.authorization;
  const allEvents = await getEvents(
    req.body.latMin, req.body.latMax, req.body.longMin, req.body.longMax);
  const events = getAllEvents(token, allEvents);
  res.status(200).json(events);
}

exports.find = async (req, res, next) => {
  const token = req.headers.authorization;
  const allEvents = await findEventsForNamesStartWith(req.body.value);
  const events = getAllEvents(token, allEvents);
  res.status(200).json(events);
}

exports.create = async (req, res) => {
  const event = newEvent(req);
  event.save((err) => {
    if (err) { res.status(500).json(err) }
  });
  res.status(200).json(event);
}

exports.uploadImages = async (req, res) => {
  util.inspect(req.files, { compact: false, depth: 5, breakLength: 80, color: true });
  let upload = {};
  const event = await getEvent(req.query.eventId);
  if (req.files.image1) {
    upload.image1 = req.files.image1[0].filename;
    if (event.image1) {
      fs.unlink(path.join(__dirname, `../upload/${event.image1}`), err => {
        if (err) throw err;
      });
    }
  }
  if (req.files.image2) {
    upload.image2 = req.files.image2[0].filename;
    if (event.image2) {
      fs.unlink(path.join(__dirname, `../upload/${event.image2}`), err => {
        if (err) throw err;
      });
    }
  }
  if (req.files.image3) {
    upload.image3 = req.files.image3[0].filename;
    if (event.image3) {
      fs.unlink(path.join(__dirname, `../upload/${event.image3}`), err => {
        if (err) throw err;
      });
    }
  }
  Event.findByIdAndUpdate({ _id: req.query.eventId }, upload,
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
    const messages = await findMessagesPerEventId(req.query.eventId);
    for (let message of messages) {
      deleteMessage(message._id);
    }
    const event = await getEvent(req.query.eventId);
    removeEventImages(event);
    const eventDelete = await deleteOne(req.query.eventId);
    res.status(200).json(eventDelete);
  } catch (e) {
    next(e);
  }
}

exports.createMessage = async (req, res, next) => {
  try {
    const message = await createMessage({
      message: req.body.message,
      eventId: req.body.eventId,
      userId: req.body.userId,
      userName: req.body.userName,
    });
    res.status(200).json(message);
  } catch (e) {
    throw e;
  }
}

exports.getMessages = async (req, res, next) => {
  try {
    const messages = await findMessagesPerEventId(req.query.eventId);
    res.status(200).json(messages);
  } catch (e) {
    throw e;
  }
}

removeEventImages = (event) => {
  if (event.image1) {
    fs.unlink(path.join(__dirname, `../upload/${event.image1}`), err => {
      if (err) throw err;
    });
  }
  if (event.image2) {
    fs.unlink(path.join(__dirname, `../upload/${event.image2}`), err => {
      if (err) throw err;
    });
  }
  if (event.image3) {
    fs.unlink(path.join(__dirname, `../upload/${event.image3}`), err => {
      if (err) throw err;
    });
  }
}