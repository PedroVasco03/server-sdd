const express = require('express')

const router = express.Router()

const getStock = require('../controllers/Mensagem/getMessage')
const getStockById = require('../controllers/Mensagem/getMessageById')
const createStock = require('../controllers/Mensagem/createMessage')
const updateStock = require('../controllers/Mensagem/updateMessage')
const deleteStock = require('../controllers/Mensagem/deleteMessage')

router.get('/message', getStock)
router.get('/message/:id', getStockById)
router.post('/message', createStock)
router.patch('/message/:id', updateStock)
router.delete('/message/:id', deleteStock)

module.exports = router