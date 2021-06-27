const express = require('express');
const questionController = require('./controller/questionController')
const roomController = require('./controller/roomController')

const route = express.Router();

route.get('/', (req, res) => res.render("index", {page: 'home'}))
route.get('/create-room', (req, res) => res.render("index", {page: 'create-room-part'}))
route.get('/room/:room',  roomController.open)
route.post('/create-pass', roomController.create)
route.post('/question/:room/:question/:action', questionController.index)
route.post('/question/create/:room', questionController.create)
route.post('/enterroom', roomController.enter)
module.exports = route