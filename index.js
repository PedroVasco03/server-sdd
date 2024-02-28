const express = require('express')
const cors = require('cors')
const app = express()
const router = require('./routes/router')
app.use(cors())
app.use(express.json())
app.use(router)
app.get('/',(req, res)=>{
    res.json({version: 'api 1.0'})
})

app.listen(5000, ()=>console.log('Server up and running...'))