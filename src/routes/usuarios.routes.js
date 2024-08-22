const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const { hasPermission } = require('../middleware/hasPermission');

router.get('/', userController.findAll);
router.get('/:id', userController.findById);
router.post('/', hasPermission(['criar_usuario']), userController.createNewUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;