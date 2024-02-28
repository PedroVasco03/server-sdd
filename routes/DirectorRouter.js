const express = require('express')

const router = express.Router()

const getDirector = require('../controllers/Secretaria/Director/getDirector')
const getDirectorById = require('../controllers/Secretaria/Director/getDirectorById')
const createDirector = require('../controllers/Secretaria/Director/createDirector')
const updateDirector = require('../controllers/Secretaria/Director/updateDirector')
const deleteDirector = require('../controllers/Secretaria/Director/deleteDirector')


router.get('/director', getDirector)
router.get('/director/:id', getDirectorById)
router.post('/director', createDirector)
router.patch('/director/:id', updateDirector)
router.delete('/director/:id', deleteDirector)

module.exports = router