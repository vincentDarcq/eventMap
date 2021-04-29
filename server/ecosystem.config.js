module.exports = {
  apps: [{
    name: 'eventmap',
    script: 'sudo NODE_ENV=production node ./bin/www',
    instances: 'max',
    autorestart: true,
    watch: true,
    env_production: {
      NODE_ENV: 'production'
    }
  }],
};
