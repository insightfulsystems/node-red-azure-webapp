const http    = require('http');
const express = require("express");
const RED     = require('node-red');
const app     = express();

process.env.PORT              = process.env.PORT              || 1880
process.env.HOST              = process.env.HOST              || "https://localhost"
process.env.NODE_ENV          = process.env.NODE_ENV          || "dev"
process.env.FRAMEWORK_ROOT    = process.env.FRAMEWORK_ROOT    || "/home/viseo-bot-framework"
process.env.BOT_ROOT          = process.env.BOT_ROOT          || "/home/site/wwwroot"
process.env.CONFIG_PATH       = process.env.CONFIG_PATH       || (process.env.BOT_ROOT+"/conf/config.js")
process.env.CREDENTIAL_SECRET = process.env.CREDENTIAL_SECRET || "your secret here"

const server    = http.createServer(app);
const settings  = require(process.env.FRAMEWORK_ROOT+"/conf/node-red-config.js");

RED.init(server, settings);

app.use(settings.httpAdminRoot,RED.httpAdmin);
app.use(settings.httpNodeRoot,RED.httpNode);
 
server.listen(settings.uiPort);
console.log(`listening port:${settings.uiPort}`);
RED.start();