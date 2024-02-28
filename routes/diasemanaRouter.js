const express = require('express')

const router = express.Router()

const getSemana = require('../controllers/Dia-Semana/getDiaSemana')


router.get('/dia-semana', getSemana)

module.exports = router