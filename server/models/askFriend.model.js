const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const askSchema = Schema ({
  demandeur: String,
  destinataire: String,
})

const Ask = mongoose.model('ask', askSchema);

module.exports = Ask;