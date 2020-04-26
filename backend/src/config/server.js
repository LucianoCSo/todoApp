const express = require('express');
const bodyparser = require('body-parser');
const Server = express();
const cors = require('cors');
// const AllCors = require('./cors');

Server.use(bodyparser.urlencoded({ extended: true }));
Server.use(express.json());
Server.use(cors());
// Server.use(AllCors);

Server.listen(3331);

module.exports = Server;