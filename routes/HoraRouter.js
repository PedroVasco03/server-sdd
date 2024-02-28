const express = require('express')

const router = express.Router()

const getHora = require('../controllers/Hora/getHora')


router.get('/hora', getHora)

module.exports = router