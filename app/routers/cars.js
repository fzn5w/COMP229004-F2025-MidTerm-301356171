var express = require('express');
var router = express.Router();

var carController = require('../controllers/cars');

router.get('/cars', carController.getAll);
router.post('/cars/:id', carController.create);
router.get('/cars', carController.getCar);
router.put('/cars/:id', carController.update);
router.delete('/cars/:id', carController.remove);

module.exports = router;