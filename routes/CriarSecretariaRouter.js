const express = require('express')

const router = express.Router()

const getSecretaria = require('../controllers/Secretaria/Criar-Secretaria/getSecretaria')
const getSecretariaById = require('../controllers/Secretaria/Criar-Secretaria/getSecretariaById')
const createSecretaria = require('../controllers/Secretaria/Criar-Secretaria/createSecretaria')
const updateSecretaria = require('../controllers/Secretaria/Criar-Secretaria/updateSecretaria')
const deleteSecretaria = require('../controllers/Secretaria/Criar-Secretaria/deleteSecretaria')


router.get('/secretaria', getSecretaria)
router.get('/secretaria/:id', getSecretariaById)
router.post('/secretaria', createSecretaria)
router.patch('/secretaria/:id', updateSecretaria)
router.delete('/secretaria/:id', deleteSecretaria)

module.exports = router