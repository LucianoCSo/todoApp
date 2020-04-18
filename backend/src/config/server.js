const express = require('express');
const bodyparser = require('body-parser');
const Server = express();

Server.use(bodyparser.urlencoded({ extended: true }));
Server.use(express.json());

Server.listen(3333);

module.exports = Server;