const express = require('express')

const router = express.Router()

const getCoordenador = require('../controllers/Coordenacao/Coordenador/getCoordenador')
const getCoordenadorById = require('../controllers/Coordenacao/Coordenador/getCoordenadorById')
const createCoordenador = require('../controllers/Coordenacao/Coordenador/createCoordenador')
const updateCoordenador = require('../controllers/Coordenacao/Coordenador/updateCoordenador')
const deleteCoordenador = require('../controllers/Coordenacao/Coordenador/deleteCoordenador')


router.get('/coordenador', getCoordenador)
router.get('/coordenador/:id', getCoordenadorById)
router.post('/coordenador', createCoordenador)
router.patch('/coordenador/:id', updateCoordenador)
router.delete('/coordenador/:id', deleteCoordenador)

module.exports = router