module.exports = {
  dbUrl: "mongodb://vincent:<password>@cluster0-shard-00-00.ic0uz.mongodb.net:27017,cluster0-shard-00-01.ic0uz.mongodb.net:27017,cluster0-shard-00-02.ic0uz.mongodb.net:27017/?ssl=true&replicaSet=atlas-vg7d0o-shard-0&authSource=admin&retryWrites=true&w=majority",
  cert: '/etc/letsencrypt/live/www.eventmap.fr/fullchain.pem',
  key: '/etc/letsencrypt/live/www.eventmap.fr/privkey.pem',
  portHttp: 80,
  portHttps: 443
}