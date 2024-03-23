const path = require('path');

const express = require('express');

const adminController = require('../controllers/admin');

const router = express.Router();

router.post('/add-user',adminController.postUser);

router.get('/get-user',adminController.getUser);

router.delete('/delete-user/:id',adminController.deleteUser);

module.exports = router;