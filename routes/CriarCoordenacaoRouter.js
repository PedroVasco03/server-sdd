const express = require('express')

const router = express.Router()

const getCoordenacao = require('../controllers/Coordenacao/Criar-Coordenacao/getCoordenacao')
const getCoordenacaoById = require('../controllers/Coordenacao/Criar-Coordenacao/getCoordenacaoById')
const createCoordenacao = require('../controllers/Coordenacao/Criar-Coordenacao/createCoordenacao')
const updateCoordenacao= require('../controllers/Coordenacao/Criar-Coordenacao/updateCoordenacao')
const deleteCoordenacao = require('../controllers/Coordenacao/Criar-Coordenacao/deleteCoordenacao')


router.get('/coordenacao', getCoordenacao)
router.get('/coordenacao/:id', getCoordenacaoById)
router.post('/coordenacao', createCoordenacao)
router.patch('/coordenacao/:id', updateCoordenacao)
router.delete('/coordenacao/:id', deleteCoordenacao)

module.exports = router