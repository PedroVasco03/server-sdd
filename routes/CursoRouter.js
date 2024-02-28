const express = require('express')

const router = express.Router()

const getCurso = require('../controllers/Curso/getCurso')


router.get('/curso', getCurso)

module.exports = router