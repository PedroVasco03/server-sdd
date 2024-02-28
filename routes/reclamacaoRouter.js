const express = require('express')
const createReclamacao = require('../controllers/Reclamação/createReclamacao')
const deleteReclamacao = require('../controllers/Reclamação/deleteReclamacao')
const getReclamacao = require('../controllers/Reclamação/getReclamacao')
const getReclamacaoById = require('../controllers/Reclamação/getReclamacaoById')
const updateReclamacao = require('../controllers/Reclamação/updateReclamacao')
const router = express.Router()


router.get('/reclamacao', getReclamacao)
router.get('/reclamacao/:id', getReclamacaoById)
router.post('/reclamacao', createReclamacao)
router.patch('/reclamacao/:id', updateReclamacao)
router.delete('/reclamacao/:id', deleteReclamacao)

module.exports = router