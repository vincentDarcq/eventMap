const { json } = require('express');
const Ask = require('../models/askFriend.model');
const { createAsk, getAllAsks, deleteAsk } = require('../queries/network.queries');
const { addFriend, deleteFriend } = require('../queries/user.queries');

exports.askFriend = async (req, res, next) => {
  const newAsk = new Ask({
    demandeur: req.body.demandeur,
    destinataire: req.body.destinataire
  });
  try{
    await createAsk(res, newAsk);
  }catch(e){
    next(e);
  }  
}

exports.getAsks = async (req, res, next) => {
  try{
    const askFromBdd = await getAllAsks();
    res.send(askFromBdd); 
  }catch(e){
    next(e);
  }     
}

exports.deleteAskFriend = async (req, res, next) => {
  try{
    const askDelete = await deleteAsk(req);
    res.status(200).send(askDelete);
  }catch(e){
    next(e);
  }
}

exports.acceptFriend = async (req, res, next) => {
  let destinataireOk = false;
  let demandeurOk = false;
  try{
    await addFriend(req.query.destinataire, req.query.demandeur)
            .then((res) => {
                if(res.nModified === 1){
                  destinataireOk = true;
                }
            });
    await addFriend(req.query.demandeur, req.query.destinataire)
            .then((res) => {
                if(res.nModified === 1){
                  demandeurOk = true;
                }
            });
    if(destinataireOk && demandeurOk){
      await deleteAsk(req).then((result) => {
        res.status(200).send(result);
      })
    }
  }catch(e){
    next(e);
  }
}

exports.deniedFriend = async (req, res, next) => {
  try{
    await deleteAsk(req).then((result) => {
      res.status(200).send(result);
    })
  }catch(e){
    next(e);
  }
}

exports.deleteFriend = async (req, res, next) => {
  let jsonResult = {};
  try{
    await deleteFriend(req.query.user, req.query.ami).then((result) => {
      if(result.nModified === 1){
        jsonResult.user = req.query.user;
      }
    });
    await deleteFriend(req.query.ami, req.query.user).then((result) => {
      if(result.nModified === 1){
        jsonResult.ami = req.query.ami;
      }
    });
    if(jsonResult.user && jsonResult.ami){
      res.status(200).json(jsonResult);
    }
  }catch(e){
    next(e);
  }
}