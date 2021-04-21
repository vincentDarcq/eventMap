const { deleteMessage } = require('../queries/message.queries');

exports.deleteMessage = async (req, res, next) => {
  try {
    const messageDelete = await deleteMessage({ _id: req.query.messageId });
    res.send(messageDelete);
  } catch (e) {
    next(e);
  }
}