const express = require('express');

module.exports = function (server) {
    const router = express.Router();
    console.log("chego")
    server.use('/api', router);

    const todoServer = require('../api/todoServices');
    todoServer.register(router, '/todos');

}