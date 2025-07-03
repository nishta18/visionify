const express = require('express');
const router = express.Router();
const customerController = require('../../controllers/modules/customerController');

// Customer CRUD routes
router.get('/', customerController.getAllCustomers);
router.get('/:id', customerController.getCustomerById);
router.post('/', customerController.createCustomer);
router.put('/:id', customerController.updateCustomer);
router.delete('/:id', customerController.deleteCustomer);

module.exports = router; 