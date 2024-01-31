const usersController = require('../controllers/usersController');
const express = require('express');
const router = express.Router();

// Get All Users
router.get('/', usersController.getAllUsers);

// Get Single Member by ID
router.get('/:id', usersController.getUser);

// Create a New Member
router.post('/', usersController.createUser);

// Update Member by ID
router.put('/:id', usersController.updateUser);

// Delete Member by ID
router.delete('/:id', usersController.deleteUser);

module.exports = router;