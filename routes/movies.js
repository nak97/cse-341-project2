const express = require('express');
const router = express.Router();

const contactsController = require('../controllers/contacts');

router.get('/', moviesController.getAll);

// router.get('/:id', contactsController.getSingle);

// router.post('/', contactsController.createMovie);

// router.put('/:id', contactsController.updateMovie);

// router.delete('/:id', contactsController.deleteMovie);


module.exports = router;