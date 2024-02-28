import express from 'express';
import { Router } from 'express';
import getPedido from '../controllers/Pedidos/getPedido';
import getPedidoById from '../controllers/Pedidos/getPedidoById';
import createPedido from '../controllers/Pedidos/createPedido';
import updatePedido from '../controllers/Pedidos/updatePedido';
import deletePedido from '../controllers/Pedidos/deletePedido';

const router: Router = express.Router();

router.get('/pedido', getPedido);
router.get('/pedido/:id', getPedidoById);
router.post('/pedido', createPedido);
router.patch('/pedido/:id', updatePedido);
router.delete('/pedido/:id', deletePedido);

export default router;
