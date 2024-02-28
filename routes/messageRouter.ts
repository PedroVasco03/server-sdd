import express from 'express';
import { Router } from 'express';
import getMessage from '../controllers/Mensagem/getMessage';
import getMessageById from '../controllers/Mensagem/getMessageById';
import createMessage from '../controllers/Mensagem/createMessage';
import updateMessage from '../controllers/Mensagem/updateMessage';
import deleteMessage from '../controllers/Mensagem/deleteMessage';

const router: Router = express.Router();

router.get('/message', getMessage);
router.get('/message/:id', getMessageById);
router.post('/message', createMessage);
router.patch('/message/:id', updateMessage);
router.delete('/message/:id', deleteMessage);

export default router;
