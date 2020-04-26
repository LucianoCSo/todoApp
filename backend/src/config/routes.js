const express = require('express');

module.exports = function (server) {
    const router = express.Router();
    server.use('/api', router);

    const todoServer = require('../api/todoServices');
    todoServer.register(router, '/todos');

}