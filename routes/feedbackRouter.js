const express = require('express')

const router = express.Router()

const getStock = require('../controllers/Feedback/getStock')
const getStockById = require('../controllers/Feedback/getStockById')
const createStock = require('../controllers/Feedback/createStock')
const updateStock = require('../controllers/Feedback/updateStock')
const deleteStock = require('../controllers/Feedback/deleteStock')

router.get('/feedback', getStock)
router.get('/feedback/:id', getStockById)
router.post('/feedback', createStock)
router.patch('/feedback/:id', updateStock)
router.delete('/feedback/:id', deleteStock)

module.exports = router