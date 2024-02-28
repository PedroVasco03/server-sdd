const express = require('express')

const router = express.Router()

const getFuncionario = require('../controllers/Funcionario/getFuncionario')
const getFuncionarioById = require('../controllers/Funcionario/getFuncionarioById')
const createFuncionario = require('../controllers/Funcionario/createFuncionario')
const updateFuncionario = require('../controllers/Funcionario/updateFuncionario')
const deleteFuncionario = require('../controllers/Funcionario/deleteFuncionario')


router.get('/funcionario', getFuncionario)
router.get('/funcionario/:id', getFuncionarioById)
router.post('/funcionario', createFuncionario)
router.patch('/funcionario/:id', updateFuncionario)
router.delete('/funcionario/:id', deleteFuncionario)

module.exports = router