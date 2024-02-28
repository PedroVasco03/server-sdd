const express = require('express')

const router = express.Router()

const getEncarregado = require('../controllers/Encarregado/getEncarregado')
const getEncarregadoById = require('../controllers/Encarregado/getEncarregadoById')
const createEncarregado = require('../controllers/Encarregado/createEncarregado')
const updateEncarregado = require('../controllers/Encarregado/updateEncarregado')
const deleteEncarregado = require('../controllers/Encarregado/deleteEncarregado')


router.get('/encarregado', getEncarregado)
router.get('/encarregado/:id', getEncarregadoById)
router.post('/encarregado', createEncarregado)
router.patch('/encarregado/:id', updateEncarregado)
router.delete('/encarregado/:id', deleteEncarregado)

module.exports = router
