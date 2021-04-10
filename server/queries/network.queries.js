const Ask = require('../models/askFriend.model');

exports.createAsk = (res, ask) => {
  ask.save( (err) => {
    if(err){
      res.status(500).json("erreur à la création de la demande");
    }
    res.status(200).json(ask);
  })
}

exports.getAllAsks = () => {
  return Ask.find({}).exec();
}

exports.deleteAsk = (req) => {
  return Ask.findOneAndDelete({ _id: req.query.askId }).exec();
}