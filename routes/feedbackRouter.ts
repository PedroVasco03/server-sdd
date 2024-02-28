import express from 'express';
import getStock from '../controllers/Feedback/getStock';
import getStockById from '../controllers/Feedback/getStockById';
import createStock from '../controllers/Feedback/createStock';
import updateStock from '../controllers/Feedback/updateStock';
import deleteStock from '../controllers/Feedback/deleteStock';

const router = express.Router();

router.get('/feedback', getStock);
router.get('/feedback/:id', getStockById);
router.post('/feedback', createStock);
router.patch('/feedback/:id', updateStock);
router.delete('/feedback/:id', deleteStock);

export default router;
