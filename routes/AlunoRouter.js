const express = require('express')
const router = express.Router()

//Aluno
const getAluno = require('../controllers/Aluno/getAluno')
const getAlunoById = require('../controllers/Aluno/getAlunoById')
const createAluno = require('../controllers/Aluno/createAluno')
const updateAluno = require('../controllers/Aluno/updateAluno')
const deleteAluno = require('../controllers/Aluno/deleteAluno')

router.get('/aluno', getAluno)
router.get('/aluno/:id', getAlunoById)
router.post('/aluno', createAluno)
router.patch('/aluno/:id', updateAluno)
router.delete('/aluno/:id', deleteAluno)

module.exports = router