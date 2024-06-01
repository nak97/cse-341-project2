const express = require('express');
const router = express.Router();

const moviesController = require('../controllers/movie');

router.get('/', moviesController.getAll);

router.get('/:id', moviesController.getSingle);

// router.post('/', contactsController.createMovie);

// router.put('/:id', contactsController.updateMovie);

// router.delete('/:id', contactsController.deleteMovie);


module.exports = router;