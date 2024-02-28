const express = require('express')

const router = express.Router()

const getIntegrante = require('../controllers/Secretaria/Integrantes/getIntegrante')
const getIntegranteById = require('../controllers/Secretaria/Integrantes/getIntegranteById')
const createIntegrante = require('../controllers/Secretaria/Integrantes/createIntegrante')
const updateIntegrante= require('../controllers/Secretaria/Integrantes/updateIntegrante')
const deleteIntegrante = require('../controllers/Secretaria/Integrantes/deleteIntegrante')


router.get('/secretaria-integrante', getIntegrante)
router.get('/secretaria-integrante/:id', getIntegranteById)
router.post('/secretaria-integrante', createIntegrante)
router.patch('/secretaria-integrante/:id', updateIntegrante)
router.delete('/secretaria-integrante/:id', deleteIntegrante)

module.exports = router