const express = require('express')
const createAdmin = require('../controllers/Admin/createAdmin')
const deleteAdmin = require('../controllers/Admin/deleteAdmin')
const getAdmin = require('../controllers/Admin/getadmin')
const getAdminById = require('../controllers/Admin/getAdminById')
const updateAdmin = require('../controllers/Admin/updateAdmin')
const router = express.Router()


router.get('/admin', getAdmin)
router.get('/admin/:id', getAdminById)
router.post('/admin', createAdmin)
router.patch('/admin/:id', updateAdmin)
router.delete('/admin/:id', deleteAdmin)

module.exports = router