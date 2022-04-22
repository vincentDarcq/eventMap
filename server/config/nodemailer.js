const nodemailer = require('nodemailer');
const sparkPostTransport = require('nodemailer-sparkpost-transport');
const transporter = nodemailer.createTransport(sparkPostTransport({
  sparkPostApiKey: 'b58e0c8cdc97844c06e6e7e7f57eb4fe5df73067',
  host: 'https://api.eu.sparkpost.com/api/v1'
}));

module.exports.forgotPassword = async (to, response) => {
  let message = {
    to: to,
    from: 'EventMap <no_reply@eventmap.fr>',
    subject: 'nouveau mot de passe',
    html: '<div style="width: 700px">Hello Team! <br><br>Please find attached...<br><br>Thanks,<br>XXXXX</div>',
    text: 'Hello Team! <br><br>Please find attached...<br><br>Thanks,<br>XXXXX'
  };
  await transporter.sendMail(message).then((res, err) => {
    if (err) { return err; }
    return response.status(200).json(res);
  });
}