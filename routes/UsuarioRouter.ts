import express, { Router } from 'express';
const router: Router = express.Router();

import getUsuario from '../controllers/Usuario/getUsuario';
import getUsuarioById from '../controllers/Usuario/getUsuarioById';
import createUsuario from '../controllers/Usuario/createUsuario';
import updateUsuario from '../controllers/Usuario/updateUsuario';
import deleteUsuario from '../controllers/Usuario/deleteUsuario';

router.get('/usuario', getUsuario);
router.get('/usuario/:id', getUsuarioById);
router.post('/usuario', createUsuario);
router.patch('/usuario/:id', updateUsuario);
router.delete('/usuario/:id', deleteUsuario);

export default router;
