const express = require('express')

const router = express.Router()

const getUsuario = require('../controllers/Usuario/getUsuario')
const getUsuarioById = require('../controllers/Usuario/getUsuarioById')
const createUsuario = require('../controllers/Usuario/createUsuario')
const updateUsuario = require('../controllers/Usuario/updateUsuario')
const deleteUsuario = require('../controllers/Usuario/deleteUsuario')

router.get('/usuario', getUsuario)
router.get('/usuario/:id', getUsuarioById)
router.post('/usuario', createUsuario)
router.patch('/usuario/:id', updateUsuario)
router.delete('/usuario/:id', deleteUsuario)

module.exports = router