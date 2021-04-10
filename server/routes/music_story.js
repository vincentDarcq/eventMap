const router = require('express').Router();
const crypto = require("crypto");

router.get('/sign_request', (req, res) => {
  const string = "GET&http%3A%2F%2Fapi.music-story.com%2Foauth%2Frequest_token&oauth_consumer_key%3D"+req.query.oauth_consumer_key;
  let hmac = crypto.createHmac('sha1', 'bd92aac4d02997a33e6a84a8600bfec29b35573f&');
  const encoded = hmac.update(string).digest('base64');
  res.status(200).json(encoded);
})

module.exports = router;