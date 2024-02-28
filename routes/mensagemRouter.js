const express = require('express')

const router = express.Router()

const getMensagem = require('../controllers/mensagem/getMensagem')
const getMensagemById = require('../controllers/mensagem/getMensagemById')
const createMensagem = require('../controllers/mensagem/createMensagem')
const updateMensagem= require('../controllers/mensagem/updateMensagem')
const deleteMensagem = require('../controllers/mensagem/deleteMensagem')


router.get('/mensagem', getMensagem)
router.get('/mensagem', getMensagemById)
router.post('/mensagem', createMensagem)
router.patch('/mensagem', updateMensagem)
router.delete('/mensagem', deleteMensagem)

module.exports = router