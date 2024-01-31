const toursController = require('../controllers/toursController');
const express = require('express');
const router = express.Router();

// Get All Tours
router.get('/', toursController.getAllTours);

// Get Single Member by ID
router.get('/:id', toursController.getTour);

// Create a New Member
router.post('/', toursController.createTour);

// Update Member by ID
router.put('/:id', toursController.updateTour);

// Delete Member by ID
router.delete('/:id', toursController.deleteTour);

module.exports = router;