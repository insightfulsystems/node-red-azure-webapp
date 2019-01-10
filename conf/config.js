let config = {};

// TODO: find a way to edit this without having to go into the App Service Editor after deployment

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
    "host": "http://node-red-azure-webapp.azurewebsites.net"
  }
};

module.exports = config;
