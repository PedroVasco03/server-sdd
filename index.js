const express = require('express')
const cors = require('cors')
const app = express()
const router = require('./routes/router')
app.use(cors({allowedHeaders:'*'}))
app.use(express.json())
app.use(router)
app.get('/',(req, res)=>{
    res.json({version: 'api 1.0'})
})



app.listen(5000, () => {
  console.log('Servidor Socket.IO em execução na porta 3001.');
});
