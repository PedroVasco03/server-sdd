const express = require('express')

const router = express.Router()

const getClasse = require('../controllers/Classe/getClasse')


router.get('/classe', getClasse)

module.exports = router