const express = require('express')

const router = express.Router()

const getStock = require('../controllers/Pedidos/getPedido')
const getStockById = require('../controllers/Pedidos/getPedidoById')
const createStock = require('../controllers/Pedidos/createPedido')
const updateStock = require('../controllers/Pedidos/updatePedido')
const deleteStock = require('../controllers/Pedidos/deletePedido')

router.get('/pedido', getStock)
router.get('/pedido/:id', getStockById)
router.post('/pedido', createStock)
router.patch('/pedido/:id', updateStock)
router.delete('/pedido/:id', deleteStock)

module.exports = router