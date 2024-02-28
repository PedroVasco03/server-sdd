import express from 'express';
import createAdmin from '../controllers/Admin/createAdmin';
import deleteAdmin from '../controllers/Admin/deleteAdmin';
import getAdmin from '../controllers/Admin/getAdmin';
import getAdminById from '../controllers/Admin/getAdminById';
import updateAdmin from '../controllers/Admin/updateAdmin';

const router = express.Router();

router.get('/admin', getAdmin);
router.get('/admin/:id', getAdminById);
router.post('/admin', createAdmin);
router.patch('/admin/:id', updateAdmin);
router.delete('/admin/:id', deleteAdmin);

export default router;
