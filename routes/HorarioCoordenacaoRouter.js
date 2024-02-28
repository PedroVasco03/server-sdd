const express = require('express')
//horario Coordenação
const getHorario = require('../controllers/Coordenacao/Horario/getHorario')
const getHorarioById = require('../controllers/Coordenacao/Horario/getHorarioById')
const createHorario = require('../controllers/Coordenacao/Horario/createHorario')
const updateHorario = require('../controllers/Coordenacao/Horario/updateHorario')
const deleteHorario = require('../controllers/Coordenacao/Horario/deleteHorario')




//Coordenador



//Encarregado



//Funcionario


//reclamacoes
const router = express.Router()
//Horário da coordenacao
router.get('/horario-coordenacao', getHorario)
router.get('/horario-coordenacao/:id', getHorarioById)
router.post('/horario-coordenacao', createHorario)
router.patch('/horario-coordenacao/:id', updateHorario)
router.delete('/horario-coordenacao/:id',deleteHorario)


module.exports = router