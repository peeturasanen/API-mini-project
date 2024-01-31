const servicesController = require('../controllers/servicesController');
const express = require('express');
const router = express.Router();

// Get All Services
router.get('/', servicesController.getAllServices);

// Get Single Member by ID
router.get('/:id', servicesController.getService);

// Create a New Member
router.post('/', servicesController.createService);

// Update Member by ID
router.put('/:id', servicesController.updateService);

// Delete Member by ID
router.delete('/:id', servicesController.deleteService);

module.exports = router;