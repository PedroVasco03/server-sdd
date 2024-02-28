const express = require('express')

const router = express.Router()

const getTurma = require('../controllers/Turma/getTurma')


router.get('/turma', getTurma)

module.exports = router