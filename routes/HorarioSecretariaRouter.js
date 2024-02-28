const express = require('express')

const router = express.Router()


const getHorario = require('../controllers/Secretaria/Horario/getHorario')
const getHorarioById = require('../controllers/Secretaria/Horario/getHorarioById')
const createHorario = require('../controllers/Secretaria/Horario/createHorario')
const updateHorario = require('../controllers/Secretaria/Horario/updateHorario')
const deleteHorario = require('../controllers/Secretaria/Horario/deleteHorario')

router.get('/horario-secretaria', getHorario)
router.get('/horario-secretaria/:id', getHorarioById)
router.post('/horario-secretaria', createHorario)
router.patch('/horario-secretaria/:id', updateHorario)
router.delete('/horario-secretaria/:id', deleteHorario)

module.exports = router