let config = {};

config.dev = {
  "admin": {
    "users": 
      [{
        "username": "admin",
        "password": "$2a$08$v1b4nCPF/fs3Cx0X4PzAOOn7pt1vZ2sPP0hsL87058N.eGPal1FBC",
        "permissions": "*"
      }]
  },
  "server": {
    "host": "http://node-red-bot-test.azurewebsites.net"
  }
};

module.exports = config;
