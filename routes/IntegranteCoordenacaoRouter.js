const express = require('express')

const router = express.Router()

const getIntegrante = require('../controllers/Coordenacao/Integrantes/getIntegrante')
const getIntegranteById = require('../controllers/Coordenacao/Integrantes/getIntegranteById')
const createIntegrante = require('../controllers/Coordenacao/Integrantes/createIntegrante')
const updateIntegrante= require('../controllers/Coordenacao/Integrantes/updateIntegrante')
const deleteIntegranete = require('../controllers/Coordenacao/Integrantes/deleteIntegrante')


router.get('/coordenacao-integrante', getIntegrante)
router.get('/coordenacao-integrante/:id', getIntegranteById)
router.post('/coordenacao-integrante', createIntegrante)
router.patch('/coordenacao-integrante/:id', updateIntegrante)
router.delete('/coordenacao-integrante/:id', deleteIntegranete)

module.exports = router