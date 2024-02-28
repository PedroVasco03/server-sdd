const express = require('express')
const app = express()
const adminRouter = require('../routes/adminRouter')
const alunoRouter = require('../routes/AlunoRouter')
const classeRouter = require('../routes/ClasseRouter')
const coordenadorRouter = require('../routes/CoordenadorRouter')
const criarCoordenacaoRouter = require('../routes/CriarCoordenacaoRouter')
const criarSecretariaRouter = require('../routes/CriarSecretariaRouter')
const cursoRouter = require('../routes/CursoRouter')
const directorRouter = require('../routes/DirectorRouter')
const encarregadoRouter = require('../routes/EncarregadoRouter')
const funcionarioRouter = require('../routes/FuncionarioRouter')
const horarioCoordenacaoRouter = require('./HorarioCoordenacaoRouter')
const horarioSecretariaRouter = require('../routes/HorarioSecretariaRouter')
const horaRouter = require('../routes/HoraRouter')
const integranteCoordenacaoRouter = require('../routes/IntegranteCoordenacaoRouter')
const mensagemRouter = require('../routes/mensagemRouter')
const turmaRouter = require('../routes/TurmaRouter')
const diaRouter = require('../routes/diasemanaRouter')
const reclamacaoRouter = require('../routes/reclamacaoRouter')
app.use(alunoRouter)
app.use(adminRouter)
app.use(coordenadorRouter)
app.use(directorRouter)
app.use(horarioCoordenacaoRouter)
app.use(encarregadoRouter)
app.use(funcionarioRouter)
app.use(horarioSecretariaRouter)
app.use(horaRouter)
app.use(integranteCoordenacaoRouter)
app.use(integranteSecretariaRouter)
app.use(mensagemRouter)
app.use(turmaRouter)
app.use(diaRouter)
app.use(criarCoordenacaoRouter)
app.use(criarSecretariaRouter)
app.use(classeRouter)
app.use(cursoRouter)
app.use(reclamacaoRouter)
module.exports = app